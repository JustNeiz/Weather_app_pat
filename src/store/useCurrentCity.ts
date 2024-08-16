import { create } from "zustand";
import { ICityStore } from "../types/ICityStore";

const useCurrentCity = create<ICityStore>((set) => ({
  city: "Kyiv",
  setCity: (newCity: string) => set(() => ({ city: newCity })),
}));

export { useCurrentCity };
