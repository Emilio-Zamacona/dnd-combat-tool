<template>
  <div class="home">
    <h2 class="home__title">Battle Assistant</h2>
    <button class="home__addUnit" @click="$store.commit('addBoxOpen')">
      Add Unit
    </button>
    <AddUnit v-if="addingUnits" />
    <div class="character">
      <Sort
        v-if="units.length != 0"
        :attributeList="['hp', 'initiative', 'name', 'isPlayer']"
      />
      <ul class="character__ul">
        <Character
          v-for="unit in st.units"
          :key="unit.id"
          :name="unit.name"
          :hp="unit.hp"
          :isPlayer="unit.isPlayer"
          :dmgTaken="unit.dmgTaken"
          :initiative="unit.initiative"
          :id="unit.id"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Character from "../components/Character";
import AddUnit from "../components/AddUnit";
import Sort from "../components/Sort";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: { Character, AddUnit, Sort },
  data: function () {
    return {};
  },
  methods: {},
  watch: {
    totalUnits: {
      handler: function () {
        this.$store.commit("addBoxOpen");
      },
    },
  },
  computed: {
    ...mapGetters(["addingUnits", "totalUnits", "units"]),
    st() {
      return this.$store.state;
    },
  },
};
</script>
