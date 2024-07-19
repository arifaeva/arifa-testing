import Image from "next/image";

import { Header } from "@/components/shared/header";

export default function EventSinglePage() {
  return (
    <div className="bg-blue-900 h-screen flex flex-col justify-between">
      <Header />
      <div className="bg-white w-[800px] m-auto p-8 space-y-12 rounded-lg [box-shadow:5px_5px_orange] text-blue-900">
        <div className="flex justify-items-start items-center gap-6">
          <Image
            className="bg-cover"
            src={`/assets/auth-1.jpg`}
            width={250}
            height={50}
            alt="Picture for login page"
          />
          <div className="space-y-3">
            <h2 className="font-bold">Bekerja bersama Spongebob</h2>
            <div className="flex justify-between gap-3">
              <div className="w-20 font-semibold">
                <h4>Held by</h4>
                <h4>Date & Time</h4>
                <h4>Workplace</h4>
                <h4>Address</h4>
              </div>
              <div className="flex flex-col w-96">
                <h4>: Spongebob Squarepants</h4>
                <h4>: 21 Juli 2024 10:00 WIB</h4>
                <h4>: Krusty Krab</h4>
                <h4>
                  : Seberang Chum Bucket Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Laboriosam vitae ipsa reiciendis ipsam.
                  Consectetur ullam accusamus, corporis ducimus, laboriosam
                  distinctio veritatis natus dolorum quam alias repudiandae,
                  laudantium iste blanditiis placeat?
                </h4>
              </div>
            </div>
          </div>
        </div>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          sodales nisi non urna pharetra scelerisque. Praesent lobortis ante a
          arcu fringilla, vel eleifend lectus finibus. Nullam bibendum eu nunc
          nec malesuada. Pellentesque porta condimentum neque ut tincidunt.
          Praesent suscipit fermentum vestibulum. Morbi dignissim rhoncus ante
          ac tempor. Quisque posuere massa arcu, sit amet placerat massa
          consequat at. In placerat ante nulla, ut viverra turpis tincidunt sit
          amet. Sed eu mattis nibh. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Praesent porttitor vulputate efficitur. Donec nec
          neque metus. Curabitur quis cursus risus, lacinia suscipit risus.
          Nulla ultrices felis vel velit cursus finibus Curabitur a aliquam
          libero, rutrum imperdiet erat. Nullam vehicula erat non lacinia
          varius. Donec tempus consectetur felis, eget porttitor sapien pretium
          ut. Donec nisi nisi, porttitor ac fermentum nec, tempus in dui. Cras
          consectetur interdum mi, ut luctus mauris lobortis sit amet. Nulla
          ultrices ex eget arcu condimentum, non commodo tellus fringilla.
          Nullam dignissim pretium neque, vitae dignissim dui egestas vitae. Sed
          at nibh pretium, varius nisi non, ornare nisl. Curabitur velit eros,
          pellentesque a nunc in, rhoncus vehicula quam. Mauris viverra nibh
          leo, sit amet ultrices sapien tempus in. Ut eu ornare massa.
          Suspendisse potenti. Sed efficitur ipsum vel vehicula malesuada.
          Nullam at quam justo. Nunc eu leo odio. Morbi pretium eros sem, ut
          congue lectus commodo vitae. Mauris consequat ullamcorper dignissim.
          Aliquam eu orci maximus, facilisis tellus interdum, condimentum nulla.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Pellentesque vestibulum risus lacus. Quisque
          enim diam, aliquet nec bibendum ac, ultricies ac ligula. Duis sapien
          risus, tempor sed odio sit amet, blandit rhoncus sapien.
        </h4>
      </div>
      <div></div>
    </div>
  );
}
