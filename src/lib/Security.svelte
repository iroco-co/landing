<script lang="ts">
  export let size: number;
  export let title: string;
</script>

<span class="security">
  <svg
    width="149"
    height={size}
    viewBox="0 0 149 151"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Security</title>
    <g clip-path="url(#clip0_4021_44959)">
      <path
        d="M0.0800178 1.49023V75.02H6.79967e-07C-0.00131286 84.6804 1.90047 94.2466 5.59674 103.172C9.29301 112.097 14.7114 120.207 21.5423 127.038C28.3732 133.869 36.483 139.287 45.4083 142.983C54.3336 146.68 63.8996 148.581 73.56 148.58V75.02V1.49023H0.0800178Z"
        fill="#FF504D"
      />
      <path
        d="M73.5601 1.49023V75.02V148.58C83.2205 148.581 92.7865 146.68 101.712 142.983C110.637 139.287 118.747 133.869 125.578 127.038C132.409 120.207 137.827 112.097 141.523 103.172C145.22 94.2466 147.121 84.6804 147.12 75.02V75.02V1.49023H73.5601Z"
        stroke="#00D692"
        stroke-width="3"
        stroke-miterlimit="10"
      />
    </g>
    <defs>
      <clipPath id="clip0_4021_44959">
        <rect width="148.63" height="150.09" fill="white" />
      </clipPath>
    </defs>
  </svg>
  <h4>{title}</h4>
</span>
