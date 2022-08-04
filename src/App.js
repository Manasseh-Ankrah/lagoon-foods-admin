import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "./axios";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import { useStateValue } from "./State/StateProvider";
import NotFound from "./pages/NotFound";
import AddBranch from "./pages/Branch_Section/AddBranch";
import ManageBranches from "./pages/Branch_Section/ManageBranches";
import AddProduct from "./pages/Product_Section/AddProduct";

import BranchList from "./pages/Branch_Section/BranchList";
import Level from "./pages/Branch_Section/Level";
import NewSidebar from "./component/NewSidebar";
import ProductList from "./pages/Product_Section/ProductList";
import TypeList from "./pages/Type_Section/TypeList";
import AddType from "./pages/Type_Section/AddType";
import ViewFees from "./pages/Fees_Section/ViewFees";
import ViewEvent from "././pages/Event_Section/ViewEvent";
import AdjustFees from "././pages/Fees_Section/AdjustFees";

// import {StudentTable} from "./pages/Student_Section/StudentTable";

function App() {
  const [{ adminToken, admin, student }, dispatch] = useStateValue();
  // const history = useNavigate();
  // console.log(adminToken, admin);

  // Checked Login Function
  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    const tokenResponse = await axios.post("admin/tokenIsValid", null, {
      headers: { "x-auth-token": token },
    });

    console.log(tokenResponse.data);

    if (tokenResponse.data) {
      const userRes = await axios.get("admin", {
        headers: { "x-auth-token": token },
      });

      dispatch({
        type: "GET_CURRENT_ADMIN",
        item: {
          adminToken: token,
          admin: userRes.data,
        },
      });
    }
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);

  // const navigate = useNavigate();
  // const PrivateRoute = ({ element: Element, ...rest }) => (
  //   <Route
  //     {...rest}
  //     render={(props) => (user ? <Element {...props} /> : navigate("/"))}
  //   />
  // );

  let token = localStorage.getItem("auth-token");
  console.log(token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<NewSidebar page={<Home />} />} />
        <Route path="/manage_branches" element={<NewSidebar page={<ManageBranches />} />} />
        {/* <Route path="/" element={<StudentTable />} /> */}
        {/* <Route path="/dashboard" element={<NewSidebar page={<Home />} />} /> */}
        <Route
          path="/add_branch"
          element={<NewSidebar page={<AddBranch />} />}
        />
        <Route
          path="/branch_list"
          element={<NewSidebar page={<BranchList />} />}
        />
        {/* <Route path="/level" element={<NewSidebar page={<Level />} />} /> */}
        <Route
          path="/add_product"
          element={<NewSidebar page={<AddProduct />} />}
        />
        <Route
          path="/product_list"
          element={<NewSidebar page={<ProductList />} />}
        />
        <Route
          path="/add_type"
          element={<NewSidebar page={<AddType />} />}
        />
        <Route
          path="/type_list"
          element={<NewSidebar page={<TypeList />} />}
        />
        <Route path="/pay_fees" element={<NewSidebar page={<ViewFees />} />} />
        <Route path="/set_fees" element={<NewSidebar page={<AdjustFees />} />} />
        <Route path="/events" element={<NewSidebar page={<ViewEvent />} />} />
        <Route
          path="/add_account"
          element={<NewSidebar page={<Register />} />}
        />
        <Route path="*" element={<NotFound />} />
        {/* <Route exact path="/upcoming/:user" element={<Upcoming />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
