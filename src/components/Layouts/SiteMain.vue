<template>
  <main class="mainSection w-full h-full mt-20">
    <div class="w-8/12 mx-auto py-16 px-4  h-full">
      <slot></slot>
    </div>
  </main>

</template>

<script>
export default {};
</script>

<style>
.mainSection {
  background: url("../../assets/img/starry-night-sky.jpg");
}
</style>