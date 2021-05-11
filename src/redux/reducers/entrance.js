const UPDATE_ENTRANCE = "UPDATE_ENTRANCE"

const initialState = {
  toLeftCorner: 0,
  doorWidth: 0,
  toRightCorner: 0,
}

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ENTRANCE: {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    default:
      return state
  }
}

export function updateEntrance(key, value) {
  return { type: UPDATE_ENTRANCE, key, value }
}
