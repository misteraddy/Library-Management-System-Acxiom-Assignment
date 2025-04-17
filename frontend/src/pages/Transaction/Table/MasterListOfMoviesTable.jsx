import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const MasterListOfMoviesTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Serial No</TableHead>
          <TableHead>Name of Movie</TableHead>
          <TableHead>Author Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Cost</TableHead>
          <TableHead>Procurement Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Inception</TableCell>
          <TableCell>Christopher Nolan</TableCell>
          <TableCell>Sci-Fi</TableCell>
          <TableCell>Available</TableCell>
          <TableCell>₹500</TableCell>
          <TableCell>2022-03-15</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>The Godfather</TableCell>
          <TableCell>Mario Puzo</TableCell>
          <TableCell>Crime</TableCell>
          <TableCell>Issued</TableCell>
          <TableCell>₹450</TableCell>
          <TableCell>2021-07-21</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Interstellar</TableCell>
          <TableCell>Jonathan Nolan</TableCell>
          <TableCell>Sci-Fi</TableCell>
          <TableCell>Available</TableCell>
          <TableCell>₹600</TableCell>
          <TableCell>2023-01-10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>Parasite</TableCell>
          <TableCell>Bong Joon-ho</TableCell>
          <TableCell>Thriller</TableCell>
          <TableCell>Available</TableCell>
          <TableCell>₹400</TableCell>
          <TableCell>2022-12-05</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>5</TableCell>
          <TableCell>Forrest Gump</TableCell>
          <TableCell>Winston Groom</TableCell>
          <TableCell>Drama</TableCell>
          <TableCell>Issued</TableCell>
          <TableCell>₹550</TableCell>
          <TableCell>2023-08-30</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default MasterListOfMoviesTable;
