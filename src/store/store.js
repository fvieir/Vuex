import Vue from 'vue'
import Vuex from 'vuex'

// Registrar Vuex
Vue.use(Vuex)

// Funçao construtora
export default new Vuex.Store({
    state: {
        produtos: [],
        quantidade: 2,
        preco: 19.99
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    // Alterar o state da aplicação. Mutations seria o setters
    mutations: {
        adicionarProduto(state, payload) {
            return state.produtos.push(payload)
       },
        setQuantidade (state, payload) {
            state.quantidade = payload
        },
        setPreco (state, payload) {
            state.preco = payload
        }
    },
    // chamadas Ajax. Colocando setTimeout para simular chamadas ajax.
    actions: {
    //     adicionarProduto(context, payload) {
    //         setTimeout(() => {
    //             context.commit('adicionarProduto', payload)
    //         },1000)
    //    }

        // Usando operador destructuring 
        adicionarProduto( { commit }, payload) {
            setTimeout(()=>{
                commit('adicionarProduto', payload)
            },1000)
        }
   }
})


