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
            >
            <img
              src="/images/partners/shift-your-job-logo.svg"
              alt="Shift your Job Logo"
            /></a
          >
        </div>
        <p>{@html $_("about.ecosystem.shift-your-job")}</p>
      </div>
      <div class="about__ecosystem__grid__item">
        <div class="about__ecosystem__grid__item__img">
          <a href="https://www.ovhcloud.com//"
            ><img src="/images/partners/Logo_OVH.svg" alt="OVH Logo" /></a
          >
        </div>
        <p>{$_("about.ecosystem.ovh")}</p>
      </div>
    </div>
  </section>


  <IrocologoSignupbutton />
</div>

<style lang="scss">
  @use "@iroco/ui/scss/containers.scss";
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
          flex-grow: 1;
          &__img {
            display: flex;
            height: 150px;
            align-items: center;
            justify-content: center;
            img{
              height: 8rem ;
              object-fit: scale-down;
              border: white solid 1rem;
              background-color: #ffffff;
              border-radius: 1rem;
            }
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
