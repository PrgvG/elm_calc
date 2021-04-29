const UPDATE_CWT = "UPDATE_CWT"

const initialState = {
  width: 900,
  depth: 180,
  braket: 270, // width + braket = full cwt width
}

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CWT: {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    default:
      return state
  }
}

export function updateCWT(key, value) {
  return { type: UPDATE_CWT, key, value }
}
