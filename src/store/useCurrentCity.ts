import { create } from "zustand";
import { ICityStore } from "../types/ICityStore";

const useCurrentCity = create<ICityStore>((set) => ({
  city: 'Киев',
  setCity: (newCity : string) => set(() => ({city: newCity})),
}))

export {useCurrentCity}