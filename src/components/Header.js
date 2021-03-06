import React from "react"

export default function Header(props) {
	return (
			<header className="header">
				<div className="name">
					<h1>
						superheroes
					</h1>
				</div>
				<button className="main-button" onClick={props.function}>
					{props.shown ? "hide all" : "show all"}
				</button>
			</header>
	)
}