import { FC, useEffect, useState } from "react";
import type { Vehicle } from "../src/models/Vehicle";
import { VehicleList } from "../src/components/vehicle/VehicleList";
import { fetchVehicles } from "../public/api/VehicleRequestHandler";
import { ErrorHandler } from "../src/components/error-handler/ErrorHandler";
import { VehicleAction } from "../src/components/vehicle/VehicleAction";
import { FilterVehicleData } from "../src/utils/filter-car-data/FilterVehicleData";
import { Loader } from "../src/components/loader/Loader";
import { View } from "vcc-ui";

interface State {
  data: Array<Vehicle>;
  loading: boolean;
  error: string | null;
}

export const Vehicles: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [state, setState] = useState<State>({
    data: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    fetchVehiclesHandler();
  }, []);

  const fetchVehiclesHandler = async () => {
    try {
      setState((prevState) => ({
        ...prevState,
        loading: true,
      }));
      const response = await fetchVehicles();
      setState((prevState) => ({
        ...prevState,
        data: response,
        loading: false,
      }));
    } catch (error) {
      if (error instanceof Error) {
        const errorMsg = error.message;
        setState((prevState) => ({
          ...prevState,
          error: errorMsg,
          loading: false,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          error: "Error",
          loading: false,
        }));
      }
    }
  };

  const searchChangeHandler = (searchInput: string) => {
    setSearchValue(searchInput);
  };

  const filteredData = FilterVehicleData(state.data, searchValue);
  if (state.error) return <ErrorHandler message={state.error} />;

  return (
    <View>
      {<VehicleAction onSearchChange={searchChangeHandler} />}
      {state.loading ? <Loader /> : <VehicleList vehicles={filteredData} />}
    </View>
  );
};
