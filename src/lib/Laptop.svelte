<script lang="ts">
  export let title: string;
</script>

<div class="laptop">
  <img src="/images/laptop.png" alt="Iroco webmail on laptop" />
  <h4>{title}</h4>
</div>

<style lang="scss">
  .laptop {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    img {
      width: 250px;
      transform: translateY(13%);
    }
  }
</style>
