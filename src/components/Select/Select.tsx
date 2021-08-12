import React from "react";
import "./select.css";

export interface SelectProps {
  options?: Array<string | OptionInterface>;
}

interface OptionInterface {
  value: string | number;
  label: string;
}

const defaultOptions: Array<string | OptionInterface> = [
  { value: "apple", label: "Apple" },
  { value: "lime", label: "Lime" },
  { value: "mango", label: "Mango" },
];

export const Select = ({ options = defaultOptions }: SelectProps): JSX.Element => {
  const renderOptions = () =>
    options?.map((opt, index) =>
      typeof opt === "string" ? (
        <option value={opt} key={index}>
          {opt}
        </option>
      ) : (
        <option value={opt.value} key={index}>
          {opt.label}
        </option>
      )
    );

  return <select>{renderOptions()}</select>;
};
