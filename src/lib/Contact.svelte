<script lang="ts">
  import { _ } from 'svelte-i18n';
</script>

<div class="contact">
  <a href="mailto:hello@iroco.fr">
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
    a {
      color: colors.$green;
    }
  }
</style>
