import styled from "styled-components";

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

const App = () => {
  return (
    <Container>
      <Title>
        monthly <br />
        <span>event form</span>
      </Title>
      <Form>
      </Form>
    </Container>
  );
};

export default App;
