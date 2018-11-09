<template>
  <table>
    <thead>
      <tr>
        <th v-for="(item, key, index) in tableTitles" @click="sort(key)" v-bind:key="index">{{item}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, index) in sortedTableData" v-bind:key="index">
        <td>{{value.name}}</td>
        <td>{{value.height}}</td>
        <td>{{value.mass}}</td>
        <td>{{value.hair_color}}</td>
        <td>{{value.skin_color}}</td>
        <td>{{value.eye_color}}</td>
        <td>{{value.birth_year}}</td>
        <td>{{value.gender}}</td>
      </tr>
    </tbody>
     debug: sort={{currentSortedItem}}, dir={{currentSortDirection}}
  </table>
  
</template>

<script>
export default {
  name: "ProjectTable",
  methods: {
    sort(item) {
      item = item.toLowerCase();
      /*
      **Case when the user clicks the same item
      */
      if (this.currentSortedItem === item) {
        this.currentSortDirection =
          this.currentSortDirection === "asc" ? "desc" : "asc";
        return;
      }
      this.currentSortedItem = item;
    }
  },
  computed: {
    sortedTableData: function() {
      return this.tableData.sort((a, b) => {
        const item = this.currentSortedItem;
        const orderMod = this.currentSortDirection === "desc" ? -1 : 1;
        /*
        **sorting of numbers is done separately
        */
        if (item === "height" || item === "mass" || item === "birth_year") {
          return (parseFloat(a[item]) - parseFloat(b[item])) * orderMod;
        }
        /*
        **Sorting of n/a and none will go separately 
        */
        if (a[item] === "n/a") return -3 * orderMod;
        if (b[item] === "n/a") return 3 * orderMod;
        if (a[item] === "none") return -2 * orderMod;
        if (b[item] === "none") return 2 * orderMod;

        if (a[item] < b[item]) return -1 * orderMod;
        if (a[item] > b[item]) return 1 * orderMod;
        return 0;
      });
    }
  },
  data: function() {
    return {
      currentSortedItem: "name",
      currentSortDirection: "asc",
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
        },
        {
          name: "Darth Vader",
          height: "202",
          mass: "136",
          hair_color: "none",
          skin_color: "white",
          eye_color: "yellow",
          birth_year: "41.9BBY",
          gender: "male"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
