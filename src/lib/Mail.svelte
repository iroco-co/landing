<script lang="ts">
  interface Props {
    size: number;
    strokeWidth: number;
    title?: string | null;
    orientation?: "vertical" | "horizontal";
  }

  let {
    size,
    strokeWidth,
    title = null,
    orientation = "horizontal"
  }: Props = $props();
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
  @use "@iroco/ui/scss/containers.scss";
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
  @include containers.screen-tablet {
    .mail {
      flex-direction: column;
      gap: 0;
      h4 {
        text-align: center;
      }
    }
  }
</style>
