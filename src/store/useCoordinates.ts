import { create } from "zustand";
import { ICityCoordinates } from "../types/ICityCoordinates";

type Coordinates ={
  coordinates: ICityCoordinates,
  setCoordinates: (newCoordinates: ICityCoordinates)=>void
}

export const useCoordinates = create<Coordinates>((set)=>({
    coordinates: {
      longitude: 50.4547,
      lattitude: 30.5238
    },
    setCoordinates: (newCoordinates : ICityCoordinates)=>set(()=>({
      coordinates: newCoordinates
    }))
}))