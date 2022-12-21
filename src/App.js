import logo from './symbol.png';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Symbol React Boilerplate
				</p>
				<a
					className="App-link"
					href="https://docs.symbol.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn Symbol
				</a>
			</header>
		</div>
	);
};

export default App;
