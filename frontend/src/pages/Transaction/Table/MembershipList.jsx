import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MembershipList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Membership ID</TableHead>
          <TableHead>Name of Member</TableHead>
          <TableHead>Contact Number</TableHead>
          <TableHead>Contact Address</TableHead>
          <TableHead>Aadhar Card No</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount Pending (Fine)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>M001</TableCell>
          <TableCell>Riya Sharma</TableCell>
          <TableCell>9876543210</TableCell>
          <TableCell>Lucknow, UP</TableCell>
          <TableCell>1234-5678-9012</TableCell>
          <TableCell>2024-01-01</TableCell>
          <TableCell>2024-12-31</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>₹0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>M002</TableCell>
          <TableCell>Aarav Verma</TableCell>
          <TableCell>9123456780</TableCell>
          <TableCell>Kanpur, UP</TableCell>
          <TableCell>2345-6789-0123</TableCell>
          <TableCell>2023-07-15</TableCell>
          <TableCell>2024-07-14</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>₹50</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>M003</TableCell>
          <TableCell>Sneha Mishra</TableCell>
          <TableCell>9988776655</TableCell>
          <TableCell>Varanasi, UP</TableCell>
          <TableCell>3456-7890-1234</TableCell>
          <TableCell>2023-11-01</TableCell>
          <TableCell>2024-10-31</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>₹0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>M004</TableCell>
          <TableCell>Karan Singh</TableCell>
          <TableCell>9001122334</TableCell>
          <TableCell>Allahabad, UP</TableCell>
          <TableCell>4567-8901-2345</TableCell>
          <TableCell>2024-02-10</TableCell>
          <TableCell>2025-02-09</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>₹20</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>M005</TableCell>
          <TableCell>Priya Yadav</TableCell>
          <TableCell>9812345678</TableCell>
          <TableCell>Barabanki, UP</TableCell>
          <TableCell>5678-9012-3456</TableCell>
          <TableCell>2023-09-05</TableCell>
          <TableCell>2024-09-04</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>₹0</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
