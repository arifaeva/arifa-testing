export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
}

export interface IEvent {
  id: string;
  title: string;
  datetime: string;
  workplace: string;
  address: string;
  description: string;
  user: string;
}

export interface IWorkplace {
  id: string;
  name: string;
  description?: string;
  address: string;
  city?: string;
  images?: string[];
  authorId?: string;
  isVerified?: boolean;
  isPublished?: boolean;
}

export interface IReview {
  id: string;
  content: string;
  foodPrice: string;
  internet: number;
  electricity: number;
}
