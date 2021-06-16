import React, { useState, useEffect } from "react";

import { useHistory, useParams } from "react-router";
import Header from "../../components/Header";
import PostDetailA from "../../components/PostDetail";
// Services
// import { getPostDetail } from "../../services";

export default function PostDetail() {
  // const [data, setData] = useState({});
  // const history = useHistory();
  // const { id } = useParams();

  // useEffect(() => {
  //   const request = async () => {
  //     const json = await getPostDetail(id);
  //     setData(json);
  //   };
  //   request();
  // }, []);

  return (
    <React.Fragment>
      <Header />
      <PostDetailA />
    </React.Fragment>
  );
}
