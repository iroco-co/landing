<script lang="ts">
  import { _ } from "svelte-i18n";
  import ImageArticle from "../lib/ImageArticle.svelte";
  import IrocologoSignupbutton from "../lib/IrocologoSignupbutton.svelte";
  import KeilaForm from "$lib/KeilaForm.svelte";
</script>

<svelte:head>
  <title>{$_("page.title")}</title>
</svelte:head>
<section class="page-content">
  <ImageArticle
    imgSrc="/images/people_chatting.svg"
    alt="People chatting and using electronic devices"
    articleTitle={$_("homepage.iroco.title")}
    articleContent={$_("homepage.iroco.p")}
    buttonList={[{ href: "/signup", label: $_("homepage.iroco.btn") }]}
    reversed
  />

  <ImageArticle
    imgSrc="/images/clients-messagerie.svg"
    alt="Electronic devices and email clients logos"
    articleTitle={$_("homepage.client.title")}
    articleContent={$_("homepage.client.p")}
    buttonList={[{ href: "/signup", label: $_("homepage.client.btn") }]}
  />

  <ImageArticle
    imgSrc="/images/commons.svg"
    alt="People riding bikes, scooters and using email"
    articleTitle={$_("homepage.respect.title")}
    articleContent={$_("homepage.respect.p")}
    buttonList={[
      { href: "/about#commitments", label: $_("homepage.respect.btn") },
    ]}
    reversed
  />

  <ImageArticle
    imgSrc="/images/services-visuel.png"
    alt="Screen captures of email, calendar and contact management services"
    articleTitle={$_("homepage.services.title")}
    articleContent={$_("homepage.services.p")}
    buttonList={[{ href: "/signup", label: $_("homepage.services.btn") }]}
  />

  <ImageArticle
    imgSrc="/images/convivialite.svg"
    alt="People talking to each other from one window to another"
    articleTitle={$_("homepage.innovation.title")}
    articleContent={$_("homepage.innovation.p")}
    buttonList={[
      { href: "https://blog.iroco.co", label: $_("homepage.innovation.btn") },
      {
        href: "https://github.com/iroco-co",
        label: $_("homepage.innovation.github"),
      },
    ]}
    reversed
  />

  <ImageArticle
    imgSrc="/images/collaboration.svg"
    alt="People exchanging electronic messages and sharing hearts and thumbs ups"
    articleTitle={$_("homepage.inclusive.title")}
    articleContent={$_("homepage.inclusive.p")}
    buttonList={[
      { href: "/faq", label: $_("homepage.inclusive.btn") },
      {
        href: "mailto:hello@iroco.fr",
        label: $_("homepage.inclusive.contact"),
      },
    ]}
  />

  <IrocologoSignupbutton />

  <KeilaForm />
</section>

<style lang="scss">
  @use "node_modules/@iroco/ui/dist/scss/colors";
  @import "node_modules/@iroco/ui/dist/scss/button";
  .page-content {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
</style>
