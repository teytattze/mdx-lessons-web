export interface ILesson {
  id: string;
  subject: string;
  location: string;
  isOnlineClass: boolean;
  price: number;
  slot: number;
  imageUrl: string;
}

export interface IUpdateLessonPayload {
  id: string;
  subject?: string;
  location?: string;
  isOnlineClass?: boolean;
  price?: number;
  slot?: number;
  imageUrl?: string;
}

export interface ISortLessonsOption {
  title: string;
  value: string;
  order: 'ASC' | 'DESC';
  field: string;
}
