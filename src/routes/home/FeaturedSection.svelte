<script>
  export let data = [
    { name: "МУСТА Т.Бат-Оч", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
  ];
</script>

<div class="featured-section">
  <h2>New Hot</h2>
  <div class="scrollable-row">
    {#each data as artist}
      <div class="artist">
        <img src={artist.image} alt={artist.name} />
        <p>{artist.name}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .featured-section {
    width: 70%;
    background-color: #27272a;
    padding: 16px;
    /* border-radius: 8px;
    overflow: hidden; */
  }

  .featured-section h2 {
    color: #f3f4f6;
    margin-bottom: 12px;
  }

  .scrollable-row {
    display: flex;
    overflow-x: auto;
    gap: 12px;
    padding-bottom: 8px;
    /* scroll-behavior: smooth; */
    scrollbar-width: thin;
  }

  .scrollable-row::-webkit-scrollbar {
    height: 8px;
  }

  .scrollable-row::-webkit-scrollbar-thumb {
    /* background-color: #444; */
    /* border-radius: 4px; */
  }

  .artist {
    flex: 0 0 auto;
    background-color: #444;
    padding: 12px;
    /* border-radius: 8px; */
    text-align: center;
    min-width: 150px;
    max-width: 150px;
  }

  .artist img {
    width: 100%;
    height: auto;
    /* border-radius: 4px; */
    margin-bottom: 8px;
  }

  .artist p {
    /* color: #f3f4f6; */
    font-size: 14px;
    font-weight: 600;
    margin: 0;
  }
</style>
