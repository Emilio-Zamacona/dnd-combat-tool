<template>
  <div class="character">
    <h1 class="character__name">{{ unitName }}</h1>
    <div class="character__att">
      <h2 :class="isLow ? 'low' : 'alive'">HP: {{ unitHp }}</h2>
      <div class="character__buttonBox">
        <button @click="unitHp += 1" class="btn-value">+</button>
        <button @click="unitHp -= 1" class="btn-value">-</button>
      </div>
    </div>

    <h2 :class="isAlive ? 'alive' : 'dead'">
      {{ isAlive ? "vivo" : "muerto" }}
    </h2>
    <div class="character__att">
      <h2>{{ unitInitiative }}</h2>
      <div class="character__buttonBox">
        <button @click="unitInitiative += 1" class="btn-value">+</button>
        <button @click="unitInitiative -= 1" class="btn-value">-</button>
      </div>
    </div>

    <button @click="removeSelf">X</button>
  </div>
</template>

<script>
export default {
  name: "Character",
  components: {},
  data: function () {
    return {
      unitName: this.name,
      unitHp: this.hp,
      unitIsPlayer: this.isPlayer,
      unitDmgTaken: this.dmgTaken,
      unitInitiative: this.initiative,
      unitId: this.id,
    };
  },
  props: ["name", "hp", "isPlayer", "dmgTaken", "initiative", "id"],
  methods: {
    removeSelf: function () {
      for (let i = 0; i < this.st.units.length; i++) {
        if (this.st.units[i]["id"] == this.unitId) {
          this.st.units.splice(i, 1);
        }
      }
    },
  },
  computed: {
    isAlive: function () {
      return this.unitHp > 0;
    },
    isLow: function () {
      return this.unitHp < 5;
    },
    st() {
      return this.$store.state;
    },
  },
};
</script>
