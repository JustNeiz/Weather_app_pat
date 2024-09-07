import { create } from "zustand";

interface IWatcher {
  watcher: boolean;
  changeWatcher: () => void;
}

export const useOtherCitiesWatcher = create<IWatcher>((set) => ({
  watcher: true,
  changeWatcher: () => set((state) => ({
    watcher: !state.watcher
  }))
}));
