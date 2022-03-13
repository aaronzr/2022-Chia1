import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/logo/logo.png";
// import { auth, db } from "../../services/firebase";
// import { Context } from "../../context/store";
import { InputGroup, FormControl } from "react-bootstrap";
import { FormCard } from "../../components/card/card";
import { Topbar } from "../../components/navbar/navbar";

function Home(props) {

  return (
    <div className="app-container">
        <Topbar />
        <div className="App home page-content">
          <Container>
            <FormCard />
          </Container>
        </div>
      </div>
  );
}

export default Home;
