import { Header } from "@/components/shared/header";
// import { SliderComp } from "@/components/shared/slider";
import { Slider } from "@/components/shared/slider";
import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";

export default function SinglePage() {
  return (
    <div className="bg-[#9ccb9a]">
      <Header />
      <div className="flex flex-col space-y-5 p-6">
        <Slider />
        <div className="bg-[#fef4ce] p-5 rounded-lg space-y-4 border-4 border-[#2e2d33]">
          <div className="flex items-center text-[#2e2d33]">
            <div className="h-56 w-[80%] p-4">
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
            <div className="bg-[#e75c45] border-4 border-[#2e2d33] h-56 w-[20%] flex flex-col items-center justify-center space-y-4 rounded-md">
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
            <div className="bg-[#9ccb9a] rounded-md w-[20%] p-4 space-y-2 border-4 border-[#2e2d33]">
              <h1 className="text-2xl text-center text-[#2e2d33]">
                Share your review!
              </h1>
              <form className="space-y-3">
                <Input
                  name="content"
                  placeholder="Your review on this workplace"
                  type="text"
                  required
                />
                <Input
                  name="food price"
                  placeholder="Food Price"
                  type="text"
                  required
                />
                <Input
                  name="internet rating"
                  placeholder="Internet Rating"
                  type="number"
                  required
                />
                <Input
                  name="electricity rating"
                  placeholder="Electricity Rating"
                  type="number"
                  required
                />
                <Button variant="tertiary" size="sm" className="w-full">
                  Add Review
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
