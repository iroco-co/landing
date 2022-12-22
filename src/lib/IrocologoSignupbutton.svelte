<script lang="ts">
  import { _ } from "svelte-i18n";
  import { IrocoLogo, Color } from "@iroco/ui";
  import Icon from 'svelte-awesome';
  import chevronRight from 'svelte-awesome/icons/chevronRight';
</script>

<div class="irocologo-signupbutton">
  <div class="irocologo-signupbutton__logo">
    <IrocoLogo width="10em" height="10em" />
  </div>
  <div class="irocologo-signupbutton__btn">
    <a
      class="iroco-ui-button iroco-ui-button--regular iroco-ui-button--success"
      href="https://app.iroco.co/signup/"
    >
      <Icon data={chevronRight} style="color: {Color.darkBlue}" />
      {$_("footer.subscribe")}
    </a>
  </div>
</div>

<style lang="scss">
  @import "node_modules/@iroco/ui/scss/button";
  .irocologo-signupbutton {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em 0;
  }
</style>
