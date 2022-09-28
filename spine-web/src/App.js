import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { PLACES } from './shared/places';
import InfoArea from './components/infoarea';
import logo from './sclogo.jpg';

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			places: PLACES
		};
	}
	
	render(){
		return (
			<div className='App'>
				<Navbar color="black">
					<div className="container" id="brand">
						<NavbarBrand style={{color: '#f1f1f1'}}>SPINECHAIN</NavbarBrand>
					</div>
				</Navbar>
                <img src={logo} alt="Logo" />
				<InfoArea />
			</div>
		);
	}
}

export default App;