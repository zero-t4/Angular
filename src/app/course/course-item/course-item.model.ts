export interface ICourseItemModel {
  id: number;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
}

export interface IAuthorModel {
  id: number,
  firstName: string,
  lastName: string,
}

export interface ICourseItemBackEndModel {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: string;
  authors: IAuthorModel[];
  length: number;
}


export interface ICourseItemUpdateModel {
  id: number;
  title?: string;
  creationDate?: string;
  duration?: number;
  description?: string;
}
