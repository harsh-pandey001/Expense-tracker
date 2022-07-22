import { Button, Typography, Box, styled, TextField } from "@mui/material";

import React from "react";

const NewTrans = () => {
  return (
    <Box>
      <Typography varient="h5">New Transaction</Typography>
      <TextField/>
      <Button variant = "contained">Add Transaction</Button>
    </Box>
  );
};

export default NewTrans;
