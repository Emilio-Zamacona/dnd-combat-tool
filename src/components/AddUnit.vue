<template>
  <div class="addUnit">
    <form v-on:submit.prevent="addUnit" class="addUnit__form">
      <h1 class="addUnit__form__title">Add Unit</h1>

      <div class="addUnit__form__att">
        <h2 class="addUnit__form__label">Name:</h2>
        <input
          class="addUnit__form__input"
          v-model="newUnit.name"
          placeholder="name"
        />
      </div>
      <div class="addUnit__form__att">
        <h2 class="addUnit__form__label">HP:</h2>
        <input
          class="addUnit__form__input"
          v-model.number="newUnit.hp"
          type="number"
          placeholder="hp"
        />
      </div>
      <div class="addUnit__form__att">
        <h2 class="addUnit__form__label">Initiative:</h2>
        <input
          class="addUnit__form__input"
          v-model.number="newUnit.initiative"
          type="number"
          placeholder="initiative"
        />
      </div>
      <div class="addUnit__form__att">
        <h2 class="addUnit__form__label">Unit is a Player</h2>
        <input
          class="addUnit__form__checkbox"
          type="checkbox"
          id="checkbox"
          v-model="newUnit.isPlayer"
        />
      </div>
      <div class="addUnit__form__buttons">
        <button type="submit">✔</button>
        <button @click="$store.commit('addBoxOpen')">✖</button>
      </div>
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
