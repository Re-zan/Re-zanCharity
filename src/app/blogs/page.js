import React from "react";
import Banner from "@/components/CommonBanner/Banner";
import bannerImage from "@/assets/banner/blogs.png";

//page title
export const metadata = {
  title: "Re-zanCharity | Blogs",
};
const Blogspage = () => {
  return (
    <main>
      <Banner
        title="Exploring Insights and Impact: Our Blog Hub"
        des="Explore our blog hub for thought-provoking articles, success stories, and actionable tips related to our causes. Stay informed, inspired, and engaged with our mission. Explore now!"
        bannerImage={bannerImage}
      ></Banner>
      today i am goonna complete this
    </main>
  );
};

export default Blogspage;
