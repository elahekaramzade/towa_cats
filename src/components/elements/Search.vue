<template>
  <div>
    <input
      type="text"
      name="search"
      id="search"
      v-model="search"
      class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 py-2 px-4 rounded-full bg-gray-100"
      placeholder="saerch..."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: null,
    };
  },
  watch: {
    search(val) {
      if (val)
        this.$store.dispatch("getPeople", {
          search: val,
        });
      else {
        this.$store.dispatch("getPeople");
      }
    },
  },
};
</script>

<style></style>
