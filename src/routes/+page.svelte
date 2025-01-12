<script>
  import FeaturedSection from "../components/FeaturedSection.svelte";
</script>

<div class="home-page">
  <FeaturedSection />
</div>

<style>
  .home-page {
    width: 100%;
    background-color: #1a1a1a;
    color: #f3f4f6;
    flex-grow: 1;
    @media (max-width: 768px) {
      gap: 10px;
    }
  }
</style>
