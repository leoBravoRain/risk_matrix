import React, { Component } from "react";


// fake data
const roles = [
	{
		'id': 0,
		'role': 'Operador maquina',
	},
	{
		'id': 1,
		'role': 'Analista madera',
	}
	
];

// fake data
const activities = [

	{'activity': 'Ir a tomar muestra al equipo 1'},
	{'activity': 'Ir a dejar muestra de equipo 1 a laboratorio'},
]

// fake data
const dangers = [

	{'danger': 'Peligro peligroso'},
	{'danger': 'Peligro mas peligroso'},
]

const danger_controls = [

	{'control': 'Ir terrible vivaldi'},
	{'control': 'No andar pajareando'},

] 

class Control_Risk extends Component{

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {
			
			// this should be false at beganing
			get_data: true,

			// this should be empty at beganing 
			roles: roles,

			danger_controls: [],

		}

		this.consult = this.consult.bind(this);

	}

	// consult function
	consult() {

		// update data
		this.setState({

			danger_controls: danger_controls,
		});

	};

	render() {

		return (

			<div className = 'container'>

				{/* select role */}
				<div className = 'form-group'>

					<label>

						Selecciona tu cargo

					</label>

					<select className="form-control">

						{roles.map( (role, idx) =>

							<option key = {idx} value = {role.id}> {role.role} </option>

						)}
					  
					</select>

				</div>

				{/* select activity */}
				<div className = 'form-group'>

					<label>

						¿Qué actividad vas a hacer ahora?

					</label>

					<select className="form-control">

						{activities.map( (activity, idx) =>

							<option key = {idx} value = {activity.activity}> {activity.activity} </option>

						)}
					  
					</select>

				</div>

				{/* select danger */}
				<div className = 'form-group'>

					<label>

						¿Qué peligro quieres ver?

					</label>
					
					<select className="form-control">

						{dangers.map( (danger, idx) =>

							<option key = {idx} value = {danger.danger}> {danger.danger} </option>

						)}
					  
					</select>

				</div>

				<div className="form-group">

                    <input type="submit" value="Consultar" className="btn btn-primary" onClick = {this.consult} />

                </div>

        		{/* list of dangers */}
        		<ul>

        			{this.state.danger_controls.map( (control, idx) => 

        				<li key = {idx}>

        					{control.control}

        				</li>

    				)}

        		</ul>

			</div>

		);

	}

}

export default Control_Risk;