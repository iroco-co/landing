<script lang="ts">
  export let size: number;
  export let title: string;
</script>

<span class="privacy">
  <svg viewBox="0 0 146.13 229.94" height={size}>
    <title>Privacy</title>
    <g>
      <polyline
        points="122.91 137.19 144.01 158.29 73.07 229.23 2.12 158.29 23.43 136.98"
        fill="none"
        stroke="#00d692"
        stroke-miterlimit="10"
      />
      <polyline
        points="122.7 94.37 144.01 115.68 73.07 186.62 2.12 115.68 23.43 94.37"
        fill="none"
        stroke="#00d692"
        stroke-miterlimit="10"
      />
      <rect
        x="22.9"
        y="22.9"
        width="100.33"
        height="100.33"
        transform="translate(-30.26 73.07) rotate(-45)"
        fill="none"
        stroke="#00b9ff"
        stroke-miterlimit="10"
        stroke-width="3"
      />
      <line
        x1="2.12"
        y1="73.07"
        x2="2.12"
        y2="158.29"
        fill="none"
        stroke="#00d692"
        stroke-miterlimit="10"
      />
      <line
        x1="144.01"
        y1="73.07"
        x2="144.01"
        y2="158.29"
        fill="none"
        stroke="#00d692"
        stroke-miterlimit="10"
      />
      <line
        x1="73.07"
        y1="144.01"
        x2="73.07"
        y2="229.23"
        fill="none"
        stroke="#00d692"
        stroke-miterlimit="10"
      />
    </g>
    <g>
      <circle cx="80.67" cy="61.54" r="11.33" fill="#ff504d" />
      <polygon points="66.16 92 50.21 76.05 72.65 69.56 66.16 92" fill="#ff504d" />
    </g>
  </svg>
  <h4>{title}</h4>
</span>

<style lang="scss">
  .privacy {
    text-transform: uppercase;
    white-space: pre-wrap;
  }
</style>
