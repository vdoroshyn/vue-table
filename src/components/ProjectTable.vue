<template>
  <div>
    <div>
      <div class="checkbox" v-for="item in tableTitles" v-bind:key="item">
        <label>{{item}}</label>
        <input type="checkbox" v-bind:value="item" v-model="filterCategories"/>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(item, key, index) in tableTitles" v-show="filterCategories.includes(item)" @click="sort(key)" v-bind:key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key, index) in sortedTableData" v-bind:key="index">
          <td v-show="filterCategories.includes('Name')">{{value.name}}</td>
          <td v-show="filterCategories.includes('Height')">{{value.height}}</td>
          <td v-show="filterCategories.includes('Mass')">{{value.mass}}</td>
          <td v-show="filterCategories.includes('Hair color')">{{value.hair_color}}</td>
          <td v-show="filterCategories.includes('Skin color')">{{value.skin_color}}</td>
          <td v-show="filterCategories.includes('Eye color')">{{value.eye_color}}</td>
          <td v-show="filterCategories.includes('Birth year')">{{value.birth_year}}</td>
          <td v-show="filterCategories.includes('Gender')">{{value.gender}}</td>
        </tr>
      </tbody>
      debug: sort={{sortBy}}, dir={{sortOrder}}, filterArray={{filterCategories}}
      <h1 v-show="false">Hello!</h1>
    </table>
  </div>
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
      if (this.sortBy === item) {
        this.sortOrder =
          this.sortOrder === "asc" ? "desc" : "asc";
        return;
      }
      this.sortBy = item;
    }
  },
  computed: {
    sortedTableData: function() {
      return this.tableData.sort((a, b) => {
        const item = this.sortBy;
        const orderMod = this.sortOrder === "desc" ? -1 : 1;
        /*
        **Sorting of unknown is before everything because a lot of fields have it
        **As unknown is irrelevant to the search, it will be always on the bottom 
        */
        if (a[item] === "unknown") return 4;
        if (b[item] === "unknown") return -4;
        /*
        **sorting of numbers is done separately
        */
        if (item === "height" || item === "mass" || item === "birth_year") {
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
      sortBy: "name",
      sortOrder: "asc",
      filterCategories: ["Name", "Height", "Mass", "Hair color", "Skin color", "Eye color", "Birth year", "Gender"],
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
        },
        {
          name: "Leia Organa",
          height: "150",
          mass: "49",
          hair_color: "brown",
          skin_color: "light",
          eye_color: "brown",
          birth_year: "19BBY",
          gender: "female"
        },
        {
          name: "Owen Lars",
          height: "178",
          mass: "120",
          hair_color: "brown, grey",
          skin_color: "light",
          eye_color: "blue",
          birth_year: "52BBY",
          gender: "male"
        },
        {
          name: "Beru Whitesun lars",
          height: "165",
          mass: "75",
          hair_color: "brown",
          skin_color: "light",
          eye_color: "blue",
          birth_year: "47BBY",
          gender: "female"
        },
        {
          name: "R5-D4",
          height: "97",
          mass: "32",
          hair_color: "n/a",
          skin_color: "white, red",
          eye_color: "red",
          birth_year: "unknown",
          gender: "n/a"
        },
        {
          name: "Biggs Darklighter",
          height: "183",
          mass: "84",
          hair_color: "black",
          skin_color: "light",
          eye_color: "brown",
          birth_year: "24BBY",
          gender: "male"
        },
        {
          name: "Obi-Wan Kenobi",
          height: "182",
          mass: "77",
          hair_color: "auburn, white",
          skin_color: "fair",
          eye_color: "blue-gray",
          birth_year: "57BBY",
          gender: "male"
        },
        {
          name: "Anakin Skywalker",
          height: "188",
          mass: "84",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "41.9BBY",
          gender: "male"
        },
        {
          name: "Wilhuff Tarkin",
          height: "180",
          mass: "unknown",
          hair_color: "auburn, grey",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "64BBY",
          gender: "male"
        },
        {
          name: "Chewbacca",
          height: "228",
          mass: "112",
          hair_color: "brown",
          skin_color: "unknown",
          eye_color: "blue",
          birth_year: "200BBY",
          gender: "male"
        },
        {
          name: "Han Solo",
          height: "180",
          mass: "80",
          hair_color: "brown",
          skin_color: "fair",
          eye_color: "brown",
          birth_year: "29BBY",
          gender: "male"
        },
        {
          name: "Greedo",
          height: "173",
          mass: "74",
          hair_color: "n/a",
          skin_color: "green",
          eye_color: "black",
          birth_year: "44BBY",
          gender: "male"
        },
        {
          name: "Jabba Desilijic Tiure",
          height: "175",
          mass: "1,358",
          hair_color: "n/a",
          skin_color: "green-tan, brown",
          eye_color: "orange",
          birth_year: "600BBY",
          gender: "hermaphrodite"
        },
        {
          name: "Wedge Antilles",
          height: "170",
          mass: "77",
          hair_color: "brown",
          skin_color: "fair",
          eye_color: "hazel",
          birth_year: "21BBY",
          gender: "male"
        },
        {
          name: "Jek Tono Porkins",
          height: "180",
          mass: "110",
          hair_color: "brown",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "unknown",
          gender: "male"
        },
        {
          name: "Yoda",
          height: "66",
          mass: "17",
          hair_color: "white",
          skin_color: "green",
          eye_color: "brown",
          birth_year: "896BBY",
          gender: "male"
        },
        {
          name: "Palpatine",
          height: "170",
          mass: "75",
          hair_color: "grey",
          skin_color: "pale",
          eye_color: "yellow",
          birth_year: "82BBY",
          gender: "male"
        },
        {
          name: "Boba Fett",
          height: "183",
          mass: "78.2",
          hair_color: "black",
          skin_color: "fair",
          eye_color: "brown",
          birth_year: "31.5BBY",
          gender: "male"
        },
        {
          name: "IG-88",
          height: "200",
          mass: "140",
          hair_color: "none",
          skin_color: "metal",
          eye_color: "red",
          birth_year: "15BBY",
          gender: "none"
        },
        {
          name: "Bossk",
          height: "190",
          mass: "113",
          hair_color: "none",
          skin_color: "green",
          eye_color: "red",
          birth_year: "53BBY",
          gender: "male"
        },
        {
          name: "Lando Calrissian",
          height: "177",
          mass: "79",
          hair_color: "black",
          skin_color: "dark",
          eye_color: "brown",
          birth_year: "31BBY",
          gender: "male"
        },
        {
          name: "Lobot",
          height: "175",
          mass: "79",
          hair_color: "none",
          skin_color: "light",
          eye_color: "blue",
          birth_year: "37BBY",
          gender: "male"
        },
        {
          name: "Ackbar",
          height: "180",
          mass: "83",
          hair_color: "none",
          skin_color: "brown mottle",
          eye_color: "orange",
          birth_year: "41BBY",
          gender: "male"
        },
        {
          name: "Mon Mothma",
          height: "150",
          mass: "unknown",
          hair_color: "auburn",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "48BBY",
          gender: "female"
        },
        {
          name: "Arvel Crynyd",
          height: "unknown",
          mass: "unknown",
          hair_color: "brown",
          skin_color: "fair",
          eye_color: "brown",
          birth_year: "unknown",
          gender: "male"
        },
        {
          name: "Wicket Systri Warrick",
          height: "88",
          mass: "20",
          hair_color: "brown",
          skin_color: "brown",
          eye_color: "brown",
          birth_year: "8BBY",
          gender: "male"
        },
        {
          name: "Nien Nunb",
          height: "160",
          mass: "68",
          hair_color: "none",
          skin_color: "grey",
          eye_color: "black",
          birth_year: "unknown",
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
