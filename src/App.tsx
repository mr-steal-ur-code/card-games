import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [data, setData] = useState("");
	const [namePost, setNamePost] = useState("");

	useEffect(() => {
		const getData = async () => {
			const dataRes = await fetch("http://localhost:3000/api/data");
			if (dataRes.ok) {
				const messageData = await dataRes.json();
				setData(messageData?.message);
			}
		};
		getData();
	}, []);

	const postReq = async () => {
		const dataRes = await fetch("http://localhost:3000/api/data", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: "CJ" }),
		});
		const messageData = await dataRes.json();
		setNamePost(messageData?.message);
	};
	return (
		<>
			<h1>Home Page</h1>
			<p>{data}</p>
			<p>{namePost}</p>
			<button onClick={postReq}>Send</button>
		</>
	);
}

export default App;
