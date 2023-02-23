import logo from "./logo.svg";
import "./App.css";
import MenuLink from "./components/MenuLink/MenuLink";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Simple menu</p>
				<MenuLink href='/' label='Home' />
				<MenuLink href='/contact' label='Contact' />
				<MenuLink href='/about' label='About' />
			</header>
		</div>
	);
}

export default App;
