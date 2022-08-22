<script lang="ts">
  import type { EventModel } from './definition';
  export let eventList: EventModel[] = [];
</script>

<div class="eventList">
  {#each eventList as event}
    <div class="eventList__event">
      <h4>{event.title}</h4>
      <h4>{event.year}</h4>
      <p>{event.details}</p>
    </div>
  {/each}
</div>

<style lang="scss">
  .eventList {
    display: flex;
    margin-bottom: 6em;
    &__event {
      p {
        width: 80%;
        font-size: small;
      }
    }
  }
</style>
