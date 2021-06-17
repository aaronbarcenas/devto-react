import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import LeftAside from "../../components/LeftAside";
import Container from "../../components/Container";
import RightAside from "../../components/RightAside";
import Footer from "../../components/Footer";

import { getPosts } from "../../services";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const request = async () => {
      const json = await getPosts();
      setData(json.data.posts);
    };
    request();
  }, []);

  const onLikeClick = async (id) => {
    const response = await fetch(`http://localhost:8080/posts/${id}`, {
      method: "PATCH",
    });
    const json = await response.json();

    const updatedPosts = data.map((el, ind) => {
      var newEl = el
      if(el._id === json.data.newlikes._id){
        newEl['likes'] = json.data.newlikes.likes
        console.log(json.data.newlikes.likes)
      }
      return newEl;
    });
    console.log(updatedPosts)
    setData(updatedPosts);
  };

  return (
    <React.Fragment>
      <Header />
      <main className="container-fluid container-md">
        <div className="row">
          <LeftAside />
          <Container
            data={data.length ? data : []}
            onLikeClick={onLikeClick}
          />
          <RightAside />
        </div>
      </main>
      <footer className="alert-dark d-flex">
        <Footer />
      </footer>
    </React.Fragment>
  );
}
