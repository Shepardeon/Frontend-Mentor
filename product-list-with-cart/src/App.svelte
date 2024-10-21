<script lang="ts">
  import DessertCard from "./lib/DessertCard.svelte";
  import data from "./data.json";
  import type { Dessert } from "./lib/models";

  let desserts = data as Dessert[];
</script>

<main class="grid-layout order">
  <section class="order-desserts">
    <h1>Desserts</h1>
    <div class="grid-layout desserts">
      {#each desserts as dessert}
        <DessertCard {dessert} />
      {/each}
    </div>
  </section>
  <section class="order-cart">
    <p>TODO -- CART</p>
  </section>
</main>

<style>
  .order-desserts h1 {
    font-size: var(--fs-900);
    font-weight: var(--fw-bold);
  }

  .grid-layout.desserts {
    grid-template-columns: repeat(auto-fit, 250px);
    gap: 20px;
  }

  @media (min-width: 600px) {
    .grid-layout.order {
      grid-template-columns: 3fr 1fr;
    }
  }
</style>
