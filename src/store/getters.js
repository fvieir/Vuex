export const getNome = state => {
    return state.name
}
export const getSobreNome = state => state.sobreNome
export const nomeCompleto = state => state.name + ' ' +state.sobreNome

