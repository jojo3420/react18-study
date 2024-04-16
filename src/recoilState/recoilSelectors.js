import { selectorFamily, selector } from 'recoil';
import { counterState, todoListState } from './recoilAtom.js';
import { v4 as uuidv4 } from 'uuid';


export const todoActions = selector({
  key: 'todoActions',
  get: ({ get }) => get(todoListState),
  set: ({ set }, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        set(todoListState, prevList => {
          return [...prevList, { id: uuidv4(), text: action.payload, isDone: false }];
        });
        break;
      case 'REMOVE_TODO':
        set(todoListState, prevList => {
          return prevList.filter(todo => todo.id !== action.payload);
        });
        break;
      case 'TOGGLE_TODO':
        set(todoListState, prevList => {
          return prevList.map(todo =>
            todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo,
          );
        });
        break;
      default:
        console.warn('Unknown action type');
    }
  },
});

export const counterActions = selector({
  key: 'counterActions',
  get: ({ get }) => get(counterState),
  set: ({ set }, action) => {
    switch (action.type) {
      case 'INCREASE':
        set(counterState, prevCount => prevCount + 1);
        break;
      case 'DECREASE':
        set(counterState, prevCount => prevCount - 1);
        break;
      case 'RESET':
        set(counterState, 0);
        break;
      default:
        console.warn('Unknown action type');
    }
  },
});

export const getUsers = selector({
  key: 'getUsers',
  get: async ({ get }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  },
});

export const getUserDetailById = selectorFamily({
  key: 'getUserDetailById',
  get: id => async ({ get }) => {
    console.log({ id });
    if (!id) return {};
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      console.log({ response });
      return await response.json();
    } catch (error) {
      console.error(error);
      return {};
    }
  }
});