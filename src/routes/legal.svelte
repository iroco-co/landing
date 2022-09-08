<section class="legal">
  <h1>Mentions légales</h1>
  <div class="legal__iroco">
    <h2>&Eacute;diteur</h2>
    <h3>Raison sociale</h3>
    <p>IROCO SAS</p>
    <h3>Adresse du siège social</h3>
    <address>3 rue Aristide Briand</address>
    <address>92170 VANVES</address>
    <h3>Contact</h3>
    <p>hello@iroco.co</p>
    <h3>Montant du capital social</h3>
    <p>2 000 euros</p>
    <h3>SIRET</h3>
    <p>88942425500012</p>
    <h3>Nom du directeur et/ou co-directeur</h3>
    <p>Adeline AGUT, Bruno THOMAS</p>
  </div>
  <div class="legal__hosting">
    <h2>Hébergeur</h2>
    <h3>Raison Sociale</h3>
    <p>
      <a href="https://www.eolas.fr/">Eolas </a>
      SARL
    </p>
    <h3>Adresse du siège social</h3>
    <address>29 rue Servan</address>
    <address>38000 GRENOBLE</address>
    <h3>Téléphone</h3>
    <p>+33 4 76 44 50 50</p>
    <h3>Montant du Capital Social</h3>
    <p>28 988 euros</p>
  </div>
</section>

<style lang="scss">
  @use 'node_modules/@iroco/ui/lib/colors';
  @use 'node_modules/@iroco/ui/lib/containers';
  @use 'node_modules/@iroco/ui/lib/fonts';
  .legal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5em;

    h1 {
      text-align: center;
    }

    h2 {
      color: colors.$green;
    }

    a:link {
      @include fonts.Arial(medium, colors.$green);
    }

    a:visited {
      color: colors.$darkGrey;
    }

    &__iroco,
    &__hosting {
      justify-self: space-between;
    }
  }
</style>
