export interface ICourseItemModel {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}


export interface ICourseItemUpdateModel {
  id: number;
  title?: string;
  creationDate?: string;
  duration?: number;
  description?: string;
}
