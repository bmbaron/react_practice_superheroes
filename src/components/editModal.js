import React, { useState } from 'react';
import { editHero } from "./FirebaseHeroData"

const editModal = (props) => {

	const [newHeroName, setNewHeroName] = useState(props.data[1])
	const [newHeroUrl, setNewHeroUrl] = useState(props.data[2])

	function handleSubmit() {
		props.setShowModal(false)
		editHero(props.data[0], newHeroName, newHeroUrl)
	}

	return (
		<div className="modal">
			<div className="input-container">
				<input
					type="text"
					placeholder={props.data[1]}
					onChange={(e) => setNewHeroName(e.target.value)}
					value={newHeroName}
				/>
				<input
					type="text"
					placeholder={props.data[2]}
					onChange={(e) => setNewHeroUrl(e.target.value)}
					value={newHeroUrl === props.data[2] ? '' : newHeroUrl}
				/>
				{newHeroUrl !== '' && <img src={newHeroUrl} alt="superhero"/>}
			</div>
			<div className="button-container">
				<button
						className="cancel-button"
						onClick={() => props.setShowModal(false)}>
						cancel
					</button>
				<button
					className="submit-button"
					onClick={handleSubmit}
				>
					submit
				</button>
			</div>
		</div>
	);
};

export default editModal;