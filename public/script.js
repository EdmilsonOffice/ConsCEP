// function consultaCEP(cep) {
    
//     cep = cep.replace(/\D/g, '');

//     if(cep != "") {

//         const padraoCep = /^[0-9]{8}$/;

//         if(padraoCep.test(cep)) {

//             document.querySelector('#bairro').setAttribute('readonly', '');
//             document.querySelector('#cidade').setAttribute('readonly', '');
//             document.querySelector('#uf').setAttribute('readonly', '');

//             const requisicao = new Request(`https://viacep.com.br/ws/${cep}/json`, {
//                 "method": "GET",
//                 "headers": {
//                     "Content-type": "appication/json"
//                 }
//             });

//             fetch(requisicao)
//             .then(resposta => resposta.json())
//             .then(resposta => {

//                 if (!(resposta.erro)) {

//                     document.querySelector('#logradouro').value = resposta.logradouro;
//                     document.querySelector('#bairro').value = resposta.bairro;
//                     document.querySelector('#cidade').value = resposta.localidade;
//                     document.querySelector('#uf').value = resposta.uf;
//                 } else {
//                     limpaForm();
//                         window.alert("CEP não localizado");

//                         document.querySelector('#bairro').removeAttribute('readonly');
//                         document.querySelector('#cidade').removeAttribute('readonly');
//                         document.querySelector('#uf').removeAttribute('readonly');

//                         document.querySelector('#logradouro').focus();
//                 }
//             });
            
//         } else {
            
//             limpaForm();
//             window.alert(`O formato do CEP é invalido`);
//         }
//     }else{

//         limpaForm();
//         window.alert(`Digite um CEP!`);
//     }
// }
// function limpaForm() {

//     document.querySelectorAll('input:not(#cep)').forEach(input => {
//         input.value = '';
//     })

// }

// fetch(requisicao) // retorna uma resposta

const requisicao = new Request('http://localhost:3000/produtos', {
    "method": "GET",
    "headers": {
        "Content-type": "application/json"
    }
});

fetch(requisicao)
    .then(resposta => resposta.json())
    .then(resposta => {

        const div = document.createElement('div');

        resposta.forEach(produto => {
            
            const pDescricao = document.createElement('p');
            pDescricao.innerHTML = produto.descricao;

            const pId = document.createElement('p');
            pId.innerHTML = produto.id;

            const pPreco = document.createElement('p');
            pPreco.innerHTML = produto.preco;

            div.append(pId, pDescricao, pPreco);
        });

        document.body.appendChild(div);
        
    });



