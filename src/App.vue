<template>
  <div id="app">
    <SiteHeader />
    <SiteMain>
      <router-view />
    </SiteMain>
    <SiteFooter />
  </div>
</template>
<script>
import SiteHeader from "@/components/Layouts/SiteHeader.vue";
import SiteMain from "@/components/Layouts/SiteMain.vue";
import SiteFooter from "@/components/Layouts/SiteFooter.vue";
export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
  },
};
</script>
