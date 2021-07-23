<template>
  <div>
    <h2>Sort by:</h2>
    <div v-for="att in attributeList" :key="att">
      <button @click="sortMethod(att)">{{ att }} &#11165;&#11167;</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Sort",
  components: {},
  data: function () {
    return {
      sortBy: "initiative",
      order: -1,
    };
  },
  props: ["attributeList"],
  computed: {
    ...mapGetters(["totalUnits"]),
  },
  watch: {
    totalUnits: {
      handler: function () {
        this.sortUnits();
      },
    },
  },
  methods: {
    sortUnits: function () {
      let sortBy = this.sortBy;
      let order = this.order;
      this.$store.commit("sortUnits", { order, sortBy });
    },
    sortMethod: function (s) {
      if (this.sortBy == s) {
        this.order = this.order * -1;
      }
      this.sortBy = s;
      this.sortUnits();
    },
  },
};
</script>
