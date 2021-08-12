import React, { useState } from "react";
import "./textInput.css";

export interface TextInputProps {
  placeholder?: string;
}
export const TextInput = ({
  placeholder = "",
}: TextInputProps): JSX.Element | null => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleBlur = (): void => {
    return;
  };

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
