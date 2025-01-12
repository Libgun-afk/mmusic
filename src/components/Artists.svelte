<script>
  export let title;
  export let data;
</script>

<h2>{title}</h2>
<div class="scrollable-row">
  {#each data as artist}
    <div class="artist">
      <img src={artist.image} alt={artist.name} />
      <p>{artist.name}</p>
      <div class="play-btn">
        <img class="play-img" src="/image copy 17.png" alt="" />
      </div>
    </div>
  {/each}
</div>
