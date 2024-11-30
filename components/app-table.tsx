import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon } from "lucide-react";

export interface Column<T> {
  label: string;
  key: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode; // For custom cell rendering
}

interface AppTableProps<T> {
  title: string;
  description: string;
  data: T[];
  columns: Column<T>[];
  onAdd?: () => void;
  onEdit?: (row: T) => void;
  onDelete?: (id: any) => void; // ID is assumed to be a property in T
}

function AppTable<T extends { id: any }>({
  title,
  description,
  data,
  columns,
  onAdd,
  onEdit,
  onDelete,
}: AppTableProps<T>) {
  return (
    <Card className="w-full max-w-7xl shadow-md">
      <CardHeader>
        <div className="flex justify-between">
          <div className="space-y-1">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
          {onAdd && (
            <Button onClick={onAdd}>
              <PlusIcon className="mr-2 h-4 w-4" />
              Tambah Baru
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Table className="w-full caption-bottom">
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={String(column.key)} className="text-left">
                  {column.label}
                </TableHead>
              ))}
              {(onEdit || onDelete) && (
                <TableHead className="text-right">Actions</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((row) => (
                <TableRow key={row.id} className="hover:bg-gray-100">
                  {columns.map((column) => (
                    <TableCell key={String(column.key)} className="py-2">
                      {column.render
                        ? column.render(row[column.key], row)
                        : String(row[column.key])}
                    </TableCell>
                  ))}
                  {(onEdit || onDelete) && (
                    <TableCell className="py-2 flex gap-2 justify-end">
                      {onEdit && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onEdit(row)}
                        >
                          Edit
                        </Button>
                      )}
                      {onDelete && (
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => onDelete(row.id)}
                        >
                          Delete
                        </Button>
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + 1}
                  className="text-center py-4"
                >
                  Tidak ada data tersedia
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default AppTable;
