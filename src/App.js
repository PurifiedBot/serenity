import React from 'react';
import {
	useEffect,
	useState
} from 'react';
import './App.css';

function App() {
	const [date, setDate] = useState(null);
	useEffect(() => {
		async function getDate() {
			const res = await fetch('/api/date');
			const newDate = await res.text();
			setDate(newDate);
		}
		getDate();
	}, []);
	return ( <
		main >
		<
		h1 > Welcome to»𝚂𝙴𝚁𝙴𝙽𝙸𝚃𝚈« < /h1> <
		h2 >
		Deployed by {
			' '
		} <
		a href = "https://discord.gg/Wvu4Whh"
		target = "_blank"
		rel = "noreferrer noopener" >
		ANARCHY <
		/a>! < /
		h2 > <
		p >
		<
		a href = "https://github.com/vercel/vercel/tree/master/examples/create-react-app"
		target = "_blank"
		rel = "noreferrer noopener" >
		This project <
		/a>{' '}
		was bootstrapped with {
			' '
		} <
		a href = "https://discord.gg/Wvu4Whh" >
		Create React App <
		/a>{' '}
		and contains three directories, < code > /public</code >
		for static assets, {
			' '
		} <
		code > /src</code >
		for components and content, and < code > /api</code > {
			' '
		}
		which contains a serverless < a href = "https://golang.org/" > Go < /a>{' '}
		function.See {
			' '
		} <
		a href = "/api/date" >
		<
		code > api / date < /code> for the Date API with Go < /
		a >
		. <
		/p> <
		br / >
		<
		h2 > The date according to Go is: < /h2> <
		p > {
			date ? date : 'Loading date...'
		} < /p> < /
		main >
	);
}

export default App;