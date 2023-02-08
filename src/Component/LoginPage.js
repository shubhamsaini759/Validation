import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import imageToBase64 from "image-to-base64/browser";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [gen, setGen] = useState("");

  const handleChange = (e) => {
    setGen(e.target.value);
    console.log(e.target.value);
  };

  const imageHandler = (e) => {
    const path = e.target.value;

    imageToBase64(path)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h1>login page</h1>
      <br />
      <input type="text" />
      <Link to="/signup">Login</Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" onChange={imageHandler} />
        <PhotoCamera />
      </IconButton>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <FormControl>
        <FormLabel>gender</FormLabel>
        <RadioGroup value={gen} row onChange={handleChange}>
          <FormControlLabel control={<Radio />} label="male" value="male" />
          <FormControlLabel control={<Radio />} label="female" value="female" />
        </RadioGroup>
      </FormControl>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TextField variant="outlined" placeholder="ahdghh" label="ugyc" />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default LoginPage;
