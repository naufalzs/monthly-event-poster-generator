import styled from "styled-components";
import { Formik } from "formik";
import MonthInput from "./components/MonthInput";
import { BtnOutlined, BtnPrimary, Input, Label } from "./globalTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import EventInput from "./components/EventInput";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";

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

const Title2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  margin: 24px 0 16px;
  font-size: 28px;
  font-weight: 600;
  color: var(--color-primary);
`;

const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const App = () => {
  const eventHelper = useRef(null);

  const handleAddEvent = (e) => {
    e.preventDefault();
    eventHelper.current.push({
      name: "",
      date: "",
      desc: "",
    });
  };

  return (
    <>
      <Container>
        <Title>
          monthly <br />
          <span>event form</span>
        </Title>
        <Formik
          initialValues={{
            companyName: "",
            month: "",
            events: [
              {
                name: "",
                date: "",
                desc: "",
              },
            ],
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
                <EventInput
                  values={values}
                  handleChange={handleChange}
                  ref={eventHelper}
                />
                <BtnGroup>
                  <BtnOutlined onClick={handleAddEvent}>
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
      <Toaster />
    </>
  );
};

export default App;
