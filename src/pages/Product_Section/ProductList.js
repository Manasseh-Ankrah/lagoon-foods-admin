import React, { useEffect } from "react";
import "../../css/ViewStaff.css";
// import "../../css/ViewStudent.css";
import { Paper, Button, IconButton, Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Search from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import StaffModal from "./ProductModal";
import { useStateValue } from "../../State/StateProvider";
import { ProductTable } from "./ProductTable";
import axios from "../../axios";


// roles select Object
const roles = [
  {
    value: "Teacher",
  },
  {
    value: "Accountant",
  },
  {
    value: "IT Technician",
  },
  {
    value: "Security Guard",
  },
  {
    value: "Cleaner",
  },
  {
    value: "Gardener",
  },
];
function ProductList() {
  const [role, setRole] = React.useState("");
  //   const [level, setLevel] = React.useState("");
  const [data, setData] = React.useState(false);
  const [{ adminToken, admin, staffState }, dispatch] = useStateValue();
  console.log("Staff object recieved successfully", staffState);

  const getStaffData = async () => {
    const req = await axios.get("/staff/");
    console.log(req);
    dispatch({
      type: "GET_STAFF_DATA",
      item: {
        staffState: req.data,
      },
    });
  };
  useEffect(() => {
    getStaffData();
  }, []);

  const changeRole = (event) => {
    setRole(event.target.value);
  };

  const onSearch = () => {
    setData(!data);
    console.log("Hello world");
  };

  return (
    <div className="viewStaff">
      <Paper className="viewStaff_paper" elevetion={3}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          className="viewStaff_box"
          noValidate
          autoComplete="off"
        >
          <div>
              <TextField
                label="Enter Product Name"
                id="outlined-size-normal"
                // value={address}
                className="viewStaff_input"
                // onChange={changeAddress}
              />
          </div>


          <div className="btn_search">
            <Button
              onClick={onSearch}
              variant="contained"
              startIcon={<Search />}
              className="save"
              // color="success"
            >
              Search
            </Button>
          </div>
        </Box>
      </Paper>

      <div className="viewStaff_results">
        <Typography
          variant="h6"
          noWrap
          component="div"
          className="results_text"
        >
          RESULTS
        </Typography>
      </div>

      {staffState === null ? 
<div style={{textAlign:"center", marginTop:50}}>
    {/* import CircularProgress from "@mui/material/CircularProgress"; */}
   {/* <CircularProgress /> */}
   {/* <img src={Loader}/> */}
   <p>Fetching Data from server....</p>
  </div>
  :

  <div>
  <Box
 component="main"
 >
 <Container maxWidth={false} className="Tbl-box">
   <Box >
     <ProductTable staff={staffState} />
   </Box>
 </Container>
</Box>
 </div>
  }
    </div>
  );
}

export default ProductList;
