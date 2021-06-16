import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import LeftAside from "../../components/LeftAside";
import Container from "../../components/Container";
import RightAside from "../../components/RightAside";
import Footer from "../../components/Footer";

import { getPosts } from "../../services";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    const request = async () => {
      const json = await getPosts();
      setData(json);
    };
    request();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main className="container-fluid container-md">
        <div className="row">
          <LeftAside />
          <Container
            data={Object.entries(data).length ? Object.entries(data) : []}
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
