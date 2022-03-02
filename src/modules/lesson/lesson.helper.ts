import { ASCENDING_ORDER } from '@shared/constants/lesson.const';
import {
  ILesson,
  ISortLessonsOption,
} from '@shared/interfaces/lesson.interface';

export const sortLessons = (
  arr: ILesson[],
  key: string,
  options: { order: ISortLessonsOption['order'] },
) => {
  const asc = (a: any, b: any) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  };

  const desc = (a: any, b: any) => {
    if (a[key] > b[key]) return -1;
    if (a[key] < b[key]) return 1;
    return 0;
  };

  return options.order === ASCENDING_ORDER ? arr.sort(asc) : arr.sort(desc);
};
