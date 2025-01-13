<div class="right">
  <div class="text">Д.Үг</div>
  <img class="list" src="/image copy 22.png" alt="" />
  <img class="volume" src="/image copy 23.png" alt="" />
  <div class="list-section">
    <img class="list" src="/image copy 32.png" alt="" />
    <div class="hover-text">Жагсаалт</div>
  </div>
</div>

<style lang="scss">
  $primary-color: #3f3f46;
  $secondary-color: #fafafa;
  $text-size: 12px;
  $font-weight-normal: 300;
  $font-weight-bold: 700;
  $spacing: 5px 10px;

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
      display: none;
    }

    .text {
      font-weight: $font-weight-normal;
      font-size: $text-size;
      cursor: pointer;
    }

    .list,
    .volume {
      cursor: pointer;
    }

    .list {
      width: 15px;
      height: 13.34px;
    }

    .volume {
      width: 78px;
      height: 5px;
    }

    .list-section {
      cursor: pointer;
      position: relative;
      display: inline-block;

      .hover-text {
        position: absolute;
        top: -30px;
        left: -70%;
        transform: translateX(-50%);
        background-color: $primary-color;
        color: $secondary-color;
        padding: $spacing;
        border-radius: 4px;
        font-size: $text-size;
        font-weight: $font-weight-bold;
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
  }
</style>
