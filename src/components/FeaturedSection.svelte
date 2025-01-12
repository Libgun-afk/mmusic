<!-- <script>
  import NewArtist from "./NewArtist.svelte";
  import NewCreation from "./NewCreation.svelte";
  import NewHot from "./NewHot.svelte";

  const src = "/src/public/image copy 9.png";
</script>

<div class="featured-section">
  <div class="hero-image">
    <img {src} alt="hero" />
  </div>

  <NewHot />
  <NewCreation />
  <NewArtist />
</div>

<style>
  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 220px;
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }

  .featured-section {
    display: flex;
    flex-direction: column;
    padding: 65px 15px 0 240px;
    background-color: #1a1a1a;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      background-color: #1a1a1a;
    }
  }

  /* .featured-section h2 {
    color: #fffffff6;
    font-size: larger;
    font-weight: 700;
    margin: 12px 0;
  }

  .scrollable-row {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 20px 0;
    border-top: 1px solid #52525b;
  }

  .artist {
    flex: 0 0 auto;
    text-align: center;
    min-width: 200px;
    max-width: 200px;
  }

  .artist img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  .artist-rounded img {
    border-radius: 50%;
    transition: filter 0.3s ease;
    cursor: pointer;
  }

  .artist-rounded:hover img {
    filter: brightness(0.5);
  }

  .artist-overlay {
    position: relative;
  }

  .artist-overlay img {
    transition: filter 0.3s ease;
    cursor: pointer;
  }

  .artist-overlay:hover img {
    filter: brightness(0.5);
  }

  .overlay-button {
    position: absolute;
    top: 65%;
    left: 83%;
    transform: translate(-50%, -50%);
    width: 45px;
    height: 45px;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
  }

  .artist-overlay:hover .overlay-button {
    display: flex;
    cursor: pointer;
  }

  .play-button {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  .artist p {
    color: #f3f4f6;
    font-size: 14px;
    font-weight: 600;
    margin: 8px 0 0;
  } */
</style> -->

<script>
  import NewArtist from "./NewArtist.svelte";
  import NewCreation from "./NewCreation.svelte";
  import NewHot from "./NewHot.svelte";

  const src = "/src/public/image copy 9.png";
</script>

<div class="featured-section">
  <div class="hero-image">
    <img {src} alt="hero" />
  </div>

  <NewHot />
  <NewCreation />
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
    overflow: hidden; /* Ensure content doesn't overflow */
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }

  /* Media queries to adjust for smaller screens */
  @media (max-width: 768px) {
    .hero-image {
      height: 180px; /* Adjust the hero image size for smaller screens */
    }
  }
</style>
