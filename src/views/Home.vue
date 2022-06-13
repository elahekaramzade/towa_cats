<template>
  <div class="w-full">
    <Search />
    <CharacterList>
      <CharacterBox
        v-for="char in people"
        :key="genUniqueKey(char)"
        :character="char"
      />
    </CharacterList>
    <Pagination :paginate="paginate" />
    <Alert v-if="errorMsg" :errorMsg="errorMsg" />
  </div>
</template>

<script>
import Search from "@/components/elements/Search.vue";
import CharacterList from "@/components/elements/CharacterList.vue";
import CharacterBox from "@/components/elements/CharacterBox.vue";
import { genUniqueKey } from "../utils";
import Pagination from "../components/elements/Pagination.vue";
import Alert from "../components/elements/Alert.vue";
export default {
  name: "Home",
  mixins: [
    {
      methods: { genUniqueKey },
    },
  ],
  components: { Search, CharacterList, CharacterBox, Pagination, Alert },
  computed: {
    people() {
      return this.$store.state.people;
    },
    paginate() {
      return this.$store.state.paginate;
    },
    errorMsg() {
      return this.$store.state.errorMsg;
    },
  },
  created() {
    this.$store.dispatch("getPeople");
  },
};
</script>
