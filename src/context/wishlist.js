export const wishlist = (set) => ({
  value: [],
  toggleHeart: (payload) =>
    set((state) => {
      let index = state.value.findIndex((i) => i._id === payload._id);
      if (index <= 0) {
        return { value: [...state.value, payload] };
      } else {
        return { value: state.value.filter((i) => i._id !== payload._id) };
      }
    }),
});
