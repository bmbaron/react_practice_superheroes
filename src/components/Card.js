import React from "react"

export default function Card(props) {
	
	return (
			<div className="card">
				<div className="top">
					<h1>
						{props.hero}
					</h1>
					{/* <button className="button" onClick={props.toggle}>
						{`${props.on ? "hide" : "show"}`}
					</button> */}
				</div>
				<div className="bottom">
					<img src={props.img} alt="superhero"/>
					<img src={props.img} alt="superhero"/>
					<img src={props.img} alt="superhero"/>
				</div>
			</div>
	)
}