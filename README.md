# ConsCEP

Consulta CEP no site viacep API
# consulta-cep-api
Projeto de consumo de Api de Cep do ViaCep.

## APIS

As apis possuem alguns elementos que servem a sua ultilização:

-Ponto de entreda: é o enereço do servidor hospedado e que pode ser acessado através de um navegador ou ferramenta de consumo de APIS. Exemplos:<https://dadosabertos.camara.leg.br/api/v2>

- **Recurso**: São os serviços de dados disponíveis para consumo. Exemplos:<https://dadosabertos.camara.leg.br/api/v2/deputados>

**Parâmetros**: são informações ou filtros que servem para enviar dados da consulta ou para serem processados pela API. os parâmetros podem ser passados para a API através da URL ou no corpo(body) da requisição. Exemplo:<https://dadosabertos.camara.leg.br/api/v2/deputados?nome=Tiririca>


**Métodos**: são as formas de consumo de API, que podem ser:
-_POST_:inserção de dados (**C**REATE)
- _GET_: para requisições de consulta de dados (**R**EAD)
- _PUT_ e _PATCH_: para atualização de dados (**U**PDATE)
- _DELETE_: para exclusão de dados (**D**ELETE)
