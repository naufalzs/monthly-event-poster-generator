import styled, { css } from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-weight: 500;
  color: var(--color-secondary);
`;

const inputStyle = css`
  margin-top: 4px;

  width: 100%;
  border-radius: 30px;
  background-color: var(--color-gray);

  font-size: 16px;
  font-weight: 500;
  padding: 8px 14px;
  color: var(--color-primary);

  outline: none;
  border: none;
`;

export const Input = styled.input`
  ${inputStyle}
  height: 40px;
`;

export const Textarea = styled.textarea`
  ${inputStyle}
`;

export const Select = styled.select`
  ${inputStyle}
  height: 40px;
  appearance: none;
`;
