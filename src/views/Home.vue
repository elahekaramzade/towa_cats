<template>
  <div class="w-full">
    <Search />
    <CatList>
      <CatBox />
    </CatList>
  </div>
</template>

<script>
import Search from "@/components/elements/Search.vue";
import CatList from "@/components/elements/CatList.vue";
import CatBox from "@/components/elements/CatBox.vue";
export default {
  name: "Home",
  components: { Search, CatList, CatBox },
};
</script>
