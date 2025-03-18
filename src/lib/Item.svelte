<script lang="ts">
  let done = $state(false);
  let title = "Title of Task";
  let desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
  // let desc = "";
</script>

<!-- Todo: margin around the todo items should be managed by the list -->
<div class="item" class:done>
  <label class="label">
    <input bind:checked={done} type="checkbox" />
    <h1 class="title">{title}</h1>
  </label>

  {#if desc}
    <p class="desc">{desc}</p>
  {/if}
</div>

<style>
  .item {
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 0.5rem 0.75rem;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    text-align: justify;
    gap: 0.5rem;

    .label {
      display: flex;
      flex-direction: row;
      justify-items: center;

      .title {
        font-size: 2.25rem;
        margin: 0;
        padding-left: 0.25em;
        border-radius: 0.25em;
      }
    }

    .desc {
      margin: 0;
    }
  }

  .done {
    border-color: #aaa;
    background-color: #202020;

    .label > .title,
    .desc {
      color: #aaa;
    }
  }

  /* Transitions */
  .item,
  .done {
    --trans-dur: 250ms; /* transition duration */

    transition:
      border-color var(--trans-dur),
      background-color var(--trans-dur);

    .label > .title,
    .desc {
      transition: color var(--trans-dur);
    }
  }
</style>
