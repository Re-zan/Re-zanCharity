import axios from "axios";

const getEventData = async () => {
  const res = await axios.get(`http://localhost:5000/events`);
  return res.data;
};

export default getEventData;
