<script lang="ts">
  let done = $state(false);
  let title = "Title of Task";
  let desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
</script>

<div class="item {done ? 'done' : ''}">
  <label class="label">
    <input bind:checked={done} type="checkbox" />
    <h1 class="title">{title}</h1>
  </label>
  <p class="desc">{desc}</p>
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

    .label {
      display: flex;
      flex-direction: row;
      justify-items: center;

      margin-bottom: 0.75rem;

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

    .title,
    .desc {
      color: #aaa;
    }
  }
</style>
