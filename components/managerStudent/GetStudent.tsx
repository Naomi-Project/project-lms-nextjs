"use client"
import { useGetUsersQuery } from "@/graphql/generated";
import { TableCell, TableRow } from "../ui/table";
import DeleteStudent from "./DeleteStudent";
import EditStudent from "./EditStudent";

const RowStudentGet = () => {
  const { data } = useGetUsersQuery();

  const users = data?.users || [];
  return (
    <>
      {users && users.map((data, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{data.username}</TableCell>
          <TableCell>7A</TableCell>
          <TableCell>{data.address}</TableCell>
          <TableCell>{data.phone}</TableCell>
          <TableCell className="flex gap-3">
            <EditStudent studentData={{ ...data, nisn: data.nisn ?? "" }} />
            <DeleteStudent userId={data.id} />
          </TableCell>
          {/* <TableCell>{data.class}</TableCell>
        <TableCell>{data.guardian}</TableCell>
        <TableCell>{data.contact}</TableCell> */}
        </TableRow>
      ))}
    </>

  );
};

export default RowStudentGet;