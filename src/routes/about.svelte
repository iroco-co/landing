<script lang="ts">
  import { _ } from 'svelte-i18n';
  import IrocologoSignupbutton from '../lib/IrocologoSignupbutton.svelte';
</script>

<div class="about">
  <section class="about__project">
    <h1>{$_('about.beginning.title')}</h1>
    <p>{$_('about.beginning.p')}</p>
  </section>

  <img class="about__image" src="/images/Iroco-illustration-a-propos.svg" alt="Paper plane leaving behind a heart-shaped trail"/>

  <section class="about__commitments" id="commitments">
    <h1>{$_('about.commitments.title')}</h1>
    <div class="about__commitments__sections">
      <article class="about__commitments__sections__data">
        <h3>{$_('about.commitments.sections.data.title')}</h3>
        <p>{$_('about.commitments.sections.data.p')}</p>
      </article>
      <article class="about__commitments__sections__ecodesign">
        <h3>{$_('about.commitments.sections.ecodesign.title')}</h3>
        <p>{$_('about.commitments.sections.ecodesign.p')}</p>
      </article>
      <article class="about__commitments__sections__sovereign">
        <h3>{$_('about.commitments.sections.sovereign.title')}</h3>
        <p>{$_('about.commitments.sections.sovereign.p')}</p>
      </article>
      <article class="about__commitments__sections__hosting">
        <h3>{$_('about.commitments.sections.hosting.title')}</h3>
        <p>{$_('about.commitments.sections.hosting.p')}</p>
      </article>
      <article class="about__commitments__sections__opensource">
        <h3>{$_('about.commitments.sections.opensource.title')}</h3>
        <p>{$_('about.commitments.sections.opensource.p')}</p>
      </article>
      <article class="about__commitments__sections__transparency">
        <h3>{$_('about.commitments.sections.transparency.title')}</h3>
        <p>{$_('about.commitments.sections.transparency.p')}</p>
      </article>
    </div>
  </section>

  <img class="about__image" src="/images/Iroco-illustration-a-propos.svg" alt="Paper plane leaving behind a heart-shaped trail"/>

  <section class="about__ecosystem">
    <h1>{$_('about.ecosystem.title')}</h1>
    <div class="about__ecosystem__grid">
      <div class="about__ecosystem__grid__item vertical">
        <div class="about__ecosystem__grid__item__img">
          <a href="https://boavizta.org"
            ><img src="/images/partners/boavizta.png" alt="Boavizta" /></a
          >
        </div>
        <p>{$_('about.ecosystem.boavizta')}</p>
      </div>
      <div class="about__ecosystem__grid__item">
        <div class="about__ecosystem__grid__item__img">
          <a href="https://alliancegreenit.org/"
            ><img src="/images/partners/agit.png" alt="Agit" /></a
          >
        </div>
        <p>{$_('about.ecosystem.agit')}</p>
      </div>
      <div class="about__ecosystem__grid__item">
        <div class="about__ecosystem__grid__item__img">
          <a href="https://www.bpifrance.fr/"
            ><img src="/images/partners/bpi.svg" alt="BPI France" /></a
          >
        </div>
        <p>{$_('about.ecosystem.bpi-france')}</p>
      </div>
      <div class="about__ecosystem__grid__item">
        <div class="about__ecosystem__grid__item__img">
          <a href="https://shiftyourjob.org/"
            ><img
              src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE4NCA0MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0QkQyQUY7fS5jbHMtMntmaWxsOiMwMDAwNEI7fS5jbHMtM3tmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIwLDQwQTIwLDIwLDAsMSwwLDAsMjAsMjAuMDYsMjAuMDYsMCwwLDAsMjAsNDBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDkuOCwyNS4yYTUuMjQsNS4yNCwwLDAsMS0yLS44bDEuNC0yLjdhNyw3LDAsMCwwLDMuNiwxLDMuNTksMy41OSwwLDAsMCwxLjEtLjJjLjMtLjEuNC0uMy40LS40cy0uMS0uMy0uNC0uNGwtMS4yLS40YTE4Ljg4LDE4Ljg4LDAsMCwxLTEuOC0uNiwyLjczLDIuNzMsMCwwLDEtMS4yLS45LDIuMDcsMi4wNywwLDAsMS0uNS0xLjYsMy43LDMuNywwLDAsMSwuNi0yLjEsNCw0LDAsMCwxLDEuOS0xLjQsOC4zNiw4LjM2LDAsMCwxLDIuOS0uNSwxNSwxNSwwLDAsMSwyLjIuMiw3LjUxLDcuNTEsMCwwLDEsMS44LjdsLTEuMywyLjdhMy41MSwzLjUxLDAsMCwwLTEuNC0uNiw3Ljc3LDcuNzcsMCwwLDAtMS42LS4yLDMuNzMsMy43MywwLDAsMC0xLjIuMi41MS41MSwwLDAsMC0uNC41LjM3LjM3LDAsMCwwLC40LjRjLjMuMS43LjIsMS4yLjQuNy4yLDEuMy40LDEuOC41YTIuNzMsMi43MywwLDAsMSwxLjIuOSwyLDIsMCwwLDEsLjUsMS41LDMuMTQsMy4xNCwwLDAsMS0uNywyLjEsNCw0LDAsMCwxLTEuOSwxLjQsOC4zNiw4LjM2LDAsMCwxLTIuOS41QTE5LjQ4LDE5LjQ4LDAsMCwxLDQ5LjgsMjUuMloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik03MC44LDE0LjUsNjguNywyNS4zSDY1bC44LTRINjIuNGwtLjgsNEg1OGwyLjEtMTAuOGgzLjZMNjMsMTguM2gzLjRsLjgtMy44WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTcyLjMsMTQuNWgzLjZMNzMuOCwyNS4zSDcwLjJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNODAuNiwxNy4yLDgwLjIsMTloNC41bC0uNSwyLjdINzkuN0w3OSwyNS4ySDc1LjRsMi4xLTEwLjhoOC43bC0uNSwyLjdIODAuNloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik04OS4xLDE3LjNIODZsLjYtMi44aDkuOWwtLjYsMi44SDkyLjhsLTEuNiw3LjlIODcuNloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMDYuNiwyMS4zbC0uOCwzLjloLTMuNmwuOC0zLjktMi43LTYuOGgzLjZsMS41LDMuNywzLTMuN0gxMTJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTEyLjksMjQuOGE0LjUxLDQuNTEsMCwwLDEtMS45LTEuNyw1LjIsNS4yLDAsMCwxLS43LTIuNSw2LDYsMCwwLDEsLjktMy4zLDYuNjIsNi42MiwwLDAsMSwyLjQtMi4zLDcuODQsNy44NCwwLDAsMSwzLjUtLjgsNi44NCw2Ljg0LDAsMCwxLDIuOS42LDQuNTEsNC41MSwwLDAsMSwxLjksMS43LDUuMiw1LjIsMCwwLDEsLjcsMi41LDYsNiwwLDAsMS0uOSwzLjMsNi42Miw2LjYyLDAsMCwxLTIuNCwyLjMsNy44NCw3Ljg0LDAsMCwxLTMuNS44QTYuNTMsNi41MywwLDAsMSwxMTIuOSwyNC44Wm00LjYtMi43YTQsNCwwLDAsMCwxLTEuMiw0LjcxLDQuNzEsMCwwLDAsLjQtMS42LDEuODksMS44OSwwLDAsMC0uNi0xLjUsMiwyLDAsMCwwLTEuNS0uNiwzLjMxLDMuMzEsMCwwLDAtMS41LjQsMy4wNiwzLjA2LDAsMCwwLTEsMS4yLDQuNzEsNC43MSwwLDAsMC0uNCwxLjYsMS44OSwxLjg5LDAsMCwwLC42LDEuNSwyLDIsMCwwLDAsMS41LjZBMi40MSwyLjQxLDAsMCwwLDExNy41LDIyLjFaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTI1LjUsMjVhMy42NCwzLjY0LDAsMCwxLTEuNi0xLjQsMy43LDMuNywwLDAsMS0uNi0yLjEsNS43NCw1Ljc0LDAsMCwxLC4xLTEuMmwxLjItNS45aDMuNkwxMjcsMjAuM2EyLjIsMi4yLDAsMCwwLS4xLjgsMS4zNywxLjM3LDAsMCwwLC40LDEuMSwxLjgyLDEuODIsMCwwLDAsMS4xLjQsMS41LDEuNSwwLDAsMCwxLjItLjUsNC41Nyw0LjU3LDAsMCwwLC43LTEuN2wxLjItNS45aDMuNmwtMS4yLDYuMWE2LjM4LDYuMzgsMCwwLDEtMiwzLjcsNi4wNSw2LjA1LDAsMCwxLTMuOSwxLjJBOC41LDguNSwwLDAsMSwxMjUuNSwyNVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNDUuMSwyMC41YTQuOTEsNC45MSwwLDAsMS0yLjEsMS42bDEuOCwzLjFIMTQxbC0xLjUtMi43aC0uOWwtLjUsMi43aC0zLjZsMi4xLTEwLjhoNC45YTUuMzksNS4zOSwwLDAsMSwzLjMuOSwzLjA5LDMuMDksMCwwLDEsMS4yLDIuNkE2LjY3LDYuNjcsMCwwLDEsMTQ1LjEsMjAuNVptLTQuMy0zLjNoLTEuMmwtLjUsMi41aDEuNWExLjU5LDEuNTksMCwwLDAsMS4yLS40LDEuMzcsMS4zNywwLDAsMCwuNC0xLjFDMTQyLjIsMTcuNiwxNDEuNywxNy4yLDE0MC44LDE3LjJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTQ5LjIsMjMuOGwyLjMtMi4yYTEuOTQsMS45NCwwLDAsMCwxLjYsMSwxLDEsMCwwLDAsLjgtLjMsMS4yNywxLjI3LDAsMCwwLC40LS45bC44LTQuMmgtMy42bC41LTIuN2g3LjJsLTEuMyw2LjhhNS43Nyw1Ljc3LDAsMCwxLTEuNywzLjMsNS40LDUuNCwwLDAsMS0zLjMsMUE1LjA3LDUuMDcsMCwwLDEsMTQ5LjIsMjMuOFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNjEuOSwyNC44YTQuNTEsNC41MSwwLDAsMS0xLjktMS43LDUuMiw1LjIsMCwwLDEtLjctMi41LDYsNiwwLDAsMSwuOS0zLjMsNi42Miw2LjYyLDAsMCwxLDIuNC0yLjMsNi43MSw2LjcxLDAsMCwxLDMuNS0uOCw2Ljg0LDYuODQsMCwwLDEsMi45LjYsNC41MSw0LjUxLDAsMCwxLDEuOSwxLjcsNS4yLDUuMiwwLDAsMSwuNywyLjUsNiw2LDAsMCwxLS45LDMuMyw2LjYyLDYuNjIsMCwwLDEtMi40LDIuMyw3Ljg0LDcuODQsMCwwLDEtMy41LjhBNi4yNCw2LjI0LDAsMCwxLDE2MS45LDI0LjhabTQuNy0yLjdhNCw0LDAsMCwwLDEtMS4yLDQuNzEsNC43MSwwLDAsMCwuNC0xLjYsMS44OSwxLjg5LDAsMCwwLS42LTEuNSwyLDIsMCwwLDAtMS41LS42LDMuMzEsMy4zMSwwLDAsMC0xLjUuNCwzLjA2LDMuMDYsMCwwLDAtMSwxLjIsNC43MSw0LjcxLDAsMCwwLS40LDEuNiwxLjg5LDEuODksMCwwLDAsLjYsMS41LDIsMiwwLDAsMCwxLjUuNkEyLjgyLDIuODIsMCwwLDAsMTY2LjYsMjIuMVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xODIuNCwyMC41YTIsMiwwLDAsMSwuNCwxLjMsMi45LDIuOSwwLDAsMS0xLjQsMi42LDYuNCw2LjQsMCwwLDEtMy42LjloLTYuMmwyLjEtMTAuOGg1LjdhNSw1LDAsMCwxLDIuOS43LDIuMjgsMi4yOCwwLDAsMSwxLDEuOSwzLDMsMCwwLDEtLjUsMS42LDMuODEsMy44MSwwLDAsMS0xLjQsMS4xQTIuMjksMi4yOSwwLDAsMSwxODIuNCwyMC41Wm0tMy42LDEuOWExLDEsMCwwLDAsLjQtLjcuNTUuNTUsMCwwLDAtLjMtLjUsMS40MiwxLjQyLDAsMCwwLS42LS4ySDE3NmwtLjQsMS43aDIuM0ExLjIyLDEuMjIsMCwwLDAsMTc4LjgsMjIuNFptLTItNS40LS4zLDEuNmgxLjlxMS4yLDAsMS4yLS45YS41NS41NSwwLDAsMC0uMy0uNSwxLjQ1LDEuNDUsMCwwLDAtLjctLjJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjQuNCwxMS4xQTEyLjA4LDEyLjA4LDAsMSwxLDExLDMxLjJaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjkuOSw5LjIsMTYuNCwyOS4zYy02LjItNC4xLTguMi0xMi00LjUtMTcuNVMyMy43LDUuMSwyOS45LDkuMloiLz48L3N2Zz4K"
              alt="Shift your Job"
            /></a
          >
        </div>
        <p>{@html $_('about.ecosystem.shift-your-job')}</p>
      </div>
      <div class="about__ecosystem__grid__item">
        <div class="about__ecosystem__grid__item__img">
          <a href="https://www.eolas.fr/"><img src="/images/partners/eolas.png" alt="Eolas" /></a>
        </div>
        <p>{$_('about.ecosystem.eolas')}</p>
      </div>
    </div>
  </section>

  <img class="about__image" src="/images/Iroco-illustration-a-propos.svg" alt="Paper plane leaving behind a heart-shaped trail"/>

  <section class="about__roadmap">
    <h1>{$_('about.roadmap.title')}</h1>
    <p>{$_('about.roadmap.p')}</p>
    <div class="about__roadmap__sections">
      <article class="about__roadmap__sections__servers">
        <h3>{$_('about.roadmap.ul.servers.title')}</h3>
        <h4>{$_('about.roadmap.ul.servers.date')}</h4>
        <p>{$_('about.roadmap.ul.servers.details')}</p>
      </article>
      <article class="about__roadmap__sections__client">
        <h3>{$_('about.roadmap.ul.client.title')}</h3>
        <h4>{$_('about.roadmap.ul.client.date')}</h4>
        <p>{$_('about.roadmap.ul.client.details')}</p>
      </article>
      <article class="about__roadmap__sections__company">
        <h3>{$_('about.roadmap.ul.company.title')}</h3>
        <h4>{$_('about.roadmap.ul.company.date')}</h4>
        <p>{$_('about.roadmap.ul.company.details')}</p>
      </article>
      <article class="about__roadmap__sections__webmail">
        <h3>{$_('about.roadmap.ul.webmail.title')}</h3>
        <h4>{$_('about.roadmap.ul.webmail.date')}</h4>
        <p>{$_('about.roadmap.ul.webmail.details')}</p>
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

    &__image {
      padding: 5em 5em;
      width: 50%;
      object-fit: contain;
      @include screen-laptop-L {
        width: 60%;
      }
      @include screen-laptop {
        width: 80%;
      }
      @include screen-tablet {
        width: 90%;
      }
      @include screen-tablet-S {
        width: 100%;
      }
    }

    section.half-size {
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

    &__commitments,
    &__roadmap {
      display: flex;
      flex-direction: column;
      text-align: center;
      scroll-margin-top: 10em;
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
            font-size: smaller;
          }
        }
      }
    }
    &__ecosystem {
      &__grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        &__item {
          line-height: 1em;
          padding: 0.5em;
          flex-basis: 300px;
          &__img {
            display: flex;
            height: 150px;
            align-items: center;
            justify-content: center;
          }
          flex-grow: 1;
          p {
            font-size: smaller;
          }
        }
        &__item:not(.vertical) {
          img {
            width: 300px;
          }
        }
      }
    }
  }
</style>
