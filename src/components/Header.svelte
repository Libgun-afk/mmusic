<header class="app-header">
  <div class="left-side">
    <div class="img-con">
      <img class="left-img" src="/image copy 4.png" alt="Буцах" />
      <div class="hover-text">Back</div>
    </div>
    <div class="img-con">
      <img class="left-img" src="/image copy 5.png" alt="Цааш" />
      <div class="hover-text">Next</div>
    </div>
  </div>
  <div class="header-content">
    <div class="image-container">
      <img class="main-image" src="/Flag_of_Mongolia.gif" alt="Төрийн дуулал" />
      <span class="image-text-overlay">Монгол улсын төрийн дуулал</span>
      <div class="overlay-button">
        <img class="button-icon" src="/image copy.png" alt="Icon" />
      </div>
    </div>
    <div class="notf-btn">
      <img class="notf-icon" src="/image copy 2.png" alt="Icon" />
    </div>
    <div class="user-info">
      <div class="user-details">
        <img class="user-img" src="/image copy 3.png" alt="user" />
        <div class="user-text">Хэрэглэгч</div>
      </div>
      <img class="img" src="/image copy 6.png" alt="" />
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
  $img-width: 16px;
  $img-height: 16px;
  $box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);

  .app-header {
    width: 100%;
    height: 71px;
    position: fixed;
    right: 0;
    padding: 0 15px;
    background-color: #18181b;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      justify-content: flex-end;
    }
  }

  .left-side {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-left: 275px;

    @media (max-width: 768px) {
      display: none;
    }

    .img-con {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .left-img {
        width: 10.5px;
        height: 17.48px;
        cursor: pointer;
        filter: brightness(0.4);
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }

      .hover-text {
        position: absolute;
        bottom: -30px;
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
      }

      &:hover .hover-text {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-right: 20px;
    @media (max-width: 768px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

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
      cursor: pointer;
      @media (max-width: 768px) {
        display: none;
      }

      .main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        transform: scale(1.2);
        filter: brightness(0.6);
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

      .button-icon {
        width: $icon-size;
        height: $icon-size;
        object-fit: contain;
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
      cursor: pointer;

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
      cursor: pointer;

      .user-details {
        display: flex;
        align-items: center;
        gap: 4px;
        padding-left: 3px;

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
          display: block;
        }
      }

      .img {
        width: 10px;
        height: 6px;
        display: flex;
        padding-right: 10px;
      }
    }
  }

  @media (max-width: 768px) {
    .app-header {
      padding: 10px;
      height: 50px;
    }

    .left-side {
      display: none;
    }

    .header-content {
      gap: 10px;
      padding-right: 10px;
    }

    .notf-btn,
    .user-info {
      margin-left: 10px;
    }

    .user-img {
      display: block;
      width: 30px;
      height: 30px;
      margin-left: 0;
      position: absolute;
      right: 15px;
    }
  }
</style>
