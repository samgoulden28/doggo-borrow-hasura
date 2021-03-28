import React, { useState, useEffect } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker as MuiDatePicker } from "@material-ui/pickers";
import { useFormikContext } from "formik";
import { useField } from "formik";
import { format, parseISO } from "date-fns";
interface DatePickerProps {
  name: string;
}

const DatePicker = ({ name }: DatePickerProps) => {
  const [field, meta, helper] = useField({ name });
  const { value } = field;
  const [inputValue, setInputValue] = useState(value ? new Date(value) : "");
  const { setValue, setTouched } = helper;

  const handleChange = (date) => {
    setInputValue(date);
    setValue(format(date, "yyyy-MM-dd"));
  };

  useEffect(() => {
    setInputValue(parseISO(value));
  }, [value]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiDatePicker
        name={name}
        disableFuture
        openTo="year"
        format="yyyy-MM-dd"
        label="Date of birth"
        views={["year", "month", "date"]}
        value={inputValue}
        onChange={handleChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
