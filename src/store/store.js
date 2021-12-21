import Vue from 'vue'
import Vuex from 'vuex'

// importar responsabilidades da store
import carrinho from './modules/carrinho'
import parametro from './modules/parametros'

import * as getters from './getters'

// Registrar Vuex
Vue.use(Vuex)

// Funçao construtora
export default new Vuex.Store({
   state:{
      name: 'Fabricio',
      sobreNome: 'Dourado'
   },
   getters,
   modules:{carrinho, parametro}
})


