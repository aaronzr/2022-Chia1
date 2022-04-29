import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/logo/logo.png";
// import { auth, db } from "../../services/firebase";
// import { Context } from "../../context/store";
import { InputGroup, FormControl } from "react-bootstrap";
import { FinnCard } from "../../components/card/mint_result.js";
import {FormCard} from "../../components/card/card.js"
import { Topbar } from "../../components/navbar/navbar";

function Home(props) {
  const [home, setHome] = useState(true);


  return (
    <div className="app-container">
        <Topbar />
        <div className=""
              style={{
              backgroundColor: 'green',
              alignSelf: 'stretch',
              height: '200px'
              }}/>
        
                      <p class="text-white" style={{fontSize: 30, marginLeft: '25px'}}>NFT Minter</p>
                      <p class="text-white" style={{fontSize: 15, marginLeft: '25px'}}>Mint NFTs on Chia at the speed of light!</p>
        
        
          <div className="App home page-content">
            <Container>
              <FormCard setHome = {setHome}/>
            </Container>
          </div>
          
          {/* <div className="App home page-content">
            <Container>
              <FinnCard setHome = {setHome} transaction_hash = {hash} ipfs_url = {ipfs_url} image_path = {image_path} wallet_address = {wallet_address}/>
            </Container>
          </div> */}
        

    </div>
  );
}

export default Home;
