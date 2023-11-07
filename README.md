
# Testes de Carga e Stress com K6

Projeto com objetivo de estudar a ferramenta do K6, testando um endpoint de uma API desenvolvida em Node JS.


## Pre Requisitos

[Instalar o K6 na maquina](https://k6.io/docs/get-started/installation/)

[API que esta sendo utilizada no teste](https://github.com/AllanScala1991/my-passwords-backend)
## Instalação

Apos configurar o backend, clone o projeto e rode os comandos:

```bash
  git clone https://github.com/AllanScala1991/my-passwords-k6-test-example
```

```bash
  cd my-passwords-k6-test-example/src/test
```

```bash
  k6 run createUserLoadTest.js && k6 run createUserStressTest.js
```