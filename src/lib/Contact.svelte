<script lang="ts">
  import { _ } from 'svelte-i18n';

  export let href: string;
</script>

<div class="contact">
  <a {href}>
    {$_('footer.mailto')}
  </a>
</div>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @use 'node_modules/@iroco/ui/lib/constants';

  .contact {
    background: colors.$nightBlue;
    text-align: center;
    font-weight: bold;
    padding: 2em 4em;
    margin: 1.5em auto 0;
    text-transform: initial;
    border-radius: constants.$border-radius;
    width: fit-content;
    a {
      color: colors.$green;
    }
  }
  .contact:hover {
    box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.2);
  }
</style>
