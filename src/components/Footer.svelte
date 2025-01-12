<script>
  import FooterLeft from "./FooterLeft.svelte";
  import FooterMid from "./FooterMid.svelte";
  import FooterRight from "./FooterRight.svelte";
</script>

<div class="footer">
  <FooterLeft />
  <FooterMid />
  <FooterRight />
</div>

<style lang="scss">
  .footer {
    // background-color: #00235b;
    background: linear-gradient(90deg, #0061ff 10%, #00235b 30%);
    // filter: brightness(0.8);
    width: 100%;
    height: 62px;
    position: fixed;
    z-index: 2000;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
  }
</style>
