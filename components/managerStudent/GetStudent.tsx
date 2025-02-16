"use client"
import { useGetUsersQuery } from "@/graphql/generated";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import DeleteStudent from "./DeleteStudent";
import EditStudent from "./EditStudent";

const RowStudentGet = () => {
  const  { loading, error, data } = useGetUsersQuery();

  const users = data?.users || [];
  return (
    <>
    {users && users.map((data, index) => (
    <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{data.username}</TableCell>
        <TableCell>{data.nisn}</TableCell>
        <TableCell>{data.role}</TableCell>
        <TableCell>{data.role}</TableCell>
        <TableCell>{data.phone}</TableCell>
        <TableCell className="flex gap-3">
            <EditStudent studentData={data} />
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