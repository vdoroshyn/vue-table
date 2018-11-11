<template>
  <div>
    <div class="panel">
      <div class="checkbox" v-for="item in initialData.titles" v-bind:key="item">
        <label>{{item}}
          <input type="checkbox" v-bind:value="item" v-model="filterCategories"/>
        </label>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(item, key, index) in initialData.titles" v-show="filterCategories.includes(item)" @click="sort(key)" v-bind:key="index">{{item}}
          <span v-if="sortOrder==='asc'">&#x25BC;</span>
          <span v-else>&#x25B2;</span>
        </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in sortedTableData" v-bind:key="index">
          <td v-show="filterCategories.includes('Name') && editableName!==index" @dblclick="editableName=index; sortBy=''">{{value.name}}</td>
          <input v-show="editableName===index" type="text" v-model="value.name" v-on:blur="editableName=null" @keyup.enter="editableName=null">

          <td v-show="filterCategories.includes('Height') && editableHeight!==index" @dblclick="editableHeight=index; sortBy=''">{{value.height}}</td>
          <input v-show="editableHeight===index" type="text" v-model="value.height" v-on:blur="editableHeight=null" @keyup.enter="editableHeight=null">

          <td v-show="filterCategories.includes('Mass') && editableMass!==index" @dblclick="editableMass=index; sortBy=''">{{value.mass}}</td>
          <input v-show="editableMass===index" type="text" v-model="value.mass" v-on:blur="editableMass=null" @keyup.enter="editableMass=null">

          <td v-show="filterCategories.includes('Hair color') && editableHairColor!==index" @dblclick="editableHairColor=index; sortBy=''">{{value.hair_color}}</td>
          <input v-show="editableHairColor===index" type="text" v-model="value.hair_color" v-on:blur="editableHairColor=null" @keyup.enter="editableHairColor=null">

          <td v-show="filterCategories.includes('Skin color') && editableSkinColor!==index" @dblclick="editableSkinColor=index; sortBy=''">{{value.skin_color}}</td>
          <input v-show="editableSkinColor===index" type="text" v-model="value.skin_color" v-on:blur="editableSkinColor=null" @keyup.enter="editableSkinColor=null">

          <td v-show="filterCategories.includes('Eye color') && editableEyeColor!==index" @dblclick="editableEyeColor=index; sortBy=''">{{value.eye_color}}</td>
          <input v-show="editableEyeColor===index" type="text" v-model="value.eye_color" v-on:blur="editableEyeColor=null" @keyup.enter="editableEyeColor=null">

          <td v-show="filterCategories.includes('Birth year') && editableBirthYear!==index" @dblclick="editableBirthYear=index; sortBy=''">{{value.birth_year}}</td>
          <input v-show="editableBirthYear===index" type="text" v-model="value.birth_year" v-on:blur="editableBirthYear=null" @keyup.enter="editableBirthYear=null">

          <td v-show="filterCategories.includes('Gender') && editableGender!==index" @dblclick="editableGender=index; sortBy=''">{{value.gender}}</td>
          <input v-show="editableGender===index" type="text" v-model="value.gender" v-on:blur="editableGender=null" @keyup.enter="editableGender=null">
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProjectTable",
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
      editableName: null,
      editableHeight: null,
      editableMass: null,
      editableHairColor: null,
      editableSkinColor: null,
      editableEyeColor: null,
      editableBirthYear: null,
      editableGender: null,
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
