<script>
</script>

<header class="app-header">
  <div class="left-side">
    <img class="left-img" src="/src/public/image copy 4.png" alt="Буцах" />
    <img class="left-img" src="/src/public/image copy 5.png" alt="Цааш" />
  </div>
  <div class="header-content">
    <div class="image-container">
      <img
        class="main-image"
        src="/src/public/Flag_of_Mongolia.gif"
        alt="Төрийн дуулал"
      />
      <span class="image-text-overlay">Монгол улсын төрийн дуулал</span>
      <div class="overlay-button">
        <img class="button-icon" src="/src/public/image copy.png" alt="Icon" />
      </div>
    </div>
    <div class="notf-btn">
      <img class="notf-icon" src="/src/public/image copy 2.png" alt="Icon" />
    </div>
    <div class="user-info">
      <div class="user-details">
        <img class="user-img" src="/src/public/image copy 3.png" alt="user" />
        <div class="user-text">Хэрэглэгч</div>
      </div>
      <img class="img" src="/src/public/image copy 6.png" alt="" />
    </div>
  </div>
</header>

<style lang="scss">
  $primary-color: #fff;
  $background-color: #27272a;
  $text-color: #f3f4f6;
  $height: 45px;
  $border-radius: 50px;
  $button-size: 38px;
  $icon-size: 20px;
  $gap: 12px;
  $img-size: 38px;
  $img-width: 10.5px;
  $img-height: 17.48px;
  $box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);

  .app-header {
    width: 100%;
    position: fixed;
    right: 0px;
    height: 80px;
    padding: 0px 10px;
    background-color: #18181b;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  }
  .left-side {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding-left: 290px;

    .left-img {
      width: $img-width;
      height: $img-height;
      cursor: pointer;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-right: 20px;

    .image-container {
      position: relative;
      width: 300px;
      height: $height;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      border-radius: $border-radius;
      box-shadow: $box-shadow;

      .main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }

      .image-text-overlay {
        position: absolute;
        width: 222px;
        height: 21px;
        color: $text-color;
        font-size: 14px;
        font-weight: 600;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        z-index: 10;
        left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
      }
    }

    .overlay-button {
      position: absolute;
      width: $button-size;
      height: $button-size;
      background-color: #6b7280;
      border-radius: 100px;
      right: 3px;
      display: flex;
      justify-content: center;
      align-items: center;

      .button-icon {
        width: $icon-size;
        height: $icon-size;
        object-fit: contain;
      }
    }
  }

  .notf-btn {
    width: $height;
    height: $height;
    background-color: #262626;
    border-radius: $border-radius;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: $box-shadow;

    .notf-icon {
      width: $icon-size;
      height: $icon-size;
      object-fit: contain;
    }
  }

  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $background-color;
    border-radius: $border-radius;
    width: 216px;
    height: $height;
    gap: $gap;
    margin-left: 5px;
    box-shadow: $box-shadow;
  }

  .user-details {
    display: flex;
    align-items: center;
    gap: 4px;
    padding-left: 3px;
  }

  .user-text {
    color: #e4e4e7;
    font-size: 14px;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .user-img {
    width: $img-size;
    height: $img-size;
    border-radius: $border-radius;
  }

  .img {
    width: 10px;
    height: 6px;
    display: flex;
    padding-right: 10px;
  }
  @media (max-width: 768px) {
    .app-header {
      height: 50px;
      padding: 10px;
    }
  }
</style>
