const InfoUser = {
    Usuario: null,
    ResidenciaSelecionada: null,

    InserirUsuario: (usuario) => {
        InfoUser.Usuario = usuario
    },
    InserirResidencia: (residencia) => {
        InfoUser.ResidenciaSelecionada = residencia
    },
    UsuarioAutenticado: () => {
        return InfoUser.Usuario;
    }
}

export {InfoUser}



