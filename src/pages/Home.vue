<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <CarForm />
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="c in cars" :key="c.id">
        <!-- Data passed through prop ':car' to child -->
        <CarCard :car="c"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {carsService } from '../services/CarsService'
import CarCard from '../components/CarCard.vue'
import CarForm from '../components/CarForm.vue'

export default {
  name: 'Home',
  setup(){
    // state

    // mounted
    onMounted(async ()=>{
      try {
        await carsService.getCars()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // state,
      // computeds
      cars: computed(() => AppState.cars)
      // methods
    }
  },
  components: {
    CarCard,
    CarForm
  }
}
</script>
