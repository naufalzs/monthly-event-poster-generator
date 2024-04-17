import styled from "styled-components";
import { Formik } from "formik";
import MonthInput from "./components/MonthInput";
import {
  BtnOutlined,
  BtnPrimary,
  Input,
  Label,
  Select,
  Textarea,
} from "./globalTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 32px;
`;

const Title = styled.h1`
  width: max-content;
  margin: 0 auto;

  font-size: 48px;
  font-weight: 900;
  color: var(--color-secondary);

  text-align: center;
  text-transform: uppercase;

  span {
    font-weight: 700;
    letter-spacing: 0.12em;
    color: var(--color-primary);
  }
`;

const Form = styled.form`
  margin-top: 28px;
`;

const UpperForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`;

const TrashIconWrapper = styled.div`
  position: absolute;
  right: 0;
  color: var(--color-red);
  cursor: pointer;
`;

const Title2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  margin: 24px 0 16px;
  font-size: 28px;
  font-weight: 600;
  color: var(--color-primary);
`;

const LowerForm = styled.div`
  margin-top: 16px;
`;

const Hr = styled.hr`
  border: 2px dashed var(--color-secondary);
  margin: 20px 0;
`;

const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const App = () => {
  return (
    <Container>
      <Title>
        monthly <br />
        <span>event form</span>
      </Title>
      <Formik
        initialValues={{
          companyName: "",
          month: "",
          name: "",
          date: "",
          desc: "",
        }}
        validate={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <UpperForm>
              <Label>
                Company Name
                <Input name="companyName" onChange={handleChange} />
              </Label>
              <MonthInput name="month" />
            </UpperForm>
            <div>
              <Title2>Event Programme</Title2>
              <UpperForm>
                <Label>
                  Event Name
                  <Input name="name" onChange={handleChange} />
                </Label>
                <Label>
                  Event Date
                  <Select name="date" onChange={handleChange}>
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
                  <TrashIconWrapper>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </TrashIconWrapper>
                  <Textarea
                    rows={3}
                    name="desc"
                    value={values.desc}
                    onChange={handleChange}
                  />
                </Label>
              </LowerForm>
              <Hr />
              <BtnGroup>
                <BtnOutlined>
                  <div>New Event</div>
                  <FontAwesomeIcon icon={faPlus} size="sm" />
                </BtnOutlined>
                <BtnPrimary>Submit</BtnPrimary>
              </BtnGroup>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default App;
