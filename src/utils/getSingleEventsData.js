import axios from "axios";

const getSingleEventsData = async (id) => {
  const res = await axios(`http://localhost:5000/events/${id}`);
  return res.data;
};

export default getSingleEventsData;
