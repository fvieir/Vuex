export default {
    state: {
        quantidade: 2,
        preco: 19.99
    },
    // Alterar o state da aplicação. Mutations seria o setters
    mutations: {
        setQuantidade (state, payload) {
            state.quantidade = payload
        },
        setPreco (state, payload) {
            state.preco = payload
        }
    }
}