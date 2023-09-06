import Banner from "@/components/CommonBanner/Banner";
import React from "react";
import BannerBottomtext from "./BannerBottomtext";
import OurSponsers from "./OurSponsers";
import Services from "./Services";

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
      {/* our sponsers part start */}
      <OurSponsers></OurSponsers>
      {/* our sponsers part  end*/}
    </main>
  );
};

export default Homepage;
