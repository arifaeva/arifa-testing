export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
}

export interface IEvent {
  _id: string;
  title: string;
  datetime: string;
  workplace: string;
  address: string;
  description: string;
  user: string;
}

export interface IWorkplace {
  _id?: string;
  name?: string;
  description?: string;
  address?: string;
  city?: string;
  foodprice?: string;
  file?: string | FileList | null;
  authorId?: string;
  isVerified?: boolean;
  isPublished?: boolean;
}

export interface IReview {
  _id: string;
  content: string;
  foodPrice: string;
  internet: number;
  electricity: number;
}
