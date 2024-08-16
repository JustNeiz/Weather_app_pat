import { format } from "@formkit/tempo";
import { create } from "zustand";

type DurationState = {
  intervalEnd: string | null;
  intervalStart: string | null;
  setDuration: (newDuration: string | null) => void;
};

const today = new Date();
const todayFormatted = format(today, "YYYY-MM-DD", "en");

const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
const tomorrowFormatted = format(tomorrow, "YYYY-MM-DD", "en");

const useForecastDuration = create<DurationState>((set) => ({
  intervalEnd: todayFormatted,
  intervalStart: todayFormatted,
  setDuration: (newDuration: string | null) =>
    set(() => {
      const intervalStart =
        newDuration === tomorrowFormatted ? tomorrowFormatted : todayFormatted;
      return {
        intervalEnd: newDuration,
        intervalStart: intervalStart,
      };
    }),
}));

export { useForecastDuration };
