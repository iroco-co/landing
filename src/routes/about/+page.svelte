<script lang="ts">
  /* eslint svelte/no-at-html-tags: "off" */
  import { _ } from "svelte-i18n";
  import IrocologoSignupbutton from "../../lib/IrocologoSignupbutton.svelte";
  import GreenHost from "../../lib/GreenHost.svelte";
  import Privacy from "../../lib/Privacy.svelte";
  import Server from "../../lib/Server.svelte";
  import Plant from "../../lib/Plant.svelte";
  import Energy from "../../lib/Energy.svelte";
  import Host from "../../lib/Host.svelte";
</script>

<svelte:head>
  <title>{$_("about.title")}</title>
</svelte:head>
<div class="about">
  <section class="about__project">
    <h1>{$_("about.beginning.title")}</h1>
    <p>{$_("about.beginning.p")}</p>
  </section>

  <img
    class="about__image"
    src="/images/Iroco-illustration-a-propos.svg"
    alt="Paper plane leaving behind a heart-shaped trail"
  />

  <section class="about__commitments" id="commitments">
    <h1>{$_("about.commitments.title")}</h1>
    <div class="about__commitments__sections">
      <article class="about__commitments__sections__transparency">
        <Host size="100px" />
        <h2>{$_("about.commitments.sections.transparency.title")}</h2>
        <p>{$_("about.commitments.sections.transparency.p")}</p>
      </article>
      <article class="about__commitments__sections__hosting">
        <Plant size="100px" />
        <h2>{$_("about.commitments.sections.hosting.title")}</h2>
        <p>{$_("about.commitments.sections.hosting.p")}</p>
      </article>
      <article class="about__commitments__sections__opensource">
        <Energy size="100px" />
        <h2>{$_("about.commitments.sections.opensource.title")}</h2>
        <p>{$_("about.commitments.sections.opensource.p")}</p>
      </article>
      <article class="about__commitments__sections__data">
        <Privacy size="100px" />
        <h2>{$_("about.commitments.sections.data.title")}</h2>
        <p>{$_("about.commitments.sections.data.p")}</p>
      </article>
      <article class="about__commitments__sections__ecodesign">
        <GreenHost size="100px" />
        <h2>{$_("about.commitments.sections.ecodesign.title")}</h2>
        <p>{$_("about.commitments.sections.ecodesign.p")}</p>
      </article>
      <article class="about__commitments__sections__sovereign">
        <Server size="100px" />
        <h2>{$_("about.commitments.sections.sovereign.title")}</h2>
        <p>{$_("about.commitments.sections.sovereign.p")}</p>
      </article>
    </div>
  </section>

  <img
    class="about__image"
    src="/images/Iroco-illustration-a-propos.svg"
    alt="Paper plane leaving behind a heart-shaped trail"
  />

  <section class="about__ecosystem">
    <h1>{$_("about.ecosystem.title")}</h1>
    <div class="about__ecosystem__grid">
      <div class="about__ecosystem__grid__item vertical">
        <div class="about__ecosystem__grid__item__img">
          <a href="https://boavizta.org"
            ><img src="/images/partners/boavizta.png" alt="Boavizta Logo" /></a
          >
        </div>
        <p>{$_("about.ecosystem.boavizta")}</p>
      </div>
      <div class="about__ecosystem__grid__item">
        <div class="about__ecosystem__grid__item__img">
          <a href="https://alliancegreenit.org/"
            ><img src="/images/partners/agit.png" alt="Agit Logo" /></a
          >
        </div>
        <p>{$_("about.ecosystem.agit")}</p>
      </div>
      <div class="about__ecosystem__grid__item">
        <div class="about__ecosystem__grid__item__img">
          <a href="https://www.bpifrance.fr/"
            ><img src="/images/partners/bpi.svg" alt="BPI France Logo" /></a
          >
        </div>
        <p>{$_("about.ecosystem.bpi-france")}</p>
      </div>
      <div class="about__ecosystem__grid__item">
        <div class="about__ecosystem__grid__item__img">
          <a href="https://shiftyourjob.org/"
            ><img
              src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE4NCA0MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0QkQyQUY7fS5jbHMtMntmaWxsOiMwMDAwNEI7fS5jbHMtM3tmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIwLDQwQTIwLDIwLDAsMSwwLDAsMjAsMjAuMDYsMjAuMDYsMCwwLDAsMjAsNDBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDkuOCwyNS4yYTUuMjQsNS4yNCwwLDAsMS0yLS44bDEuNC0yLjdhNyw3LDAsMCwwLDMuNiwxLDMuNTksMy41OSwwLDAsMCwxLjEtLjJjLjMtLjEuNC0uMy40LS40cy0uMS0uMy0uNC0uNGwtMS4yLS40YTE4Ljg4LDE4Ljg4LDAsMCwxLTEuOC0uNiwyLjczLDIuNzMsMCwwLDEtMS4yLS45LDIuMDcsMi4wNywwLDAsMS0uNS0xLjYsMy43LDMuNywwLDAsMSwuNi0yLjEsNCw0LDAsMCwxLDEuOS0xLjQsOC4zNiw4LjM2LDAsMCwxLDIuOS0uNSwxNSwxNSwwLDAsMSwyLjIuMiw3LjUxLDcuNTEsMCwwLDEsMS44LjdsLTEuMywyLjdhMy41MSwzLjUxLDAsMCwwLTEuNC0uNiw3Ljc3LDcuNzcsMCwwLDAtMS42LS4yLDMuNzMsMy43MywwLDAsMC0xLjIuMi41MS41MSwwLDAsMC0uNC41LjM3LjM3LDAsMCwwLC40LjRjLjMuMS43LjIsMS4yLjQuNy4yLDEuMy40LDEuOC41YTIuNzMsMi43MywwLDAsMSwxLjIuOSwyLDIsMCwwLDEsLjUsMS41LDMuMTQsMy4xNCwwLDAsMS0uNywyLjEsNCw0LDAsMCwxLTEuOSwxLjQsOC4zNiw4LjM2LDAsMCwxLTIuOS41QTE5LjQ4LDE5LjQ4LDAsMCwxLDQ5LjgsMjUuMloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik03MC44LDE0LjUsNjguNywyNS4zSDY1bC44LTRINjIuNGwtLjgsNEg1OGwyLjEtMTAuOGgzLjZMNjMsMTguM2gzLjRsLjgtMy44WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTcyLjMsMTQuNWgzLjZMNzMuOCwyNS4zSDcwLjJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNODAuNiwxNy4yLDgwLjIsMTloNC41bC0uNSwyLjdINzkuN0w3OSwyNS4ySDc1LjRsMi4xLTEwLjhoOC43bC0uNSwyLjdIODAuNloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik04OS4xLDE3LjNIODZsLjYtMi44aDkuOWwtLjYsMi44SDkyLjhsLTEuNiw3LjlIODcuNloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMDYuNiwyMS4zbC0uOCwzLjloLTMuNmwuOC0zLjktMi43LTYuOGgzLjZsMS41LDMuNywzLTMuN0gxMTJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTEyLjksMjQuOGE0LjUxLDQuNTEsMCwwLDEtMS45LTEuNyw1LjIsNS4yLDAsMCwxLS43LTIuNSw2LDYsMCwwLDEsLjktMy4zLDYuNjIsNi42MiwwLDAsMSwyLjQtMi4zLDcuODQsNy44NCwwLDAsMSwzLjUtLjgsNi44NCw2Ljg0LDAsMCwxLDIuOS42LDQuNTEsNC41MSwwLDAsMSwxLjksMS43LDUuMiw1LjIsMCwwLDEsLjcsMi41LDYsNiwwLDAsMS0uOSwzLjMsNi42Miw2LjYyLDAsMCwxLTIuNCwyLjMsNy44NCw3Ljg0LDAsMCwxLTMuNS44QTYuNTMsNi41MywwLDAsMSwxMTIuOSwyNC44Wm00LjYtMi43YTQsNCwwLDAsMCwxLTEuMiw0LjcxLDQuNzEsMCwwLDAsLjQtMS42LDEuODksMS44OSwwLDAsMC0uNi0xLjUsMiwyLDAsMCwwLTEuNS0uNiwzLjMxLDMuMzEsMCwwLDAtMS41LjQsMy4wNiwzLjA2LDAsMCwwLTEsMS4yLDQuNzEsNC43MSwwLDAsMC0uNCwxLjYsMS44OSwxLjg5LDAsMCwwLC42LDEuNSwyLDIsMCwwLDAsMS41LjZBMi40MSwyLjQxLDAsMCwwLDExNy41LDIyLjFaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTI1LjUsMjVhMy42NCwzLjY0LDAsMCwxLTEuNi0xLjQsMy43LDMuNywwLDAsMS0uNi0yLjEsNS43NCw1Ljc0LDAsMCwxLC4xLTEuMmwxLjItNS45aDMuNkwxMjcsMjAuM2EyLjIsMi4yLDAsMCwwLS4xLjgsMS4zNywxLjM3LDAsMCwwLC40LDEuMSwxLjgyLDEuODIsMCwwLDAsMS4xLjQsMS41LDEuNSwwLDAsMCwxLjItLjUsNC41Nyw0LjU3LDAsMCwwLC43LTEuN2wxLjItNS45aDMuNmwtMS4yLDYuMWE2LjM4LDYuMzgsMCwwLDEtMiwzLjcsNi4wNSw2LjA1LDAsMCwxLTMuOSwxLjJBOC41LDguNSwwLDAsMSwxMjUuNSwyNVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNDUuMSwyMC41YTQuOTEsNC45MSwwLDAsMS0yLjEsMS42bDEuOCwzLjFIMTQxbC0xLjUtMi43aC0uOWwtLjUsMi43aC0zLjZsMi4xLTEwLjhoNC45YTUuMzksNS4zOSwwLDAsMSwzLjMuOSwzLjA5LDMuMDksMCwwLDEsMS4yLDIuNkE2LjY3LDYuNjcsMCwwLDEsMTQ1LjEsMjAuNVptLTQuMy0zLjNoLTEuMmwtLjUsMi41aDEuNWExLjU5LDEuNTksMCwwLDAsMS4yLS40LDEuMzcsMS4zNywwLDAsMCwuNC0xLjFDMTQyLjIsMTcuNiwxNDEuNywxNy4yLDE0MC44LDE3LjJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTQ5LjIsMjMuOGwyLjMtMi4yYTEuOTQsMS45NCwwLDAsMCwxLjYsMSwxLDEsMCwwLDAsLjgtLjMsMS4yNywxLjI3LDAsMCwwLC40LS45bC44LTQuMmgtMy42bC41LTIuN2g3LjJsLTEuMyw2LjhhNS43Nyw1Ljc3LDAsMCwxLTEuNywzLjMsNS40LDUuNCwwLDAsMS0zLjMsMUE1LjA3LDUuMDcsMCwwLDEsMTQ5LjIsMjMuOFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNjEuOSwyNC44YTQuNTEsNC41MSwwLDAsMS0xLjktMS43LDUuMiw1LjIsMCwwLDEtLjctMi41LDYsNiwwLDAsMSwuOS0zLjMsNi42Miw2LjYyLDAsMCwxLDIuNC0yLjMsNi43MSw2LjcxLDAsMCwxLDMuNS0uOCw2Ljg0LDYuODQsMCwwLDEsMi45LjYsNC41MSw0LjUxLDAsMCwxLDEuOSwxLjcsNS4yLDUuMiwwLDAsMSwuNywyLjUsNiw2LDAsMCwxLS45LDMuMyw2LjYyLDYuNjIsMCwwLDEtMi40LDIuMyw3Ljg0LDcuODQsMCwwLDEtMy41LjhBNi4yNCw2LjI0LDAsMCwxLDE2MS45LDI0LjhabTQuNy0yLjdhNCw0LDAsMCwwLDEtMS4yLDQuNzEsNC43MSwwLDAsMCwuNC0xLjYsMS44OSwxLjg5LDAsMCwwLS42LTEuNSwyLDIsMCwwLDAtMS41LS42LDMuMzEsMy4zMSwwLDAsMC0xLjUuNCwzLjA2LDMuMDYsMCwwLDAtMSwxLjIsNC43MSw0LjcxLDAsMCwwLS40LDEuNiwxLjg5LDEuODksMCwwLDAsLjYsMS41LDIsMiwwLDAsMCwxLjUuNkEyLjgyLDIuODIsMCwwLDAsMTY2LjYsMjIuMVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xODIuNCwyMC41YTIsMiwwLDAsMSwuNCwxLjMsMi45LDIuOSwwLDAsMS0xLjQsMi42LDYuNCw2LjQsMCwwLDEtMy42LjloLTYuMmwyLjEtMTAuOGg1LjdhNSw1LDAsMCwxLDIuOS43LDIuMjgsMi4yOCwwLDAsMSwxLDEuOSwzLDMsMCwwLDEtLjUsMS42LDMuODEsMy44MSwwLDAsMS0xLjQsMS4xQTIuMjksMi4yOSwwLDAsMSwxODIuNCwyMC41Wm0tMy42LDEuOWExLDEsMCwwLDAsLjQtLjcuNTUuNTUsMCwwLDAtLjMtLjUsMS40MiwxLjQyLDAsMCwwLS42LS4ySDE3NmwtLjQsMS43aDIuM0ExLjIyLDEuMjIsMCwwLDAsMTc4LjgsMjIuNFptLTItNS40LS4zLDEuNmgxLjlxMS4yLDAsMS4yLS45YS41NS41NSwwLDAsMC0uMy0uNSwxLjQ1LDEuNDUsMCwwLDAtLjctLjJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjQuNCwxMS4xQTEyLjA4LDEyLjA4LDAsMSwxLDExLDMxLjJaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjkuOSw5LjIsMTYuNCwyOS4zYy02LjItNC4xLTguMi0xMi00LjUtMTcuNVMyMy43LDUuMSwyOS45LDkuMloiLz48L3N2Zz4K"
              alt="Shift your Job Logo"
            /></a
          >
        </div>
        <p>{@html $_("about.ecosystem.shift-your-job")}</p>
      </div>
      <div class="about__ecosystem__grid__item">
        <div class="about__ecosystem__grid__item__img">
          <a href="https://www.eolas.fr/"
            ><img src="/images/partners/eolas.png" alt="Eolas Logo" /></a
          >
        </div>
        <p>{$_("about.ecosystem.eolas")}</p>
      </div>
    </div>
  </section>

  <img
    class="about__image"
    src="/images/Iroco-illustration-a-propos.svg"
    alt="Paper plane leaving behind a heart-shaped trail"
  />

  <section class="about__roadmap">
    <h1>{$_("about.roadmap.title")}</h1>
    <p>{$_("about.roadmap.p")}</p>
    <div class="about__roadmap__sections">
      <article class="about__roadmap__sections__servers">
        <h2>{$_("about.roadmap.ul.servers.title")}</h2>
        <h3>{$_("about.roadmap.ul.servers.date")}</h3>
        <p>{$_("about.roadmap.ul.servers.details")}</p>
      </article>
      <article class="about__roadmap__sections__client">
        <h2>{$_("about.roadmap.ul.client.title")}</h2>
        <h3>{$_("about.roadmap.ul.client.date")}</h3>
        <p>{$_("about.roadmap.ul.client.details")}</p>
      </article>
      <article class="about__roadmap__sections__company">
        <h2>{$_("about.roadmap.ul.company.title")}</h2>
        <h3>{$_("about.roadmap.ul.company.date")}</h3>
        <p>{$_("about.roadmap.ul.company.details")}</p>
      </article>
      <article class="about__roadmap__sections__webmail">
        <h2>{$_("about.roadmap.ul.webmail.title")}</h2>
        <h3>{$_("about.roadmap.ul.webmail.date")}</h3>
        <p>{$_("about.roadmap.ul.webmail.details")}</p>
      </article>
    </div>
  </section>

  <IrocologoSignupbutton />
</div>

<style lang="scss">
  @use "node_modules/@iroco/ui/dist/scss/containers";
  .about {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    .about__image {
      width: 70vh;
      padding: 5em 5em;
      @include containers.screen-tablet {
        width: 60vh;
      }
    }

    &__commitments,
    &__roadmap {
      h2 {
        font-size: 1.1em;
      }
      h3 {
        font-size: 1em;
      }
      display: flex;
      flex-direction: column;
      text-align: center;
      &__sections {
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        line-height: 1.2em;

        article {
          justify-content: space-around;
          flex-direction: column;
          flex: 1;
          flex-basis: 300px;
        }
      }
    }

    &__ecosystem {
      &__grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        &__item {
          line-height: 1.2em;
          padding: 0.5em;
          flex-basis: 300px;
          &__img {
            display: flex;
            height: 150px;
            align-items: center;
            justify-content: center;
          }
          flex-grow: 1;
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
