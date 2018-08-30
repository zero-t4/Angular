export enum AuthActions {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
}

export class AuthActionSuccess {
  public readonly type = AuthActions.LOGIN_SUCCESS;

  constructor(private payload: {token: string}) {}
}

export class AuthActionFail {
  public readonly type = AuthActions.LOGIN_FAIL;
}
