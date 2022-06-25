<script>
    export let myoffer
</script>
<a class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/myoffer/${myoffer.offerId}`} >
<img class="object-scale-down h-48 w-96 ..."  src={myoffer.image} alt="offer">

<h2 class="uppercase text-2xl">{myoffer.offerId}.{myoffer.full_descriptin}</h2>

</a>
