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
        <div className=""
              style={{
              backgroundColor: 'green',
              alignSelf: 'stretch',
              height: '200px'
              }}>
        
                      <p class="text-white" style={{fontSize: 30, marginLeft: '25px'}}>NFT Minter</p>
                      <p class="text-white" style={{fontSize: 15, marginLeft: '25px'}}>Mint NFTs on Chia at the speed of light!</p>
        </div>
        
          <div className="App home page-content">
            <Container>
              <FormCard />
            </Container>
          </div>
    </div>
  );
}

export default Home;
