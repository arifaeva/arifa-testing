import Avatar from "boring-avatars";

interface IReview {
  _id?: string;
  content?: string;
  internet?: number;
  electricity?: number;
}

export const ReviewCard = ({ review }: { review: IReview }) => {
  return (
    <div className="flex justify-items-start items-center space-x-3">
      <Avatar
        size={40}
        name="username"
        variant="beam"
        colors={["#2E2D33", "#E75C45", "#C1BCBC", "#FEF4CE", "#9CCB9A"]}
      />
      <div>
        <h3>Name reviewer</h3>
        <h4>{review.content}</h4>
      </div>
    </div>
  );
};
