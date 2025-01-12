<script lang="ts">
  import Footer from "../components/FooterLeft.svelte";
  import FooterMid from "../components/FooterMid.svelte";
  import FooterRight from "../components/FooterRight.svelte";
  import Header from "../components/Header.svelte";
  import Sidebar from "../components/Sidebar.svelte";
</script>

<div>
  <Header />
  <Sidebar />

  <main>
    <slot />
  </main>

  <footer>
    <Footer />
    <FooterMid />
    <FooterRight />
  </footer>
</div>

<style lang="scss">
  div {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background-color: #2d2d2d;
    flex-grow: 1;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  footer {
    display: flex;
    filter: brightness(0.8);
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(90deg, #0061ff 10%, #00235b 30%);
    padding: 0 20px;
    z-index: 2500;
    height: 130px;

    @media (max-width: 768px) {
      height: 100px;
      padding-right: 0 20px;
    }
  }
</style>
