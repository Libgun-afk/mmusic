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
    width: 100vw;
    display: flex;
    background: #18181b;
  }

  .sidebar {
    display: flex;
    width: 20%;
    background-color: #18181b;
  }

  .main-content {
    display: flex;
    // width: 80%;
    flex-direction: column;
    overflow-y: auto;
    background-color: #2d2d2d;
  }

  .content {
    width: 80%;
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
      margin-top: 60px;
      gap: 10px;
    }
  }
</style>
