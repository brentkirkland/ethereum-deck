import Oko from '../contracts/blockcolor.json'

const initial_state = {
  loading: true,
  contract: undefined,
  instance: undefined
}

const lightstatus = (state = initial_state, action) => {
  switch (action.type) {
    case 'INSTANTIATE_WEB3':
      const contract = window.web3.eth.contract(Oko.abi)
      state.loading = false;
      state.contract = contract;
      state.instance = contract.at(Oko.networks["oko"].address);
    return Object.assign({}, state);
    default:
      return state;
  }
}

export default lightstatus
