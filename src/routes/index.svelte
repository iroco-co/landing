<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import { Button } from '../../node_modules/@iroco/ui';
</script>

<svelte:head>
  <title>{$_('page.title')}</title>
</svelte:head>
<Header />
<main class="homepage">
  <section class="homepage__iroco">
    <div class="image">
      <img src="/images/irocoTeamSpirit.png" alt="Iroco Team hiking in the mountains" />
    </div>
    <article>
      <h1>{$_('homepage.iroco.title')}</h1>
      <p>{$_('homepage.iroco.p')}</p>
      <a class="homepage__iroco__btn" href="/about">
        <Button kind="basic">{$_('homepage.iroco.btn')}</Button>
      </a>
    </article>
  </section>
  <section class="homepage__respect reverse">
    <div class="image">
      <img src="/images/eco.svg" alt="Iroco iconography for ecoconception" />
    </div>
    <article>
      <h1>{$_('homepage.respect.title')}</h1>
      <p>{$_('homepage.respect.p')}</p>
      <a class="homepage__respect__btn" href="/">
        <Button kind="basic">{$_('homepage.respect.btn')}</Button>
      </a>
    </article>
  </section>
  <section class="homepage__innovation">
    <div class="image">
      <img
        src="/images/pairprogramming.png"
        alt="Two developers, a man and a woman, pair programming"
      />
    </div>
    <article>
      <h1>{$_('homepage.innovation.title')}</h1>
      <p>{$_('homepage.innovation.p')}</p>
      <a class="homepage__innovation__btn" href="/">
        <Button kind="basic">{$_('homepage.innovation.btn')}</Button>
      </a>
      <a class="homepage__innovation__btn" href="https://github.com/iroco-co">
        <Button kind="basic">{$_('homepage.innovation.github')}</Button>
      </a>
    </article>
  </section>
  <section class="homepage__inclusive reverse">
    <div class="image">
      <img
        src="/images/coproject.svg"
        alt="Iroco's iconography looking like two people facing each other"
      />
    </div>
    <article>
      <h1>{$_('homepage.inclusive.title')}</h1>
      <p>{$_('homepage.inclusive.p')}</p>
      <a class="homepage__inclusive__btn" href="/">
        <Button kind="basic">{$_('homepage.inclusive.btn')}</Button>
      </a>
      <a class="homepage__inclusive__btn" href="mailto:hello@iroco.fr">
        <Button kind="basic">{$_('homepage.inclusive.contact')}</Button>
      </a>
    </article>
  </section>
</main>
<Footer />

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';

  .homepage {
    width: 80%;
    margin: 0 auto 5em;
    section {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60%;
    }
    .reverse {
      flex-direction: row-reverse;
    }
    .image {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img {
        width: 500px;
        height: 370px;
        object-fit: contain;
      }
    }
    article {
      padding: 2em;
      width: 30%;
      text-align: center;
      justify-items: flex-start;
      h1 {
        font-size: 2em;
        line-height: 1.3em;
      }
    }
  }
</style>
