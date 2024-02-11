import { atom, useAtom } from 'jotai';

const isSideNavOpen = atom(false);
isSideNavOpen.debugLabel = 'isSideNavOpen';

const useIsSideNavOpenAtom = () => useAtom(isSideNavOpen);
export default useIsSideNavOpenAtom;