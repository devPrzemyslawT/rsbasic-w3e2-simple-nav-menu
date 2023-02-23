import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu/Menu";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Simple menu</p>
				<Menu />
			</header>
		</div>
	);
}

export default App;
