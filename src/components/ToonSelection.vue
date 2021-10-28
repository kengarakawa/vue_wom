<template>
  <div class="bg-blue-300">
    Select Base Toon : ({{ selected.length }}) Archetype:
    <select name="type" v-model="options.type" @change="typeChange($event)">
      <option value="">Any</option>
      <option value="Attacker">Attacker</option>
      <option value="Defender">Defender</option>
      <option value="Support">Support</option>
    </select>
    Rarity :
    <select
      name="rarity"
      v-model="options.rarity"
      @change="rarityChange($event)"
    >
      <option value="">Any</option>
      <option value="Common">Common</option>
      <option value="Rare">Rare</option>
      <option value="Epic">Epic</option>
      <option value="Legendary">Legendary</option>
    </select>

    <input
      class="mx-5 bg-gray-300 border-r-2"
      type="text"
      name="keyword"
      v-model="options.keyword"
      placeholder="keyword"
      @input="keywordChange($event)"
    />

    <br clear="all" />

    <div class="text-left toon-list">
      <div
        class="px-5 py-3 mx-5 my-2 font-bold bg-green-300 selectable-toon-card"
        v-for="(toon, index) in selected"
        :key="index"
        
        @click="handleAddToon(toon)"
      >
        {{ toon.name }}
      </div>
    </div>
  </div>
</template>

<style>
.toon-list {
  height: 250px;
  overflow-x: auto;
  overflow-y: hidden;
}
.selectable-toon-card {
  display: inline-block;
  /* width: 300px; */
  border: solid 1px black;
  border-radius: 15px;
  cursor: pointer;
}
</style>

<script>
import toons from "@/assets/toons_array.json"
export default {
  name: "ToonsSelection",
  data() {
    return {
      toons: [],
      options: {
        rarity: "",
        type: "",
        keyword: "",
      },
      selected: [],
    }
  },
  mounted() {
    this.selected = this.toons = toons

    console.log(this.toons)
  },
  methods: {
    rarityChange(event) {
      let rarity = event.target.value
      this.listToons()
      console.log(rarity)
    },
    typeChange(event) {
      let type = event.target.value
      console.log(type)
      this.listToons()
    },
    keywordChange(event) {
      let type = event.target.value
      console.log(type)
      this.listToons()
    },
    
    handleAddToon(toon) {
        this.$store.commit('addToon' , { toon } )
    } , 

    listToons() {
    let keyword = this.options.keyword ?  this.options.keyword.toLowerCase() : '' 
    console.log(`keyword: ${keyword}`) 
        
      this.selected = this.toons.filter((toon) => {
        // if (keyword != "") {
        //   console.log(toon.name.indexOf(keyword) > 0 )
        // }
        console.log( toon.name.toLowerCase())
        console.log( toon.name.toLowerCase().indexOf(keyword) )

        return (
          (this.options.type == "" || this.options.type == toon.type) &&
          (this.options.rarity == "" || this.options.rarity == toon.rarity) &&
          (keyword == "" || toon.name.toLowerCase().indexOf(keyword) >= 0)
            
        )
      })
      console.log(` ${this.selected.length} remaining`)
      console.log(` ${this.toons.length} remaining`)
    },
  },
}
</script>
