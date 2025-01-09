<script>
  import Header from "../components/Header.svelte";
  import Sidebar from "../components/sidebar.svelte";
</script>

<div class="layout">
  <aside class="sidebar">
    <Sidebar />
  </aside>

  <div class="content">
    <Header />
    <main class="main-content">
      <slot />
    </main>
    <!-- <footer class="app-footer">footer</footer> -->
  </div>
</div>

<style lang="scss">
  .layout {
    display: flex;
    background: #18181b;
  }

  .side-bar {
    display: flex;
    width: 30%;
    background-color: #27272a;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background-color: #2d2d2d;
  }

  .content {
    width: 70%;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #18181b;
  }

  // .app-footer {
  //   background-color: #27272a;
  //   color: #f3f4f6;
  //   text-align: center;
  //   padding: 16px;
  //   border-top: 1px solid #444;
  //   margin-top: auto;
  // }

  /* Optional: Add responsiveness */
  @media (max-width: 768px) {
    .side-bar {
      width: 100%;
      order: 1;
    }

    .main-content {
      padding: 10px;
    }

    .main {
      gap: 10px;
    }
  }
</style>
