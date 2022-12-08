<script lang="ts">
  export let size: number;
  export let title: string = null;
</script>

<span class="green-host illustration">
  <svg viewBox="0 0 146.13 229.94" height={size}>
    <title>Green Host</title>
    <rect
      stroke-miterlimit="10"
      stroke="#00d692"
      fill="#211d28"
      x="22.9"
      y="108.12"
      width="100.33"
      height="100.33"
      transform="translate(-90.53 98.03) rotate(-45)"
    />
    <rect
      stroke-miterlimit="10"
      stroke="#00d692"
      fill="#211d28"
      x="22.9"
      y="65.51"
      width="100.33"
      height="100.33"
      transform="translate(-60.4 85.55) rotate(-45)"
    />
    <rect
      stroke="#00b9ff"
      stroke-width="3"
      fill="#211d28"
      stroke-miterlimit="10"
      x="22.9"
      y="22.9"
      width="100.33"
      height="100.33"
      transform="translate(-30.26 73.07) rotate(-45)"
    />
    <line
      stroke="#00d692"
      fill="#211d28"
      stroke-miterlimit="10"
      x1="2.12"
      y1="73.07"
      x2="2.12"
      y2="158.29"
    />
    <line
      fill="#211d28"
      stroke="#00d692"
      stroke-miterlimit="10"
      x1="144.01"
      y1="73.07"
      x2="144.01"
      y2="158.29"
    />
    <line
      fill="#211d28"
      stroke="#00d692"
      stroke-miterlimit="10"
      x1="73.07"
      y1="144.01"
      x2="73.07"
      y2="229.23"
    />
    <g>
      <path
        fill="#00d692"
        d="M73.07,42.93H103.2A30.14,30.14,0,0,1,73.07,73.07Z"
      />
      <path
        fill="#00d692"
        d="M73.07,42.93H103.2V12.79A30.13,30.13,0,0,0,73.07,42.93Z"
      />
    </g>
  </svg>
  {#if title != null}
    <h4>{title}</h4>
  {/if}
</span>
