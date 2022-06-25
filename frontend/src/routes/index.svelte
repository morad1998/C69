<script>
    import {offer} from "../stores/offersstore";
    import OffersCard from "../components/offersCard.svelte";
    import {onMount} from 'svelte'
    import axios from 'axios'
    let offerList = []
    onMount(async() =>{
    try{
    const response = await axios.get('http://localhost:3000/api/offers')
    offerList = response.data
    } catch(e){
        console.log("error");
    }
})

let searchTerm = ''
let filteredOffer = []


$: {
    if(searchTerm){
        filteredOffer= offerList.filter( myoffer => myoffer.full_descriptin.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    else {
        filteredOffer = [...offerList];
    }
}

    
</script>
<svelte:head>
    <title>Home</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Home Page</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text"  bind:value={searchTerm} placeholder="Search Offers" >

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
{#each filteredOffer as myoffer}
    
   <OffersCard myoffer={myoffer}/>

{/each}
</div>