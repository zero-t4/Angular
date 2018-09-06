export const UPDATE_COURSES = 'UPDATE_COURSES';
export const RESET_COURSES = 'RESET_COURSES';
export const SET_COURSE_DATA = 'SET_COURSE_DATA';

const initialState = {
  courses: [],
  currentCourse: null,
  currentCourseData: {},
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

    case SET_COURSE_DATA:
      return {
        ...state,
        currentCourse: action.payload.courseName,
        currentCourseData: action.payload.courseData,
      };

    default:
      return state;
  }
}
