import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
// import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Login from "../Login";
import axios from "../../axios";
import "../../css/RegisterStaff.css";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuItem from "@mui/material/MenuItem";
import { PhotoCamera } from "@mui/icons-material";
import Save from "@mui/icons-material/Save";

import { styled } from "@mui/material/styles";
import { useStateValue } from "../../State/StateProvider";

// Gender select Object
const genders = [
  {
    value: "Food",
  },
  {
    value: "Others",
  },
];

// Role select Object
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

// Qualifications select Object
const qualifications = [
  {
    value: "Diploma",
  },
  {
    value: "Advance Diploma",
  },
  {
    value: "HND",
  },
  {
    value: "Degree",
  },
  {
    value: "Masters",
  },
  {
    value: "PHD",
  },
];

// Experience select Object
const experiences = [
  {
    value: "6 Months",
  },
  {
    value: "1 Year",
  },
  {
    value: "2 Years",
  },
  {
    value: "5 Years",
  },
  {
    value: "8 Years",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [dateValue, setDateValue] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  // Biodata Tabpanel State
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [date, setDate] = React.useState("");
  const [nationality, setNationality] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [image, setImage] = React.useState("");

  // Course Tabpanel State
  const [role, setRole] = React.useState("");
  const [qualification, setQualification] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [{ adminToken, admin, staffState }, dispatch] = useStateValue();


  // Onchange Event Handlers for Biodata Tabpanel
  const changeFName = (event) => {
    setFName(event.target.value);
  };

  const changeLName = (event) => {
    setLName(event.target.value);
  };

  const changeGender = (event) => {
    setGender(event.target.value);
  };

  const changeDate = (event) => {
    setDate(event.target.value);
  };

  const changeNationality = (event) => {
    setNationality(event.target.value);
  };

  const changeAddress = (event) => {
    setAddress(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeTelephone = (event) => {
    setTelephone(event.target.value);
  };

  const changeImage = (event) => {
    setImage(event.target.value);
  };

  // Onchange Event handlers for Information
  const changeRole = (event) => {
    setRole(event.target.value);
  };

  const changeQualification = (event) => {
    setQualification(event.target.value);
  };

  const changeExperience = (event) => {
    setExperience(event.target.value);
  };

  const changeSalary = (event) => {
    setSalary(event.target.value);
  };

  const onRegisterStudent = async (e) => {
  e.preventDefault();
    if (      
      !fName ||
      !lName ||
      !gender ||
      !date ||
      !nationality ||
      !address ||
      !email ||
      !telephone ||
      !role ||
      !qualification ||
      !experience ||
      !salary 
 ) {
      alert("Fill all the form");
    } else if (!email.includes("@")) {
      alert("Enter a valid email for Staff");
    } else {
      try {
        const newStaff = { 
          "fName": fName,
          "lName": lName,
          "gender": gender,
          "date": date,
          "nationality": nationality,
          "address": address,
          "email": email,
          "telephone": telephone,
          "role": role,
          "qualification": qualification,
          "experience": experience,
          "salary": salary
          };
        await axios.post("/staff/register", newStaff).then(()=> {
          dispatch({
            type: "GET_STAFF_DATA",
            item: {
              staffState: [...staffState,newStaff],
            },
          });
          alert("Registration Successful !!");
          // <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
          // M.toast({html:"Registration Successful !!"});
  
          setFName("");
          setLName("");
          setGender("");
          setDate("");
          setNationality("");
          setAddress("");
          setEmail("");
          setTelephone("");
          setImage("");
          setRole("");
          setQualification("");
          setExperience("");
          setSalary("");
        }).catch((err)=> {
          alert(err);
        })
      } catch (err) {
        console.log(err);
      }
    }
  };

  // Clear handler
  const onCancel = () => {
    setFName("");
    setLName("");
    setGender("");
    setDate("");
    setNationality("");
    setAddress("");
    setEmail("");
    setTelephone("");
    setImage("");
    setRole("");
    setQualification("");
    setExperience("");
    setSalary("");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const dataHandler = (newValue) => {
    setDateValue(newValue);
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <Box className="tabbox" sx={{ bgcolor: "background.paper" }}>
      <AppBar position="static" className="appbar">
        <Tabs
          className="tabpanel_element"
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Add New Product" {...a11yProps(0)} />
          {/* <Tab label="Information" {...a11yProps(1)} /> */}
          {/* <Tab label="Sponsor" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          // className="tabpanel_element"
          value={value}
          index={0}
          dir={theme.direction}
          // className="swipable_element"
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            className="box_row_1"
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                label="Product Name"
                id="outlined-size-normal"
                value={fName}
                className="input_1"
                onChange={changeFName}
              />
            </div>
            <div>
              <TextField
                id="outlined-select-currency"
                select
                label="Product Type"
                value={gender}
                onChange={changeGender}
                // helperText="Please select your currency"
                className="input_1"
              >
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Box>


     {/* Third Row */}

     <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            className="icon_div"
            noValidate
            autoComplete="off"
          >
            <div className="btn_register">
              <Button
                onClick={onRegisterStudent}
                variant="contained"
                startIcon={<Save />}
                className="save"
                // color="success"
              >
                Save
              </Button>
            </div>
            <div className="btn_cancel">
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                color="error"
                className="cancel"
                onClick={onCancel}
              >
                Clear
              </Button>
            </div>
          </Box>
        </TabPanel>

      </SwipeableViews>
    </Box>
  );
}
