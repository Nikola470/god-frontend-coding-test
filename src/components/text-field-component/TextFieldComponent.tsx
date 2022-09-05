import type { ChangeEvent, FC } from "react";
import { TextInput } from "vcc-ui";
import React from "react";

type TextFieldComponentProps = {
  label: string;
  onSearchChange: (inputValue: string) => void;
};

export const TextFieldComponent: FC<TextFieldComponentProps> = ({
  label,
  onSearchChange,
}) => {
  const filterChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
    setValue(event.target.value);
  };
  const [value, setValue] = React.useState("");

  return (
    <TextInput
      style={{ width: 300 }}
      label={label}
      value={value}
      onChange={filterChangeHandler}
    />
  );
};
