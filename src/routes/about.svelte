<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import Article from '../lib/Article.svelte';
  import Host from '../lib/Host.svelte';
  import { Icon, IrocoLogo } from '@iroco/ui/';
</script>

<Header />
<main class="about">
  <Article title={$_('about.beginning.title')} content={$_('about.beginning.p')}>
    <img src="/images/screenshotIrocoTeamBuilding.png" alt="Iroco Team Building" width="600px" />
  </Article>
  <Article title={$_('about.mail.title')} content={$_('about.mail.p')}>
    <img
      src="/images/screenshotDataviz.png"
      alt="Map explaining our data consumption from start to end"
      width="600px"
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
          width="125px"
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
  <div class="about__commitments">
    <h1>{$_('commitments.title')}</h1>
    <p>{$_('commitments.p')}</p>
    <div class="about__commitments__sections">
      <article class="about__commitments__sections__cooperation">
        <h3>{$_('commitments.sections.cooperation.title')}</h3>
        <p>{$_('commitments.sections.cooperation.p')}</p>
      </article>
      <article class="about__commitments__sections__energy">
        <h3>{$_('commitments.sections.energy.title')}</h3>
        <p>{$_('commitments.sections.energy.p')}</p>
      </article>
      <article class="about__commitments__sections__data">
        <h3>{$_('commitments.sections.data.title')}</h3>
        <p>{$_('commitments.sections.data.p')}</p>
      </article>
      <article class="about__commitments__sections__cooperation">
        <h3>{$_('commitments.sections.cooperation.title')}</h3>
        <p>{$_('commitments.sections.cooperation.p')}</p>
      </article>
      <article class="about__commitments__sections__energy">
        <h3>{$_('commitments.sections.energy.title')}</h3>
        <p>{$_('commitments.sections.energy.p')}</p>
      </article>
      <article class="about__commitments__sections__data">
        <h3>{$_('commitments.sections.data.title')}</h3>
        <p>{$_('commitments.sections.data.p')}</p>
      </article>
    </div>
  </div>
  <div class="about__subscribe">
    <div class="about__subscribe__logo">
      <IrocoLogo width="10em" height="10em" />
    </div>
    <div class="about__subscribe__btn">
      <a class="button success" href="/about">
        <Icon name="chevron-right" />
        {$_('footer.subscribe')}
      </a>
    </div>
  </div>
</main>
<Footer />

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @import 'node_modules/@iroco/ui/scss/containers';
  .about {
    &__images,
    &__images__left,
    &__images__right,
    &__commitments,
    &__commitments__sections,
    &__commitments__sections__cooperation,
    &__commitments__sections__energy,
    &__commitments__sections__data,
    &__subscribe {
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
      justify-content: space-between;
      text-align: center;
      &__left {
        flex-direction: column-reverse;
        justify-content: center;
        margin-left: 6em;
        &__server {
          background-color: colors.$green;
          transform: translate(-12em, -6em);
        }
      }
      &__right {
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

    &__commitments,
    &__commitments__sections,
    &__commitments__sections__cooperation,
    &__commitments__sections__energy,
    &__commitments__sections__data {
      justify-content: center;
      text-align: center;
    }
    &__commitments {
      flex-direction: column;
      text-align: center;
      p {
        width: 60%;
      }
      &__sections {
        flex-wrap: wrap;
        &__cooperation,
        &__energy,
        &__data {
          flex-direction: column;
          height: 300px;
          flex: 1;
          flex-basis: 300px;

          p {
            font-size: small;
          }
        }
      }
    }
    &__subscribe {
      flex-direction: column;
      justify-content: center;
    }
  }

  @include screen-tablet {
    .about {
      &__images {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &__right__laptop {
          width: 335px;
        }
      }

      &__commitments {
        p {
          width: 85%;
          margin-bottom: 4em;
        }
        &__sections {
          &__cooperation,
          &__energy,
          &__data {
            flex-direction: column;
            height: 150px;
            flex: 1;
            flex-basis: 260px;
            margin-bottom: 4em;
          }
        }
      }
    }
  }
</style>
