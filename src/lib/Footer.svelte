<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Logo from '../lib/Logo.svelte';
  import { Icon, IconMastodon } from '@iroco/ui';
</script>

<footer>
  <div class="footer">
    <div class="footer__logo">
      <Logo size={130} margin={0} fontsize={2.5} titlemargin={0.2} flexdirection={'column'} />
    </div>
    <div class="footer__contact">
      <div class="footer__contact__socialmedia">
        <h3>{$_('footer.socialmedia')}</h3>
        <div class="footer__contact__socialmedia__icons">
          <span class="footer__contact__socialmedia__icons__icon"
            ><Icon name="linkedin" width="2em" height="2em" /></span
          >
          <span class="footer__contact__socialmedia__icons__icon"
            ><Icon name="twitter" width="2em" height="2em" /></span
          >
          <span class="footer__contact__socialmedia__icons__icon"
            ><IconMastodon width="2em" height="2em" /></span
          >
        </div>
      </div>
      <div class="footer__contact__socialmedia__newsletter">
        <h3>{$_('footer.newsletter')}</h3>
        <iframe
          title="mailjet"
          class="mj-w-res-iframe"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          src="https://app.mailjet.com/widget/iframe/6a9K/GFo"
          width="100%"
        />
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
      </ul>
    </div>
  </div>
  <p class="copyright">
    © 2021 Iroco. {$_('footer.other.copyrights')}
  </p>
</footer>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @use 'node_modules/@iroco/ui/lib/fonts';

  .footer {
    display: flex;
    justify-content: space-around;
    text-transform: uppercase;

    h3 {
      color: colors.$darkBeige;
    }

    &__contact {
      &__socialmedia {
        &__icons {
          display: flex;
          &__icon {
            flex-grow: 1;
            text-align: center;
            border-left: 1.5px solid colors.$mediumGrey;
            border-right: 1.5px solid colors.$mediumGrey;
          }
          a:hover {
            svg {
              fill: colors.$green;
            }
          }
        }
      }
    }
  }
  .copyright {
    color: colors.$lightGrey;
    text-align: center;
    font-size: small;
  }
</style>
