<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { Icon, IconMastodon } from '@iroco/ui';
</script>

<footer>
  <div class="footer">
    <div class="footer__newsletter">
      <h3>{$_('footer.newsletter')}</h3>
      <iframe
        title="mailjet"
        class="mj-w-res-iframe"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        src="https://app.mailjet.com/widget/iframe/6a9K/NvZ"
        height="200px"
      />
    </div>
    <div class="footer__contact">
      <div class="footer__contact__socialmedia">
        <h3>{$_('footer.socialmedia')}</h3>
        <div class="footer__contact__icons">
          <span class="footer__contact__icons__icon">
            <a href="https://www.linkedin.com/company/irocodigital/">
              <Icon name="linkedin" width="1.5em" height="1.5em" />
            </a>
          </span>
          <span class="footer__contact__icons__icon">
            <a href="https://twitter.com/IrocoDigital">
              <Icon name="twitter" width="1.5em" height="1.5em" />
            </a>
          </span>
          <span class="footer__contact__icons__icon">
            <a href="https://mastodon.social/@iroco">
              <IconMastodon width="1.5em" height="1.5em" />
            </a>
          </span>
        </div>
      </div>
    </div>
    <div class="footer__menu">
      <h3>{$_('footer.menu.title')}</h3>
      <ul>
        <li><a href="/">{$_('footer.menu.philosophy')}</a></li>
        <li><a href="/">{$_('footer.menu.planet')}</a></li>
        <li><a href="/">{$_('footer.menu.human')}</a></li>
        <li><a href="/">{$_('footer.menu.app')}</a></li>
        <li><a href="/">{$_('footer.menu.commitment')}</a></li>
      </ul>
    </div>
    <div class="footer__other">
      <h3>{$_('footer.other.title')}</h3>
      <ul>
        <li><a href="https://blog.iroco.co/">{$_('footer.other.blog')}</a></li>
        <li><a href="/">{$_('footer.other.job')}</a></li>
        <li><a href="/terms">{$_('footer.other.terms')}</a></li>
        <li><a href="/legal">{$_('footer.other.legal')}</a></li>
        <li><a href="/">{$_('footer.other.faq')}</a></li>
      </ul>
    </div>
  </div>
  <p class="copyright">
    © {$_('footer.other.copyrights')}
  </p>
</footer>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @import 'node_modules/@iroco/ui/scss/containers';

  .footer {
    display: flex;
    justify-content: space-around;
    text-transform: uppercase;

    h3 {
      color: colors.$darkBeige;
    }
    &__contact {
      &__icons {
        display: flex;
        &__icon {
          padding: 15px;
          text-align: center;
          border-left: 1.5px solid colors.$mediumGrey;
          border-right: 1.5px solid colors.$mediumGrey;
        }
      }
    }
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
    }
  }
</style>
