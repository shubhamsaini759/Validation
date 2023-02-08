import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice({
  name: "register",
  initialState: {
    batch: "",
    roll: "",
    name: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    password: "",
    confirmPass: "",
  },
  reducers: {},
});
