const user = [
  {
    name: '유저',
    url: '/user',
    children: [
      { name: '유저관리-1', url: '/user' },
      { name: '유저관리-2', url: '/user' },
    ],
  },
];

const board = [
  {
    name: '게시판',
    url: '/board',
    children: [
      { name: '게시판', url: '/board' },
      { name: '게시판', url: '/board' },
    ],
  },
];

export const headerList = [...user, ...board];
