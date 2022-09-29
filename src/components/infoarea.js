import React from 'react';
import axios from 'axios'
import './media.css';

const UserList = (props) => (
	<p><strong>name : </strong> {props.name.first}</p>
  )

class InfoArea extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {data: []};
	}
	
	componentDidMount() {
		axios.get('https://randomuser.me/api/?results=2')
		  .then(response => {
			  const data = response.data.results;
			   this.setState({data})
		  })
		  .catch(error => {
			console.log(error);
		  })
	  }

	render(){
		
		return(
			<div className="container">
				{this.state.data.map((item, index) => <UserList key={index} {...item} />)}
				<div className="row">
				
					{/*}
					<Media list>
						{menu}
					</Media>
					*/}
				</div>
			</div>
		);
	}
}


export default InfoArea;