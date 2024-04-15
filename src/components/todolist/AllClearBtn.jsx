import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../recoilState/recoilAtom.js';

function AllClearBtn() {
  const setTodoList = useSetRecoilState(todoListState);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={() => setTodoList([])}>목록 전체 삭제</button>
    </div>
  );
}

export default AllClearBtn;
