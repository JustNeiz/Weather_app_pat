import { create } from "zustand";
import { ICoordinates } from "../types/ICoordinates.ts";

type Coordinates = {
  coordinates: ICoordinates;
  setCoordinates: (newCoordinates: ICoordinates) => void;
};

export const useCoordinates = create<Coordinates>((set) => ({
  coordinates: {
    longitude: 50.4547,
    lattitude: 30.5238,
  },
  setCoordinates: (newCoordinates: ICoordinates) =>
    set(() => ({
      coordinates: newCoordinates,
    })),
}));
