import { FormControl, InputLabel, OutlinedInput, FormHelperText } from "@mui/material";
import { FieldProps, ErrorMessage } from "formik";
import React from "react";

type Props = {
  label: string;
  placeholder: string;
  type: string;
} & FieldProps;

const CustomInput: React.FC<Props> = ({ label, placeholder, type, field }) => {
  return (
    <FormControl className="w-full" variant="outlined">
      <InputLabel htmlFor={field.name}>{label}</InputLabel>
      <OutlinedInput {...field} id={field.name} type={type} placeholder={placeholder} />
      <ErrorMessage name={field.name}>
        {(msg) => <FormHelperText error>{msg}</FormHelperText>}
      </ErrorMessage>
    </FormControl>
  );
};

export default CustomInput;
