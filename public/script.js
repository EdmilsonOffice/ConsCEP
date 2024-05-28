function consultaCEP(cep) {
    cep = cep.replace(/\D/g, '')
    if (cep !="") {
        const padraoCep = /^[0-9]{8}$/;
        if (padraoCep.test(cep)) {
            document.querySelector('#bairro').setAttribute('readonly','')
            document.querySelector('#cidade').setAttribute('readonly','')
            document.querySelector('#uf').setAttribute('readonly','')
            
            const requisicao = new Request(`https://viacep.com.br/ws/${cep}/json`,{
                "method":"GET",
                "headers": {
                    "Content-type": "application/json"
                }
            });
            
            fetch(requisicao)
            .then(resposta =>resposta.json())
            .then(resposta => {
                if (!(resposta.erro)) {
                    
                    document.querySelector('#logradouro').value = resposta.logradouro;
                    document.querySelector('#bairro').value = resposta.bairro;
                    document.querySelector('#cidade').value = resposta.localidade;
                    document.querySelector('#uf').value = resposta.uf;
                } else{
                    limpaform();
                    window.alert('CEP não localizado')
                    document.querySelector('#bairro').removeAttribute('readonly');
                    document.querySelector('#cidade').removeAttribute('readonly');
                    document.querySelector('#uf').removeAttribute('readonly');

                    document.querySelector('#logradouro').focus();
                }
                
            })
        }else{
            limpaform();
            window.alert('O formato do CEP é invalido')
        }
    } else{
        limpaform();
        window.alert('Digite um Cep!');
    }
}
function limpaform() {
    document.querySelectorAll('input:not(#cep)').forEach(input => {
        input.valve = ''
    });
    
}
function cadastraCEP(endrecoCompleto) {
    fetch('http://localhost:3000/endereço',{
        "method": "POST",
        "headers": {
            "content-type": "aplicattion/json"
        },
        "body": JSON.stringify(endrecoCompleto)
    }).then(resposta => {
        resposta.ok ? window.alert('Endereço cadastrado'):
        window.alert('Erro:'+resposta.status)

    })
    
}
function atualizaCEP(endrecoCompleto) {
    fetch('http://localhost:3000/endereço',{
        "method": "PATCH",
        "headers": {
            "content-type": "aplicattion/json"
        },
        "body": JSON.stringify(endrecoCompleto)
    }).then(resposta => {
        resposta.ok ? window.alert('Endereço atualizado'):
        window.alert('Erro:'+resposta.status)

    })
}





//  <!--Adicione este formulário abaixo do formulário existente-->
// <form id="formAtualizacao">
//     <input type="text" id="nome" placeholder="Novo Nome">
//     <input type="email" id="email" placeholder="Novo Email">
//     <input type="password" id="senha" placeholder="Nova Senha">
//     <button type="submit">Atualizar</button>
// </form>

// <script>
//     // Função para lidar com a atualização dos dados
//     function atualizarRegistro(event) {
//         event.preventDefault(); // Evita o comportamento padrão de envio do formulário
        
//         const nome = document.querySelector('#nome').value;
//         const email = document.querySelector('#email').value;
//         const senha = document.querySelector('#senha').value;
        
//         // Aqui você deve criar um objeto com os dados a serem atualizados
//         const dadosAtualizados = {
//             nome: nome,
//             email: email,
//             senha: senha
//         };

//         // Aqui você deve fazer uma solicitação POST para atualizar o registro
//         fetch('URL_DO_SEU_SERVIDOR', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(dadosAtualizados)
//         })
//         .then(response => {
//             if (response.ok) {
//                 // Exibir mensagem de sucesso ou atualizar a interface de acordo
//                 alert('Registro atualizado com sucesso!');
//             } else {
//                 // Exibir mensagem de erro
//                 alert('Erro ao atualizar registro. Por favor, tente novamente.');
//             }
//         })
//         .catch(error => {
//             // Lidar com erros de requisição
//             console.error('Erro na requisição:', error);
//         });
//     }

//     // Adiciona um evento de envio ao formulário de atualização
//     document.querySelector('#formAtualizacao').addEventListener('submit', atualizarRegistro);
// </script>

// fetch(requisicao) // retorna uma resposta

// const requisicao = new Request('http://localhost:3000/produtos', {
//     "method": "GET",
//     "headers": {
//         "Content-type": "application/json"
//     }
// });

// fetch(requisicao)
//     .then(resposta => resposta.json())
//     .then(resposta => {

//         const div = document.createElement('div');

//         resposta.forEach(produto => {
            
//             const pDescricao = document.createElement('p');
//             pDescricao.innerHTML = produto.descricao;

//             const pId = document.createElement('p');
//             pId.innerHTML = produto.id;

//             const pPreco = document.createElement('p');
//             pPreco.innerHTML = produto.preco;

//             div.append(pId, pDescricao, pPreco);
//         });

//         document.body.appendChild(div);
        
//     });



