<script lang="ts">
  export let size: number;
  export let strokeWidth: number;
  export let title: string | null = null;
</script>

<span class="mail">
  <svg viewBox="0 0 58.96 85.92" height={size}>
    <title>Mail</title>
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
  <h4 class:hidden={title == null ? 'hidden' : ''}>{title}</h4>
</span>

<style lang="scss">
  @import 'node_modules/@iroco/ui/lib/containers';

  .mail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include screen-laptop() {
      height: 100%;
    }

    h4 {
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-top: 50px;
      text-align: center;
      line-height: 2.2em;
      white-space: pre-wrap;
      transform: translateY(-2.2em);
      margin-top: 6em;

      @include screen-tablet-S() {
        font-size: 0.9em;
        margin-top: 5em;
      }

      @include screen-mobile-L() {
        margin-top: 4em;
      }
    }
  }
  .hidden {
    display: none;
  }
</style>
