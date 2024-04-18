import { FieldArray } from "formik";
import { Fragment, forwardRef } from "react";
import styled from "styled-components";
import { Input, Label, Select, Textarea } from "../globalTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const UpperForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`;

const LowerForm = styled.div`
  margin-top: 16px;
`;

const TrashIconWrapper = styled.div`
  position: absolute;
  right: 0;
  color: var(--color-red);
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 2px dashed var(--color-secondary);
  margin: 20px 0;
`;

const EventInput = forwardRef(({ values, handleChange }, ref) => {
  return (
    <FieldArray
      name="events"
      render={(arrayHelpers) => {
        ref.current = arrayHelpers;

        return values.events.map((event, index) => (
          <Fragment key={index}>
            <UpperForm>
              <Label>
                Event Name
                <Input name={`events.${index}.name`} onChange={handleChange} />
              </Label>
              <Label>
                Event Date
                <Select name={`events.${index}.date`} onChange={handleChange}>
                  <option value="">--Please choose an option--</option>
                  {[...Array(31)].map((_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </Select>
              </Label>
            </UpperForm>
            <LowerForm>
              <Label>
                Event Description
                <TrashIconWrapper onClick={()=>arrayHelpers.pop()}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </TrashIconWrapper>
                <Textarea
                  rows={3}
                  name={`events.${index}.desc`}
                  onChange={handleChange}
                  value={values.desc}
                />
              </Label>
            </LowerForm>
            <Hr />
          </Fragment>
        ));
      }}
    />
  );
});

export default EventInput;
