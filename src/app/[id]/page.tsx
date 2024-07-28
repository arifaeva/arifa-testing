// Ini versi kalau udah ada API

import Avatar from "boring-avatars";
import Image from "next/image";

// import { Header } from "@/components/shared/header";
import { API_URL } from "@/config/apiUrl";
import { IReview, IWorkplace } from "@/types/entity";

import { RatingBox } from "./components/rating.box";
import { FormReview } from "./components/review.form";

export default async function SinglePage({
  params,
}: {
  params: { id: string };
}) {
  const res_workplace = await fetch(`${API_URL}/workplaces/${params.id}`);
  const workplace = (await res_workplace.json()) as IWorkplace;

  const res_reviews = await fetch(`${API_URL}/workplaces/${params.id}/reviews`);
  const { data: reviews } = (await res_reviews.json()) as { data: IReview[] };

  return (
    <div className="bg-[#9ccb9a]">
      {/* <Header /> */}
      <div className="flex flex-col space-y-5 p-6">
        <div className="bg-[#fef4ce] p-5 rounded-lg space-y-4 border-4 border-[#2e2d33] mx-60">
          <Image
            src={`${API_URL}/public/${workplace.file}`}
            alt={workplace.name}
            width={800}
            height={600}
            className="w-full h-[800px] m-auto object-cover md:rounded-lg"
          />
          <div className="flex items-center text-[#2e2d33]">
            <div className="w-[75%] p-4">
              <h1 className="text-6xl">{workplace.name}</h1>
              <h2 className="text-lg">{workplace.city}</h2>
              <h2 className="text-lg">{workplace.address}</h2>
              <div className="flex justify-start space-x-2">
                <h2 className="text-lg font-bold">Price range:</h2>
                <h2 className="font-normal text-lg">{workplace.foodPrice}</h2>
              </div>
              <h4>{workplace.description}</h4>
            </div>
            <RatingBox reviews={reviews} />
          </div>
          <div className="flex justify-between text-[#2e2d33]">
            <div className="bg-[#fef4ce] rounded-lg space-y-3 p-4 w-[700px]">
              <h1>Reviews</h1>
              {reviews.map((review) => {
                return (
                  <div
                    key={review.userId._id}
                    className="flex justify-items-start items-center space-x-3"
                  >
                    <Avatar
                      size={40}
                      name={review.userId.name}
                      variant="beam"
                      colors={[
                        "#2E2D33",
                        "#E75C45",
                        "#C1BCBC",
                        "#FEF4CE",
                        "#9CCB9A",
                      ]}
                    />
                    <div>
                      <h3>{review.userId.name}</h3>
                      <h4>{review.content}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
            <FormReview workplaceId={params.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
