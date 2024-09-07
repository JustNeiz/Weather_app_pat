import { create } from "zustand";
import { ICoordinates } from "../types/ICoordinates.ts";

type Coordinates = {
  coordinates: ICoordinates;
  setCoordinates: (newCoordinates: ICoordinates) => void;
};

export const useCoordinates = create<Coordinates>((set) => ({
  coordinates: {
    longitude: 30.5238,
    latitude: 50.45466,
  },
  setCoordinates: (newCoordinates: ICoordinates) =>
    set(() => ({
      coordinates: newCoordinates,
    })),
}));
