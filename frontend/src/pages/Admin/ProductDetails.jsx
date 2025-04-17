import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ProductDetails = () => {
  return (
    <Card className="p-4">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">S.No</TableHead>
              <TableHead>Code No From</TableHead>
              <TableHead>Code No To</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>SC(B/M)000001</TableCell>
              <TableCell>SC(B/M)000004</TableCell>
              <TableCell>Science</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>EC(B/M)000001</TableCell>
              <TableCell>EC(B/M)000004</TableCell>
              <TableCell>Economics</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>FC(B/M)000001</TableCell>
              <TableCell>FC(B/M)000004</TableCell>
              <TableCell>Fiction</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>CH(B/M)000001</TableCell>
              <TableCell>CH(B/M)000004</TableCell>
              <TableCell>Children</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>PD(B/M)000001</TableCell>
              <TableCell>PD(B/M)00</TableCell>
              <TableCell>—</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;