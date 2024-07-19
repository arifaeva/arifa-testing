"use client";

import { EventCard } from "@/components/shared/eventCard";
import { Header } from "@/components/shared/header";
import { Button } from "@/components/stories/button";
import { Input } from "@/components/stories/input";
// import { Textarea } from "@/components/stories/text-area";

export default function EventPage() {
  const events = [
    {
      id: "1",
      title: "Bekerja bersama Spoengebob",
      datetime: "21 Juli 2024 10:00 WIB",
      workplace: "Krusty Krab",
      address: "Seberang Chum Bucket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales nisi non urna pharetra scelerisque. Praesent lobortis ante a arcu fringilla, vel eleifend lectus finibus. Nullam bibendum eu nunc nec malesuada. Pellentesque porta condimentum neque ut tincidunt. Praesent suscipit fermentum vestibulum. Morbi dignissim rhoncus ante ac tempor. Quisque posuere massa arcu, sit amet placerat massa consequat at. In placerat ante nulla, ut viverra turpis tincidunt sit amet. Sed eu mattis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor vulputate efficitur. Donec nec neque metus. Curabitur quis cursus risus, lacinia suscipit risus. Nulla ultrices felis vel velit cursus finibus Curabitur a aliquam libero, rutrum imperdiet erat. Nullam vehicula erat non lacinia varius. Donec tempus consectetur felis, eget porttitor sapien pretium ut. Donec nisi nisi, porttitor ac fermentum nec, tempus in dui. Cras consectetur interdum mi, ut luctus mauris lobortis sit amet. Nulla ultrices ex eget arcu condimentum, non commodo tellus fringilla. Nullam dignissim pretium neque, vitae dignissim dui egestas vitae. Sed at nibh pretium, varius nisi non, ornare nisl. Curabitur velit eros, pellentesque a nunc in, rhoncus vehicula quam. Mauris viverra nibh leo, sit amet ultrices sapien tempus in. Ut eu ornare massa. Suspendisse potenti. Sed efficitur ipsum vel vehicula malesuada. Nullam at quam justo. Nunc eu leo odio. Morbi pretium eros sem, ut congue lectus commodo vitae. Mauris consequat ullamcorper dignissim. Aliquam eu orci maximus, facilisis tellus interdum, condimentum nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vestibulum risus lacus. Quisque enim diam, aliquet nec bibendum ac, ultricies ac ligula. Duis sapien risus, tempor sed odio sit amet, blandit rhoncus sapien.",
      user: "Spongebob Squarepants",
    },
    {
      id: "2",
      title: "WFC with Hokage",
      datetime: "21 November 2038 10:00 WIB",
      workplace: "Ichiraku Ramen",
      address: "Di pinggir jalan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales nisi non urna pharetra scelerisque. Praesent lobortis ante a arcu fringilla, vel eleifend lectus finibus. Nullam bibendum eu nunc nec malesuada. Pellentesque porta condimentum neque ut tincidunt. Praesent suscipit fermentum vestibulum. Morbi dignissim rhoncus ante ac tempor. Quisque posuere massa arcu, sit amet placerat massa consequat at. In placerat ante nulla, ut viverra turpis tincidunt sit amet. Sed eu mattis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor vulputate efficitur. Donec nec neque metus. Curabitur quis cursus risus, lacinia suscipit risus. Nulla ultrices felis vel velit cursus finibus Curabitur a aliquam libero, rutrum imperdiet erat. Nullam vehicula erat non lacinia varius. Donec tempus consectetur felis, eget porttitor sapien pretium ut. Donec nisi nisi, porttitor ac fermentum nec, tempus in dui. Cras consectetur interdum mi, ut luctus mauris lobortis sit amet. Nulla ultrices ex eget arcu condimentum, non commodo tellus fringilla. Nullam dignissim pretium neque, vitae dignissim dui egestas vitae. Sed at nibh pretium, varius nisi non, ornare nisl. Curabitur velit eros, pellentesque a nunc in, rhoncus vehicula quam. Mauris viverra nibh leo, sit amet ultrices sapien tempus in. Ut eu ornare massa. Suspendisse potenti. Sed efficitur ipsum vel vehicula malesuada. Nullam at quam justo. Nunc eu leo odio. Morbi pretium eros sem, ut congue lectus commodo vitae. Mauris consequat ullamcorper dignissim. Aliquam eu orci maximus, facilisis tellus interdum, condimentum nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vestibulum risus lacus. Quisque enim diam, aliquet nec bibendum ac, ultricies ac ligula. Duis sapien risus, tempor sed odio sit amet, blandit rhoncus sapien.",
      user: "Spongebob Squarepants",
    },
    {
      id: "3",
      title: "Kerja bareng Hoshina Fukutaichou",
      datetime: "21 November 2045 15:00 WIB",
      workplace: "Pecel Lele bu Astuti",
      address: "Jalan Ikan Paus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales nisi non urna pharetra scelerisque. Praesent lobortis ante a arcu fringilla, vel eleifend lectus finibus. Nullam bibendum eu nunc nec malesuada. Pellentesque porta condimentum neque ut tincidunt. Praesent suscipit fermentum vestibulum. Morbi dignissim rhoncus ante ac tempor. Quisque posuere massa arcu, sit amet placerat massa consequat at. In placerat ante nulla, ut viverra turpis tincidunt sit amet. Sed eu mattis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor vulputate efficitur. Donec nec neque metus. Curabitur quis cursus risus, lacinia suscipit risus. Nulla ultrices felis vel velit cursus finibus Curabitur a aliquam libero, rutrum imperdiet erat. Nullam vehicula erat non lacinia varius. Donec tempus consectetur felis, eget porttitor sapien pretium ut. Donec nisi nisi, porttitor ac fermentum nec, tempus in dui. Cras consectetur interdum mi, ut luctus mauris lobortis sit amet. Nulla ultrices ex eget arcu condimentum, non commodo tellus fringilla. Nullam dignissim pretium neque, vitae dignissim dui egestas vitae. Sed at nibh pretium, varius nisi non, ornare nisl. Curabitur velit eros, pellentesque a nunc in, rhoncus vehicula quam. Mauris viverra nibh leo, sit amet ultrices sapien tempus in. Ut eu ornare massa. Suspendisse potenti. Sed efficitur ipsum vel vehicula malesuada. Nullam at quam justo. Nunc eu leo odio. Morbi pretium eros sem, ut congue lectus commodo vitae. Mauris consequat ullamcorper dignissim. Aliquam eu orci maximus, facilisis tellus interdum, condimentum nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vestibulum risus lacus. Quisque enim diam, aliquet nec bibendum ac, ultricies ac ligula. Duis sapien risus, tempor sed odio sit amet, blandit rhoncus sapien.",
      user: "Hoshina Soshiro",
    },
  ];

  return (
    <div className="bg-blue-900">
      <Header />
      <div className="flex space-x-8 p-8 w-[1500px] m-auto">
        {/* Section Event */}
        <div className="w-[20%] bg-white p-4 space-y-5 rounded-md [box-shadow:5px_5px_orange] flex flex-col justify-start h-fit">
          <h1 className="text-center text-blue-900">Make Event</h1>

          {/* Form Buat Event */}
          <form className="space-y-2 bg-blue-900 p-3 rounded-md">
            <h3 className="text-white text-center">
              Arrange and announce your own event!
            </h3>
            <Input
              name="title"
              placeholder="Event Title"
              type="text"
              required
            />
            {/* <Textarea name="description" placeholder="Description" required /> */}
            <Input
              name="description"
              placeholder="Event Description"
              type="text"
              required
            />
            <Input
              name="date&time"
              placeholder="Date & Time"
              type="datetime-local"
              required
            />
            <Input
              name="event-workplace"
              placeholder="Workplace name"
              type="text"
              required
            />
            <Input
              className="line-clamp-1"
              name="event-address"
              placeholder="Workplace address"
              type="text"
              required
            />
            <Button variant="tertiary" size="sm" className="w-full">
              Make Event!
            </Button>
          </form>
        </div>

        {/* Section Event Catalog */}
        <div className="w-[80%] bg-white flex flex-col min-h-screen rounded-md space-y-4 p-4 [box-shadow:5px_5px_orange]">
          <section className="text-blue-900">
            <h1 className="text-center">Upcoming Events</h1>
            <p className="text-center">
              Bored working alone? Join any upcoming event to work together!
            </p>
          </section>
          <div className="grid grid-cols-3 gap-4 p-3">
            {events.map((event) => {
              return <EventCard key={event.id} event={event} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
