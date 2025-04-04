<script lang="ts">
  import bin from "../assets/rubbish-bin-svgrepo-com.svg";

  import { remove } from "./task-list.svelte";

  let { title, desc, index, done = $bindable(false) } = $props();
</script>

<!-- Todo: animate delete with Svelte transitions -->
<div class={["task", { done }]}>
  <div class="content">
    <label class="label">
      <input bind:checked={done} type="checkbox" />
      <h1 class="title">{title}</h1>
    </label>

    {#if desc}
      <p class="desc">{desc}</p>
    {/if}

    <!-- <p>done: {done}</p>
    <p>present: {present}</p> -->
    <!-- <p>index: {index}</p> -->
  </div>

  <button class="delete-icon" onclick={() => remove(index)}>
    <img src={bin} alt="delete" />
  </button>

  <!-- Todo: add «grip» to the right for drag and drop purposes -->
  <!-- Todo: add edit button -->
</div>

<style>
  .task {
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 0.5rem 0.75rem;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: start;
    text-align: justify;
    gap: 0.5rem;

    .content {
      flex-grow: 99;

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

    /* Todo: change SVG colour thru CSS */
    .delete-icon {
      cursor: pointer;
      color: red;
      padding: 0.7rem;
      border: 1px solid red;
      border-radius: 10px;

      transition: background-color 250ms;

      &:hover {
        background-color: red;
        transition: background-color 250ms;
      }

      img {
        width: 2rem;
      }
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
  .task,
  .done {
    --trans-dur: 250ms; /* transition duration */

    transition: filter var(--trans-dur);

    .label > .title,
    .desc {
      transition: filter var(--trans-dur);
    }
  }
</style>
