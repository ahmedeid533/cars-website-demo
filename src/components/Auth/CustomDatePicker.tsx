"use client";

import * as React from "react";
import { useField, useFormikContext } from "formik";
import { Grid, MenuItem, TextField, FormHelperText } from "@mui/material";
import dayjs from "dayjs";

interface Props {
	label: string;
	name: string;
}

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
	{ value: 1, label: "January" },
	{ value: 2, label: "February" },
	{ value: 3, label: "March" },
	{ value: 4, label: "April" },
	{ value: 5, label: "May" },
	{ value: 6, label: "June" },
	{ value: 7, label: "July" },
	{ value: 8, label: "August" },
	{ value: 9, label: "September" },
	{ value: 10, label: "October" },
	{ value: 11, label: "November" },
	{ value: 12, label: "December" },
];
const years = Array.from({ length: 2025 - 1960 + 1 }, (_, i) => 1960 + i);

const CustomDatePicker: React.FC<Props> = ({ name }) => {
	const [field, meta] = useField(name);
	const { setFieldValue } = useFormikContext();

	const parsed = field.value ? dayjs(field.value) : null;
	const [selectedDay, setSelectedDay] = React.useState<number | "">(
		parsed?.isValid() ? parsed.date() : ""
	);
	const [selectedMonth, setSelectedMonth] = React.useState<number | "">(
		parsed?.isValid() ? parsed.month() + 1 : ""
	);
	const [selectedYear, setSelectedYear] = React.useState<number | "">(
		parsed?.isValid() ? parsed.year() : ""
	);

	const updateDate = (
		day: number | "",
		month: number | "",
		year: number | ""
	) => {
		if (day && month && year) {
			const newDate = dayjs(`${year}-${month}-${day}`, "YYYY-M-D");
			if (newDate.isValid()) {
				setFieldValue(name, newDate.toISOString());
			} else {
				setFieldValue(name, "");
			}
		}
	};

	const handleChange = (
		type: "day" | "month" | "year",
		value: number | ""
	) => {
		if (type === "day") {
			setSelectedDay(value);
			updateDate(value, selectedMonth, selectedYear);
		} else if (type === "month") {
			setSelectedMonth(value);
			updateDate(selectedDay, value, selectedYear);
		} else if (type === "year") {
			setSelectedYear(value);
			updateDate(selectedDay, selectedMonth, value);
		}
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={4}>
				<TextField
					select
					label="Day"
					fullWidth
					value={selectedDay}
					onChange={(e) =>
						handleChange("day", parseInt(e.target.value))
					}
				>
					<MenuItem value="">Day</MenuItem>
					{days.map((d) => (
						<MenuItem key={d} value={d}>
							{d}
						</MenuItem>
					))}
				</TextField>
			</Grid>
			<Grid item xs={4}>
				<TextField
					select
					label="Month"
					fullWidth
					value={selectedMonth}
					onChange={(e) =>
						handleChange("month", parseInt(e.target.value))
					}
				>
					<MenuItem value="">Month</MenuItem>
					{months.map((m) => (
						<MenuItem key={m.value} value={m.value}>
							{m.value} - {m.label}
						</MenuItem>
					))}
				</TextField>
			</Grid>
			<Grid item xs={4}>
				<TextField
					select
					label="Year"
					fullWidth
					value={selectedYear}
					onChange={(e) =>
						handleChange("year", parseInt(e.target.value))
					}
				>
					<MenuItem value="">Year</MenuItem>
					{years.map((y) => (
						<MenuItem key={y} value={y}>
							{y}
						</MenuItem>
					))}
				</TextField>
			</Grid>

			{meta.touched && meta.error && (
				<Grid item xs={12}>
					<FormHelperText error>{meta.error}</FormHelperText>
				</Grid>
			)}
		</Grid>
	);
};

export default CustomDatePicker;
