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
  @import 'node_modules/@iroco/ui/scss/containers';

  .contact {
    width: 93%;
    background: colors.$nightBlue;
    text-align: center;
    font-weight: bold;
    padding: 2em 4em;
    margin: 1.5em auto 0;
    a {
      color: colors.$green;
    }
  }

  @include screen-tablet {
    .contact {
      width: 100%;
    }
  }
</style>
