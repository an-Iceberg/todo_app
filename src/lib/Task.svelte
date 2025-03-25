<script lang="ts">
  let done = $state(false);
  let { title, desc } = $props();
  // let title = "Title of Task";
  // let desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  // tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  // quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  // consequat.`;
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

  <!-- Add «grip» to the right for drag and drop purposes -->
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
    --brightness: 75%;
    filter: brightness(var(--brightness));
    /* border-color: #aaa;
    background-color: #202020; */

    .label > .title,
    .desc {
      /* color: #aaa; */
      filter: brightness(var(--brightness));
    }
  }

  /* Transitions */
  .item,
  .done {
    --trans-dur: 250ms; /* transition duration */

    transition: filter var(--trans-dur);

    .label > .title,
    .desc {
      transition: filter var(--trans-dur);
    }
  }
</style>
