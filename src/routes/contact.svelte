<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import Contact from '../lib/Contact.svelte';
  import Newsletter from '../lib/Newsletter.svelte';
</script>

<Header />
<main class="contact">
  <div class="contact__container">
    <h2>{$_('contact.title')}</h2>
    <Contact href="mailto:hello@iroco.fr" content={$_('contact.mail')} />
  </div>
  <div class="contact__newsletter">
    <Newsletter />
  </div>
</main>
<Footer />

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @use 'node_modules/@iroco/ui/lib/constants';
  .contact {
    text-align: center;
    h2 {
      margin-bottom: 2em;
    }
    &__container {
      margin-bottom: 5em;
    }
  }
</style>
