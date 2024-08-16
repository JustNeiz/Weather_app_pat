import { format } from "@formkit/tempo";
import { create } from "zustand";

const date = new Date();
const formattedDate = format(date, "ddd DD MMM", "en");

interface DayType {
  currentDay: string;
  setCurrentDay: (newDay: string) => void;
}
export const useCurrentDay = create<DayType>((set) => ({
  currentDay: formattedDate,
  setCurrentDay: (newDay) => set(() => ({ currentDay: newDay })),
}));
