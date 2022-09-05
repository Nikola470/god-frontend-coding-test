import type { FC } from "react";
import { TextFieldComponent } from "../text-field-component/TextFieldComponent";

type AssignmentsActionProps = {
  onSearchChange: (searchValue: string) => void;
};

export const VehicleAction: FC<AssignmentsActionProps> = ({
  onSearchChange,
}) => {
  return (
    <TextFieldComponent
      label="Filter body type"
      onSearchChange={onSearchChange}
    />
  );
};
