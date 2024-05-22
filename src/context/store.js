import { create } from "zustand";
import { cart } from "./product";

export const useStore = create((set) => ({
  ...cart(set),
}));

export default useStore;
