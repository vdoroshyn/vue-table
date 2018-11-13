<template>
  <div>
    <div class="panel" @mouseover="turnOffEditable">
      <div class="checkbox" v-for="(item, key) in initialData.titles" v-bind:key="item">
        <label>{{item}}
          <input type="checkbox" v-bind:value="key" v-model="filterCategories"/>
        </label>
      </div>
    </div>
    <table>
      <thead>
        <tr class="flex-grid">
          <th class="col" v-for="(item, key, index) in initialData.titles" v-show="filterCategories.includes(key)" @click="sort(key)" @mouseover="turnOffEditable" v-bind:key="index">{{item}}
          <span v-if="sortOrder==='asc' && sortBy === key">&#x25BC;</span>
          <span v-else-if="sortOrder==='desc' && sortBy === key">&#x25B2;</span>
        </th>
        </tr>
      </thead>
      <tbody>
        <tr class="flex-grid" v-for="(value, index) in sortedTableData" v-bind:key="index">
          
          <td v-for="(val, key) in value" v-bind:key="key" class="col" v-show="filterCategories.includes(key)" >
            <div   v-if="shouldInputBeHidden(key, index)" @dblclick="makeOneFieldEditable(key, index)">{{val}}</div>
            <input v-if="!shouldInputBeHidden(key, index)" type="text" v-model="value[key]" v-on:blur="isEditable.pop()" @keyup.enter="isEditable.pop()">
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "VueTable",
  props: ["initialData"],
  methods: {
    sort(item) {
      item = item.toLowerCase();
      /*
      **Case when the user clicks the same item
      */
      if (this.sortBy === item) {
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
        return;
      }
      this.sortBy = item;
    },
    turnOffEditable() {
      if (this.isEditable.length == 1) {
        this.isEditable.pop();
      }
    },
    makeOneFieldEditable(string, index) {
      if (this.isEditable.length == 1) {
        this.isEditable.pop();
      }
      this.isEditable.push([string, index]);
      this.sortBy = "";
    },
    shouldInputBeHidden(string, index) {
      if (
        this.isEditable.length == 1 &&
        this.isEditable[0][0] === string &&
        this.isEditable[0][1] === index
      ) {
        return false;
      }
      return true;
    }
  },
  created() {
    /*
    **this is done for the user to see every table column from the start
    */
    for (let value in this.initialData.titles) {
      this.filterCategories.push(value);
    }
  },
  computed: {
    sortedTableData: function() {
      return this.initialData.items.sort((a, b) => {
        const item = this.sortBy;
        const orderMod = this.sortOrder === "desc" ? -1 : 1;
        /*
        **If a user deletes something and we have an empty string
        */
        if (a[item] === "") return 5;
        if (b[item] === "") return -5;
        /*
        **Sorting of unknown is before everything else because a lot of fields have it
        **As unknown is irrelevant to the search, it will be always on the bottom 
        */
        if (a[item] === "unknown") return 4;
        if (b[item] === "unknown") return -4;
        /*
        **sorting of numbers is done separately
        **(with the case covered when the user trolls us, deletes a number and inputs a string)
        */
        if (
          (item === "height" || item === "mass" || item === "birth_year") &&
          parseFloat(a[item]) &&
          parseFloat(b[item])
        ) {
          return (
            (parseFloat(a[item].replace(/,/g, "")) -
              parseFloat(b[item].replace(/,/g, ""))) *
            orderMod
          );
        }
        /*
        **Sorting of n/a and none go separately
        **As they are irrelevant to the search, they will be always on the bottom 
        */
        if (a[item] === "n/a") return 3;
        if (b[item] === "n/a") return -3;
        if (a[item] === "none") return 2;
        if (b[item] === "none") return -2;

        if (a[item] < b[item]) return -1 * orderMod;
        if (a[item] > b[item]) return 1 * orderMod;
        return 0;
      });
    }
  },
  data: function() {
    return {
      sortBy: "",
      sortOrder: "asc",
      isEditable: [],
      filterCategories: []
    };
  }
};
</script>

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

th {
  cursor: pointer;
}

tr input {
  height: 100%;
  width: 90%;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.flex-grid {
  display: flex;
}

.col {
  flex: 1;
}

.checkbox {
  display: inline-block;
  margin: 0 10px;
}

.checkbox input {
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}

.checkbox label {
  display: inline-block;
  cursor: pointer;
}

.panel {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 30px 30px;
}
</style>
