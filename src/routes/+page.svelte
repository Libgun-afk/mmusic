<script>
  // @ts-nocheck

  import FeaturedSection from "./home/FeaturedSection.svelte";
  import HeroImage from "./home/HeroImage.svelte";
</script>

<div class="home-page">
  <HeroImage />
  <FeaturedSection title="Онцлох дуу" />
  <!-- <FeaturedSection title="Таны хамгийн их сонссон" /> -->
</div>

<style>
  /* .home-page {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px;
    background-color: #1a1a1a;
    color: #f3f4f6;
    scroll-behavior: auto;
  } */
  .home-page {
    height: auto;
    /* width: 5/3; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px;
    background-color: #18181b;
    color: #f3f4f6;
    scroll-behavior: auto;
    margin-top: 60px;
  }
  /* .home-page {
    margin-left: 250px;
    margin-top: 60px;
    padding: 16px;
    background-color: #1a1a1a;
    color: #f3f4f6;
    min-height: 100vh;
    scroll-behavior: smooth;
  } */
</style>
