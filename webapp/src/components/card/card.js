import "./card.css";
import { PButton, SButton, TButton } from "../button/button";
import "react-toastify/dist/ReactToastify.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import React, { useState } from "react";

export function FormCard(props) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(0);
	const [address, setAddress] = useState("");


	const mintNFT = () => {}

	return (
		<div className="all-card">
		<Card>
			<Card.Header>Mint your NFT</Card.Header>
			<div className="card-contents">
			<label className="p3" htmlFor="title">
				Title
			</label>
			<InputGroup className="form-contents">
				<FormControl
					id="title"
					aria-label="Title"
					aria-describedby="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
				/>
			</InputGroup>
			<label className="p3" htmlFor="description">
				Description
			</label>
			<InputGroup className="form-contents">
				<FormControl
					id="description"
					aria-label="Description"
					aria-describedby="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					as="textarea" rows={3}
				/>
			</InputGroup>
			<label className="p3" htmlFor="quantity">
				Quantity
			</label>
			<InputGroup className="form-contents">
				<FormControl
					id="quantity"
					aria-label="Quantity"
					aria-describedby="quantity"
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
					type="number"
				/>
			</InputGroup>
			<label className="p3" htmlFor="wallet-address">
				Wallet Address
			</label>
			<InputGroup className="form-contents">
				<FormControl
					id="address"
					aria-label="Wallet Address"
					aria-describedby="wallet-address"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					type="text"
				/>
			</InputGroup>
			<label className="p3" htmlFor="upload-nft">
				Upload NFT
			</label>
			<InputGroup className="form-contents">
				<FormControl
					id="file"
					type="file"
				/>
			</InputGroup>
			<div className="Button">
          <PButton onClick={mintNFT}>Mint NFT</PButton>
        </div>
        </div>
		</Card>
		</div>
	);
}