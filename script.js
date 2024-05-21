const requisicao = new Request('https://viacepcom.br/ws/098101390/json');

fetch(requisicao).then(resposta => { console.log(resposta)});