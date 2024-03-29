import "./card.css";
import { PButton, SButton, TButton } from "../button/button";
import "react-toastify/dist/ReactToastify.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import React, { useState } from "react";
import { create } from "ipfs-http-client";
import { ToastContainer, toast } from 'react-toastify';
import { FinnCard } from "./mint_result";

const client = create("https://ipfs.infura.io:5001/api/v0");
const host = 'http://ec2-35-175-109-209.compute-1.amazonaws.com/'
// const request = require('request');

// var http = require('http');

// var options = {
// 	host: 'https://ec2-35-175-109-209.compute-1.amazonaws.com/',
// 	path: '/',
// 	port: '80',
// 	method: 'POST'
// };



global.Buffer = global.Buffer || require("buffer").Buffer;

export function FormCard(props) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(0);
	const [address, setAddress] = useState("");

	const [file, setFile] = useState(null); //file info for latest image
	const [ipfs_url, setIPFS] = useState([]); //array of ipfs image urls

	const [homeView, setHomeView] = useState(true);

	const [image_path, setPath] = useState("./ipfs image.png")
	// const [ipfs_url, setIPFS] = useState("https://ipfs.infura.io:dummyURL")

	const [hash, setHash] = useState("dummy-hash") //will come from backend eventually

	const retrieveFile = (e) => {
		const data = e.target.files[0];
		const reader = new window.FileReader();
		reader.readAsArrayBuffer(data);
		reader.onloadend = () => {
			setFile(Buffer(reader.result));
		};

		e.preventDefault();
	};

	// function updateClient(postData){
	// 	var clientServerOptions = {
	// 		uri: 'http://ec2-35-175-109-209.compute-1.amazonaws.com/',
	// 		body: JSON.stringify(postData),
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	}
	// 	request(clientServerOptions, function (error, response) {
	// 		console.log(error,response.body);
	// 		return;
	// 	});
	// }

	const handleSubmit = async (e) => {
		// console.log(`about to submit nft form. props = ${props}, props.setHome = ${props.setHome}.`)
		e.preventDefault();
		try {
			const created = await client.add(file);
			const url = `https://ipfs.infura.io/ipfs/${created.path}`;
			console.log(url);
			setIPFS(url);
			toast.success("NFT Minted!");
			setHomeView(false)

			// POST Request for NFT Metadata
			let postData = [{ "wallet_address": "address", "ipfs_url": "ipfs_url" }]

			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(postData)
			};
			fetch(host + '', requestOptions)
				.then(response => response.text())
				// .then(response => response.json())
				// .then(data => this.setState({ postId: data.id }));

			// send HTTP request containing information about NFT

			// request.post(
			// 	'http://ec2-35-175-109-209.compute-1.amazonaws.com/',
			// 	{ json: {"wallet_address":  "address", "hash": "hash"} },
			// 	function (error, response, body) {
			// 		if (!error && response.statusCode == 200) {
			// 			console.log(body);
			// 		}
			// 	}
			// );
			
			// updateClient(postData)

			// let callback = function(response) {
			// 	var str = ''
			// 	response.on('data', function (chunk) {
			// 	  str += chunk;
			// 	});

			// 	response.on('end', function () {
			// 	  console.log(str);
			// 	});
			//   }
			// var req = http.request(options, callback);
			// //This is the data we are posting, it needs to be a string or a buffer
			// req.write(JSON.stringify(postData));
			// req.end();

		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="all-card">
			{homeView ?
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
						{/* <label className="p3" htmlFor="quantity">
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
					</InputGroup> */}
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
							<ToastContainer position="top-right" hideProgressBar={true} />
						</div>
						{/* 
					<div className="display">
						{ipfs_url.length !== 0 ? (
							<img src={ipfs_url} alt="nfts" key={ipfs_url} width="40%" height="40%" />
						) : (
							<div />
						)}
					</div> */}
					</div>
				</Card>
				:
				<FinnCard setHomeView={setHomeView} setTitle={setTitle} setDescription={setDescription} setAddress={setAddress} transaction_hash={hash} ipfs_url={ipfs_url} wallet_address={address} />

			}
		</div>
	);
}