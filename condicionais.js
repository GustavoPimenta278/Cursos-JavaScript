// Crie um programa que executa uma vpn com os parametros de acesso de uma matriz.

// *** NOTAS ***
  // 1- O programa deve ter ao menos uma estrutura para checar se o local possui servidor ou não.


//Definindo a matriz

const Matriz = {
  firewall: '192.168.0.1',
  local: 'São Paulo, SP',
  PossuiServidor: true
}

//Definindo primeiro local
const A672 = {
  firewall: '192.168.72.1',
  local: 'Cubatão, SP',
  PossuiServidor: true
}

//Informações do usuario
function CriaUsuario(Login, Senha, Local) {
  let Usuario = Login
  let SenhaUsuario = Senha
  let LocalUsuario = Local

    function usuarioCriado(Usuario, SenhaUsuario, LocalUsuario) {
      console.log(`Usuario: ${Usuario} \n Senha: ${SenhaUsuario} \n Local: ${LocalUsuario}`)
    }

  return usuarioCriado()
} 


console.log(CriaUsuario('gustavo.pimenta', '55136903813', 'A672'));