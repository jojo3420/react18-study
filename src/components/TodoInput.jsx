import React from 'react';

//  함수를 선언하여 이벤트에 연결하는 방식은 다음과 같은 이점을 가집니다:
// 1) 분리된 관심사: 이벤트 핸들링 로직이 별도의 함수로 분리되어 UI 코드와 비즈니스 로직 사이의 관심사가 분리됩니다. 이는 코드의 구조를 더 명확하게 하고, 각 부분이 더 잘 정의되도록 도와줍니다.
// 재사용성 및 테스트 용이성: handleAddTodo 함수는 필요한 경우 다른 곳에서 재사용할 수 있으며, 테스트가 더 용이합니다. 예를 들어, 이 함수의 동작을 테스트하기 위해 UI를 거치지 않고도 직접 호출할 수 있습니다.
// 유지 보수성: 함수로 분리함으로써, 나중에 로직을 변경하거나 확장할 때 해당 함수만 수정하면 됩니다. 이는 전체 컴포넌트의 나머지 부분에 영향을 미치지 않으므로 유지 보수가 더 쉬워집니다.

// 성능상의 이점
// 이 경우 성능 차이는 미미합니다. React의 이벤트 핸들러는 이미 효율적으로 관리되므로, 함수를 인라인으로 작성하거나 별도로 분리하는 것이 성능에 큰 영향을 미치지 않습니다.
// 주된 차이는 코드의 구조와 명확성에 있습니다

// 결론
// 함수를 분리하는 것은 React 개발에서 권장되는 관례 중 하나로, 코드를 더 깔끔하고 관리하기 쉽게 만들어 줍니다.

function TodoInput({ text, dispatch }) {

	const handleAddTodo = () => {
		if (!text.trim()) {
			return alert("할일을 입력해주세요.");
		}
		dispatch({ type: 'ADD_TODO' });
	};

	return (
		<>
			<button onClick={() => dispatch({ type: 'TEXT_CLEAR' })}>clear</button>
			<input value={text} onChange={({ target }) => dispatch({ type: 'SET_TEXT', text: target.value })} />
			<button onClick={handleAddTodo}>
				Add
			</button>
		</>
	);
}

export default TodoInput;