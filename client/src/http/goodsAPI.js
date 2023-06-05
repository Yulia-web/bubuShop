import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode';

export const fetchCategories = async(categories) => {
  const {data} = await $host.get('api/categories', categories)
  return data
}

export const fetchProducer = async(producer) => {
  const {data} = await $host.get('api/producer', producer)
  return data
}

export const fetchGender = async(gender) => {
  const {data} = await $host.get('api/gender', gender)
  return data
}

export const fetchColors = async(colors) => {
  const {data} = await $host.get('api/color', colors)
  return data
}

export const fetchGoods = async(goods) => {
  const {data} = await $host.get('api/goods', goods)
  return data
}

export const fetchGoodsOne = async(id) => {
  const {data} = await $host.get('api/goods' + id)
  return data
}
