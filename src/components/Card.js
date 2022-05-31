import React from "react"

export default function Card(props) {

	return (
			<div className="card">
				<div className="top">
					<h1>
						{props.name}
					</h1>
					<button className="button" onClick={props.toggle}>
						{`${props.on ? "hide" : "show"}`}
					</button>
				</div>
				{props.on && 
					<div className="bottom">
						<img src={props.imgs.img1} alt="superhero"/>
						<img src={props.imgs.img2} alt="superhero"/>
						<img src={props.imgs.img3} alt="superhero"/>
					</div>
				}
			</div>
	)
}