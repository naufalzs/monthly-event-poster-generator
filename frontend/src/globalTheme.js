import styled, { css } from "styled-components";

export const Label = styled.label`
  position: relative;
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

const buttonStyle = css`
  width: 100%;
  padding: 8px 14px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  font-weight: 500;

  background-color: var(--color-primary);
  color: #fff;
  border: 1px solid var(--color-primary);
  outline: none;

  cursor: pointer;
  transition: all 70ms ease-in;

  &:hover {
    background-color: #f75f61;
    border: 1px solid #f75f61;
  }
`;

export const BtnPrimary = styled.button`
  ${buttonStyle}
`;

export const BtnOutlined = styled.button`
  ${buttonStyle}
  color: var(--color-primary);
  background-color: transparent;
  border: 1px solid var(--color-primary);

  &:hover {
    background-color: var(--color-primary);
    color: #fff;
  }
`;
