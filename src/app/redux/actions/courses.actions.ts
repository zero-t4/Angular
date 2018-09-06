export enum CoursesActions {
  UPDATE_COURSES = 'UPDATE_COURSES',
  RESET_COURSES = 'RESET_COURSES',
}

export class CoursesActionUpdate {
  public readonly type = CoursesActions.UPDATE_COURSES;

  constructor(private payload: {courses: any}) {}
}

export class CoursesActionReset {
  public readonly type = CoursesActions.RESET_COURSES;
}
