# Teste Cypress
> Repositório de teste automáticos com cypress.


Desenvolvido com cypress, esse repositório contem alguns testes automatizados. O objetivo é validar api de conversão de números décimais
em sua versão por extenso, seja ela em portugês ou inglês.
![](../header.png)

## Instalação

- Instalação do Node
- Clone do projeto
- Configuração
- Execução do projeto

### Node

- Para instalação do Node, é necessário fazer o donwload no link: https://nodejs.org/

### Clone

> Clone o repositório

```shell
$ git clone git@github.com:Lucassev05/desafio_dm.git
```
ou

```shell
$ git clone https://github.com/Lucassev05/desafio_dm.git
```

### Configuração

> Instale os packges

```shell
$ npm install
```

### Execução
> Execute os testes

```shell
$ npm run cypress
```

Para visualizar melhor os testes e as validações feitas, sugiro executar o teste via interface
```shell
$ npm run cypress:open
```

### Gerar relatório HTML
```shell
$ npm run cypress:report
```

obs: Para gerar corretamente o relatório, é necessário executar todos os testes sem interrupção.

## Tecnologias Utilizadas
- <a href="https://nodejs.org/" target="_blank">Node.js</a>
- <a href="https://www.cypress.io/" target="_blank">Cypress</a>
- <a href="https://www.npmjs.com/package/cypress-mochawesome-reporter" target="_blank">Mochawesome Reporter</a>
