import { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, format } from "date-fns";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import "react-datepicker/dist/react-datepicker.css";
import { Input, Label } from "../globalTheme";
import { useField, useFormikContext } from "formik";

const InputWrapper = styled.div`
  position: relative;

  .react-datepicker {
    position: absolute;
    right: 0;
  }

  svg {
    position: absolute;
    top: calc(50% - 10px);
    right: 14px;
    cursor: pointer;
  }
`;

const MonthInput = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setSelectedMonth(e);
    setFieldValue("month", format(e, "MMMM"));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <Label>
      Month
      <InputWrapper>
        <Input {...field} onClick={handleClick} readOnly />
        <FontAwesomeIcon icon={faCalendarDays} size="lg" />
        {isOpen && (
          <DatePicker
            selected={selectedMonth}
            onChange={handleChange}
            minDate={new Date()}
            maxDate={addDays(new Date(), 365)}
            showMonthYearPicker
            inline
          />
        )}
      </InputWrapper>
    </Label>
  );
};

export default MonthInput;
