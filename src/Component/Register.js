import { Button, MenuItem, Select } from "@mui/material";
import React from "react";
import Styles from "../Style/Register.module.css";
import Auto from "./Auto";
import { Inputs } from "./Inputs";

import { useEffect } from "react";
import axios from "axios";
import { Data } from "./data";
import { DataTwo } from "./DataTwo";
import useInput from "../hooks/use-input";
import { useState } from "react";
import { CountryData } from "./CountryData";

const notEmptyCondition = (value) => value.trim().length !== 0;
const maxLengthCondition = (value) => value.trim().length > 3;
const notHasAt = (value) => value.includes("@");
const numMaxLength = (value) => value.trim().length >= 10;

const Register = () => {
  const {
    value: fullName,
    hasError: fullNameError,
    inputBlurHandler: fullNameBlurHandler,
    valueChangeHandler: fullNameChangeHandler,
  } = useInput(notEmptyCondition);

  const {
    value: email,
    hasError: emailError,
    inputBlurHandler: emailBlur,
    valueChangeHandler: emailChange,
  } = useInput(notHasAt);

  const {
    value: num,
    hasError: numError,
    inputBlurHandler: numBlur,
    valueChangeHandler: numChange,
  } = useInput(numMaxLength);

  const [country, setCountry] = useState("IN");

  return (
    <div className={Styles.Register}>
      <form className={Styles.container}>
        <div className={Styles.row}>
          <div className={Styles.col}>
            <Auto label="batch" Data={Data} />
          </div>
          <div className={Styles.col}>
            <Auto label="rollno" Data={DataTwo} />
          </div>
        </div>
        <div className={Styles.row}>
          <div className={Styles.col}>
            <Inputs
              label="full name"
              value={fullName}
              onChange={fullNameChangeHandler}
              onBlur={fullNameBlurHandler}
              errorText="Name must be more than 3"
              hasError={fullNameError}
            />
          </div>
          <div className={Styles.col}>
            <Inputs label="gender" />
          </div>
        </div>
        <div className={Styles.row}>
          <div className={Styles.col}>
            <Select value={country}>
              {CountryData?.map((item, index) => (
                <MenuItem
                  key={`country_${index}`}
                  onClick={() => setCountry(item?.code)}
                  value={item?.code}
                >
                  {item?.dial_code}
                </MenuItem>
              ))}
            </Select>
            <Inputs
              label="phone number"
              value={num}
              onChange={numChange}
              onBlur={numBlur}
              errorText="Invalid num"
              hasError={numError}
            />
          </div>
          <div className={Styles.col}>
            <Inputs
              label="email"
              value={email}
              onChange={emailChange}
              onBlur={emailBlur}
              errorText="Invalid Email"
              hasError={emailError}
            />
          </div>
        </div>
        <div className={Styles.address}>
          <div className={Styles.col}>
            <Auto label="country" />
          </div>
          <div className={Styles.col}>
            <Auto label="state" />
            <Auto label="city" />
          </div>
        </div>
        <div className={Styles.row}>
          <div className={Styles.col}>
            <Inputs label="password" />
          </div>
          <div className={Styles.col}>
            <Inputs label="confirm password" />
          </div>
        </div>
        <div className={Styles.button}>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
