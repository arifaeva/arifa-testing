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
  userId?: string;
  workplaceId?: string;
}

export interface IWorkplace {
  _id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  foodprice: string;
  file: string;
  authorId: string;
  isVerified: boolean;
  isPublished: boolean;
}

export interface IReview {
  _id: string;
  content: string;
  internet: number;
  electricity: number;
  userId: {
    _id: string;
    name: string;
    avatarUrl: string;
  };
}
