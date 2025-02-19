"use client"
import { DataTable } from "@/components/common/list/CommonDataTable"

type Payment = {
  id: string
  username: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const paymentData: Payment[] = [
  { id: "1", amount: 100, username: "abdul", status: "success", email: "user1@example.com" },
  { id: "2", amount: 200, username: "budi", status: "pending", email: "user2@example.com" },
]

const paymentColumns = [
  { accessorKey: "username", header: "Email", cell: ({ row }: any) => <span>{row.getValue("email")}</span> },
  { accessorKey: "email", header: "Email", cell: ({ row }: any) => <span>{row.getValue("email")}</span> },
  { accessorKey: "amount", header: "Amount", cell: ({ row }: any) => <span>{row.getValue("amount")}</span> },
]

export default function PaymentTable() {
  return <DataTable columns={paymentColumns} data={paymentData} filterName="usernmae" filterPlaceholder="Filter by email..." />
}
