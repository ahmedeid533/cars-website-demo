"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { useField, useFormikContext } from "formik";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import FormHelperText from "@mui/material/FormHelperText";

interface Props {
  label: string;
  name: string;
}

const CustomDatePicker: React.FC<Props> = ({ label, name }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (newValue: Dayjs | null) => {
    setFieldValue(name, newValue ? newValue.toISOString() : "");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <MobileDatePicker
          label={label}
					inputFormat="MM/DD/YYYY"
					minDate={dayjs("1960-01-01")}
					maxDate={dayjs("2025-01-01")}
          value={field.value ? dayjs(field.value) : null}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} fullWidth error={meta.touched && Boolean(meta.error)} />}
        />
        {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
      </Stack>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
