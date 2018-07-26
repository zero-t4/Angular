import {ICourseItemModel} from '../course/course-item/course-item.model';

const courseItems: ICourseItemModel[] = [
  {
    id: 0,
    title: 'First Title',
    creationDate: new Date(new Date().setDate(new Date().getDate() + 1)).toDateString(),
    duration: 60,
    description: 'some description',
  },
  {
    id: 1,
    title: 'Second Title',
    creationDate: new Date(new Date().setDate(new Date().getDate() - 31)).toDateString(),
    duration: 20,
    description: 'Cool description',
  },
  {
    id: 2,
    title: 'Third Title',
    creationDate: new Date(new Date().setDate(new Date().getDate() - 1)).toDateString(),
    duration: 44,
    description: 'Awesome description',
  },
];

export default courseItems;
