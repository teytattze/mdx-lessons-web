import { ILesson } from './lesson.interface';

export interface ICartLesson extends ILesson {
  quantity: number;
}
