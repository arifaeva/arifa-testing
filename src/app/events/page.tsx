import { Header } from "@/components/shared/header";
import { API_URL } from "@/config/apiUrl";
import { IEvent } from "@/types/entity";

import { EventCard } from "./components/event.card";
// import { Textarea } from "@/components/stories/text-area";
import EventForm from "./components/event.form";

export default function EventPage() {
  const events: IEvent[] = [
    {
      _id: "1",
      title: "Bekerja bersama Spoengebob",
      datetime: "21 Juli 2024 10:00 WIB",
      workplace: "Krusty Krab",
      address: "Seberang Chum Bucket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales nisi non urna pharetra scelerisque. Praesent lobortis ante a arcu fringilla, vel eleifend lectus finibus. Nullam bibendum eu nunc nec malesuada. Pellentesque porta condimentum neque ut tincidunt. Praesent suscipit fermentum vestibulum. Morbi dignissim rhoncus ante ac tempor. Quisque posuere massa arcu, sit amet placerat massa consequat at. In placerat ante nulla, ut viverra turpis tincidunt sit amet. Sed eu mattis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor vulputate efficitur. Donec nec neque metus. Curabitur quis cursus risus, lacinia suscipit risus. Nulla ultrices felis vel velit cursus finibus Curabitur a aliquam libero, rutrum imperdiet erat. Nullam vehicula erat non lacinia varius. Donec tempus consectetur felis, eget porttitor sapien pretium ut. Donec nisi nisi, porttitor ac fermentum nec, tempus in dui. Cras consectetur interdum mi, ut luctus mauris lobortis sit amet. Nulla ultrices ex eget arcu condimentum, non commodo tellus fringilla. Nullam dignissim pretium neque, vitae dignissim dui egestas vitae. Sed at nibh pretium, varius nisi non, ornare nisl. Curabitur velit eros, pellentesque a nunc in, rhoncus vehicula quam. Mauris viverra nibh leo, sit amet ultrices sapien tempus in. Ut eu ornare massa. Suspendisse potenti. Sed efficitur ipsum vel vehicula malesuada. Nullam at quam justo. Nunc eu leo odio. Morbi pretium eros sem, ut congue lectus commodo vitae. Mauris consequat ullamcorper dignissim. Aliquam eu orci maximus, facilisis tellus interdum, condimentum nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vestibulum risus lacus. Quisque enim diam, aliquet nec bibendum ac, ultricies ac ligula. Duis sapien risus, tempor sed odio sit amet, blandit rhoncus sapien.",
      user: "Spongebob Squarepants",
    },
    {
      _id: "2",
      title: "WFC with Hokage",
      datetime: "21 November 2038 10:00 WIB",
      workplace: "Ichiraku Ramen",
      address: "Di pinggir jalan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales nisi non urna pharetra scelerisque. Praesent lobortis ante a arcu fringilla, vel eleifend lectus finibus. Nullam bibendum eu nunc nec malesuada. Pellentesque porta condimentum neque ut tincidunt. Praesent suscipit fermentum vestibulum. Morbi dignissim rhoncus ante ac tempor. Quisque posuere massa arcu, sit amet placerat massa consequat at. In placerat ante nulla, ut viverra turpis tincidunt sit amet. Sed eu mattis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor vulputate efficitur. Donec nec neque metus. Curabitur quis cursus risus, lacinia suscipit risus. Nulla ultrices felis vel velit cursus finibus Curabitur a aliquam libero, rutrum imperdiet erat. Nullam vehicula erat non lacinia varius. Donec tempus consectetur felis, eget porttitor sapien pretium ut. Donec nisi nisi, porttitor ac fermentum nec, tempus in dui. Cras consectetur interdum mi, ut luctus mauris lobortis sit amet. Nulla ultrices ex eget arcu condimentum, non commodo tellus fringilla. Nullam dignissim pretium neque, vitae dignissim dui egestas vitae. Sed at nibh pretium, varius nisi non, ornare nisl. Curabitur velit eros, pellentesque a nunc in, rhoncus vehicula quam. Mauris viverra nibh leo, sit amet ultrices sapien tempus in. Ut eu ornare massa. Suspendisse potenti. Sed efficitur ipsum vel vehicula malesuada. Nullam at quam justo. Nunc eu leo odio. Morbi pretium eros sem, ut congue lectus commodo vitae. Mauris consequat ullamcorper dignissim. Aliquam eu orci maximus, facilisis tellus interdum, condimentum nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vestibulum risus lacus. Quisque enim diam, aliquet nec bibendum ac, ultricies ac ligula. Duis sapien risus, tempor sed odio sit amet, blandit rhoncus sapien.",
      user: "Spongebob Squarepants",
    },
    {
      _id: "3",
      title: "Kerja bareng Hoshina Fukutaichou",
      datetime: "21 November 2045 15:00 WIB",
      workplace: "Pecel Lele bu Astuti",
      address: "Jalan Ikan Paus",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "Hoshina Soshiro",
    },
  ];

  // const res = await fetch(`${API_URL}/events`);
  // const events = (await res.json()) as IEvent[];

  return (
    <div className="bg-[#9ccb9a]">
      <Header />
      <div className="flex space-x-4 p-8 mx-40">
        {/* Section Make Event */}
        <div className="w-[20%] bg-[#fef4ce] p-3 space-y-5 rounded-md border-4 border-[#2e2d33] flex flex-col justify-between h-fit">
          <h1 className="text-center text-[#2e2d33]">Make Event</h1>

          {/* Form Buat Event */}
          <EventForm />
        </div>

        {/* Section Event Catalog */}
        <div className="w-[80%] bg-[#fef4ce] flex flex-col min-h-screen rounded-md space-y-4 p-4 border-4 border-[#2e2d33]">
          <section className="text-[#2e2d33] space-y-4">
            <h1 className="text-center">Upcoming Events</h1>
            <p className="text-center">
              Bored working alone? Join any upcoming event to work together!
            </p>
          </section>
          <div className="grid grid-cols-3 gap-4 p-3">
            {events.map((event) => {
              return <EventCard key={event._id} event={event} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
