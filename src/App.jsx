import SideBar from "./Componets/SideBar";
import Header from "./Componets/Header";
import Content from "./Componets/Content";
import { Routes, Route } from "react-router-dom";
import Loan from "./Lpage/Loan";
import Setting from "./Lpage/Setting";
import Services from "./Lpage/Services";
import Transation from "./Lpage/Transation";
import Login from "./Protected/Login";
import Accounts from "./Lpage/Accounts";
import Investment from "./Lpage/Investment";

function App() {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header />
        <div style={{ display: "flex", flex: "1" }}>
          <SideBar />
          <Routes>
            <Route path="/" element={<Content />} />

            <Route path="/Loan" element={<Loan />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/Services" element={<Services />} />

            <Route path="/Transactions" element={<Transation />} />

            <Route path="/Login" element={<Login />} />
            <Route path="/Accounts" element={<Accounts />} />

            <Route path="/Investment" element={<Investment />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
