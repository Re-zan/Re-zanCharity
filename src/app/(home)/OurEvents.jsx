"use client";
import React from "react";
import OurSingleEvents from "./OurSingleEvents";
import { pacifico } from "@/utils/fonts";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurEvents = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const upcomingEvents = [
    {
      _id: "event1",
      title: "Charity Gala Night",
      short_title:
        "Elegant Gala Fundraising Evening for Underprivileged Children",
      description:
        "Join us for an elegant evening to raise funds for underprivileged children. Enjoy fine dining, entertainment, and a chance to make a meaningful difference in the lives of kids in need. Your presence will help us create brighter futures for these young souls.",
      image:
        "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/952/cached.offlinehbpl.hbpl.co.uk/news/NST/Fundraising-Cake-sale-2016112103214260.jpg",
      date: "2023-10-15",
      location: "Grand Ballroom, XYZ Hotel",
    },
    {
      _id: "event2",
      title: "Community Fun Fair",
      short_title: "Community Fun Fair: A Day of Games and Bonding",
      description:
        "A day of fun and games for kids and families in need. Join us for exciting games, delicious food, and the chance to bond with your community. Your participation will bring joy, unity, and unforgettable memories to children's lives.",
      image:
        "https://www.letsroam.com/explorer/wp-content/uploads/sites/10/2021/09/Charity-Event-Ideas.jpg",
      date: "2023-11-20",
      location: "City Park",
    },
    {
      _id: "event3",
      title: "Medical Camp",
      short_title: "Free Medical Check-up Camp for Underserved Kids",
      description:
        "Provide free medical check-ups and vaccinations for children in need. Ensure the health and well-being of kids in underserved communities. Your support will make a significant difference in their lives and contribute to their brighter future.",
      image: "event3.jpg",
      image:
        "https://www.socialtables.com/wp-content/uploads/2016/10/iStock-540095978.jpg",
      date: "2023-12-05",
      location: "Local Community Center",
    },
    {
      _id: "event4",
      title: "Educational Workshop",
      short_title: "Empowering Education Workshop for Young Minds",
      description:
        "Empower children with knowledge. Join our educational workshop to support young minds on their learning journey. Your involvement will shape future leaders, change lives, and inspire a thirst for learning.",
      image:
        "https://blog.logox.co.uk/wp-content/uploads/2019/01/People-Taking-Groupie-Near-Bridge-Charity-events-px-feature.jpg",
      date: "2023-09-30",
      location: "Community Library",
    },
    {
      _id: "event5",
      title: "Toy Drive for Kids",
      short_title: "Joyful Toy Donation Drive for Underprivileged Children",
      description:
        "Spread joy by donating toys to children in need. Bring smiles to little faces and make their day brighter. Your contribution will create moments of happiness, laughter, and cherished memories.",
      image:
        "https://media.istockphoto.com/id/519317054/photo/reach-out-and-touch-their-lives.jpg?s=612x612&w=0&k=20&c=Vdr9OxvZPf7G4I6rEhy5y2C2ijCNT4d0qopSKDgLCMg=",
      date: "2023-12-18",
      location: "Charity Center",
    },
    {
      _id: "event6",
      title: "Art Exhibition",
      short_title: "Young Artists' Art Show: Nurturing Talents and Dreams",
      description:
        "Celebrate the creativity of children in our programs. View and purchase artwork to support young artists. Your appreciation will nurture their talents, fuel their dreams, and inspire a future full of possibilities.",
      image:
        "https://www.socialtables.com/wp-content/uploads/2016/10/iStock-540095978.jpg",
      date: "2023-10-05",
      location: "Local Art Gallery",
    },
    {
      _id: "event7",
      title: "Holiday Gift Drive",
      short_title: "Heartwarming Holiday Gifts: Bringing Joy and Warmth",
      description:
        "Make the holidays special for kids in need. Donate gifts to bring joy and warmth to their hearts. Your generosity will create unforgettable holiday memories, spreading happiness and love.",
      image:
        "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/952/cached.offlinehbpl.hbpl.co.uk/news/NST/Fundraising-Cake-sale-2016112103214260.jpg",
      date: "2023-12-23",
      location: "Community Center",
    },
    {
      _id: "event8",
      title: "Children's Sports Day",
      short_title: "Active Kids Sports Day: Promoting Health and Happiness",
      description:
        "Encourage active lifestyles for kids. Join us for a day of sports, games, and fun-filled activities. Your participation will promote health, happiness, and a lifetime of positive habits among children.",
      image:
        "https://www.socialtables.com/wp-content/uploads/2016/10/iStock-540095978.jpg",
      date: "2023-11-10",
      location: "Sports Park",
    },
  ];
  return (
    <section className="  my-24  relative ">
      <div
        className=" bg-[#dd445b] h-[450px] "
        style={{
          clipPath: "polygon(0% 3%, 54% 3%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="my_container py-10 pl-2 lg:pl-0 text-white">
          {upcomingEvents.slice(0, 3).map((items) => (
            <OurSingleEvents items={items} key={items._id}></OurSingleEvents>
          ))}
        </div>
      </div>
      {/* section heading part */}
      <div className="  overflow-x-hidden">
        <div
          className="absolute text-center -mt-16 md:-mt-0 md:text-right top-0 right-0 lg:right-36 border-dashed  border-b-2 border-b-[#aa3b4c]"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <h2
            className={`${pacifico.className} text-2xl  md:text-3xl lg:text-5xl text-[#aa3b4c] p-2`}
          >
            Our Upcoming Events
          </h2>
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
