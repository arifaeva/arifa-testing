import { Slider } from "@/components/shared/slider";

export default function Page() {
  return (
    <div>
      <Slider />
      <div className="flex items-center">
        <div className="bg-indigo-400 h-56 w-[60%]">
          Buat informasi workplace
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
