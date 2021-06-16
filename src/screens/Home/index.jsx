import React from "react";

import Header from "../../components/Header";
import LeftAside from '../../components/LeftAside'
import Container from '../../components/Container'
import RightAside from "../../components/RightAside";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <main className="container-fluid container-md">
        <div className="row">
          <LeftAside/>
          <Container/>
          <RightAside/>
        </div>
      </main>
      <footer className="alert-dark d-flex">
        <Footer/>
      </footer>
    
    </React.Fragment>
  );
}
