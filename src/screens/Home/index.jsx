import React from "react";

import Header from "../../components/Header";
import LeftAside from '../../components/LeftAside'
import Container from '../../components/Container'

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <main className="container-fluid container-md">
        <div className="row">
          <LeftAside/>
          <Container/>
        </div>
      </main>
    
    </React.Fragment>
  );
}
