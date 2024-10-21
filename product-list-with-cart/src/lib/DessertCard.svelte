<script lang="ts">
  import type { Dessert } from "./models";

  export let dessert: Dessert;
  const image = "images/image-waffle-desktop.jpg";
</script>

<div class="dessert-card">
  {dessert.image.desktop}
  <img src={image} alt="{dessert.name}'s image" />
  <p>{dessert.name}</p>
</div>

<style>
  .dessert-card {
    background-color: green;
  }
</style>
