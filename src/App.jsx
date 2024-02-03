import { useState } from 'react';
import gitHubNameLogo from './assets/GitHub_Logo_White.png';
import gitHubLogo from '/github-mark-white.png';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://www.github.com/" target="_blank" rel="noreferrer">
					<img src={gitHubLogo} className="logo" alt="GitHub logo" />
				</a>
				<a href="https://www.github.com/" target="_blank" rel="noreferrer">
					<img src={gitHubNameLogo} className="logo" alt="GitHub Name logo" />
				</a>
			</div>
			<h1>Introduction to GitHub</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			</div>
		</>
	);
}

export default App;
