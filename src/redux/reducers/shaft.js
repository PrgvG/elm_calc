const UPDATE_SHAFT = "UPDATE_SHAFT"

const initialState = {
  walkThrough: false,
  machineRoomless: false,
  type: "mr",
  width: 0,
  depth: 0,
  head: 0,
  pit: 0,
  height: 0,
  speed: 0,
  load: 0,
  wallToShaftDood: 60,
  cwtToWall: 50,
  cwtDepth: 180,
  guide: 75,
}

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SHAFT: {
      return {
        ...state,
        [action.name]: action.value,
      }
    }
    default:
      return state
  }
}

export function updateShaft(name, value) {
  return { type: UPDATE_SHAFT, name, value }
}
