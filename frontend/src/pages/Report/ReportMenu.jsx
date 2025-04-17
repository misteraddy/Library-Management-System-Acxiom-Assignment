import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import OverdueReturnsTable from "../Transaction/Table/OverdueReturnsTable";
import MembershipList from "../Transaction/Table/MembershipList";
import ActiveIssuesTable from "../Transaction/Table/ActiveIssuesTable";
import MasterListOfMoviesTable from "../Transaction/Table/MasterListOfMoviesTable";
import MasterListOfBooks from "../Transaction/Table/MasterListOfBooks";

function Reports() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Library Reports</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <Card className="border border-primary shadow-md">
          <CardHeader>
            <CardTitle>Issued Books</CardTitle>
          </CardHeader>
          <CardContent>
            <ActiveIssuesTable/>
          </CardContent>
          <CardFooter>
            <CardDescription>Last updated: 2 hours ago</CardDescription>
          </CardFooter>
        </Card>

        <Card className="border border-success shadow-md">
          <CardHeader>
            <CardTitle>Master of Movies table</CardTitle>
          </CardHeader>
          <CardContent>
            <MasterListOfMoviesTable />
          </CardContent>
          <CardFooter>
            <CardDescription>Last updated: 1 hour ago</CardDescription>
          </CardFooter>
        </Card>

        <Card className="border border-danger shadow-md">
          <CardHeader>
            <CardTitle>Master List of Books</CardTitle>
          </CardHeader>
          <CardContent>
            <MasterListOfBooks />
          </CardContent>
          <CardFooter>
            <CardDescription>Last updated: 3 hours ago</CardDescription>
          </CardFooter>
        </Card>

        <Card className="border border-warning shadow-md">
          <CardHeader>
            <CardTitle>Active Memberships</CardTitle>
          </CardHeader>
          <CardContent>
            <MembershipList />
          </CardContent>
          <CardFooter>
            <CardDescription>Last updated: 5 hours ago</CardDescription>
          </CardFooter>
        </Card>

        <Card className="border border-info shadow-md">
          <CardHeader>
            <CardTitle>Overdue Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <OverdueReturnsTable />
          </CardContent>
          <CardFooter>
            <CardDescription>Last updated: 1 hour ago</CardDescription>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Reports;
