export const UPDATE_COURSES = 'UPDATE_COURSES';
export const RESET_COURSES = 'RESET_COURSES';

const initialState = {
  courses: [],
};

export function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_COURSES:
      return {
        ...state,
        courses: [
          ...action.payload.courses,
        ],
      };

    case RESET_COURSES:
      return initialState;

    default:
      return state;
  }
}
