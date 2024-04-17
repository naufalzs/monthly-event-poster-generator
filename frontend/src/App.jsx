import styled from "styled-components";
import { Formik } from "formik";
import MonthInput from "./components/MonthInput";
import { Input, Label } from "./globalTheme";

const Container = styled.div`
  max-width: 1024px;
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
                <Input
                  name="companyName"
                  value={values.companyName}
                  onChange={handleChange}
                />
              </Label>
              <MonthInput name="month" />
            </UpperForm>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default App;
