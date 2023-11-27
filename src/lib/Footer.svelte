<script lang="ts">
  import { _ } from "svelte-i18n";
  import Icon from "svelte-awesome";
  import { twitter, envelope, linkedin, github } from "svelte-awesome/icons";
  import mastodon from "$lib/mastodon";
</script>

<footer>
  <div class="footer">
    <div class="footer__contact">
      <div class="footer__contact__container">
        <h2>{$_("footer.socialmedia")}</h2>
        <div>
          <a href="/newsletter">{$_("footer.newsletter")}</a>
        </div>
        <div>
          <a href="mailto:hello@iroco.fr">
            <Icon data={envelope} class="greenIcon" />
            {$_("footer.mailto")}
          </a>
        </div>
        <div class="footer__contact__container__icons">
          <span class="footer__contact__container__icons__icon">
            <a href="https://github.com/iroco-co/landing">
              <Icon
                label="github"
                data={github}
                scale={1.5}
                class="greenIcon"
              />
            </a>
          </span>
          <span class="footer__contact__container__icons__icon">
            <a href="https://www.linkedin.com/company/irocodigital/">
              <Icon
                label="linkedin"
                data={linkedin}
                scale={1.5}
                class="greenIcon"
              />
            </a>
          </span>
          <span class="footer__contact__container__icons__icon">
            <a href="https://twitter.com/IrocoDigital">
              <Icon
                label="twitter"
                data={twitter}
                scale={1.5}
                class="greenIcon"
              />
            </a>
          </span>
          <span class="footer__contact__container__icons__icon">
            <a rel="me" href="https://mastodon.social/@iroco">
              <Icon
                label="mastodon"
                data={mastodon}
                scale={1.5}
                class="greenIcon"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
    <div class="footer__other">
      <h2>{$_("footer.menu.title")}</h2>
      <ul class="no-bullet">
        <li>
          <a href="https://jobs.makesense.org/projects/iroco-364/"
            >{$_("footer.other.job")}</a
          >
        </li>
        <li><a href="/doc">{$_("footer.other.doc")}</a></li>
        <li><a href="https://blog.iroco.co/">{$_("footer.other.blog")}</a></li>
        <li><a href="/legal">{$_("footer.other.legal")}</a></li>
        <li><a href="/faq">{$_("footer.other.faq")}</a></li>
        <li><a href="/terms">{$_("footer.other.terms")}</a></li>
      </ul>
    </div>
  </div>
  <p class="copyright">
    {$_("footer.other.copyrights")}
  </p>
</footer>

<style lang="scss">
  @use "node_modules/@iroco/ui/dist/scss/colors";
  @import "node_modules/@iroco/ui/dist/scss/containers";

  :global svg.greenIcon {
    fill: colors.$green !important;
  }

  .footer {
    display: flex;
    justify-content: center;
    gap: 3em;

    h2 {
      color: colors.$darkBeige;
      font-size: 120%;
    }

    a,
    a:visited,
    a:active {
      color: colors.$beige;
    }

    &__contact {
      &__container {
        text-align: right;
        &__icons {
          display: flex;
          margin-top: 1em;
          &__icon {
            padding: 15px 35.5px;
            text-align: center;
            border-left: 1.5px solid colors.$mediumGrey;
            &:last-of-type {
              border-right: 1.5px solid colors.$mediumGrey;
            }
          }
        }
      }
    }
  }

  :global(.feather-mail) {
    vertical-align: text-bottom;
    margin-right: 5px;
  }

  .copyright {
    color: colors.$lightGrey;
    text-align: center;
    font-size: small;
  }

  @include screen-tablet {
    .footer {
      display: block;
      padding: 0 2em;
      &__contact {
        &__container {
          text-align: center;
          &__icons {
            display: flex;
            justify-content: center;
          }
        }
      }
      &__other {
        text-align: center;
      }
    }
  }
</style>
