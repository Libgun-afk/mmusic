<script>
  export let name;
  export let image;
</script>

<div class="artist">
  <img src={image} alt={name} />
  <p>{name}</p>
</div>

<style>
  .artist {
    flex: 0 0 auto;
    padding-bottom: 12px;
    text-align: center;
    min-width: 200px;
    max-width: 200px;
  }

  .artist img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  .artist p {
    color: #f3f4f6;
    font-size: 14px;
    font-weight: 600;
    margin: 0;
  }
</style>
