import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import "../App.css";

const Signup = () => {
  const [data, setData] = useState("");
  const [output, setOutput] = useState([]);

  const ADD = () => {
    setOutput([...output, data]);
  };

  const Del = (id) => {
    const remain = output.filter((x, ind) => ind !== id);
    setOutput(remain);
  };

  return (
    <>
      <div style={{ marginTop: 40 }}>
        <TextField
          id="outlined-basic"
          className="temp"
          label="Outlined"
          variant="outlined"
        />

        <Button className="cstmBtn" variant="contained">
          hello
        </Button>

        <TextField className="stand" label="standard" variant="standard" />

        <Select label="hhh" className="ff">
          <MenuItem>hello</MenuItem>
        </Select>
      </div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={ADD}>add</button>

      {output.map((x, ind) => {
        return (
          <>
            <h5>{x}</h5>
            <button onClick={() => Del(ind)}>del</button>
          </>
        );
      })}
    </>
  );
};

export default Signup;
