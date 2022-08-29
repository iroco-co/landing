<script lang="ts">
  export let size: number;
  export let strokeWidth: number;
</script>

<span>
  <svg class="mail" viewBox="0 0 58.96 85.92" height={size}>
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
</span>
