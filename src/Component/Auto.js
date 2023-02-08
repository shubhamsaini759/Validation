// import React from "react";
// import { Autocomplete, TextField } from "@mui/material";
// import { data } from "./data";

// export const Auto = () => {
//   return (
//     <div>
//       <Autocomplete
//         name="count"
//         disablePortal
//         id="combo-box-demo"
//         options={data.map((x) => x)}
//         sx={{ width: 300 }}
//         renderInput={(params) => <TextField {...params} label="count" />}
//       />
//     </div>
//   );
// };

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Data } from "./data";

export default function Auto(props) {
  console.log(props, "props");
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      size="small"
      options={props?.Data?.map((x) => x)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
}
