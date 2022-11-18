<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Host from '../lib/Host.svelte';
  import IrocologoSignupbutton from '../lib/IrocologoSignupbutton.svelte';
</script>

<div class="about">
  <section class="about__project">
    <h1>{$_('about.beginning.title')}</h1>
    <p>{$_('about.beginning.p')}</p>
    <img
      class="about__image"
      src="/images/screenshotIrocoTeamBuilding.png"
      alt="Iroco Team Building"
    />
  </section>

  <section class="about__tech">
    <h1>{$_('about.mail.title')}</h1>
    <p>{$_('about.mail.p')}</p>
    <img
      class="about__image"
      src="/images/screenshotDataviz.png"
      alt="Map explaining our data consumption from start to end"
    />
  </section>

  <section class="about__ethic">
    <h1>{$_('about.app.title')}</h1>
    <p>{$_('about.app.p')}</p>
    <div class="about__app__images">
      <div class="about__app__images__left">
        <Host />
        <span class="about__app__images__left__server">{$_('about.app.box.left')}</span>
      </div>
      <div class="about__app__images__right">
        <img
          class="about__app__images__right__screen"
          src="/images/screen.png"
          alt="Iroco webmail on mobile"
        />
        <div class="about__app__images__right__respect">
          <img
            class="about__app__images__right__respect__laptop"
            src="/images/laptop.png"
            alt="Iroco webmail on desktop"
          />
          <span class="about__app__images__right__respect__font">{$_('about.app.box.right')}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="about__commitments">
    <h1>{$_('commitments.title')}</h1>
    <div class="about__commitments__sections">
      <article class="about__commitments__sections__data">
        <h3>{$_('commitments.sections.data.title')}</h3>
        <p>{$_('commitments.sections.data.p')}</p>
      </article>
      <article class="about__commitments__sections__ecodesign">
        <h3>{$_('commitments.sections.ecodesign.title')}</h3>
        <p>{$_('commitments.sections.ecodesign.p')}</p>
      </article>
      <article class="about__commitments__sections__sovereign">
        <h3>{$_('commitments.sections.sovereign.title')}</h3>
        <p>{$_('commitments.sections.sovereign.p')}</p>
      </article>
      <article class="about__commitments__sections__hosting">
        <h3>{$_('commitments.sections.hosting.title')}</h3>
        <p>{$_('commitments.sections.hosting.p')}</p>
      </article>
      <article class="about__commitments__sections__opensource">
        <h3>{$_('commitments.sections.opensource.title')}</h3>
        <p>{$_('commitments.sections.opensource.p')}</p>
      </article>
      <article class="about__commitments__sections__transparency">
        <h3>{$_('commitments.sections.transparency.title')}</h3>
        <p>{$_('commitments.sections.transparency.p')}</p>
      </article>
    </div>
  </section>

  <IrocologoSignupbutton />
</div>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @import 'node_modules/@iroco/ui/scss/containers';
  .about {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    section:not(.about__commitments) {
      max-width: 50%;
      @include screen-laptop {
        max-width: 70%;
      }
      @include screen-tablet {
        max-width: 85%;
      }
      @include screen-tablet-S {
        max-width: 100%;
      }
    }

    &__app__images__left__server,
    &__app__images__right__respect__font {
      font-size: small;
      font-weight: 600;
      text-transform: uppercase;
      color: colors.$nightBlue;
      padding: 0.5em 2em;
      white-space: nowrap;
    }

    &__app__images {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      @include screen-laptop {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3em;
      }
      @include screen-tablet {
        gap: 5em;
      }

      &__left {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        @include screen-tablet {
          gap: 1.5em;
        }
        @include screen-mobile-M {
          gap: 0;
        }
        &__server {
          background-color: colors.$green;
          transform: translate(-12em, -6.5em);
          @include screen-laptop {
            transform: translate(-13.5em, -6.5em);
          }
          @include screen-tablet {
            transform: translate(0em, 0em);
          }
        }
      }
      &__right {
        display: flex;
        justify-content: space-between;
        @include screen-laptop {
          justify-content: center;
          align-items: center;
        }
        &__screen {
          transform: translate(4.2em, -3em);
          object-fit: contain;
          width: 125px;
          align-self: flex-start;

          @include screen-laptop {
            transform: translate(1.2em, -3em);
          }
          @include screen-tablet {
            width: 30%;
            transform: translate(0em, -3em);
          }
          @include screen-tablet {
            width: 40%;
          }
          @include screen-mobile-L {
            width: 60%;
          }
          @include screen-mobile-M {
            width: 90%;
          }
        }
        &__respect {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          @include screen-laptop {
            align-items: center;
            transform: translateX(-10%);
          }
          @include screen-tablet {
            gap: 1.5em;
          }
          @include screen-tablet {
            gap: 2em;
          }
          &__laptop {
            width: 420px;
            z-index: -1;
            @include screen-tablet {
              width: 100%;
            }
            @include screen-mobile-M {
              width: 80%;
            }
          }
          &__font {
            background-color: colors.$yellow;
            transform: translate(12em, -6.5em);
            @include screen-tablet {
              transform: translate(-2em, 0em);
            }
            @include screen-tablet-S {
              transform: translate(0em, 0em);
            }
          }
        }
      }
    }

    &__commitments {
      display: flex;
      flex-direction: column;
      text-align: center;
      &__sections {
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        line-height: 1em;

        @include screen-tablet {
          width: 50%;
        }
        @include screen-tablet-S {
          width: 70%;
        }
        @include screen-mobile-L {
          width: 90%;
        }

        article {
          justify-content: space-around;
          flex-direction: column;
          flex: 1;
          flex-basis: 300px;
          p {
            font-size: small;
          }
        }
      }
    }
  }
</style>
