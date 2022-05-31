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
		return <Card name={hero.name} imgs={hero.imgs} on={hero.on} toggle={()=>toggle(hero.id)}/>
	})

	return (
			<div className="body">
				{Cards}
			</div>
	)
}