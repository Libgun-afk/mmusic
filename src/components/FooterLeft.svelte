<script>
  let isClicked = false;

  function handleClick() {
    isClicked = !isClicked;
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="footer-left">
  <img
    class="gate-img"
    src="https://s3-alpha-sig.figma.com/img/88cf/546a/c1e303d5190873aa0b1def2a1f0e2272?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gk8GZc-uQ4hpPBbIbyNipL-kZNurcYNtFshMyTI0pSYrx9TP-F~MSZ1hWwTGTbaxnG~uXJHy6eDzrE4~eENrjvUTVSOI1nHg2ul6AZCzrdzRb95xO1d6Cd7FBvDkZirArNNzUHXpg5IgRMdNLUGNiDmTSdPHvdVD4SlbMdMRyZH3fvs8j9yNTGGi8HNocbVozA9FmNRbLdkOTkRa6r9WMZQdVDStG3kiM2eIuYilZDS3aSjrMtNxjj52hG89rw2zsFbK1EbiWDg81CJjH2Etm9nt8wSWai0ug7tyJvj~mykeui-CLIDECj-UM-EKs2-aHRtOQuimdEm81duA0DH0zg__"
    alt=""
  />
  <div class="text-left">
    <div>Mmusic</div>
    <p>Таны сонсож буй дуу</p>
  </div>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="like-container" on:click={handleClick}>
    {#if isClicked}
      <img class="like-img" src="/image copy 19.png" alt="clicked-like" />
      <div class="hover-text">Дургүй</div>
    {:else}
      <img class="like-img" src="/image copy 18.png" alt="like" />
      <div class="hover-text">Дуртай</div>
    {/if}
  </div>

  <div class="setings-container">
    <img class="setings" src="/image copy 20.png" alt="setings" />
    <div class="hover-text">Микс тохиргоо</div>
  </div>
</div>

<style lang="scss">
  .footer-left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .gate-img {
    width: 46px;
    height: 46px;
    object-fit: cover;
    border-radius: 5px;
  }

  .text-left {
    height: 46px;
    margin: 0;

    div {
      display: flex;
      align-items: center;
      font-weight: 400;
      color: #fafafa;
      font-size: 12px;
    }

    p {
      font-weight: 700;
      font-size: 14px;
      color: #fafafa;
    }
  }

  .like-container {
    position: relative;
    display: inline-block;
    width: 17px;
    height: 16px;
    cursor: pointer;

    @media (max-width: 768px) {
      display: none;
    }

    .like-img {
      width: 17px;
      height: 16px;
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    .hover-text {
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #3f3f46;
      color: #fafafa;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 700;
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.3s ease,
        visibility 0.3s ease;
      white-space: nowrap;
    }

    &:hover .hover-text {
      opacity: 1;
      visibility: visible;
    }
  }

  .setings-container {
    position: relative;
    width: 17px;
    height: 17px;
    cursor: pointer;

    @media (max-width: 768px) {
      display: none;
    }

    .setings {
      width: 17px;
      height: 17px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    .hover-text {
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #3f3f46;
      color: #fafafa;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 700;
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.3s ease,
        visibility 0.3s ease;
      white-space: nowrap;
    }

    &:hover .hover-text {
      opacity: 1;
      visibility: visible;
    }
  }
</style>
