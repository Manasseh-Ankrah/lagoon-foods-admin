import React, { useEffect } from "react";
import "../../css/ViewStudent.css";
import { Paper, Button, CircularProgress, IconButton, Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Search from "@mui/icons-material/Search";
import Pen from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import StudentModal from "./BranchModal";
import { useStateValue } from "../../State/StateProvider";
import axios from "../../axios";
import { BranchTable } from "./BranchTable";
import { customers } from "./customerData";
// import Loader from '../../images/loading_gif1.gif';


// import Paper from "@mui/material/Paper";
// import TableInfo from "./TableInfo";

// Courses select Object
const courses = [
  {
    value: "All Courses",
  },
  {
    value: "Database",
  },
  {
    value: "Software Eng.",
  },
  {
    value: "Computer Science",
  },
  {
    value: "Networking",
  },
  {
    value: "Web Development",
  },
  {
    value: "Cyber security",
  },
];

// Level select Object
const levels = [
  {
    value: "All Levels",
  },
  {
    value: "Diploma",
  },
  {
    value: "Advanced Diploma",
  },
  {
    value: "NCC-Level 3",
  },
  {
    value: "NCC-Level 4",
  },
  {
    value: "NCC-Level 5",
  },
  {
    value: "NCC-Level 6",
  },
];

function BranchList() {
  const [courseTitle, setCourseTitle] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [data, setData] = React.useState(false);
  const [{ adminToken, admin, studentState }, dispatch] = useStateValue();
  console.log("Student object recieved successfully", studentState);

  const getStudentData = async () => {
    const req = await axios.get("/student/");
    console.log(req);
    dispatch({
      type: "GET_STUDENT_DATA",
      item: {
        studentState: req.data,
      },
    });
  };
  useEffect(() => {
    getStudentData();
  }, []);



  const changeCourseTitle = (event) => {
    setCourseTitle(event.target.value);
  };

  const changeLevel = (event) => {
    setLevel(event.target.value);
  };

  const onSearch = () => {
    setData(!data);
    console.log("Hello world");
  };

  // const rows = studentState.map(
  //   ({
  //     fName,
  //     lName,
  //     date,
  //     courseTitle,
  //     level,
  //     email,
  //   }) => {
  //     return {
  //       fName,
  //       lName,
  //       date,
  //       courseTitle,
  //       level,
  //       email,
  //     };
  //   }
  // );

  return (
    <div className="BranchList">
      <Paper className="viewStudent_paper" elevetion={3}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          className="viewStudent_box "
          noValidate
          autoComplete="off"
        >


            <div>
              <TextField
                label="Enter Branch Location"
                id="outlined-size-normal"
                value=""
                className="viewStudent_input"
                onChange=""
              />
            </div>


          <div className="btn_search">
            <Button
              onClick={onSearch}
              variant="contained"
              startIcon={<Search />}
              className="save"
            >
              Search
            </Button>
          </div>
        </Box>
      </Paper>

      <div className="viewStudent_results">
        <Typography
          variant="h6"
          noWrap
          component="div"
          className="results_text"
        >
          Branch List
        </Typography>
      </div>

      {studentState === null ? 
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
     <BranchTable students={studentState} />
   </Box>
 </Container>
</Box>
 </div>
  }
      
  </div>
  );
}

export default BranchList;
