<template>
  <div class="car-form">
    <form class="d-flex" @submit.prevent="createCar">
      <div class="form-group">
        <label for="make">Make</label>
        <input
          type="text"
          name="make"
          v-model="state.newCar.make"
          class="form-control"
          placeholder="Make..."
          required
        />
      </div>
      <div class="form-group">
        <label for="model">Model</label>
        <input
          type="text"
          name="model"
          v-model="state.newCar.model"
          class="form-control"
          placeholder="Model..."
          required
        />
      </div>
      <div class="form-group">
        <label for="year">Year</label>
        <input
          type="number"
          name="year"
          v-model="state.newCar.year"
          class="form-control"
          placeholder="Year..."
          required
          min="1950"
          max="2021"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          type="number"
          name="price"
          v-model="state.newCar.price"
          class="form-control"
          placeholder="Price..."
          required
          min="1"
        />
      </div>
      <div class="form-group">
        <label for="imgUrl">Image Url</label>
        <input
          type="text"
          name="imgUrl"
          v-model="state.newCar.imgUrl"
          class="form-control"
          placeholder="Url..."
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          v-model="state.newCar.description"
          class="form-control"
          placeholder="Description..."
          maxlength="240"
        />
      </div>
      <div class="d-flex align-items-center">
        <button type="submit" class="btn btn-outline-success">Add</button>
      </div>
    </form>
  </div>
</template>


<script>
import { reactive } from '@vue/reactivity'
import { carsService } from '../services/CarsService'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      newCar: {}
    })
    return {
      state,
      async createCar(){
        try {
          const newId = await carsService.createCar(state.newCar)
          // NOTE clears the form
          debugger
          state.newCar = {}
          router.push({name: 'CarDetails', params: {id: newId}})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>