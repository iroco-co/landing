<script lang="ts">
  interface Props {
    size: string;
    title: string | null;
  }

  let { size, title }: Props = $props();
</script>

<span class="energy illustration">
  <svg viewBox="0 0 134.87 232.95" height={size} role="img">
    <title>Energy</title>
    <rect
      fill="#00d692"
      stroke-miterlimit="10"
      stroke="#211d28"
      stroke-width="0.67px"
      x="39.85"
      y="0.34"
      width="86.71"
      height="19.47"
    />
    <rect
      fill="#211d28"
      stroke="#00d692"
      stroke-miterlimit="10"
      x="126.57"
      y="6.17"
      width="7.81"
      height="7.81"
    />
    <path
      fill="transparent"
      stroke="#00d692"
      stroke-miterlimit="10"
      d="M39.86,88.78h0A39.36,39.36,0,0,1,.5,49.42h0A39.35,39.35,0,0,1,39.85,10.07h0"
    />
    <rect
      fill="#211d28"
      stroke="#ffe032"
      stroke-width="3"
      stroke-miterlimit="10"
      x="39.85"
      y="58.03"
      width="86.71"
      height="173.42"
      rx="16.45"
    />
    <g>
      <path
        fill="white"
        d="M87.11,148.55a6.49,6.49,0,0,0-1.6.25,1.09,1.09,0,0,0-.69.7,5.29,5.29,0,0,0-.19,1.69v15.18a5.22,5.22,0,0,0,.19,1.68,1.11,1.11,0,0,0,.69.71,6.13,6.13,0,0,0,1.6.24v.61c-.94-.06-2.23-.09-3.88-.09s-3.07,0-3.92.09V169a6.13,6.13,0,0,0,1.6-.24,1.11,1.11,0,0,0,.69-.71,5.22,5.22,0,0,0,.19-1.68V151.19a5.29,5.29,0,0,0-.19-1.69,1.09,1.09,0,0,0-.69-.7,6.49,6.49,0,0,0-1.6-.25v-.61c.85.06,2.16.09,3.92.09s2.92,0,3.88-.09Z"
      />
      <path
        fill="#00d692"
        d="M75.53,159.36a20.46,20.46,0,1,1,15.36,0l-1.48-3.64a16.53,16.53,0,1,0-12.4,0Z"
      />
    </g>
  </svg>
  {#if title != null}
    <h4>{title}</h4>
  {/if}
</span>
