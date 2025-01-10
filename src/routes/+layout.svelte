<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import Sidebar from "../components/sidebar.svelte";
</script>

<div class="layout">
  <Header />
  <aside class="sidebar">
    <Sidebar />
  </aside>

  <div class="content">
    <main class="main-content">
      <slot />
    </main>
  </div>
  <aside>
    <Footer />
  </aside>
</div>

<style lang="scss">
  .layout {
    width: 100vw;
    display: flex;
    background-color: white;
  }

  .sidebar {
    display: flex;
    background-color: #18181b;
    background-color: white;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background-color: #2d2d2d;
    overflow: hidden;
  }

  // .app-footer {
  //   width: 100%;
  //   background-color: #f3f4f6;
  //   color: #f3f4f6;
  //   text-align: center;
  //   padding: 16px;
  //   border-top: 1px solid #444;
  // }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #18181b;
  }

  // .app-footer {
  //   background-color: #27272a;
  //   color: #f3f4f6;
  //   text-align: center;
  //   padding: 16px;
  //   border-top: 1px solid #444;
  //   margin-top: auto;
  // }

  @media (max-width: 768px) {
    .sidebar {
      width: 100vw;
      order: 1;
    }

    .main-content {
      padding: 10px;
    }
  }
</style>
