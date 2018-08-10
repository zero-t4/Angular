export interface BackendOkResponse {
  status: string;
}


export interface BackendBadResponse{
  error: string;
  params: any;
}

export type BackendResponse = BackendOkResponse | BackendBadResponse;

