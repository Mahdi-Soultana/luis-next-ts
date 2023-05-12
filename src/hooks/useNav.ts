import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

function setNav(status: (status: NavState) => { isNavOpen: boolean }): void;
function setNav(status: boolean): void;
function setNav(
  status: boolean | ((status: NavState) => { isNavOpen: boolean }),
): void {}

interface NavState {
  isNavOpen: boolean;
  setNav: typeof setNav;
}

export default create<NavState>()(
  devtools(
    persist(
      (set, get) => ({
        isNavOpen: false,
        setNav: (status) => {
          set(
            typeof status === 'function'
              ? status(get())
              : { isNavOpen: status },
          );
        },
      }),
      {
        name: 'bear-storage',
      },
    ),
  ),
);
