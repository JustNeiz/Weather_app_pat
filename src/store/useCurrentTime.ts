import { create } from "zustand";
interface IUseCurrentTime {
  time: string;
  setTime: (newTime: string) => void;
}
const useCurrentTime = create<IUseCurrentTime>((set) => ({
  time: "00:00",
  setTime: (newTime) =>
    set(() => ({
      time: newTime,
    })),
}));

export { useCurrentTime };
