import React,{useContext, useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import useStyle from "./style.js";
import FormHelperText from "@mui/material/FormHelperText";

import { useHistory } from 'react-router-dom';

import {formContext} from '../../../App';

export default function BasicTextFields() {
  const [formValue,setFormValue] = useContext(formContext);
  const classes = useStyle();
  const [isUpdate,setIsUpdate] = React.useState(false);
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "female",
    course: "jee",
    terms: false,
    showPassword: false,
  });

  let history = useHistory();

  const redirect = () => {
    history.push('/userinfo')
  }
  
  useEffect(()=>{
    
    if(Object.keys(formValue).length != 0 && formValue.constructor === Object )
    setIsUpdate(true);

    setValues(formValue);
  },[]);

  const [error, setError] = React.useState({});

  const handleChange = (prop) => (event) => {
    setError({});
    if (prop == "terms") setValues({ ...values, [prop]: event.target.checked });
    else setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  console.log("values",values);
  const validateForm = () => {
    let isError = false;
    if (values.firstName.length < 2) {
      isError = true;
      setError({
        error: true,
        errorMessage: { firstName: "first name min lenght 2" },
      });
    }
    if (values.lastName.length < 2) {
      isError = true;
      setError({
        ...error,
        error: true,
        errorMessage: { lastName: "last name min lenght 2" },
      });
    }
    if (values.email.length < 2) {
      isError = true;
      setError({
        ...error,
        error: true,
        errorMessage: { email: "email min lenght 2" },
      });
    }
    // var lowerRegex = new RegExp("(?=.*[a-z])");
    // var upperRegex = new RegExp("(?=.*[A-Z])");
    // var numberRegex = new RegExp("(?=.*[0-9])");
    

    if (values.password.length<8) {
      isError = true;
      setError({
        ...error,
        error: true,
        errorMessage: { password: "at least 8 characters" },
      });
    }
    if (!values.course) {
        isError = true;
        setError({
          ...error,
          error: true,
          errorMessage: { course: "Please select a course" },
        });
      }
      if (!values.gender) {
        isError = true;
        setError({
          ...error,
          error: true,
          errorMessage: { gender: "Please select a gender" },
        });
      }
    

    if (!values.terms) {
      isError = true;
      setError({
        ...error,
        error: true,
        errorMessage: { terms: "accept terms annd  condition" },
      });
    }
    if (!isError) {
      setFormValue(values);
      redirect();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
    // You should see email and password in console.
    // ..code to submit form to backend here...
  };

  return (
    <Box onSubmit={handleSubmit} component="form" validate autoComplete="off">
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        className={classes.formHeader}
      >
        Sign Up
      </Typography>
      <FormControl sx={{ m: 1, width: "30ch" }}>
        <TextField
          onChange={handleChange("firstName")}
          required
          id="first-name"
          label="First name"
          variant="outlined"
          color="secondary"
          value={values.firstName}
          error={
            Object.keys(error).length != 0 &&
            error.constructor === Object &&
            !!error.errorMessage.firstName
          }
        />
        {Object.keys(error).length != 0 &&
          error.constructor === Object &&
          !!error.errorMessage.firstName && (
            <FormHelperText>{error.errorMessage.firstName}</FormHelperText>
          )}
      </FormControl>
      <FormControl sx={{ m: 1, width: "30ch" }}>
        <TextField
          onChange={handleChange("lastName")}
          required
          id="last-name"
          label="Last name"
          variant="outlined"
          color="secondary"
          value={values.lastName}
          error={
            Object.keys(error).length != 0 &&
            error.constructor === Object &&
            !!error.errorMessage.lastName
          }
        />
        {Object.keys(error).length != 0 &&
          error.constructor === Object &&
          !!error.errorMessage.lastName && (
            <FormHelperText>{error.errorMessage.lastName}</FormHelperText>
          )}
      </FormControl>
      <FormControl sx={{ m: 1, width: "62ch" }}>
        <TextField
          onChange={handleChange("email")}
          type="email"
          required
          id="email"
          label="Email"
          variant="outlined"
          color="secondary"
          value={values.email}
          error={
            Object.keys(error).length != 0 &&
            error.constructor === Object &&
            !!error.errorMessage.email
          }
        />
        {Object.keys(error).length != 0 &&
          error.constructor === Object &&
          !!error.errorMessage.email && (
            <FormHelperText>{error.errorMessage.email}</FormHelperText>
          )}
      </FormControl>
      <FormControl sx={{ m: 1, width: "62ch" }} variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          color="secondary"
          required
        >
          Password
        </InputLabel>
        <OutlinedInput
          required
          error={
            Object.keys(error).length != 0 &&
            error.constructor === Object &&
            !!error.errorMessage.password
          }
          color="secondary"
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        {Object.keys(error).length != 0 &&
          error.constructor === Object &&
          !!error.errorMessage.password && (
            <FormHelperText>{error.errorMessage.password}</FormHelperText>
          )}
      </FormControl>
      <FormControl sx={{ m: 1, width: "30ch" }} component="fieldset"
      error={
        Object.keys(error).length != 0 &&
        error.constructor === Object &&
        !!error.errorMessage.gender
      }>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          required
          aria-label="gender"
          defaultValue="female"
          onChange={handleChange("gender")}
          value={values.gender}
          name="radio-buttons-group"
          className={classes.formRadio}
        >
          <FormControlLabel sx={{  width: "8ch" }} value="female" control={<Radio />} label="Female" />
          <FormControlLabel sx={{  width: "8ch" }} value="male" control={<Radio />} label="Male" />
          <FormControlLabel sx={{  width: "8ch" }} value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        {Object.keys(error).length != 0 &&
          error.constructor === Object &&
          !!error.errorMessage.gender && (
            <FormHelperText>{error.errorMessage.gender}</FormHelperText>
          )}
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, width: "30ch" }}
      error={
        Object.keys(error).length != 0 &&
        error.constructor === Object &&
        !!error.errorMessage.course
      }>
        <InputLabel id="demo-simple-select-label" color="secondary">
          Courses
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.course}
          label="Courses"
          onChange={handleChange("course")}
          color="secondary"
          required
        >
          <MenuItem value="neet">NEET</MenuItem>
          <MenuItem value="jee">JEE</MenuItem>
          <MenuItem value="jee-main">JEE-MAIN</MenuItem>
        </Select>
        {Object.keys(error).length != 0 &&
          error.constructor === Object &&
          !!error.errorMessage.course && (
            <FormHelperText>{error.errorMessage.course}</FormHelperText>
          )}
      </FormControl>
      <FormControl
        error={
          Object.keys(error).length != 0 &&
          error.constructor === Object &&
          !!error.errorMessage.terms
        }
        sx={{ m: 1, width: "62ch" }}
      >
        <FormControlLabel
          control={<Checkbox onChange={handleChange("terms")} name="terms" checked={values.terms}/>}
          label="Terms and condition accepted"
          color="secondary"
        />
        {Object.keys(error).length != 0 &&
          error.constructor === Object &&
          !!error.errorMessage.terms && (
            <FormHelperText>{error.errorMessage.terms}</FormHelperText>
          )}
      </FormControl>
      <FormControl sx={{ m: 1, width: "62ch" }}>
        <Button type="submit" variant="contained" className={classes.formBtn}>
          {isUpdate?"Update":"Sign up"}
        </Button>
      </FormControl>
    </Box>
  );
}
