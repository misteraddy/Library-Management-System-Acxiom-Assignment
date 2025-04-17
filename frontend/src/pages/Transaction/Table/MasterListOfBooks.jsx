import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MasterListOfBooks() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name of Book</TableHead>
          <TableHead>Author Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Serial No</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Cost</TableHead>
          <TableHead>Procurement Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>The Alchemist</TableCell>
          <TableCell>Paulo Coelho</TableCell>
          <TableCell>Fiction</TableCell>
          <TableCell>FC(B)000001</TableCell>
          <TableCell>Available</TableCell>
          <TableCell>₹250</TableCell>
          <TableCell>2023-08-10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Wings of Fire</TableCell>
          <TableCell>A.P.J. Abdul Kalam</TableCell>
          <TableCell>Autobiography</TableCell>
          <TableCell>BI(B)000002</TableCell>
          <TableCell>Issued</TableCell>
          <TableCell>₹300</TableCell>
          <TableCell>2022-11-21</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Rich Dad Poor Dad</TableCell>
          <TableCell>Robert Kiyosaki</TableCell>
          <TableCell>Finance</TableCell>
          <TableCell>EC(B)000003</TableCell>
          <TableCell>Available</TableCell>
          <TableCell>₹350</TableCell>
          <TableCell>2024-01-15</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Brief History of Time</TableCell>
          <TableCell>Stephen Hawking</TableCell>
          <TableCell>Science</TableCell>
          <TableCell>SC(B)000004</TableCell>
          <TableCell>Issued</TableCell>
          <TableCell>₹450</TableCell>
          <TableCell>2023-05-05</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Think Like a Monk</TableCell>
          <TableCell>Jay Shetty</TableCell>
          <TableCell>Self Help</TableCell>
          <TableCell>SH(B)000005</TableCell>
          <TableCell>Available</TableCell>
          <TableCell>₹280</TableCell>
          <TableCell>2023-12-12</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}