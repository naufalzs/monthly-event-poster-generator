import { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, format } from "date-fns";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-weight: 500;
  color: var(--color-secondary);
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 30px;
  background-color: var(--color-gray);

  font-size: 16px;
  font-weight: 500;
  padding: 8px 14px;
  color: var(--color-primary);

  outline: none;
  border: none;
`;

const InputWrapper = styled.div`
  margin-top: 4px;
  position: relative;

  .react-datepicker {
    position: absolute;
    right: 0;
  }
`;

const MonthInput = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setSelectedMonth(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <Label>
      Month
      <InputWrapper>
        <Input
          name="month"
          value={format(selectedMonth, "MMMM")}
          onClick={handleClick}
          readOnly
        />
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
