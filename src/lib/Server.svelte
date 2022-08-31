<script lang="ts">
  export let size: number;
  export let title: string;
</script>

<span class="server">
  <svg viewBox="0 0 145.25 167.72" height={size}>
    <title>Server</title>
    <line
      x1="72.29"
      y1="83.86"
      x2="143.75"
      y2="42.8"
      fill="none"
      stroke="#fff"
      stroke-miterlimit="10"
      stroke-width="3"
    />
    <line
      x1="1.17"
      y1="42.8"
      x2="72.29"
      y2="83.86"
      fill="none"
      stroke="#00b9ff"
      stroke-miterlimit="10"
      stroke-width="3"
    />
    <line
      x1="72.29"
      y1="83.86"
      x2="72.29"
      y2="165.99"
      fill="none"
      stroke="#ff504d"
      stroke-miterlimit="10"
      stroke-width="3"
    />
    <polygon
      points="72.63 1.73 1.5 42.8 1.5 124.93 72.63 165.99 143.75 124.93 143.75 42.8 72.63 1.73"
      fill="none"
      stroke="#00d692"
      stroke-miterlimit="10"
      stroke-width="3"
    />
  </svg>
  <h4>{title}</h4>
</span>

<style lang="scss">
  @import 'node_modules/@iroco/ui/lib/containers';

  .server {
    @include screen-laptop() {
      height: 100%;
      margin-top: 4em;
    }

    @include screen-tablet() {
      margin-top: 3em;
    }

    @include screen-tablet-S() {
      margin-top: 2em;
    }

    > h4 {
      text-transform: uppercase;
      letter-spacing: 0.2em;
      margin-top: 50px;
      text-align: center;
      line-height: 2.2em;
      white-space: pre-wrap;

      @include screen-tablet-S() {
        font-size: 0.9em;
        margin-top: 40px;
      }

      @include screen-mobile-L() {
        margin-top: 30px;
      }
    }
  }
</style>
