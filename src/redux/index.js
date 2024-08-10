import { legacy_createStore as createStore } from 'redux'

// Action Types
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Action Creators
const increment = () => ({ type: INCREMENT })
const decrement = () => ({ type: DECREMENT })

const initialState = {
	count: 0,
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
			}
		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			}
		default:
			return state
	}
}

const store = createStore(reducer)

export { increment, decrement }

export default store