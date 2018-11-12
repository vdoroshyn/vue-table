<template>
  <div>
    <div class="panel" @mouseover="turnOffEditable">
      <div class="checkbox" v-for="item in initialData.titles" v-bind:key="item">
        <label>{{item}}
          <input type="checkbox" v-bind:value="item" v-model="filterCategories"/>
        </label>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(item, key, index) in initialData.titles" v-show="filterCategories.includes(item)" @click="sort(key)" @mouseover="turnOffEditable" v-bind:key="index">{{item}}
          <span v-if="sortOrder==='asc' && sortBy === key">&#x25BC;</span>
          <span v-else-if="sortOrder==='desc' && sortBy === key">&#x25B2;</span>
        </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in sortedTableData" v-bind:key="index">
          
          <td v-show="filterCategories.includes('Name') && shouldInputBeHidden('Name', index)" @dblclick="makeOneFieldEditable('Name', index)">{{value.name}}</td>
          <input v-show="!shouldInputBeHidden('Name', index)" type="text" v-model="value.name" v-on:blur="isEditable.pop()" @keyup.enter="isEditable.pop()">

          <td v-show="filterCategories.includes('Height') && shouldInputBeHidden('Height', index)" @dblclick="makeOneFieldEditable('Height', index)">{{value.height}}</td>
          <input v-show="!shouldInputBeHidden('Height', index)" v-model="value.height" v-on:blur="isEditable.pop()" @keyup.enter="isEditable.pop()">

          <td v-show="filterCategories.includes('Mass') && shouldInputBeHidden('Mass', index)" @dblclick="makeOneFieldEditable('Mass', index)">{{value.mass}}</td>
          <input v-show="!shouldInputBeHidden('Mass', index)" v-model="value.mass" v-on:blur="isEditable.pop()" @keyup.enter="isEditable.pop()">

          <td v-show="filterCategories.includes('Hair color') && shouldInputBeHidden('Hair color', index)" @dblclick="makeOneFieldEditable('Hair color', index)">{{value.hair_color}}</td>
          <input v-show="!shouldInputBeHidden('Hair color', index)" v-model="value.hair_color" v-on:blur="isEditable.pop()" @keyup.enter="isEditable.pop()">

          <td v-show="filterCategories.includes('Skin color') && shouldInputBeHidden('Skin color', index)" @dblclick="makeOneFieldEditable('Skin color', index)">{{value.skin_color}}</td>
          <input v-show="!shouldInputBeHidden('Skin color', index)" v-model="value.skin_color" v-on:blur="isEditable.pop()" @keyup.enter="isEditable.pop()">

          <td v-show="filterCategories.includes('Eye color') && shouldInputBeHidden('Eye color', index)" @dblclick="makeOneFieldEditable('Eye color', index)">{{value.eye_color}}</td>
          <input v-show="!shouldInputBeHidden('Eye color', index)" v-model="value.eye_color" v-on:blur="isEditable.pop()" @keyup.enter="isEditable.pop()">

          <td v-show="filterCategories.includes('Birth year') && shouldInputBeHidden('Birth year', index)" @dblclick="makeOneFieldEditable('Birth year', index)">{{value.birth_year}}</td>
          <input v-show="!shouldInputBeHidden('Birth year', index)" v-model="value.birth_year" v-on:blur="isEditable.pop()" @keyup.enter="isEditable.pop()">

          <td v-show="filterCategories.includes('Gender') && shouldInputBeHidden('Gender', index)" @dblclick="makeOneFieldEditable('Gender', index)">{{value.gender}}</td>
          <input v-show="!shouldInputBeHidden('Gender', index)" v-model="value.gender" v-on:blur="isEditable.pop()" @keyup.enter="isEditable.pop()">

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
      this.filterCategories.push(this.initialData.titles[value]);
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
