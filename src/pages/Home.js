import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../component/Card";
import { useStateValue } from "../State/StateProvider";
import axios from ".././axios";
// import Cards from "../component/Cards";
import "../css/Home.css";
import AlarmAddIcon from "@mui/icons-material/AlarmAdd";
import PersonIcon from "@mui/icons-material/Person";
import BranchIcon from "@mui/icons-material/Store";
import ManIcon from "@mui/icons-material/Man";
import ProductIcon from "@mui/icons-material/MenuBook";
import DateIcon from "@mui/icons-material/LockClock";
import {DougChart} from "../Charts/DougChart";
import {LineChart} from "../Charts/LineChart";
import MoneyIcon from '@mui/icons-material/CurrencyExchange';


import "../css/Card.css";
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
  const [eventTitle, setEventTitle] = React.useState([
    {
      id: 1,
      text: "Examination Week",
      date: "2022/01/28",
    },
    {
      id: 2,
      text: "Exhibition Day",
      date: "2028/07/28",
    },
    {
      id: 3,
      text: "Vacation",
      date: "2014/10/28",
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

  const rows = eventTitle.map(({ id, text, date }) => {
    // const id = newId;
    return { id, text, date };
  });

  const currentDate = new Date().toDateString()

  return (
    <div className="home">
      <Paper className="home__paper" elevetion={3}>
        <div className="home__container">
        <Card
            count="Ghc 600.00"
            title="Today's Sales"
            Icon={<MoneyIcon className="card__icon" />}
            clsnm="card__teacher"
            clsnm_text=""
            link="/location"
          />

          <Card
            count="Manage"
            title="Branches"
            Icon={<ProductIcon className="card__icon" />}
            clsnm="card__courses"
            clsnm_text=""
            link="/manage_branches"
          />

         <Card
            count="Tracking"
            title="3 Branches"
            Icon={<BranchIcon className="card__icon" />}
            clsnm="card__student"
            clsnm_text=""
            link="/branch_list"
          />

          <Card
            count ={currentDate}
            title="Today's Date"
            Icon={<DateIcon className="card__icon" />}
            clsnm="card__event"
            clsnm_text="clsnm_text"
            link=""
          />
        </div>
      </Paper>
      <Container maxWidth={false} className="chart-container">
        <div className="line-chart">
            <LineChart sx={{ height: '100%' }} className="root-line"/>
        </div>
        <div className="dough-chart">
        <DougChart sx={{ height: '100%' }} className="root-chart"/>
        </div>
          </Container>
    </div>
  );
}
export default Home;

// https://github.com/mars/create-react-app-buildpack
