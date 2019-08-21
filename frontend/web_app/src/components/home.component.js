import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

import Control_Risk from "./control_risk_list.component";

class Home extends Component {

	render() {

		console.log(this);

		return(

			<div className = 'container'>

				<div className = 'container'>

					<Link className ="btn btn-primary" to = { this.props.match.url}>

						Administrador de matriz de riesgo
							
					</Link>

				</div>

				<div className = 'container'>

					<Link className ="btn btn-primary" to = { this.props.match.url.concat('control_risk_consult')}>

	                    Ver control de riesgo

                  	</Link>

				</div>
        
			</div>

		);

	}

}

export default Home;