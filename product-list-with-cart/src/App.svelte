<main class="order">
  <section class="desserts">
    <h1>Desserts</h1>
    <p>TODO -- LIST</p>
  </section>
  <section class="cart">
    <p>TODO -- CART</p>
  </section>
</main>

<style>
  .order {
    display: grid;
  }

  .desserts h1 {
    font-size: var(--fs-900);
    font-weight: var(--fw-bold);
  }

  @media (min-width: 600px) {
    .order {
      grid-template-columns: 3fr 1fr;
    }
  }
</style>
