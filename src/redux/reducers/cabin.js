const UPDATE_SHAFT = "UPDATE_SHAFT";
const UPDATE_TYPE = "UPDATE_TYPE";
const UPDATE_WT = "UPDATE_WT";
const UPDATE_CWT_DEPTH = "UPDATE_CWT_DEPTH";
const UPDATE_CWT_TO_WALL = "UPDATE_CWT_TO_WALL";
const UPDATE_WALL_TO_SHAFT_DOOR = "UPDATE_WALL_TO_SHAFT_DOOR";
const UPDATE_GUIDE = "UPDATE_GUIDE";
const UPDATE_CABIN = "UPDATE_CABIN";
const UPDATE_MODAL = "UPDATE_MODAL";


const initialState = {
  modal: false,
  walkThrough: false,
  width: 0,
  depth: 0,
  head: 0,
  pit: 0,
  height: 0,
  speed: 0,
  load: 0,
  type: "mr",
  wallToShaftDood: 60,
  cwtToWall: 50,
  cwtDepth: 180,
  guide: 75,
  cabin: {
    width: 0,
    depth: 0,
    doorWidth: 0,
    doorType: "C2",
  },
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SHAFT: {
      return {
        ...state,
        [action.name]: Number(action.value),
      };
    }
    case UPDATE_TYPE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case UPDATE_WT: {
      return {
        ...state,
        walkThrough: !state.walkThrough,
      };
    }
    case UPDATE_MODAL: {
      return {
        ...state,
        modal: !state.modal,
      };
    }
    case UPDATE_CWT_TO_WALL: {
      return {
        ...state,
        [action.name]: state.cwtToWall === 50 ? 25 : 50,
      };
    }
    case UPDATE_CWT_DEPTH: {
      return {
        ...state,
        [action.name]: state.cwtDepth === 130 ? 180 : 130,
      };
    }
    case UPDATE_WALL_TO_SHAFT_DOOR: {
      return {
        ...state,
        [action.name]: state.wallToShaftDood === 60 ? 35 : 60,
      };
    }
    case UPDATE_GUIDE: {
      return {
        ...state,
        [action.name]: state.guide === 75 ? 62 : 75,
      };
    }
    case UPDATE_CABIN: {
      return {
        ...state, cabin: action.cabin
      };
    }
    default:
      return state;
  }
};

export function updateShaft(name, value) {
  return { type: UPDATE_SHAFT, name, value };
}
export function updateType(name, value) {
  return { type: UPDATE_TYPE, name, value };
}
export function updateWT() {
  return { type: UPDATE_WT };
}
export function updateCWTdepth(name) {
  return { type: UPDATE_CWT_DEPTH, name };
}
export function updateCWTtoWall(name) {
  return { type: UPDATE_CWT_TO_WALL, name };
}
export function updateWallToShaftDoor(name) {
  return { type: UPDATE_WALL_TO_SHAFT_DOOR, name };
}
export function updateGuide(name) {
  return { type: UPDATE_GUIDE, name };
}
export function updateCabin(cabin) {
  return { type: UPDATE_CABIN, cabin };
}
export function updateModal() {
  return { type: UPDATE_MODAL };
}
