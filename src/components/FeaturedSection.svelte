<script>
  const src = "/src/public/image copy 15.png";
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
  ];
  export let data2 = [
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
  ];
  export let data3 = [
    { name: "МУСТА Т.Бат-Оч", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
  ];
  export let data4 = [
    { name: "МУСТА Т.Бат-Оч", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
  ];
  // export let data5 = [
  //   {
  //     name: "Энд балиар урт дуунынэр байвал яаж байна",
  //     image: "/src/public/image copy 15.png",
  //   },
  //   {
  //     name: "Энд балиар урт дуунынэр байвал яаж байна",
  //     image: "/src/public/image copy 15.png",
  //   },
  //   { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
  //   { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
  //   { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
  //   { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
  // ];
</script>

<div class="featured-section">
  <div class="hero-image">
    <img {src} alt="Таны сонголт" />
  </div>
  <h2>New Hot</h2>
  <div class="scrollable-row">
    {#each data as artist}
      <div class="artist">
        <img src={artist.image} alt={artist.name} />
        <p>{artist.name}</p>
      </div>
    {/each}
  </div>
  <h2>Шинээр нэмэгдсэн бүтээлүүд</h2>
  <div class="scrollable-row">
    {#each data2 as artist}
      <div class="artist">
        <img src={artist.image} alt={artist.name} />
        <p>{artist.name}</p>
      </div>
    {/each}
  </div>
  <h2>Шинэ уран бүтээлч</h2>
  <div class="scrollable-row">
    {#each data3 as artist}
      <div class="artist3">
        <img src={artist.image} alt={artist.name} />
        <p>{artist.name}</p>
      </div>
    {/each}
  </div>
  <h2>Шинээр нэмэгдсэн хамтрал уран бүтээлчид</h2>
  <div class="scrollable-row">
    {#each data4 as artist}
      <div class="artist4">
        <img src={artist.image} alt={artist.name} />
        <p>{artist.name}</p>
      </div>
    {/each}
  </div>
  <!-- <div class="offer">
    <h2>Санал болгох</h2>
    <div class="offer-grid">
      {#each data5 as artist, i}
        <div class="artist-offer">
          <img src={artist.image} alt={artist.name} />
          <p>{artist.name}</p>
        </div>
      {/each}
    </div>
  </div> -->
</div>

<style>
  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .featured-section {
    display: flex;
    flex-direction: column;
    padding-left: 270px;
    padding-top: 95px;
    padding-right: 15px;
    /* margin-right: 50px; */
    /* width: 1300px; */
    /* width: 87%; */
    background-color: #27272a;
    border-radius: 8px;
    overflow: hidden;
    background-color: #1a1a1a;
  }

  /* Heading Style */
  .featured-section h2 {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 500px;
    height: 36px;
    color: #f3f4f6;
    margin-bottom: 12px;
    font-size: medium;
    font-weight: 700;
    /* text-align: center; */
  }

  /* Scrollable Row */
  .scrollable-row {
    display: flex;
    overflow-x: auto;
    gap: 12px;
    padding-bottom: 8px;
    scroll-behavior: auto;
    border-top: 1px solid;
    border-color: #52525b;
    padding-top: 20px;
  }

  .scrollable-row::-webkit-scrollbar {
    height: 6px;
  }

  .scrollable-row::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 4px;
  }

  .scrollable-row::-webkit-scrollbar-track {
    background-color: #18181b;
  }

  /* Artist Card */
  .artist {
    flex: 0 0 auto;
    padding-bottom: 12px;
    text-align: center;
    min-width: 200px;
    max-width: 310px;
  }
  .artist3 {
    flex: 0 0 auto;
    padding-bottom: 12px;
    text-align: center;
    min-width: 200px;
    max-width: 310px;
  }
  .artist3 img {
    width: 100%;
    height: auto;
    border-radius: 100%;
    margin-bottom: 8px;
  }

  .artist4 {
    flex: 0 0 auto;
    padding-bottom: 12px;
    text-align: center;
    /* min-width: 200px;
    max-width: 310px; */
    gap: 50px;
  }
  .artist4 img {
    width: 350px;
    height: 250px;
    border-radius: 20px;
    margin-bottom: 8px;
    object-fit: cover;
  }

  /* .offer {
    display: grid;
  }
  .offer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .offer h2 {
    color: #f3f4f6;
    font-size: medium;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .offer-grid {
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    gap: 80px;
    max-height: 600px;
  }

  .artist-offer {
    display: flex;
    align-items: center;
    width: 450px;
    height: 200px;
    border: 0px;
    border-radius: 10px;
    background-color: #5a0208;
  }

  .artist-offer img {
    width: 205px;
    height: 205px;
    object-fit: cover;
  }

  .artist-offer p {
    color: #f3f4f6;
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    padding-left: 15px;
  } */

  .artist img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  .artist p {
    color: #f3f4f6;
    font-size: 14px;
    font-weight: 600;
    margin: 0;
  }
</style>
