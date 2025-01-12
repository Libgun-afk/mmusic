<script>
  import "../components/_Artists.scss";
  let title = "Шинээр нэмэгдсэн бүтээлүүд";
  let data = [
    { name: "МУСТА Т.Бат-Оч", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
    { name: "МУСТА А.Бат-Эрдэнэ", image: "/src/public/image copy 15.png" },
  ];
</script>

<div class="title">
  <h2>{title}</h2>
  <p>Бүгд</p>
</div>
<div class="scrollable-row">
  {#each data as artist}
    <div class="artist">
      <img src={artist.image} alt={artist.name} />
      <p>{artist.name}</p>
    </div>
  {/each}
</div>
