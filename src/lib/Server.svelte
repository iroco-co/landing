<script lang="ts">
  interface Props {
    size: string;
    title: string | null;
  }

  let { size, title }: Props = $props();
</script>

<span class="server illustration">
  <svg viewBox="0 0 145.25 167.72" height={size} role="img">
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
  {#if title != null}
    <h4>{title}</h4>
  {/if}
</span>
