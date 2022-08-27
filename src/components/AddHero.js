import React, { useState } from "react"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getFirestore, doc, addDoc, collection, getDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore"; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3a81oIMn3rW_b8GZJdL55UBVAioH58L0",
  authDomain: "superheroes-b5572.firebaseapp.com",
  projectId: "superheroes-b5572",
  storageBucket: "superheroes-b5572.appspot.com",
  messagingSenderId: "752141007941",
  appId: "1:752141007941:web:bee1ef9ef0cc778ba2f72c",
  measurementId: "G-VGHYJDV2GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default function AddHero({ setHeroes }) {

	const [heroName, setHeroName] = useState('')

	function setName(event) {
		setHeroName(event.target.value)
	}

	function logName() {
		alert(heroName)
	}

	// add hero name to cloud firestore 
	async function addHero() {
		if (heroName !== "") {
			let date = new Date()
			let day = String(date.getDay());
			let month = String(date.getMonth());
			let year = String(date.getUTCFullYear());
			let fullDate = day + '-' + month + '-' + year;

			const testRef = doc(db, 'heros', fullDate);
			await setDoc(
					testRef, {
						"hero": heroName,
					}
			)
			.catch((error) => console.log("fail: " + error))
		}
	}


	return (
			<div className="add-hero-section">
				<input 
					className="hero-input"
					type="text"
					onChange={setName}
					value={heroName}
					placeholder="hero name"
				/>
				<button className="hero-button" onClick={addHero}>Add Hero</button>
			</div>
	)
}


