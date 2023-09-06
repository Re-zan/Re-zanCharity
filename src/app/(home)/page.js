import Banner from "@/components/CommonBanner/Banner";
import React from "react";
import BannerBottomtext from "./BannerBottomtext";
import OurSponsers from "./OurSponsers";
import Services from "./Services";
import OurEvents from "./OurEvents";
import WhoWeAre from "./WhoWeAre";
import MeetOurDonnar from "./MeetOurDonnar";
import MeetOurVlouantre from "./MeetOurVlouantre";
import TheirStory from "./TheirStory";

const Homepage = () => {
  return (
    <main>
      {/* bannar part start */}
      <Banner></Banner>
      {/* bannar part  end*/}

      {/* bannar-bottom part start */}
      <BannerBottomtext></BannerBottomtext>
      {/* bannar-bottom part  end*/}

      {/* service part start */}
      <Services></Services>
      {/* service part  end*/}

      {/* event part start */}
      <OurEvents></OurEvents>
      {/* event part  end*/}

      {/* who we are part start */}
      <WhoWeAre></WhoWeAre>
      {/* who we are part  end*/}

      {/*  meet ourvlouanterr part start */}
      <MeetOurVlouantre></MeetOurVlouantre>
      {/* meet our vlouanter part  end*/}

      {/** their story part start */}
      <TheirStory></TheirStory>
      {/* their story part  end*/}

      {/*  meet our donar part start */}
      <MeetOurDonnar></MeetOurDonnar>
      {/* meet our donar part  end*/}

      {/* our sponsers part start */}
      <OurSponsers></OurSponsers>
      {/* our sponsers part  end*/}
    </main>
  );
};

export default Homepage;
