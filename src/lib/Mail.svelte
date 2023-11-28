<script lang="ts">
  export let size: number;
  export let strokeWidth: number;
  export let title: string | null = null;
  export let orientation: "vertical" | "horizontal" = "horizontal";
</script>

<div class="mail illustration {orientation}">
  <svg viewBox="0 0 58.96 85.92" height={size} role="img">
    <title>Mail Icon</title>
    <rect
      x="1.95"
      y="28.91"
      width="55.06"
      height="55.06"
      fill="none"
      stroke="#00d692"
      stroke-linejoin="bevel"
      stroke-width={strokeWidth}
    />
    <rect
      x="10.01"
      y="9.44"
      width="38.94"
      height="38.94"
      transform="translate(-11.81 29.31) rotate(-45)"
      fill="none"
      stroke="#fff"
      stroke-linejoin="bevel"
      stroke-width={strokeWidth}
    />
  </svg>
  {#if title != null}
    <h4>{title}</h4>
  {/if}
</div>

<style lang="scss">
  @import "node_modules/@iroco/ui/dist/scss/containers";
  .mail {
    display: flex;
  }
  .horizontal {
    flex-direction: row;
    gap: 2em;
    h4 {
      text-align: left;
    }
  }
  @include screen-tablet {
    .mail {
      flex-direction: column;
      gap: 0;
      h4 {
        text-align: center;
      }
    }
  }
</style>
