import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { UseFormRegisterReturn } from "react-hook-form";

import { WarningIcon } from "@components/common/icon";

type Size = "sm" | "lg" | "md";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  register?: UseFormRegisterReturn;
  error?: string;
  /** @default "md" */
  size?: Size;
  block?: boolean;
  hasClearButton?: boolean;
}

const Input = ({
  register,
  error,
  size = "md",
  label,
  block,
  hasClearButton,
  ...props
}: InputProps) => {
  return (
    <StyledWrap block={block}>
      {label && <StyledLabel required={props.required}>{label}</StyledLabel>}
      <StyledInputWrap size={size} error={error}>
        <StyledInput {...props} {...register} />
        {hasClearButton && <StyledClearButton />}
      </StyledInputWrap>
      {error && (
        <StyledError>
          <WarningIcon color="#da2722" size={13} />
          <StyledMessage error={error}>{error}</StyledMessage>
        </StyledError>
      )}
    </StyledWrap>
  );
};

const StyledWrap = styled.div<{ block?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: normal;
  gap: 4px;
  ${(p) => p.block && "width: 100%"};
`;

const StyledLabel = styled.label<{ required?: boolean }>`
  color: var(--gray-color-300);
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  ${(p) =>
    p.required &&
    css`
      &::after {
        content: " *";
      }
    `}
`;

const StyledInputWrap = styled.div<{
  error?: string;
  disabled?: boolean;
  size?: Size;
}>`
  padding: 16px;
  position: relative;
  display: flex;
  ${(p) => p.size === "lg" && "height: 56px"};
  ${(p) => p.size === "md" && "max-height: 48px"};
  ${(p) => p.size === "sm" && "height: 40px"};
  background-color: ${(p) =>
    p.disabled ? "var(--gray-color-100)" : "var(--white-color)"};
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  transition: border-color 0.15s;
  border-color: ${(p) => p.error && "var(--red-color-400)"};
  &:focus-within {
    border-color: ${(p) => !p.error && "var(--brand-color-300)"};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  color: var(--gray-color-500);
  font-size: 14px;
  font-weight: normal;
  border: none;
  outline: none;
  background-color: transparent;
  &::placeholder {
    color: #adadad;
  }
`;

const StyledError = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMessage = styled.p<{ error?: string }>`
  vertical-align: middle;
  font-size: 10px;
  font-weight: normal;
  color: var(--red-color-400);
`;

const StyledClearButton = styled.button``;

export default Input;
