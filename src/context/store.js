import { create } from "zustand";
import { cart } from "./product";
import { wishlist } from "./wishlist";

export const useStore = create((set) => ({
  ...cart(set),
  ...wishlist(set),
}));

export default useStore;
