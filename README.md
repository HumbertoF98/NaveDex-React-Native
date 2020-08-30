# Desafio Nave.rs

<h1 align="center">
    <img alt="Nave.rs" src="assets/nave.png" height="60px" />
    <br/>
   <a href="https://reactnative.dev/docs/getting-started" target="_blank" rel="noopener">React-Native</a> 
</h1>

## Sobre o projeto

O projeto Navedex, é um desafio formulado pela equipe da Nave.rs com o intuito
de encontrar possíveis colaboradores da empresa.

## Tecnologias Utilizadas

- <a href="https://reactnative.dev/" target="_blank" rel="noopener">React-Native</a>
- <a href="https://docs.expo.io/get-started/installation/" target="_blank" rel="noopener">Expo</a>

### Visualização/Utilização

Para utilizar e/ou visualizar o projeto, basta seguir as instruções abaixo:

- Que você tenha instalado o **<a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a>**
- Que você tenha instalado o **<a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>**
- Que você tenha instalado o **<a href="https://docs.expo.io/get-started/installation/" target="_blank" rel="noopener">Expo</a>**

### Passos para utilizar

Primeiro clone o repositório em seu computador, por meio do terminal utilizando o comando:

1. Clonando o repositório

```sh
  # Clone o repositório
  $ git clone https://github.com/HumbertoF98/NaveDex-React-Native.git
  # Entre na pasta raiz da aplicação
  $ cd NaveDex-React-Native
```

```sh
  # Instale as dependências da aplicação
  $ npm install # ou yarn (caso tenha instalado)
  # Inicie a aplicação web
  $ expo start
```

## Observações

O projeto foi desenvolvido em sua totalidade em um dispositivo Android,
ao qual funciona corretamente. Alguma inconsistência em relação ao iOS pode ocorrer.

## 📚 Dificuldades

Durante a execução da atividade proposta, algumas dificuldades e/ou empecilhos surgiram:

- No layout previsto, pedia-se a idade de um Naver em sua criação, porém a aplicação back-end esperava a data de nascimento do usuário (birthdate), o mesmo acontecia para o tempo de empresa, o back-end esperava a data de admissão (admission_date). Diante destas dificuldades, na criação de um Naver está sendo pedido a data de nascimento e a data de admissão na empresa. Com essas datas é possível fazer o cálculo da idade do Naver e do tempo em que o mesmo está na empresa utilizando a biblioteca Moment (https://momentjs.com/).

---
