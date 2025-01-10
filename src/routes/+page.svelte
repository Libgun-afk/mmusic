<script>
  import FeaturedSection from "../components/FeaturedSection.svelte";
</script>

<div class="home-page">
  <FeaturedSection />

  <!-- <FeaturedSection title="Таны хамгийн их сонссон" /> -->
</div>

<style>
  .home-page {
    /* width: 80%; */
    /* height: auto; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px;
    background-color: #1a1a1a;
    color: #f3f4f6;

    /* scroll-behavior: smooth; */
  }
  /* .home-page {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px;
    background-color: #18181b;
    color: #f3f4f6;
    scroll-behavior: auto;
  } */
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
