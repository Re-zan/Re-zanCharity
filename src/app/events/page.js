import Banner from "@/components/CommonBanner/Banner";
import bannerImage from "@/assets/banner/events.png";
import React from "react";

//page title
export const metadata = {
  title: "Re-zanCharity | Events",
};

const Eventpages = () => {
  return (
    <main>
      <Banner
        title="Join the Movement: Our Inspiring Events"
        des="Discover Re-zanCharity's upcoming events, workshops, and fundraisers. Join us for inspiring gatherings that drive positive change. Be part of something greater – explore and engage now!"
        bannerImage={bannerImage}
      ></Banner>
      today i am goonna complete this
    </main>
  );
};

export default Eventpages;
