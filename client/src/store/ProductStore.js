import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._categories = []
    this._colors = []
    this._producer = []
    this._gender = []
    this._goods = []    
    makeAutoObservable(this)
  }

  setCategories(categories) {
    this._categories = categories
  }

  setColors(colors) {
    this._colors = colors
  }

  setGender(gender) {
    this._gender = gender
  }

  setProducer(producer) {
    this._producer = producer
  }

  setGoods(goods) {
    this._goods = goods
  }

  get categories() {
    return this._categories
  }

  get colors() {
    return this._colors
  }

  get gender() {
    return this._gender
  }

  get producer() {
    return this._producer
  }

  get goods() {
    return this._goods
  }
}