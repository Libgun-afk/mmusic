<script>
  let selectedMenu = null;

  // const handleMenuClick = (/** @type {string} */ menu) => {
  //   selectedMenu = menu;
  // };
</script>

<div class="asd">
  <div
    class="head
  "
  >
    <img src="/src/public/image copy 7.png" alt="" />
  </div>
  <div>
    <div>
      <img src="/src/public/image copy 8.png" alt="" />
      <div>Нүүр</div>
    </div>
    <div>
      <img src="/src/public/image copy 14.png" alt="" />
      <div>Хайх</div>
    </div>
  </div>
  <div>
    <h2>Миний сан</h2>
    <div>
      <a href="/LastHeard">A</a>
      <img src="/src/public/image copy 10.png" alt="" />
      <div>Сүүлд сонссон</div>
    </div>
    <div>
      <img src="/src/public/image copy 11.png" alt="" />
      <div>Дуртай</div>
    </div>
    <div>
      <img src="/src/public/image copy 12.png" alt="" />
      <div>Микс үүсгэх</div>
    </div>
    <div>
      <img src="/src/public/image copy 13.png" alt="" />
      <div>Муугүй лист</div>
    </div>
    <div>
      <img src="/src/public/image copy 13.png" alt="" />
      <div>Гоё дуунууд</div>
    </div>
  </div>
</div>

<style lang="scss">
  $box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);

  .asd {
    width: 250px;
    min-height: 100vh;
    background-color: #27272a;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  .asd {
    > div {
      // margin-top: 56px;

      &:first-child {
        img {
          width: 97px;
          height: auto;
          padding-left: 20px;
          padding-top: 20px;
          margin-bottom: 50px;
        }
      }

      &:nth-child(2),
      &:last-child {
        // margin-top: 56px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        div {
          display: flex;
          padding-left: 20px;
          height: 40px;
          align-items: center;
          color: #a1a1aa;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition:
            background-color 0.3s,
            border-right 0.3s;
          border-right: 3px solid transparent;

          &:hover {
            color: #fafafa;
          }

          img {
            width: 15px;
            height: 15px;
          }

          &.selected {
            color: #fafafa;
            // background-color: #525252;
            border-right: 3px solid #fafafa;
          }
        }
      }

      &:last-child h2 {
        color: #525252;
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 10px;
        border-bottom: 1px solid #525252;
        padding-left: 20px;
        padding-top: 30px;
      }
    }
  }
</style>
