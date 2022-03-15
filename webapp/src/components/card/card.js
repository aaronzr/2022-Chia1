import "./card.css";
import { PButton, SButton, TButton } from "../button/button";
import "react-toastify/dist/ReactToastify.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import React, { useState } from "react";
import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

global.Buffer = global.Buffer || require("buffer").Buffer;

export function FormCard(props) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(0);
	const [address, setAddress] = useState("");

	const [file, setFile] = useState(null);
	const [urlArr, setUrlArr] = useState([]);

	const retrieveFile = (e) => {
		const data = e.target.files[0];
		const reader = new window.FileReader();
		reader.readAsArrayBuffer(data);
		reader.onloadend = () => {
			setFile(Buffer(reader.result));
		};

		e.preventDefault();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const created = await client.add(file);
			const url = `https://ipfs.infura.io/ipfs/${created.path}`;
			console.log(url);
			setUrlArr((prev) => [...prev, url]);
		} catch (error) {
			console.log(error.message);
		}
	};

	const mintNFT = () => {};

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
							as="textarea"
							rows={3}
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
						<FormControl id="file" type="file"
							name="data"
							onChange={retrieveFile} />
					</InputGroup>
					<div className="Button">
						<PButton type="submit" onClick={handleSubmit}>Mint NFT</PButton>
					</div>

					{/*<form className="form" onSubmit={handleSubmit}>
						<input
							type="file"
							name="data"
							onChange={retrieveFile}
						/>
						<button type="submit" className="btn">
							Upload file
						</button>
					</form>*/}

					<div className="display">
						{urlArr.length !== 0 ? (
							urlArr.map((el) => (
								<img src={el} alt="nfts" key={el} width="40%" height="40%" />
							))
						) : (
							<div />
						)}
					</div>
				</div>
			</Card>
		</div>
	);
}