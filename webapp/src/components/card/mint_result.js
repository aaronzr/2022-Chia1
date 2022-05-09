import "./mint_result.css";
import background from "./background.png"
import image from "./ipfs image.png"
import { PButton, SButton, TButton } from "../button/button";
import "react-toastify/dist/ReactToastify.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import React, { useState } from "react";
import { create } from "ipfs-http-client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const client = create("https://ipfs.infura.io:5001/api/v0");

global.Buffer = global.Buffer || require("buffer").Buffer;

export function FinnCard(props) {
	// const [imgPath, setImgPath] = useState("");
    // const [transaction_hash, setTransactionHash] = useState("0x4857230498572093845")
    // const [wallet_address, setWalletAddress] = useState('0x909203940390')

    
	return (
		<div className="all-card">
			<Card>
				<div className="card-contents">
                    <b className = "address"> {props.wallet_address}</b>
                    <img className = "image" src={props.ipfs_url}/>
                    <img className = "background" src={background} alt = "background"/> 
                    <div className = "message">Your NFT has been successfully minted and added to the Chia blockchain. Transaction hash: {props.transaction_hash} \n view the image here: {props.ipfs_url}</div>
					<button className = "xOut" onClick={() => {
						props.setHomeView(true);
						props.setTitle("");
						props.setDescription("");
						props.setAddress("");
					}}>x</button>
				</div>
			</Card>
		 </div>
	);
}