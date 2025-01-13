<script>
  import NewArtist from "./NewArtist.svelte";
  import NewCreation from "./NewCreation.svelte";
  import NewHot from "./NewHot.svelte";

  const src = "/image copy 9.png";
</script>

<div class="featured-section">
  <div class="hero-image">
    <img {src} alt="hero" />
  </div>

  <NewHot />
  <NewCreation />
  <NewArtist />
  <NewArtist />
  <NewArtist />
  <NewArtist />
</div>

<style>
  .featured-section {
    display: flex;
    flex-direction: column;
    padding: 65px 10px 0px 230px;
    background-color: #1a1a1a;

    @media (max-width: 768px) {
      padding: 85px 10px 0 10px;
    }
  }

  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 220px;
    border-radius: 30px;
    overflow: hidden;
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }

  @media (max-width: 768px) {
    .hero-image {
      height: 180px;
    }
  }
</style>
