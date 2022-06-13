<template>
  <div class="vld-parent">
    <loading
      :active.sync="isLoading"
      :is-full-page="true"
      color="#00000"
      loader="dots"
    ></loading>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "Loader",
  components: {
    Loading,
  },
  props: {
    isLoading: { type: Boolean, required: true },
  },
};
</script>
