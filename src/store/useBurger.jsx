import { create } from 'zustand'

const useBurger = create((set) => ({
    isMenu: false,

    toggleMenu: () => set((state) => ({ isMenu: !state.isMenu })),
}));

export default useBurger;

