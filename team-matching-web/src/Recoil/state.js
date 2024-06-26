import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const userState = atom({
  key: 'userState',
  default: {
    userId: '',
    token: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const myTeamState = atom({
  key: 'myTeamState',
  default: {
    team: {},
    admin: false,
  },
  effects_UNSTABLE: [persistAtom],
});
