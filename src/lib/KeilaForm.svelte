<script>
  import { _ } from "svelte-i18n";
  import chevronRight from "svelte-awesome/icons/chevronRight";
  import { Color } from "@iroco/ui";
  import Icon from "svelte-awesome";
</script>

<div class="newsletter">
  <form
    action="https://newsletter.test.iroco.co/forms/nfrm_weLJnLY5"
    class="iroco-ui-form contact-form container bg-white rounded py-4 md:py-8 flex flex-col gap-4"
    method="post"
    style="background-color:#211d28!important;color:#f2ebe3!important"
  >
    <h1 class="text-4xl my-4">
      {$_("homepage.newsletter.title")}
    </h1>
    <div class="flex flex-col">
      <label for="contact_email" class="iroco-ui-label"> Email </label>
      <input
        id="contact_email"
        name="contact[email]"
        class="iroco-ui-input"
        type="email"
      />
    </div>
    <input
      type="hidden"
      aria-hidden="true"
      autocomplete="off"
      name="h[url]"
      novalidate="novalidate"
      style="display: none"
    />
    <div>
      <button
        class="iroco-ui-button iroco-ui-button--regular iroco-ui-button--success"
        aria-label={$_("homepage.newsletter.btn")}
      >
        <Icon data={chevronRight} style="color: {Color.darkBlue}" />
        {$_("homepage.newsletter.btn")}
      </button>
    </div>
  </form>
</div>

<style lang="scss">
  @use "@iroco/ui/scss/button.scss";
  @use "@iroco/ui/scss/forms.scss";
  .newsletter {
    display: flex;
    align-self: center;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>
