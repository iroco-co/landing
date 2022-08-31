<script lang="ts">
  export let title: string;
</script>

<span class="zen">
  <svg
    width="211"
    height="106"
    viewBox="0 0 211 106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Zen</title>
    <g clip-path="url(#clip0_4021_44969)">
      <path
        d="M140.41 0C149.719 0 158.647 3.69799 165.229 10.2805C171.812 16.863 175.51 25.7908 175.51 35.0999H140.41V0Z"
        fill="#00D692"
      />
      <path d="M175.51 35.1001H140.41V70.0701H175.51V35.1001Z" fill="#00D692" />
      <path
        d="M210.62 70.0698V0.129883H175.51V70.0698C175.51 79.3816 179.209 88.3121 185.793 94.8965C192.378 101.481 201.308 105.18 210.62 105.18V70.0698Z"
        fill="white"
      />
      <path d="M175.51 70.0701H140.41V105.04H175.51V70.0701Z" fill="#00D692" />
      <path
        d="M70.2101 35.0999C70.2101 44.4116 66.511 53.3421 59.9266 59.9265C53.3422 66.5109 44.4118 70.21 35.1001 70.21V35.0999H70.2101Z"
        fill="white"
      />
      <path
        d="M0 70.21C-3.77623e-07 60.8999 3.69773 51.9711 10.28 45.387C16.8622 38.8028 25.79 35.1025 35.1 35.0999V70.21H0Z"
        fill="#00D692"
      />
      <path d="M70.2001 0.129883H35.1001V35.0999H70.2001V0.129883Z" fill="white" />
      <path d="M70.2001 70.2H35.1001V105.17H70.2001V70.2Z" fill="#00D692" />
      <path d="M35.1 0.129883H0V35.0999H35.1V0.129883Z" fill="white" />
      <path d="M35.1 70.0701H0V105.04H35.1V70.0701Z" fill="#00D692" />
      <path
        d="M105.31 70.21C109.92 70.21 114.485 69.3017 118.745 67.5371C123.004 65.7725 126.874 63.1862 130.133 59.9258C133.393 56.6654 135.978 52.7948 137.741 48.5352C139.504 44.2755 140.411 39.7101 140.41 35.0999H105.31V70.21Z"
        fill="white"
      />
      <path
        d="M105.31 105.31C114.619 105.31 123.547 101.612 130.13 95.0293C136.712 88.4468 140.41 79.5191 140.41 70.21H105.31V105.31Z"
        fill="#00D692"
      />
      <path
        d="M140.41 35.0999C140.41 25.7908 136.712 16.863 130.13 10.2805C123.547 3.69799 114.619 0 105.31 0V35.0999H140.41Z"
        fill="#00D692"
      />
      <path
        d="M70.21 35.0999H105.31V0C96.0008 0 87.073 3.69799 80.4905 10.2805C73.908 16.863 70.21 25.7908 70.21 35.0999Z"
        fill="#00D692"
      />
      <path
        d="M105.31 105.18V70.0698H70.21C70.2086 74.6801 71.1156 79.2454 72.8789 83.5051C74.6423 87.7648 77.2275 91.6354 80.4869 94.8958C83.7464 98.1561 87.6162 100.743 91.8754 102.507C96.1346 104.272 100.7 105.18 105.31 105.18Z"
        fill="#00D692"
      />
      <path d="M105.3 35.1001H70.2V70.0701H105.3V35.1001Z" fill="#00D692" />
    </g>
    <defs>
      <clipPath id="clip0_4021_44969">
        <rect width="210.61" height="105.31" fill="white" />
      </clipPath>
    </defs>
  </svg>
  <h4>{title}</h4>
</span>

<style lang="scss">
  @import 'node_modules/@iroco/ui/lib/containers';

  .zen {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

    > svg {
      transform: translateY(50%);

      @include screen-laptop() {
        transform: translateY(0%);
        align-self: center;
      }
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
