<script>
  // @ts-nocheck

  import FeaturedSection from "./home/FeaturedSection.svelte";
  import HeroImage from "./home/HeroImage.svelte";
</script>

<div class="home-page">
  <HeroImage />
  <FeaturedSection title="Онцлох дуу" />
  <FeaturedSection title="Таны хамгийн их сонссон" />
</div>

<style>
  .home-page {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px;
    background-color: #1a1a1a;
    color: #f3f4f6;
  }
</style>
