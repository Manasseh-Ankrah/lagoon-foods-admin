import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import BranchCard from "../../component/BranchCard";
import { useStateValue } from "../../State/StateProvider";
import "../../css/Home.css";
import "../../css/ManageCard.css";
import { Container, Grid, Paper } from "@mui/material";


function Home() {
  // const [{ adminToken, admin, student, staff, events }, dispatch] = useStateValue();
  const [{ adminToken, admin, studentState, courseState, staffState, eventState }, dispatch] = useStateValue();

  // const history = useNavigate();

// const fetchData = async() => {
//   const staff = await axios.get("/staff/");
//   dispatch({
//     type: "GET_STAFF_DATA",
//     item: {
//       staff: staff.data,
//     },
//   });

//   const student = await axios.get("/student/");
//   dispatch({
//     type: "GET_STUDENT_DATA",
//     item: {
//       studentState: student.data,
//     },
//   });

//   const course = await axios.get("/course/");
//   dispatch({
//     type: "GET_COURSE_DATA",
//     item: {
//       courseState: course.data,
//     },
//   });
// }






//   useEffect(() => {
//     fetchData();
//   }, []);

  // console.log(student[0].address);
  const [branches, setBranches] = React.useState([
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },
    {
      id: 1,
      branch_id:"#00289",
      branch_loc:"Achimota",
      vendor_name:"Manasseh",
      link:"/home"
    },

   

  ]);

  // useEffect(() => {
  //   if (!admin.id) {
  //     console.log("No admin logged In");
  //     history("/");
  //   } else {
  //     console.log("Logged In");
  //   }
  // }, []);

  const currentDate = new Date().toDateString()

  return (
    <div className="home">
      <Paper className="home__paper"  elevation={4} style={{marginTop:"30px"}}>
        <div className="home__container">
            {branches.map(branch => (
                <div className='manageCard'>
                <Link to={branch.link} style={{textDecoration:"none"}}>
                <div className="card__courses">
                    <div className='manageCard__info'>
                        <h2 className={branch.clsnm_text}>Id: {branch.branch_id}</h2>
                    </div>
                     Location: {branch.branch_loc}
                    <div className='manageCard__title'>
                        <p>Vendor: {branch.vendor_name}</p>
                    </div>
                </div>
                </Link>
                </div>

            ))}

          
        </div>
      </Paper>
      {/* <Container maxWidth={false} className="chart-container">
        <div className="line-chart">
            <LineChart sx={{ height: '100%' }} className="root-line"/>
        </div>
        <div className="dough-chart">
        <DougChart sx={{ height: '100%' }} className="root-chart"/>
        </div>
          </Container> */}
    </div>
  );
}
export default Home;

// https://github.com/mars/create-react-app-buildpack
