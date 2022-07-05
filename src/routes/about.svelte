<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import Article from '../lib/Article.svelte';
  import Host from '../lib/Host.svelte';
</script>

<Header />
<main class="about">
  <Article title={$_('about.beginning.title')} content={$_('about.beginning.p')}>
    <img src="/images/screenshotIrocoTeamBuilding.png" alt="Iroco Team Building" />
  </Article>
  <Article title={$_('about.mail.title')} content={$_('about.mail.p')}>
    <img
      src="/images/screenshotDataviz.png"
      alt="Map explaining our data consumption from start to end"
    />
  </Article>
  <Article title={$_('about.app.title')} content={$_('about.app.p')}>
    <div class="about__images">
      <span class="about__images__left">
        <span class="about__images__left__server">{$_('about.app.box.left')}</span>
        <Host />
      </span>
      <span class="about__images__right">
        <img
          class="about__images__right__screen"
          src="/images/screen.png"
          alt="Iroco webmail on mobile"
          width="125x"
        />
        <img
          class="about__images__right__laptop"
          src="/images/laptop.png"
          alt="Iroco webmail on desktop"
          width="420px"
        />
        <span class="about__images__right__font">{$_('about.app.box.right')}</span>
      </span>
    </div>
  </Article>
</main>
<Footer />

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';

  .about {
    &__images,
    &__images__left,
    &__images__right {
      display: flex;
      align-items: center;
    }

    &__images__left__server,
    &__images__right__font {
      font-size: small;
      font-weight: 600;
      text-transform: uppercase;
      color: colors.$nightBlue;
      padding: 0.5em 2em;
      white-space: nowrap;
    }
    &__images {
      width: 90%;
      justify-content: space-between;
      text-align: center;
      &__left {
        width: 30%;
        flex-direction: column-reverse;
        justify-content: center;
        margin-left: 6em;
        &__server {
          background-color: colors.$green;
          transform: translate(-12em, -6em);
        }
      }
      &__right {
        width: 70%;
        flex-direction: row;
        justify-content: center;
        &__screen {
          transform: translate(3.5em, -3em);
        }
        &__font {
          background-color: colors.$yellow;
          transform: translate(-6em, 5.5em);
        }
      }
    }
  }
</style>
