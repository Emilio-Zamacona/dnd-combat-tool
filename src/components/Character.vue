<template>
  <div class="character" :class="{ active: unit.id == lastTouchedUnit }">
    <button class="character__removeButton" @click="removeSelf">X</button>
    <div
      :tabindex="id"
      class="character__container"
      :class="unit.isPlayer ? 'isPlayer' : 'notPlayer'"
    >
      <h1 class="character__name" @click="changeUnitTouched()">
        {{ unit.name }}
      </h1>

      <div class="character__att">
        <h2 :class="isLow ? 'low' : 'alive'">HP: {{ unit.hp }}</h2>
        <div class="character__buttonBox">
          <button
            @click="changeAttValue('hp', 1)"
            class="character__buttonBox__valueBtn"
          >
            +
          </button>
          <button
            @click="changeAttValue('hp', -1)"
            class="character__buttonBox__valueBtn"
          >
            -
          </button>
        </div>
      </div>
      <div class="character__att">
        <h2 class="alive">{{ unit.initiative }}</h2>
        <div class="character__buttonBox">
          <button
            @click="changeAttValue('initiative', 1)"
            class="character__buttonBox__valueBtn"
          >
            +
          </button>
          <button
            @click="changeAttValue('initiative', -1)"
            class="character__buttonBox__valueBtn"
          >
            -
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Character",
  components: {},
  data: function () {
    return {};
  },
  props: ["id"],
  methods: {
    removeSelf: function () {
      for (let i = 0; i < this.units.length; i++) {
        if (this.units[i]["id"] == this.id) {
          this.units.splice(i, 1);
        }
      }
    },
    changeAttValue: function (att, amount) {
      let id = this.id;
      this.$store.commit("changeAttValue", { id, att, amount });
    },
    changeUnitTouched: function () {
      if (this.lastTouchedUnit == this.id) {
        this.$store.commit("changeTouchedUnit", null);
      } else {
        this.$store.commit("changeTouchedUnit", this.id);
      }
    },
  },
  computed: {
    ...mapGetters(["units", "lastTouchedUnit"]),
    unit: function () {
      return this.units.find((x) => x.id == this.id);
    },
    isAlive: function () {
      return this.unit.hp > 0;
    },
    isLow: function () {
      return this.unit.hp < 5;
    },
    st() {
      return this.$store.state;
    },
  },
};
</script>
