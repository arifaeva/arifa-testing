import { Slider } from "@/components/shared/slider";

export default function Page() {
  return (
    <div>
      <Slider />
      <div className="flex items-center">
        <div className="bg-indigo-400 h-56 w-[60%]">
          <h1>Krusty Krab</h1>
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
            excepturi officia, commodi temporibus ad, sequi assumenda molestiae
            laudantium accusamus dignissimos laborum natus eius, deleniti
            repudiandae!
          </h4>
        </div>
        <div className="bg-orange-300 h-56 w-[40%]">
          Buat informasi rating workplace
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-rose-400 h-56 w-[60%]">Buat review orang orang</div>
        <div className="bg-sky-300 h-56 w-[40%]">Buat form review</div>
      </div>
    </div>
  );
}
