import type { Vehicle } from "../../src/models/Vehicle";
import {
  apiRequestHandler,
  apiRequestWithIdHandler,
} from "./ApiRequestHandlers";

export const fetchVehicles = async (): Promise<Array<Vehicle>> =>
  await apiRequestHandler();

export const fetchVehicle = async (id: string): Promise<Vehicle> =>
  await apiRequestWithIdHandler(id);
