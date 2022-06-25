import axios from "axios";
import { onMount } from "svelte";
import { writable } from "svelte/store"
export const offer = writable([])
let offerList = []
let loaded = false



//export const fetchOffers = async () => {
  //  if (loaded) return;
   // const url = `http://localhost:3000/api/offers`
   // const res = await fetch(url)
    //const data = await res.json()
    //const loadOffers = data.map((data, index) => ({
     //   redeemedPoints: data.redeemedPoints,
      //  offerId: index + 1,
        		
      //  	}))  

        //    offer.set(loadOffers);
        //	loaded = true;

//}
    
    

//export const fetchOffers = async () => {
//	if (loaded) return;
//	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
//	const res = await fetch(url);
//	const data = await res.json();
//	const loadOffers = data.results.map((data, index) => ({
//		name: data.name,
//		id: index + 1,
//		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//			index + 1
//		}.png`
//	}));
//	offer.set(loadOffers);
//	loaded = true;
//};


//fetchOffers()