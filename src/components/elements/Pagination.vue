<template>
  <nav
    class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
    aria-label="Pagination"
  >
    <div class="hidden sm:block">
      <p class="text-sm text-gray-700">
        Showing
        {{ ' ' }}
        <span class="font-medium">1</span>
        {{ ' ' }}
        to
        {{ ' ' }}
        <span class="font-medium">10</span>
        {{ ' ' }}
        of
        {{ ' ' }}
        <span class="font-medium">20</span>
        {{ ' ' }}
        results
      </p>
    </div>
    <div class="flex-1 flex justify-between sm:justify-end">
      <button
        type="button"
        v-if="paginate.prev"
        @click="goPrev"
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-white bg-rose-400 hover:bg-rose-300"
      > Previous </button>
      <button
        type="button"
        v-if="paginate.next"
        @click="goNext"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-white bg-rose-400 hover:bg-rose-300"
      > Next </button>
    </div>
  </nav>
</template>
<script>
import { getPageFromUrl } from "../../utils";

export default {
  props: {
    paginate: Object,
  },
  mixins: [
    {
      methods: { getPageFromUrl },
    },
  ],
  methods: {
    goPrev() {
      const page = this.getPageFromUrl(this.paginate.prev);
      this.$store.dispatch("getPeople", {
        page: page,
      });
    },
    goNext() {
      const page = this.getPageFromUrl(this.paginate.next);
      this.$store.dispatch("getPeople", {
        page: page,
      });
    },
  },
};
</script>