import { AppState } from "../AppState"
import { sandbox } from "./AxiosService"

class CarsService {
  async getCars() {
    let res = await sandbox.get("/cars")
    AppState.cars = res.data
  }
  async getCarById(id){
    let res = await sandbox.get(`/cars/${id}`)
    AppState.activeCar = res.data
  }
  async createCar(car){
    let res = await sandbox.post('/cars', car)
    AppState.cars.push(res.data)
    return res.data.id
  }
  async destroy(id){
    await sandbox.delete(`/cars/${id}`)
    AppState.cars = AppState.cars.filter(car => car.id !== id)
  }
}

export const carsService = new CarsService()