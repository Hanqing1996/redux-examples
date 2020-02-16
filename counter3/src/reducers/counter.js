export default (state = 0, action) => {
  if (!state) {
    state = { count: 0 }
  }
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload }
    case 'DECREMENT':
      return { count: state.count - action.payload }
    case 'OTHER':
      return { count: state.count * action.payload }
    default:
      return state
  }
}
