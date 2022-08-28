import React, {useState, useEffect} from "react"
import { getHeros } from "./FirebaseHeroData"


export default function Body() {

	const [Cards, setCards] = useState('')

	// function toggle(allHeros, heroToChange) {
	// 	setCards(allHeros.map(hero => {
	// 		return <Card hero={hero.hero} imgs={hero.imgs} on={!hero.on} id={hero.id} key={hero.key} toggle={()=>toggle(allHeros, heroToChange)}/>
	// 	}))
	// }

	const [cloudData, setCloudData] = useState('')

	useEffect(() => {
		console.log("user effect")
		getHeros(setCards)
	}, [])


		// const fetchedHeros = cloudData
		// .then((result) => {
			// if (cloudData !== '') {
			// 	console.log("cloudData:")

			// 	setCards(cloudData.map(hero => {
			// 		return <Card hero={hero.hero} imgs={hero.imgs} on={hero.on} id={hero.id} key={hero.key}/>
			// 	}))
				// setCardObjects(cloudData.map(hero => {
				// 	return {
				// 		"hero": hero.hero,
				// 		"imgs": hero.imgs,
				// 		"on": hero.on,
				// 		"id": hero.id,
				// 		"key": hero.key,
				// 	}
				// }))

		// })

	return (
			<div className="body">
				{Cards}
			</div>
	)
}