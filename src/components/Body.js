import React from "react"
import Card from "./Card"

export default function Body(props) {

	function toggle(id) {
		props.setHeroes(prevHeroes => {
			return (
				prevHeroes.map(hero => {
					return hero.id === id ? {...hero, on: !hero.on} : hero
				})
			)
		})
	}

	const Cards = props.heroes.map(hero => {
		return <Card id={hero.id} name={hero.name} imgs={hero.imgs} on={hero.on} function={toggle}/>
	})

	return (
			<div className="body">
				{Cards}
			</div>
	)
}