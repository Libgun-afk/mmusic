<script>
  let repeatState = 0;
  let isShuffle = false;

  function handleRepeatClick() {
    repeatState = (repeatState + 1) % 3;
  }

  function handleShuffleClick() {
    isShuffle = !isShuffle;
  }
</script>

<div class="mid">
  <img class="back" src="/image copy 21.png" alt="Previous" />
  <img class="pause" src="/image copy 21.png" alt="Pause/Play" />
  <img class="next" src="/image copy 21.png" alt="Next" />
  <div class="times">02:56</div>
  <img class="time" src="/image copy 25.png" alt="Timeline" />
  <div class="times">03:48</div>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="repeat-section" on:click={handleRepeatClick}>
    <img class="repeat" src="/image copy 21.png" alt="Repeat Button" />
    <div class="hover-text">
      {repeatState === 0
        ? "Давтах"
        : repeatState === 1
          ? "Давталт солих"
          : "Давталт болиулах"}
    </div>
  </div>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="shuffle-section" on:click={handleShuffleClick}>
    <img class="shuffle" src="/image copy 21.png" alt="Shuffle Button" />
    <div class="hover-text">{isShuffle ? "Unshuffle" : "Shuffle"}</div>
  </div>
</div>

<style lang="scss">
  .mid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .back,
  .next,
  .pause {
    width: 15px;
    height: 16px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .pause {
    width: 20.43px;
    height: 24px;
  }

  .back:hover,
  .next:hover,
  .pause:hover {
    transform: scale(1.1);
  }

  .time,
  .times,
  .repeat,
  .shuffle {
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    .back,
    .repeat,
    .shuffle,
    .time,
    .times {
      display: none;
    }
  }

  .time {
    width: 461px;
    height: 6px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .times {
    font-weight: 400;
    font-size: 14px;
    color: #fafafa;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .repeat-section,
  .shuffle-section {
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: transform 0.3s ease;
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

  .repeat-section:hover .hover-text,
  .shuffle-section:hover .hover-text {
    opacity: 1;
    visibility: visible;
  }
</style>
