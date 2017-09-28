import {combineReducers } from 'redux'
import web3 from './web3'
import data from './data'

const reduce = combineReducers({
  web3,
  data
})

export default reduce
