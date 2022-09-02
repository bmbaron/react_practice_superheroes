import React, {useState, useEffect} from "react"
import { getHeros } from "./FirebaseHeroData"
import Modal from "./editModal"
import AddHero from "./FirebaseHeroData"

export default function Body() {

	const [Cards, setCards] = useState('')
	const [showModal, setShowModal] = useState(false)
	const [dataToEdit, setDataToEdit] = useState([])

	function handleModal(id, hero, img) {
		setShowModal(!showModal)
		setDataToEdit([id, hero, img])
	}

	useEffect(() => {
		getHeros(setCards, handleModal)
	}, [])

	return (
			<div className="body">
				{showModal ? <Modal data={dataToEdit} setShowModal={setShowModal}/> : <>{Cards} <AddHero/></> }
			</div>
	)
}