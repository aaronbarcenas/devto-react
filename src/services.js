// URL Base
const API_URL = "https://react-11g-default-rtdb.firebaseio.com/";

// Endpoints
const postURL = `${API_URL}/posts/.json`;
const postDetailURL = (id) => `${API_URL}/posts/${id}/.json`;

const postURLUSER = `${API_URL}/login/.json`;
const postDetailURLUSER = (id) => `${API_URL}/login/${id}/.json`;

// Requests
export const getPostDetail = async (id) => {
  try {
    const url = postDetailURL(id);
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

