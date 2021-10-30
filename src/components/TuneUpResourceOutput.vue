<template>
  <div class="text-left">
    <h1>Resource output here</h1>

    <div v-for="(toon, index) in toons" :key="index">
      <template v-if="!toon.isHidden">
        {{ toon.name }} , {{ toon.currentTuneUp }} ,
        {{ toon.preferredTuneUp }} ,
        {{ toon.isHidden }}

        <ResourceOutput :toon="toon" @oncountresource="onCountResource" />
      </template>
    </div>

    <h1>total {{ output.length }} items</h1>
    <button @click="log">Output Log</button>
  </div>
</template>

<script>
import tuneUps from "@/assets/tuneups.json"
import ResourceOutput from "@/components/ResourceOutput"
export default {
  name: "TuneUpResourceOutput",
  emits: ["oncountresource"],
  data() {
    return {
      resources: [],
      tuneUps: [],
      output: [],
      toons: [],
    }
  },
  components: {
    ResourceOutput,
  },
  computed: {},

  // setup() {
  //     return {
  //         resources : []
  //     }
  // },
  mounted() {
    // console.log(tuneUps)
    // this.calulateResources()

    this.tuneUps = tuneUps.tuneups
    // this.toons = this.$store.state.selectedToons

    let size = this.$store.state.selectedToons
    this.output = []
    for (let i = 0; i < size; i++) {
      this.output.push({})
    }

    this.toons = this.refreshToons()
  },

  updated() {
    this.toons = this.refreshToons()
  },

  methods: {
    onCountResource(out) {
      console.log("HERERERERE ... returning from emit, getting ")
      console.log(out)
      this.output.push(out)
    },

    log() {
      console.log(this.output)
    },

    refreshToons() {
      console.log("Toons being loaded from store")
      return this.$store.state.selectedToons
    },
  },
}
</script>
