// import Avatar from "boring-avatars";

import { HeaderAdmin } from "@/components/shared/header.admin";

import { DeleteWorkplace } from "./components/delete.button";
import { PublishWorkplace } from "./components/publish.button";
// import { API_URL } from "@/config/apiUrl";
// import { IReview, IWorkplace } from "@/types/entity";
import { FormReview } from "./components/review.form";
import { Slider } from "./components/slider";
import { VerifyWorkplace } from "./components/verify.button";

// Ini versi kalau udah ada API

// export default async function SinglePage({
//   params,
// }: {
//   params: { workplaceId: string };
// }) {
//   const res_workplace = await fetch(`${API_URL}/workplaces/${params}`);
//   const workplace = (await res_workplace.json()) as IWorkplace;

//   const res_reviews = await fetch(`${API_URL}/workplaces/${params}/reviews`);
//   const reviews = (await res_reviews.json()) as IReview[];

//   return (
//     <div className="bg-[#9ccb9a]">
//       <Header />
//       <div className="flex flex-col space-y-5 p-6">
//         <Slider files={workplace.file}/>
//         <div className="bg-[#fef4ce] p-5 rounded-lg space-y-4 border-4 border-[#2e2d33]">
//           <div className="flex items-center text-[#2e2d33]">
//             <div className="h-56 w-[80%] p-4">
//               <h1 className="text-6xl">{workplace.name}</h1>
//               <h2 className="text-lg">{workplace.city}</h2>
//               <h2 className="text-lg">{workplace.address}</h2>
//               <div className="flex justify-start space-x-2">
//                 <h2 className="text-lg font-bold">Price range:</h2>
//                 <h2 className="font-normal text-lg">{workplace.foodprice}</h2>
//               </div>
//               <h4>{workplace.description}</h4>
//             </div>
//             <div className="bg-[#e75c45] border-4 border-[#2e2d33] h-56 w-[20%] flex flex-col items-center justify-center space-y-4 rounded-md">
//               <div className="flex flex-col items-center justify-center">
//                 <h3>Overall rating:</h3>
//                 <h1>4.5/5</h1>
//               </div>
//               <div className="flex justify-items-start space-x-3">
//                 <div>
//                   <h3 className="font-normal">Internet</h3>
//                   <h3 className="font-normal">Electricity</h3>
//                 </div>
//                 <div>
//                   <h3>: 3/5</h3>
//                   <h3>: 3.6/5</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center justify-between text-[#2e2d33]">
//             <div className="bg-[#fef4ce] rounded-lg space-y-3 p-4 w-[700px]">
//               <h1>Reviews</h1>
//               {reviews.map((review) => {
//                 return (
//                   <div
//                     key={review._id}
//                     className="flex justify-items-start items-center space-x-3"
//                   >
//                     <Avatar
//                       size={40}
//                       name={review.userId}
//                       variant="beam"
//                       colors={[
//                         "#2E2D33",
//                         "#E75C45",
//                         "#C1BCBC",
//                         "#FEF4CE",
//                         "#9CCB9A",
//                       ]}
//                     />
//                     <div>
//                       <h3>{review.userId</h3>
//                       <h4>{review.content}r</h4>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//             <FormReview workplaceId={params.workplaceId} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default async function SinglePage({
  params,
}: {
  params: { workplaceId: string };
}) {
  return (
    <div className="bg-[#9ccb9a]">
      <HeaderAdmin />
      <div className="flex flex-col space-y-5 p-6">
        <Slider />
        <div className="bg-[#fef4ce] p-5 rounded-lg space-y-4 border-4 border-[#2e2d33]">
          <div className="flex space-x-5">
            <VerifyWorkplace workplaceId={params.workplaceId} />
            <PublishWorkplace workplaceId={params.workplaceId} />
            <DeleteWorkplace workplaceId={params.workplaceId} />
          </div>
          <div className="flex items-center text-[#2e2d33]">
            <div className="h-56 w-[75%] p-4">
              <h1 className="text-6xl">Krusty Krab</h1>
              <h2 className="text-lg">Gunung Kidul</h2>
              <h2 className="text-lg">
                Jl. Kelinci Merah No. 21 RT 02/RW 04 samping patung ular kobra
              </h2>
              <div className="flex justify-start space-x-2">
                <h2 className="text-lg font-bold">Price range:</h2>
                <h2 className="font-normal text-lg">20k - 30k</h2>
              </div>
              <h4>
                Warung bawah laut tetapi tetap menyediakan menu pecel lele. Koki
                penuh semangat selalu. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sequi, impedit commodi. Porro minus corrupti
                excepturi officia, commodi temporibus ad, sequi assumenda
                molestiae laudantium accusamus dignissimos laborum natus eius,
                deleniti repudiandae! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sunt, quis quaerat. Possimus totam nemo sequi
                optio aliquid, deserunt praesentium incidunt repudiandae,
                sapiente, dolores voluptatem ipsum aperiam natus accusamus illum
                commodi.
              </h4>
            </div>
            <div className="bg-[#e75c45] border-4 border-[#2e2d33] h-56 w-[25%] flex flex-col items-center justify-center space-y-4 rounded-md">
              <div className="flex flex-col items-center justify-center">
                <h3>Overall rating:</h3>
                <h1>4.5/5</h1>
              </div>
              <div className="flex justify-items-start space-x-3">
                <div>
                  <h3 className="font-normal">Internet</h3>
                  <h3 className="font-normal">Electricity</h3>
                </div>
                <div>
                  <h3>: 3/5</h3>
                  <h3>: 3.6/5</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[#2e2d33]">
            <div className="bg-[#fef4ce] rounded-lg space-y-3 p-4 w-[700px]">
              <h1>Reviews</h1>
              <div className="flex justify-items-start items-center space-x-3">
                <div className="rounded-md bg-[#e75c45] p-4">A</div>
                <div>
                  <h3>Name reviewer</h3>
                  <h4>Comment from reviewer</h4>
                </div>
              </div>
              <div className="flex justify-items-start items-center space-x-3">
                <div className="rounded-md bg-[#e75c45] p-4">A</div>
                <div>
                  <h3>Name reviewer</h3>
                  <h4>Comment from reviewer</h4>
                </div>
              </div>
              <div className="flex justify-items-start items-center space-x-3">
                <div className="rounded-md bg-[#e75c45] p-4">A</div>
                <div>
                  <h3>Name reviewer</h3>
                  <h4>Comment from reviewer</h4>
                </div>
              </div>
            </div>
            <FormReview workplaceId={params.workplaceId} />
          </div>
        </div>
      </div>
    </div>
  );
}
