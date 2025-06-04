/* eslint-disable */
import ExcelJS from 'exceljs';
import { NextResponse } from 'next/server';
import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client/core';
import fetch from 'cross-fetch';
import { id } from 'date-fns/locale';

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_API || 'https://api.lmsyapendik.com/graphql';

export async function GET(request: Request) {
  try {
    const authorizationHeader = request.headers.get('authorization');
    const token = authorizationHeader?.startsWith('Bearer ') ? authorizationHeader.substring(7) : null;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });
    }
    
    // Mendapatkan URL dari objek Request
    const { searchParams } = new URL(request.url);
    const idSchool = searchParams.get('idSchool');

    if (!idSchool) {
      return NextResponse.json({ error: 'Error: ID sekolah wajib ada di parameter' }, { status: 401 });
    }

    const client = new ApolloClient({
      link: new HttpLink({
        uri: GRAPHQL_ENDPOINT,
        fetch: fetch,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      cache: new InMemoryCache(),
    });

    const GET_USERS_QUERY = gql`
      query GetUsers {
        users {
            id
            name
            username
            role
            nik
            nuptk
            nisn
            dateOfBirth
            gender
            address
            phone
            createdAt
            schoolId
            updatedAt
            classroom {
            id
            name
            guardian {
                id
                name
                nuptk
            }
            schedules {
                id
                subject {
                id
                name
                }
                day
            }
            }
            families {
            id
            name
            contact
            relationship
            }
            school {
            id
            name
            accreditation
            }
        }
      }
    `;

    const GET_PAYMENTS_QUERY = gql`
        query GetPayments {
        payments {
            id
            status
            invoice
            url
            amount
            createdAt
            updatedAt
            method
            pricing {
            id
            name
            amount
            createdAt
            updatedAt
            }
            enrollment {
            id
            classroom {
                id
                name
                school {
                    id
                    name
                }
            }
            student {
                id
                name
                nisn
            }
            }
        }
        }
    `;

    
    
    const GET_SCHOOL_NAME_QUERY = gql`
        query GetSchool($data: String!) {
            school(id: $data) {
                id
                name
            }
        }
    `;

    const { data: usersData } = await client.query({
      query: GET_USERS_QUERY,
    });

    const { data: paymentsData } = await client.query({
      query: GET_PAYMENTS_QUERY,
    });

    const { data: schoolData } = await client.query({
      query: GET_SCHOOL_NAME_QUERY,
      variables: { data: idSchool }, // Pass idSchool as a variable
    });
    console.log("SCHOOL DATA: " + schoolData)

    const schoolName = schoolData.school?.name || 'Sekolah Tidak Ditemukan';

    const users = usersData.users.filter((item: any) => item.role === "STUDENT" && item.schoolId === idSchool);

    const dataMurid = users.map((user: any, index: number) => {
        const getpayment = paymentsData.payments.filter((item: any) => item.enrollment.student.id === user.id)
        const jumlahSpp = getpayment.length
        const jumlahSppTerbayar = getpayment.filter((item: any) => item.status === 'PAID').length
        var totalSpp = getpayment.reduce((sum: number, payment: any) => {
            return sum + payment.pricing.amount;
        }, 0);
        var totalSppTerbayar = getpayment.filter((item: any) => item.status === "PAID").reduce((sum: number, payment: any) => {
            return sum + payment.pricing.amount;
        }, 0);
        var totalSppBelumTerbayar = getpayment.filter((item: any) => item.status === "PENDING").reduce((sum: number, payment: any) => {
            return sum + payment.pricing.amount;
        }, 0);
        totalSpp = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(totalSpp)
        totalSppTerbayar = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(totalSppTerbayar)
        totalSppBelumTerbayar = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(totalSppBelumTerbayar)

        return {
            no: index + 1,
            id: user.id,
            nama: user.name,
            nisn: user.nisn || user.username || '-',
            sekolah: user.school?.name || '-',
            kelas: user.classroom?.name || '-',
            alamat: user.address || '-',
            phone: user.phone || '-',
            jumlahSppTerbayar: jumlahSppTerbayar + '/' + jumlahSpp,
            totalSppTerbayar: totalSppTerbayar + '/' + totalSpp,
            totalSppBelumTerbayar: totalSppBelumTerbayar,
        }
    });

    const dataPemasukan: any = paymentsData.payments.filter((item: any) => item.status === "PAID" && item.enrollment.classroom.school.id === idSchool).map((payment: any, index: number) => {
        return {
            no: index + 1,
            student: payment.enrollment.student.name ?? '-',
            studentSchool: payment.enrollment.classroom.school.name ?? '-',
            studentClass: payment.enrollment.classroom.name ?? '-',
            jenis: payment.pricing.name ?? '-',
            tanggal: new Date(payment.updatedAt) ?? '-',
            jumlah: new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
            }).format(payment.amount) ?? '-',
        }
    });

    const totalSPPBelumBelumTerbayarKeseluruhan = paymentsData.payments.filter((item: any) => item.status === 'PENDING' && item.enrollment.classroom.school.id === idSchool).reduce((sum: number, payment: any) => {
        return sum + (payment.amount || 0);
    }, 0);

    const formattedTotalSPPBelumTerbayarKeseluruhan = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(totalSPPBelumBelumTerbayarKeseluruhan);
    const totalMurid = usersData.users.filter((item: any) => item.role === 'STUDENT' && item.schoolId === idSchool).length ?? 0;
    const totalGuru = usersData.users.filter((item: any) => item.role === 'TEACHER' && item.schoolId === idSchool).length ?? 0;

    const dataStatistik: any = [
      { keterangan: 'Total SPP Belum Terbayar (Rp)', nilai: formattedTotalSPPBelumTerbayarKeseluruhan },
      { keterangan: 'Total Murid', nilai: totalMurid },
      { keterangan: 'Total Guru', nilai: totalGuru },
    ];

    const workbook = new ExcelJS.Workbook();

    // worksheet 1
    const worksheetMurid = workbook.addWorksheet('Data Murid');
    worksheetMurid.columns = [
      { header: 'No', key: 'no', width: 5 },
      { header: 'Nama Murid', key: 'nama', width: 30 },
      { header: 'NISN', key: 'nisn', width: 15 },
      { header: 'Sekolah', key: 'sekolah', width: 15 },
      { header: 'Kelas', key: 'kelas', width: 15 },
      { header: 'Alamat', key: 'alamat', width: 15 },
      { header: 'No. HP', key: 'phone', width: 15 },
      { header: 'Jumlah SPP Terbayar', key: 'jumlahSppTerbayar', width: 10 },
      { header: 'Total SPP Terbayar', key: 'totalSppTerbayar', width: 20 },
    ];
    worksheetMurid.addRows(dataMurid);

    // worksheet 2
    const worksheetPemasukan = workbook.addWorksheet('Data Pemasukan');
    worksheetPemasukan.columns = [
      { header: 'No', key: 'no', width: 5 },
      { header: 'Nama Murid', key: 'student', width: 20 },
      { header: 'Sekolah', key: 'studentSchool', width: 20 },
      { header: 'Kelas', key: 'studentClass', width: 20 },
      { header: 'Tanggal', key: 'tanggal', width: 15 },
      { header: 'Jenis Pemasukan', key: 'jenis', width: 25 },
      { header: 'Jumlah (Rp)', key: 'jumlah', width: 20 },
    ];
    worksheetPemasukan.addRows(dataPemasukan);

    // worksheet 3
    const worksheetStatistik = workbook.addWorksheet('Data Statistik');
    worksheetStatistik.columns = [
      { header: `Keterangan (${schoolName})`, key: 'keterangan', width: 35 },
      { header: 'Nilai', key: 'nilai', width: 20 },
    ];
    worksheetStatistik.addRows(dataStatistik);

    const buffer = await workbook.xlsx.writeBuffer();

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename="laporan_sekolah_${schoolName.replace(/ /g, '_')}.xlsx"`,
      },
    });
  } catch (error) {
    console.error('Error exporting Excel:', error);
    return NextResponse.json({ error: 'Gagal mengekspor data Excel. Detail: ' + (error as Error).message }, { status: 500 });
  }
}