<template>
  <div id="app">
    <SiteHeader />
    <SiteMain>
      <router-view />
    </SiteMain>
    <SiteFooter />
    <Loading :isLoading="isLoading" />
  </div>
</template>
<script>
import SiteHeader from "@/components/Layouts/SiteHeader.vue";
import SiteMain from "@/components/Layouts/SiteMain.vue";
import SiteFooter from "@/components/Layouts/SiteFooter.vue";
import Loading from "./components/elements/Loading.vue";
import instance from "./ApiCall";

export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    Loading,
  },
  data() {
    return {
      isLoading: false,
      axiosInterceptor: null,
    };
  },
  methods: {
    enableInterceptor() {
      this.axiosInterceptor = instance.interceptors.request.use(
        (config) => {
          this.isLoading = true;
          return config;
        },
        (error) => {
          this.isLoading = false;
          return Promise.reject(error);
        }
      );
      instance.interceptors.response.use(
        (response) => {
          this.isLoading = false;
          return response;
        },
        (error) => {
          this.isLoading = false;
          return Promise.reject(error);
        }
      );
    },
  },
  mounted() {
    this.enableInterceptor();
  },
};
</script>
