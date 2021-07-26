<template>
  <div class="home">
    <h2 class="home__title">Battle Assistant</h2>
    <button class="home__addUnit" @click="$store.commit('addBoxOpen')">
      Add Unit
    </button>
    <AddUnit v-if="addingUnits" />
    <div class="home__characters">
      <Sort
        v-if="units.length > 1"
        :attributeList="['name', 'hp', 'initiative']"
      />
      <ul class="character__ul">
        <Character
          v-for="unit in units"
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
    return {
      lastUnitTouched: null,
    };
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
