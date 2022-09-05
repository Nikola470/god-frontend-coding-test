import { Vehicle } from "../../models/Vehicle";

export const FilterVehicleData = (
  data: Array<Vehicle>,
  searchValue: string
) => {
  return !searchValue
    ? data
    : data.filter((vehicle) =>
        vehicle.bodyType
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      );
};
