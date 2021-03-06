import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    units: [],
    totalUnits: 0,
    addingUnits: false,
    lastTouchedUnit: null,
  },
  mutations: {
    sortUnits(state, { sortBy, order }) {
      const units = this.state.units;
      units.sort((a, b) => {
        let compare = 0;
        if (a[sortBy] > b[sortBy]) {
          compare = 1;
        } else if (b[sortBy] > a[sortBy]) {
          compare = -1;
        }
        return compare * order;
      });
      state.units = units;
    },
    addBoxOpen(state) {
      state.addingUnits = !state.addingUnits;
    },
    changeAttValue(state, { id, att, amount }) {
      state.units.find((x) => x.id == id)[att] += amount;
    },
    changeTouchedUnit(state, unit) {
      state.lastTouchedUnit = unit;
    },
  },
  actions: {},
  modules: {},
  getters: {
    totalUnits: (state) => {
      return state.totalUnits;
    },
    addingUnits: (state) => {
      return state.addingUnits;
    },
    units: (state) => {
      return state.units;
    },
    lastTouchedUnit: (state) => {
      return state.lastTouchedUnit;
    },
  },
});
