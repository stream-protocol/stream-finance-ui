import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  trading: 'https://dex.streamprotocol.org',
  explorer: 'https://solscan.io',
  trade: 'https://dex.streamprotocol.org/#/market',
  whitelist : 'https://dex.streamprotocol.org/#/whitelist'
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {})

export const actions = actionTree({ state, getters, mutations }, {})
