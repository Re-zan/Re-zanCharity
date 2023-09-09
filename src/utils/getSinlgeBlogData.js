import axios from "axios";

const getSinlgeBlogData = async (id) => {
  const res = await axios.get(`http://localhost:5000/blogs/${id}`);
  return res.data;
};

export default getSinlgeBlogData;
