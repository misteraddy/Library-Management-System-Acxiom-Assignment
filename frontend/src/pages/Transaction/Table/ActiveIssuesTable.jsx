import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ActiveIssuesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Serial No</TableHead>
          <TableHead>Book/Movie</TableHead>
          <TableHead>Name of Book/Movie</TableHead>
          <TableHead>Active Issues</TableHead>
          <TableHead>Membership ID</TableHead>
          <TableHead>Date of Issue</TableHead>
          <TableHead>Date of Return</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Book</TableCell>
          <TableCell>The Alchemist</TableCell>
          <TableCell>Yes</TableCell>
          <TableCell>M001</TableCell>
          <TableCell>2025-04-01</TableCell>
          <TableCell>2025-04-16</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Movie</TableCell>
          <TableCell>Inception</TableCell>
          <TableCell>Yes</TableCell>
          <TableCell>M002</TableCell>
          <TableCell>2025-04-05</TableCell>
          <TableCell>2025-04-20</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Book</TableCell>
          <TableCell>Wings of Fire</TableCell>
          <TableCell>Yes</TableCell>
          <TableCell>M003</TableCell>
          <TableCell>2025-04-10</TableCell>
          <TableCell>2025-04-25</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>Movie</TableCell>
          <TableCell>Interstellar</TableCell>
          <TableCell>Yes</TableCell>
          <TableCell>M004</TableCell>
          <TableCell>2025-04-08</TableCell>
          <TableCell>2025-04-23</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>5</TableCell>
          <TableCell>Book</TableCell>
          <TableCell>Atomic Habits</TableCell>
          <TableCell>Yes</TableCell>
          <TableCell>M005</TableCell>
          <TableCell>2025-04-12</TableCell>
          <TableCell>2025-04-27</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
