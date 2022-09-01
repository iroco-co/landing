<script lang="ts">
  import { _ } from 'svelte-i18n';
  export let size: number;
</script>

<span class="chart">
  <title>Subscription Chart</title>
  <svg
    preserveAspectRatio="xMaxYMin meet"
    viewBox="0 0 950 400"
    height={size}
    width={(5 * size) / 3}
  >
    <g data-z-index="3">
      <g data-z-index=".1" stroke-linejoin="round">
        <path fill="#FFE032" d="M324.977 82.2a114.8 114.8 0 0 1 109.174 79.233L325 197z" />
        <path fill="#ff504d" d="M434.187 161.542a114.8 114.8 0 0 1 4.219 53.294L325 197z" />
        <path fill="#00B9FF" d="M438.388 214.95A114.8 114.8 0 0 1 210.2 197.068L325 197z" />
        <path fill="#00d692" d="M203.2 189.953A114.8 114.8 0 0 1 317.84 75.2L318 190z" />
      </g>
    </g>
    <g data-z-index="6">
      <path
        fill="none"
        stroke="#ffe032"
        d="M415.111 79.854c-5 0-15.58 14.563-19.107 19.417l-3.526 4.854"
      />
      <path
        fill="none"
        stroke="#ff504d"
        d="M474.354 185.64c-5 0-22.945 1.411-28.926 1.882l-5.982.47"
      />
      <path
        fill="none"
        stroke="#00b9ff"
        d="M308.64 341.354c5 0 6.411-17.945 6.882-23.926l.47-5.982"
      />
      <path
        fill="none"
        stroke="#00d692"
        d="M217.61 94.61c5 0 17.729 12.729 21.972 16.972l4.242 4.242"
      />
      <g>
        <text x="5" data-z-index="1" y="16" transform="translate(420 70)" fill="#f2ebe3">
          <tspan>{$_('signup.faq.questions.subscription.chart.tax.title')}</tspan>
          &nbsp;{$_('signup.faq.questions.subscription.chart.tax.percentage')}
        </text>
      </g>
      <g>
        <text
          x="5"
          data-z-index="1"
          y="16"
          transform="translate(479 176)"
          fill="#f2ebe3"
          font-fontSize="1em"
        >
          <tspan>{$_('signup.faq.questions.subscription.chart.payment.title')}</tspan>
          &nbsp;{$_('signup.faq.questions.subscription.chart.payment.percentage')}
        </text>
      </g>
      <g>
        <text
          x="5"
          data-z-index="1"
          y="16"
          transform="translate(182 347)"
          fill="#f2ebe3"
          font-fontSize="1rem"
        >
          <tspan>{$_('signup.faq.questions.subscription.chart.hosting.title')}</tspan>
          &nbsp;{$_('signup.faq.questions.subscription.chart.hosting.percentage')}
        </text>
      </g>
      <g>
        <text
          x="5"
          data-z-index="1"
          y="16"
          transform="translate(90 85)"
          fill="#f2ebe3"
          font-fontSize="1rem"
        >
          <tspan>{$_('signup.faq.questions.subscription.chart.iroco.title')}</tspan>
          &nbsp;{$_('signup.faq.questions.subscription.chart.iroco.percentage')}
        </text>
      </g>
    </g>
  </svg>
</span>

<style>
  .chart {
    width: 100%;
    display: block;
    margin: auto;
  }
</style>
