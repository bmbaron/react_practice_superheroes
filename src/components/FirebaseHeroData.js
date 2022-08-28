import React, { useState, useEffect} from "react"
import Card from './Card'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getFirestore, doc, addDoc, collection, getDoc, getDocs, onSnapshot, setDoc, deleteDoc } from "firebase/firestore"; 

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

const heroData = collection(db, 'heros');


export function getHeros(setCards) {
	onSnapshot(heroData, (snapshot) => {
		setCards(snapshot.docs.map((doc) => {

			return <Card hero={doc.data().hero} img={doc.data().img} on={doc.data().on} id={doc.data().id} key={doc.data().key}/>
		}))
	})
}

export default function AddHero() {

	const [heroName, setHeroName] = useState('')
	const [heroImg, setHeroImg] = useState('')

	function setName(event) {
		setHeroName(event.target.value)
	}

	function setImage(event) {
		setHeroImg(event.target.value)
	}

	// add hero name to cloud firestore 
	function addHero() {
		setHeroName('')
		setHeroImg('')
		if (heroName !== "") {
			const testRef = collection(db, 'heros');
			addDoc(testRef, {"hero": heroName, "img": heroImg, "key": Math.random()})
			.catch((error) => console.log("fail: " + error))
		}
		else {
			alert("please enter hero name")
		}
	}

	return (
			<div key="add-hero-section" className="add-hero-section">
				<h1>Submit a hero!</h1>
				<input 
					key="add-hero"
					className="hero-input-name"
					type="text"
					onChange={setName}
					value={heroName}
					placeholder="hero name"
					required
				/>
				<input 
					key="add-hero-img"
					className="hero-input-img"
					type="text"
					onChange={setImage}
					value={heroImg}
					placeholder="url of picture"
				/>
				<button className="hero-button" key="add-hero-button" onClick={addHero}>Add Hero</button>
			</div>
	)
}


