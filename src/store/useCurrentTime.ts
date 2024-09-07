import { create } from "zustand";
import { format } from "@formkit/tempo";
interface IUseCurrentTime {
  time: string;
  setTime: (newTime: string) => void;
}
const time = new Date();
const formattedTime = format(time, "HH:00");
const useCurrentTime = create<IUseCurrentTime>((set) => ({
  time: formattedTime,
  setTime: (newTime) =>
    set(() => ({
      time: newTime,
    })),
}));

export { useCurrentTime };
