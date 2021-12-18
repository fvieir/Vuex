import Vue from 'vue'
import Vuex from 'vuex'

// importar responsabilidades da store
import carrinho from './modules/carrinho'
import parametro from './modules/parametros'

// Registrar Vuex
Vue.use(Vuex)

// Funçao construtora
export default new Vuex.Store({
   modules:{carrinho, parametro}
})


