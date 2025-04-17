import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function OverdueReturnsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Serial No</TableHead>
          <TableHead>Book</TableHead>
          <TableHead>Name of Book</TableHead>
          <TableHead>Overdue Returns</TableHead>
          <TableHead>Membership ID</TableHead>
          <TableHead>Date of Issue</TableHead>
          <TableHead>Date of Return</TableHead>
          <TableHead>Fine Calculations</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Book</TableCell>
          <TableCell>The Alchemist</TableCell>
          <TableCell>Yes</TableCell>
          <TableCell>M101</TableCell>
          <TableCell>2025-03-20</TableCell>
          <TableCell>2025-04-04</TableCell>
          <TableCell>₹50</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Book</TableCell>
          <TableCell>Rich Dad Poor Dad</TableCell>
          <TableCell>Yes</TableCell>
          <TableCell>M102</TableCell>
          <TableCell>2025-03-25</TableCell>
          <TableCell>2025-04-09</TableCell>
          <TableCell>₹30</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Book</TableCell>
          <TableCell>Atomic Habits</TableCell>
          <TableCell>Yes</TableCell>
          <TableCell>M103</TableCell>
          <TableCell>2025-03-30</TableCell>
          <TableCell>2025-04-14</TableCell>
          <TableCell>₹20</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>Book</TableCell>
          <TableCell>Wings of Fire</TableCell>
          <TableCell>Yes</TableCell>
          <TableCell>M104</TableCell>
          <TableCell>2025-03-15</TableCell>
          <TableCell>2025-03-30</TableCell>
          <TableCell>₹70</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>5</TableCell>
          <TableCell>Book</TableCell>
          <TableCell>Think Like a Monk</TableCell>
          <TableCell>Yes</TableCell>
          <TableCell>M105</TableCell>
          <TableCell>2025-04-01</TableCell>
          <TableCell>2025-04-16</TableCell>
          <TableCell>₹40</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
