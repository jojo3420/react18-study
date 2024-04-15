import { selectorFamily, selector } from 'recoil';
import { counterState, todoListState } from './recoilAtom.js';
import { v4 as uuidv4 } from 'uuid';

export const addTodoItem = selector({
  key: 'addTodoItem',
  get: () => undefined,
  set: ({ set }, newValue) => {
      set(todoListState, prevList => {
        return [
          ...prevList,
          { id: uuidv4(), text: newValue, isDone: false },
        ];
      });
    },
});

export const toggleTodoItem = selectorFamily({
  key: 'toggleTodoItem',
  get:
    id =>
    ({ get }) => {
      const todoList = get(todoListState);
      return todoList.find(todo => todo.id === id);
    },
  set:
    id =>
    ({ set, get }, newValue) => {
      set(todoListState, prevList => {
        return prevList.map(todo => {
          if (todo.id === id) {
            return { ...todo, isDone: !todo.isDone };
          }
          return todo;
        });
      });
    },
});

export const removeTodoItem = selectorFamily({
  key: 'removeTodoItem',
  get:
    id =>
    ({ get }) => {
      const todoList = get(todoListState);
      return todoList.find(todo => todo.id === id);
    },
  set:
    id =>
    ({ set, get }) => {
      set(todoListState, prevList => {
        return prevList.filter(todo => todo.id !== id);
      });
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
  }
});