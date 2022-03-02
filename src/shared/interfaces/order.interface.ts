export interface IOrder {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  lessons: IOrderLesson[];
}

export interface IOrderLesson {
  id: string;
  quantity: number;
}
