import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-weight: 500;
  color: var(--color-secondary);
`;

export const Input = styled.input`
  margin-top: 4px;

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
