<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Logo from '../lib/Logo.svelte';
  import { Button, TextInput } from '../../node_modules/@iroco/ui';
</script>

<footer>
  <div class="footer__subscribe">
    <Logo size={52} margin={0} fontsize={2} titlemargin={1} flexdirection={'initial'} />
    <a class="footer__subscribe__btn" href="https://app.iroco.co/signup/">
      <Button type="submit" kind="success">{$_('footer.subscribe')}</Button>
    </a>
  </div>
  <div class="footer__contact">
    <a class="footer__contact__mailto" href="mailto:hello@iroco.fr">{$_('footer.mailto')}</a>
  </div>
  <div class="footer__footer">
    <div class="footer__footer__logo">
      <Logo size={130} margin={0} fontsize={2.5} titlemargin={0.2} flexdirection={'column'} />
    </div>
    <div class="footer__footer__socialnews">
      <div class="footer__footer__socialnews__socialmedia">
        <h3>{$_('footer.socialmedia')}</h3>
        <nav class="footer__footer__socialnews__socialmedia__icons">
          <a
            href="https://www.linkedin.com/company/irocodigital/"
            title="Iroco LinkedIn"
            aria-description="icon linking to Iroco LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/IrocoDigital"
            title="Iroco Twitter"
            aria-description="icon linking to Iroco Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.464,12.535 c0.006,0.133,0.009,0.265,0.009,0.397c0,4.068-3.095,8.756-8.756,8.756c-1.739,0-3.356-0.509-4.717-1.383 c0.241,0.029,0.486,0.042,0.735,0.042c1.443,0,2.769-0.491,3.821-1.318c-1.347-0.025-2.484-0.915-2.875-2.137 c0.188,0.036,0.381,0.055,0.579,0.055c0.281,0,0.554-0.038,0.811-0.108c-1.408-0.282-2.469-1.526-2.469-3.017 c0-0.013,0-0.026,0-0.039c0.415,0.231,0.889,0.369,1.394,0.385c-0.825-0.551-1.369-1.494-1.369-2.561 c0-0.565,0.151-1.094,0.416-1.547c1.518,1.862,3.786,3.088,6.343,3.216c-0.052-0.225-0.079-0.46-0.079-0.701 c0-1.699,1.378-3.078,3.077-3.078c0.885,0,1.685,0.374,2.246,0.972c0.701-0.139,1.36-0.394,1.955-0.747 c-0.23,0.719-0.718,1.321-1.354,1.703c0.622-0.074,1.215-0.239,1.768-0.484C22.588,11.559,22.067,12.1,21.464,12.535z"
              />
            </svg>
          </a>
          <a
            href="https://mastodon.social/@iroco"
            title="Iroco Mastodom"
            aria-description="icon linking to Iroco Mastodom"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                d="M 15.9375 4.03125 C 12.917 4.0435 9.9179219 4.4269844 8.3574219 5.1464844 C 8.3574219 5.1464844 5 6.6748594 5 11.880859 C 5 18.077859 4.9955 25.860234 10.5625 27.365234 C 12.6945 27.938234 14.527953 28.061562 16.001953 27.976562 C 18.676953 27.825562 20 27.005859 20 27.005859 L 19.910156 25.029297 C 19.910156 25.029297 18.176297 25.640313 16.029297 25.570312 C 13.902297 25.495313 11.6615 25.335688 11.3125 22.679688 C 11.2805 22.432688 11.264625 22.182594 11.265625 21.933594 C 15.772625 23.052594 19.615828 22.420969 20.673828 22.292969 C 23.627828 21.933969 26.199344 20.081672 26.527344 18.388672 C 27.041344 15.720672 26.998047 11.880859 26.998047 11.880859 C 26.998047 6.6748594 23.646484 5.1464844 23.646484 5.1464844 C 22.000984 4.3779844 18.958 4.019 15.9375 4.03125 z M 12.705078 8.0019531 C 13.739953 8.0297031 14.762578 8.4927031 15.392578 9.4707031 L 16.001953 10.505859 L 16.609375 9.4707031 C 17.874375 7.5037031 20.709594 7.6264375 22.058594 9.1484375 C 23.302594 10.596438 23.025391 11.531 23.025391 18 L 23.025391 18.001953 L 20.578125 18.001953 L 20.578125 12.373047 C 20.578125 9.7380469 17.21875 9.6362812 17.21875 12.738281 L 17.21875 16 L 14.787109 16 L 14.787109 12.738281 C 14.787109 9.6362812 11.429688 9.7360938 11.429688 12.371094 L 11.429688 18 L 8.9765625 18 C 8.9765625 11.526 8.7043594 10.585438 9.9433594 9.1484375 C 10.622859 8.3824375 11.670203 7.9742031 12.705078 8.0019531 z"
              />
            </svg>
          </a>
        </nav>
      </div>
      <div class="footer__footer__socialnews__newsletter">
        <h3>{$_('footer.newsletter')}</h3>
        <form class="footer__footer__socialnews__newsletter__form">
          <TextInput placeholder={$_('footer.email')} />
        </form>
      </div>
    </div>
    <div class="footer__footer__menu">
      <h3>{$_('footer.menu.title')}</h3>
      <ul>
        <li><a href="/">{$_('footer.menu.philosophy')}</a></li>
        <li><a href="/">{$_('footer.menu.planet')}</a></li>
        <li><a href="/">{$_('footer.menu.human')}</a></li>
        <li><a href="/">{$_('footer.menu.app')}</a></li>
        <li><a href="/">{$_('footer.menu.commitment')}</a></li>
      </ul>
    </div>
    <div class="footer__footer__other">
      <h3>{$_('footer.other.title')}</h3>
      <ul>
        <li><a href="https://blog.iroco.co/">{$_('footer.other.blog')}</a></li>
        <li><a href="/">{$_('footer.other.job')}</a></li>
        <li><a href="/terms">{$_('footer.other.terms')}</a></li>
        <li><a href="/">{$_('footer.other.legal')}</a></li>
      </ul>
    </div>
  </div>
  <p style="color: colors.$darkGrey; text-align: center; font-size: small; margin: 2em;">
    © 2021 Iroco. {$_('footer.other.copyrights')}
  </p>
</footer>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @use 'node_modules/@iroco/ui/lib/fonts';

  :global(.iroco-ui-input) {
    border: 2px solid colors.$darkGrey;
  }

  .footer {
    width: 95vw;
    letter-spacing: 0.1em;
    &__subscribe,
    &__contact,
    &__footer {
      display: flex;
    }

    &__subscribe {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__contact {
      margin: 5em auto 3em;
      background: colors.$nightBlue;
      height: 10vh;
      width: 90vw;
      align-items: center;
      justify-content: center;
      &__mailto {
        color: colors.$green;
      }
      &__mailto:hover {
        color: colors.$beige;
      }
    }

    &__footer {
      color: colors.$mediumGrey;
      justify-content: space-around;
      h3 {
        color: colors.$darkBeige;
      }
      &__socialnews,
      &__menu,
      &__other {
        text-transform: uppercase;
      }
      &__socialnews {
        &__socialmedia {
          &__icons {
            display: flex;
            justify-content: space-around;
            border-left: 1.5px solid colors.$mediumGrey;
            border-right: 1.5px solid colors.$mediumGrey;
            a {
              border-left: 1.5px solid colors.$mediumGrey;
              border-right: 1.5px solid colors.$mediumGrey;
              padding: 0.7em 2em;
              svg {
                fill: colors.$beige;
              }
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
  }
</style>
