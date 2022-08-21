Criptografia <a href="https://github.com/backend-br/desafios/tree/master/2%20-%20Medium/Criptografia">Link do desafio</a>
===========================

<h1>
  Tecnologias 👨‍💻
  </br>
  </br>
  <div align="center">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=whit">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
    <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
    <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens">
  </div>
</h1>


<h1>Descrição do desafio</h1>

Seu desafio será implementar a criptografia de um sistema de maneira transparente para a API e para as camadas de serviço de sua aplicação. Ou seja, seus objetos de entidades não devem transparecer se existe algum campo sensível ou não. A criptografia deve ser feita em uma conversão em tempo de execução da entidade para a coluna em seu banco de dados, e vice-versa

#### Exemplo de tabela

Considere `userDocument` e `creditCardToken` como campos sensíveis e que devem ser encriptados:

| id | userDocument | creditCardToken | value |
|------|--------------|-----------------|-------|
| 1 | MzYxNDA3ODE4MzM= | YWJjMTIz | 5999 |
| 2 | MzI5NDU0MTA1ODM= | eHl6NDU2 | 1000 |
| 3 | NzYwNzc0NTIzODY= | Nzg5eHB0bw== | 1500 |

onde, na sua entidade:

| Campo | Tipo |
|-----------------|--------|
| id | Long |
| userDocument | String |
| creditCardToken | String |
| value | Long |

1. Faça um CRUD simples, considerando como sensíveis os campos citados acima

2. Use o algoritmo de sua preferência para criptografia. Sugestão: [SHA-512](https://en.wikipedia.org/wiki/SHA-2) ou [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)

3. Caso tenha alguma dúvida na implementação do conversor, procure por `Attribute Converter` na sua linguagem

## Rodando Localmente 🚀

</br>

**Clone o repositório**

```
  git clone https://github.com/Drb-Diego/desafio-2-backend-br.git
```

Depois execute os seguintes comando

```
  yarn
```
```
  yarn start
```

**OBS: Não se esqueça de criar o arquivo ".env" e declarar as variveis de ambiente conforme o ".env.example", antes de rodar o projeto.**