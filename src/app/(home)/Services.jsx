"use client";
import CommonText from "@/components/CommonText";
import SingleService from "./SingleService";
import {
  FaBookReader,
  FaHandHoldingHeart,
  FaNeos,
  FaPeopleArrows,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Education Support",
      description:
        "Providing quality education and learning resources to underprivileged children for a brighter future.",
      icon: <FaBookReader />,
    },
    {
      id: 2,
      name: "Nutrition Programs",
      description:
        "Ensuring access to nutritious meals and promoting healthy eating habits among kids.",
      icon: <FaNeos></FaNeos>,
    },
    {
      id: 3,
      name: "Healthcare Services",
      description:
        "Offering medical check-ups, vaccinations, and healthcare assistance for children's well-being.",
      icon: <FaHandHoldingHeart />,
    },
    {
      id: 4,
      name: "Mentorship Programs",
      description:
        "Pairing kids with caring mentors to inspire, guide, and empower them in life's journey.",
      icon: <FaPeopleArrows />,
    },
  ];

  return (
    <section className="my_container my-16">
      {" "}
      {/* section heading part */}
      <CommonText
        title="Our Services"
        postion="center"
        description="Our cherished Friends & Sponsors are the heart of Re-zanCharity, igniting hope and transformation through their dedicated partnership."
      ></CommonText>
      {/* our service part */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
        {services.map((items) => (
          <SingleService items={items} key={items.id}></SingleService>
        ))}
      </div>
    </section>
  );
};

export default Services;
