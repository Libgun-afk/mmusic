<script>
  let showSidebar = false;
  let logoSrc = "/image copy 7.png";
  let closeLogoSrc = "/image copy 33.png";

  function toggleSidebar() {
    showSidebar = !showSidebar;
  }
</script>

<div class="sidebar {showSidebar ? 'open' : ''}">
  <div class="head">
    <img src={logoSrc} alt="Лого" />

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="close-btn" on:click={toggleSidebar}>
      <img src={closeLogoSrc} alt="Хаах" />
    </div>
  </div>
  <div class="library">
    <img class="logoo" src="/image copy 7.png" alt="" />

    <div class="library-item">
      <img src="/image copy 8.png" alt="Icon" />
      <div>Нүүр</div>
    </div>
    <div class="library-item">
      <img src="/image copy 14.png" alt="Icon" />
      <div>Хайх</div>
    </div>
  </div>
  <div class="library">
    <h2>Миний сан</h2>
    <div class="library-item">
      <img src="/image copy 10.png" alt="Icon" />
      <div>Сүүлд сонссон</div>
    </div>
    <div class="library-item">
      <img src="/image copy 11.png" alt="Icon" />
      <div>Дуртай</div>
    </div>
    <div class="library-item">
      <img src="/image copy 12.png" alt="Icon" />
      <div>Микс үүсгэх</div>
    </div>
    <div class="library-item">
      <img src="/image copy 13.png" alt="Icon" />
      <div>Муугүй лист</div>
    </div>
    <div class="library-item">
      <img src="/image copy 13.png" alt="Icon" />
      <div>Гоё дуунууд</div>
    </div>
  </div>
</div>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="mobile-menu-btn" on:click={toggleSidebar}>
  <img src="/image copy 33.png" alt="Меню" />
</div>

{#if showSidebar}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="page-overlay" on:click={toggleSidebar}></div>
{/if}

<style lang="scss">
  .sidebar {
    width: 220px;
    min-height: 100vh;
    background-color: #27272a;
    position: fixed;
    top: 0;
    left: -220px;
    z-index: 1000;
    transition: left 0.3s ease-in-out;

    @media (max-width: 768px) {
      top: 70px;
      background-color: #18181b;
    }

    &.open {
      left: 0;
    }

    .head {
      padding: 20px;
      img {
        width: 97px;
        height: auto;
        margin-bottom: 50px;
        display: none;
      }

      .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }

    .logoo {
      width: 88.7px;
      height: 32px;
      padding: 0px 20px 30px;
      cursor: pointer;
    }
    .library {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .library-item {
        display: flex;
        align-items: center;
        height: 40px;
        gap: 10px;
        color: #a1a1aa;
        font-size: 14px;
        font-weight: 600;
        padding: 0 20px;
        cursor: pointer;

        &:hover {
          border-right: 3px solid transparent;
          border-color: white;
        }

        img {
          width: 15px;
          height: 15px;
          object-fit: contain;
        }
      }

      h2 {
        color: #525252;
        font-size: 18px;
        font-weight: bold;
        padding: 0 20px 15px;
        border-bottom: 1px solid #525252;
      }
    }

    .page-overlay {
      display: none;
      position: fixed;
      top: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }

    &.open ~ .page-overlay {
      display: block;
    }
  }

  .mobile-menu-btn {
    display: none;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 2000;
    cursor: pointer;

    img {
      width: 30px;
      height: 30px;
    }

    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (min-width: 769px) {
    .sidebar {
      display: block;
      left: 0;
    }
  }
</style>
