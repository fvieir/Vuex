<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapActions, mapMutations } from "vuex"

export default {
    data() {
        return {
            sequencia: 1,
        }
    },
    computed:{
        quantidade() {
            return this.$store.state.parametro.quantidade
        },
        preco () {
            return this.$store.state.parametro.preco
        }
    },
    methods: {
        // ...mapMutations(['adicionarProduto']),
        ...mapActions(['adicionarProduto']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++

            // eslint-disable-next-line no-console
            // Usando store para adicionar produtos
            // this.$store.state.produtos.push(produto)

            // Acessar actions e mutations com commit e dispatch
            // this.$store.commit('adicionarProduto',produto)
            //this.$store.dispatch('adicionarProduto', produto)

            // Acessar uma mutations e actions com ...mapActions e ...mapMutations
            // eslint-disable-next-line no-console
            console.log(this.$store.getters.getNome)
            this.adicionarProduto(produto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
