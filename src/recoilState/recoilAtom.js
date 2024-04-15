import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

// export const countState = atom({
//   key: 'countState', //  고유한 ID(글로벌로 고유해야 함)
//   default: 0,  // 기본값
// });

export const todoListState = atom({
  key: 'todoListState',
  default: [
    { id: uuidv4(), text: 'Study React', isDone: false },
    { id: uuidv4(), text: 'Study Context API', isDone: true },
    { id: uuidv4(), text: 'Study Recoil', isDone: false },
  ]
});

export const todoTextState = atom({
  key: 'todoTextState',
  default: ''
});



export const counterState = atom({
  key: 'counterState',
  default: 0
});


