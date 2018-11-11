<template>
  <div id="app">
    <ProjectTable v-bind:tableTitles="tableTitles" v-bind:tableData="tableData"/>
  </div>
</template>

<script>
import ProjectTable from "./components/ProjectTable.vue";

export default {
  name: "app",
  components: {
    ProjectTable
  },
  data: function() {
    return {
      tableTitles: {
        name: "Name",
        height: "Height",
        mass: "Mass",
        hair_color: "Hair color",
        skin_color: "Skin color",
        eye_color: "Eye color",
        birth_year: "Birth year",
        gender: "Gender"
      },
      tableData: [
        {
          name: "Luke Skywalker",
          height: "172",
          mass: "77",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "19BBY",
          gender: "male"
        },
        {
          name: "C-3PO",
          height: "167",
          mass: "75",
          hair_color: "n/a",
          skin_color: "gold",
          eye_color: "yellow",
          birth_year: "112BBY",
          gender: "n/a"
        },
        {
          name: "R2-D2",
          height: "96",
          mass: "32",
          hair_color: "n/a",
          skin_color: "white, blue",
          eye_color: "red",
          birth_year: "33BBY",
          gender: "n/a"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
