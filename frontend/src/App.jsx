import styled from "styled-components";
import { Formik } from "formik";
import MonthInput from "./components/MonthInput";
import { BtnOutlined, BtnPrimary, Input, Label } from "./globalTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import EventInput from "./components/EventInput";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import axios from "axios";

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

const Hint = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 12px;
  font-weight: 400;
  color: #a3a3a3;
  margin-bottom: 16px;
`;

const FieldStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

const StatusBox = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  transition: all 200ms ease-in;
  background-color: ${(props) =>
    props.$isValid ? "var(--color-green)" : "var(--color-red)"};
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

  const formValidation = Yup.object().shape({
    companyName: Yup.string().required(),
    month: Yup.string().required(),
    events: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required(),
        date: Yup.string().required(),
        desc: Yup.string().required(),
      })
    ),
  });

  const fetchPdf = async (formData) => {
    const sortedEvent = formData.events.slice().sort((a, b) => a.date - b.date);
    const sortedFormData = { ...formData, events: sortedEvent };

    axios
      .post("http://localhost:5001/convert-pdf", sortedFormData, {
        responseType: "blob",
      })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "company-event.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something wrong, please try again");
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
          validationSchema={formValidation}
          validateOnMount={true}
          onSubmit={(values) => {
            fetchPdf(values);
          }}
        >
          {({ values, handleChange, handleSubmit, isValid }) => (
            <Form
              onSubmit={(e) => {
                if (isValid) {
                  handleSubmit(e);
                } else {
                  toast.error("Please fill all field before submit");
                }
                e.preventDefault();
              }}
            >
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
                <Hint>
                  All field need to be filled to submit{" "}
                  <FieldStatus>
                    Field status <StatusBox $isValid={isValid} />
                  </FieldStatus>
                </Hint>
                <BtnGroup>
                  <BtnOutlined onClick={handleAddEvent}>
                    <div>New Event</div>
                    <FontAwesomeIcon icon={faPlus} size="sm" />
                  </BtnOutlined>
                  <BtnPrimary type="submit">Submit</BtnPrimary>
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
