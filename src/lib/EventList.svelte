<script lang="ts">
  import type { EventModel } from "./definition";
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
  @import "node_modules/@iroco/ui/scss/containers";
  .eventList {
    display: flex;
    gap: 3em;
    text-align: left;
    @include screen-laptop {
      flex-wrap: wrap;
    }
    &__event {
      @include screen-laptop {
        flex: 1 1 200px;
      }
      p {
        font-size: small;
      }
    }
  }
</style>
