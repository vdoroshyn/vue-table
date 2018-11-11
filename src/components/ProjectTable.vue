<template>
  <div>
    <div>
      <div class="checkbox" v-for="item in initialData.titles" v-bind:key="item">
        <label>{{item}}
          <input type="checkbox" v-bind:value="item" v-model="filterCategories"/>
        </label>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(item, key, index) in initialData.titles" v-show="filterCategories.includes(item)" @click="sort(key)" v-bind:key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in sortedTableData" v-bind:key="index">
          <td v-show="filterCategories.includes('Name') && EditableName!==index" @dblclick="EditableName=index; sortBy=''">{{value.name}}</td>
          <input v-show="EditableName===index" type="text" v-model="value.name" v-on:blur="EditableName=null" @keyup.enter="EditableName=null">

          <td v-show="filterCategories.includes('Height') && EditableHeight!==index" @dblclick="EditableHeight=index; sortBy=''">{{value.height}}</td>
          <input v-show="EditableHeight===index" type="text" v-model="value.height" v-on:blur="EditableHeight=null" @keyup.enter="EditableHeight=null">

          <td v-show="filterCategories.includes('Mass') && EditableMass!==index" @dblclick="EditableMass=index; sortBy=''">{{value.mass}}</td>
          <input v-show="EditableMass===index" type="text" v-model="value.mass" v-on:blur="EditableMass=null" @keyup.enter="EditableMass=null">

          <td v-show="filterCategories.includes('Hair color') && EditableHairColor!==index" @dblclick="EditableHairColor=index; sortBy=''">{{value.hair_color}}</td>
          <input v-show="EditableHairColor===index" type="text" v-model="value.hair_color" v-on:blur="EditableHairColor=null" @keyup.enter="EditableHairColor=null">

          <td v-show="filterCategories.includes('Skin color') && EditableSkinColor!==index" @dblclick="EditableSkinColor=index; sortBy=''">{{value.skin_color}}</td>
          <input v-show="EditableSkinColor===index" type="text" v-model="value.skin_color" v-on:blur="EditableSkinColor=null" @keyup.enter="EditableSkinColor=null">

          <td v-show="filterCategories.includes('Eye color') && EditableEyeColor!==index" @dblclick="EditableEyeColor=index; sortBy=''">{{value.eye_color}}</td>
          <input v-show="EditableEyeColor===index" type="text" v-model="value.eye_color" v-on:blur="EditableEyeColor=null" @keyup.enter="EditableEyeColor=null">

          <td v-show="filterCategories.includes('Birth year') && EditableBirthYear!==index" @dblclick="EditableBirthYear=index; sortBy=''">{{value.birth_year}}</td>
          <input v-show="EditableBirthYear===index" type="text" v-model="value.birth_year" v-on:blur="EditableBirthYear=null" @keyup.enter="EditableBirthYear=null">

          <td v-show="filterCategories.includes('Gender') && EditableGender!==index" @dblclick="EditableGender=index; sortBy=''">{{value.gender}}</td>
          <input v-show="EditableGender===index" type="text" v-model="value.gender" v-on:blur="EditableGender=null" @keyup.enter="EditableGender=null">
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
      EditableName: null,
      EditableHeight: null,
      EditableMass: null,
      EditableHairColor: null,
      EditableSkinColor: null,
      EditableEyeColor: null,
      EditableBirthYear: null,
      EditableGender: null,
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

tr input {
  height: 100%;
  width: 90%;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.checkbox {
  display: inline-block;
}

.checkbox input {
  display: inline-block;
  margin-right: 10px;
}

.checkbox label {
  display: inline-block;
}
</style>
