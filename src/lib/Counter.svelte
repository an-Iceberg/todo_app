<script lang="ts">
let count: number = $state(0);

const inc = () => count++;
const reset = () => (count = 0);
</script>

<button onclick={inc}>
  Count is {count}
</button>

<button onclick={reset}> Reset count </button>
