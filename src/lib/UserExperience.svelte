<script lang="ts">
  export let title: string;
</script>

<span class="user-experience">
  <svg
    width="103"
    height="202"
    viewBox="0 0 103 202"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>User Experience</title>
    <g clip-path="url(#clip0_4021_44967)">
      <path
        d="M81.83 1.5H20.31C9.92152 1.5 1.5 9.92152 1.5 20.31V180.97C1.5 191.358 9.92152 199.78 20.31 199.78H81.83C92.2185 199.78 100.64 191.358 100.64 180.97V20.31C100.64 9.92152 92.2185 1.5 81.83 1.5Z"
        fill="#211D28"
        stroke="#FFE032"
        stroke-width="3"
        stroke-miterlimit="10"
      />
    </g>
    <defs>
      <clipPath id="clip0_4021_44967">
        <rect width="102.14" height="201.28" fill="white" />
      </clipPath>
    </defs>
  </svg>
  <h4>{title}</h4>
</span>

<style lang="scss">
  @import 'node_modules/@iroco/ui/lib/containers';

  .user-experience {
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
