import { create } from "zustand";

export const useStore = create((set) => ({
  value: [],
  toggleHeart: (payload) =>
    set((state) => {
      let newValue = state.value ? [...state.value] : [];
      let index = newValue.findIndex((i) => i._id === payload._id);
      if (index < 0) {
        newValue.push(payload);
      } else {
        newValue = newValue.filter((i) => i._id !== payload._id);
      }
      localStorage.setItem("wishlist", JSON.stringify(newValue)); // Ma'lumotlarni LocalStorage ga saqlash
      return { value: newValue };
    }),
}));
