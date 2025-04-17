import "./App.css";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/Navbar/RootLayout";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./pages/DarkMode/ThemeProvider";
import HomeContainer from "./pages/Home/HomeContainer";
import MaintainceMenu from "./pages/Admin/MaintainceMenu";
import ReportMenu from "./pages/Report/ReportMenu";
import Transaction from "./pages/Transaction/Transaction";
import UpdateMembership from "./pages/Admin/UpdateMembership";
import UpdateBook from "./pages/Admin/UpdateBook";
import UserManagement from "./pages/Admin/UserManagement";
import CheckBookAvailability from "./pages/Transaction/CheckBookAvailability";
import IssueBook from "./pages/Transaction/IssueBook";
import ReturnBook from "./pages/Transaction/ReturnBook";


const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/"
          element={<RootLayout />}
        >
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/maintaince" element={<MaintainceMenu />} />
          <Route path="/report" element={<ReportMenu />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/memberships" element={<UpdateMembership />} />
          <Route path="/books" element={<UpdateBook />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/CheckBookAvailability" element={<CheckBookAvailability />} />
          <Route path="/IssueBook" element={<IssueBook />} />
          <Route path="/ReturnBook" element={<ReturnBook />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
