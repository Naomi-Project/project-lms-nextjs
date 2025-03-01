"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, EllipsisVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type DataTableProps<TData> = {
  columns: ColumnDef<TData>[];
  filterName: string;
  data: TData[];
  isAttendance?: boolean;
  isBulkAction?: boolean;
  filterPlaceholder?: string;
  setSelectedStudents?: (selectedRows: TData[]) => void;
  onBulkAction?: (selectedRows: TData[]) => void;
};

export function DataTable<TData>({
  columns,
  data,
  isAttendance,
  isBulkAction,
  setSelectedStudents,
  filterName = "id",
  filterPlaceholder = "Filter...",
  onBulkAction,
}: DataTableProps<TData>) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState({
    pageIndex: 0, // Halaman pertama
    pageSize: 10, // Jumlah data per halaman
  });

  // === TAMBAHAN: Selection Column untuk Bulk Action ===
  const selectionColumn: ColumnDef<TData> = {
    id: "select",
    header: ({ table }) => (
      <div className="px-1">
        <input
          type="checkbox"
          checked={table.getIsAllPageRowsSelected()}
          onChange={table.getToggleAllPageRowsSelectedHandler()}
          aria-label="Select all rows"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="px-1">
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  };
  // === END TAMBAHAN ===

  // Gabungkan selectionColumn dengan columns yang sudah ada

  const tableColumns = [selectionColumn, ...columns];

  const table = useReactTable({
    data,
    columns: isAttendance ? tableColumns : columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  React.useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [data]);


  React.useEffect(() => {
    if (setSelectedStudents) {
      const selectedRows = table.getSelectedRowModel().rows.map((row) => row.original);
      setSelectedStudents(selectedRows);
    }
  }, [rowSelection, setSelectedStudents, table]);

  // === TAMBAHAN: Fungsi untuk Bulk Action ===
  const handleBulkAction = () => {
    const selectedRows = table.getSelectedRowModel().rows.map((row) => row.original);
    if (onBulkAction) {
      onBulkAction(selectedRows);
    }
  };
  // === END TAMBAHAN ===

  return (
    <div className="w-full">
      {/* Search Input */}
      <div className={`flex items-center py-4 ${isLoading ? "" : ""}`}>
        <div className="flex gap-2 items-center">
          {
            isBulkAction ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {/* Tampilkan tombol Bulk Action */}
                  <Button
                    className="bg-white text-gray-800 border hover:bg-gray-100"
                    onClick={handleBulkAction}
                    disabled={Object.keys(rowSelection).length === 0}
                  >
                    <EllipsisVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem className="hover:bg-red-100">
                    {/* <ButtonDelete
                      noBg={true}
                      id={data.id}
                      customClassNoBg="bg-transparent text-white bg-red-500 w-full hover:bg-red-600 shadow-none"
                      mutation={deleteMaterial}
                      loading={loading}
                    /> */}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : ''
          }
          <Input
            placeholder={filterPlaceholder}
            value={
              (table.getColumn(filterName)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(filterName)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={index}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={tableColumns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between py-4">
        <div className="text-sm text-muted-foreground">
          Halaman {table.getState().pagination.pageIndex + 1} dari{" "}
          {table.getPageCount()} dengan {table.getRowCount() + " data"}
        </div>
        <div className="flex items-center space-x-2">
          <span>Rows per page:</span>
          <select
            value={pagination.pageSize}
            onChange={(e) =>
              setPagination({
                pageIndex: 0, // Reset ke halaman pertama saat mengubah jumlah data
                pageSize: Number(e.target.value),
              })
            }
            className="border p-1 rounded"
          >
            {[5, 10, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
