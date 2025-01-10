<div class="asd">
  <div>
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
    <div class="as">
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

  // .asd {
  //   display: flex;
  //   width: 5/2;
  //   flex-direction: column;
  //   min-height: 100vh;
  //   background-color: #27272a;
  //   position: fixed;
  //   padding: 15px;

  //   z-index: 1000;
  //   // box-shadow: $box-shadow;
  // }

  .asd {
    width: 250px; /* Sidebar-ийн тогтмол өргөн */
    min-height: 100vh;
    background-color: #27272a;
    position: fixed; /* Байнгын байрлалтай болгоно */
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 15px;
  }
  .asd {
    > div {
      margin-bottom: 16px;

      &:first-child {
        img {
          width: 97px;
          height: auto;
        }
      }

      &:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 16px;

        div {
          display: flex;
          align-items: center;
          color: #a1a1aa;
          font-size: 14px;
          font-weight: 600;
          gap: 12px;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.3s;
          & :hover {
            color: #fafafa;
          }

          img {
            width: 15px;
            height: 15px;
          }
        }
      }

      &:last-child {
        h2 {
          color: #525252;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 16px;
          padding-bottom: 15px;
          border-bottom: 1px solid #525252;
        }

        > div {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #a1a1aa;
          font-size: 14px;
          font-weight: 600;
          padding: 8px 0;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            color: #fafafa;
            border-radius: 8px;
          }

          img {
            width: 15px;
            height: 15px;
            color: #fafafa;
          }
        }
      }
    }
  }
</style>
