"use client";

import React from "react";
import { FieldProps, ErrorMessage } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { customPasswordInputStyle } from "./globalStyles";

type Props = {
  label: string;
} & FieldProps;

const CustomPasswordInput: React.FC<Props> = ({ label, field }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl className="w-full" variant="outlined">
      <InputLabel htmlFor={field.name}>{label}</InputLabel>
      <OutlinedInput
        {...field}
        sx={customPasswordInputStyle}
        id={field.name}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((prev) => !prev)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
      <ErrorMessage name={field.name}>
        {(msg) => <FormHelperText error>{msg}</FormHelperText>}
      </ErrorMessage>
    </FormControl>
  );
};

export default CustomPasswordInput;
