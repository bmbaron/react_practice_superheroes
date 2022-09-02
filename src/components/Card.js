import React from "react"
import { deleteHero } from "./FirebaseHeroData"

export default function Card(props) {
	
	return (
			<div className="card"key={props.id}>
				<div className="top">
					<h1>
						{props.hero}
					</h1>
				</div>
				<div className="bottom">
					<img src={props.img} alt="superhero"/>
					<img src={props.img} alt="superhero"/>
					<img src={props.img} alt="superhero"/>
				</div>
				{props.hasButton && 
						<>
							<button
								className="delete-button"
								onClick={()=>deleteHero(props.id)}
							>
							delete</button>
							<button
								className="edit-button"
								onClick={()=>props.handleModal(props.id, props.hero, props.img)}
							>
							edit</button>
						</>
					}
			</div>
	)
}