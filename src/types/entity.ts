export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
}

export interface IEvent {
  _id: string;
  title: string;
  dateTime: string;
  description: string;
  userId: {
    _id: string;
    name: string;
    avatarUrl: string;
  };
  workplaceId: {
    _id: string;
    name: string;
    address: string;
  };
}

export interface IWorkplace {
  _id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  foodPrice: string;
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
