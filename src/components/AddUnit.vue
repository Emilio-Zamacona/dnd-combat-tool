<template>
  <div>
    <form v-on:submit.prevent="addUnit" class="add-form">
      <div>
        <h1>Add Unit</h1>
        <button @click="$store.commit('addBoxOpen')">X</button>
      </div>

      <input v-model="newUnit.name" placeholder="name" />
      <input v-model.number="newUnit.hp" type="number" placeholder="hp" />

      <input
        v-model.number="newUnit.initiative"
        type="number"
        placeholder="initiative"
      />
      <button type="submit">Add Unit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddUnit",
  components: {},
  data: function () {
    return {
      newUnit: {
        name: null,
        hp: null,
        isPlayer: null,
        dmgTaken: null,
        initiative: null,
      },
    };
  },
  props: [],
  computed: {
    ...mapGetters(["addingUnits"]),
    st() {
      return this.$store.state;
    },
  },
  methods: {
    addUnit: function () {
      if (
        this.newUnit.name != null &&
        this.newUnit.hp != null &&
        this.newUnit.initiative != null
      ) {
        this.st.units.push({
          name: this.newUnit.name,
          hp: this.newUnit.hp,
          isPlayer: this.newUnit.isPlayer,
          dmgTaken: 0,
          initiative: this.newUnit.initiative,
          id: this.st.totalUnits,
        });
        this.st.totalUnits += 1;
      }
    },
  },
};
</script>
