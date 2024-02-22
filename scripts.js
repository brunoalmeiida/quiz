const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação usada para estruturar páginas web.",
      "Uma linguagem de programação usada para adicionar interatividade às páginas web.",
      "Um banco de dados usado para armazenar dados de sites.",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual método é usado para escrever algo no console do navegador?",
    respostas: ["console.write()", "document.write()", "console.log()"],
    correta: 2,
  },
  {
    pergunta: "Como você declara uma variável em JavaScript?",
    respostas: [
      "var nomeVariavel;",
      "int nomeVariavel;",
      "variable nomeVariavel;",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual palavra-chave é usada para declarar uma constante em JavaScript?",
    respostas: ["let", "var", "const"],
    correta: 2,
  },
  {
    pergunta: "Como você cria uma função em JavaScript?",
    respostas: [
      "function minhaFuncao()",
      "create function minhaFuncao()",
      "function: minhaFuncao()",
    ],
    correta: 0,
  },
  {
    pergunta: "Como você chama (invoca) uma função chamada 'minhaFuncao'?",
    respostas: ["call minhaFuncao()", "minhaFuncao()", "invoke minhaFuncao()"],
    correta: 1,
  },
  {
    pergunta: "Como adicionar um comentário de uma linha em JavaScript?",
    respostas: [
      "// Isso é um comentário",
      "/* Isso é um comentário */",
      "<!-- Isso é um comentário -->",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Como você pode adicionar um comentário de múltiplas linhas em JavaScript?",
    respostas: [
      "// Isso é um comentário",
      "/* Isso é um comentário */",
      "<!-- Isso é um comentário -->",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual é a sintaxe correta para referenciar um script externo chamado 'xxx.js'?",
    respostas: [
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
    ],
    correta: 0,
  },
  {
    pergunta: "Como você declara um array em JavaScript?",
    respostas: [
      "var meuArray = (1,2,3)",
      "var meuArray = [1,2,3]",
      "var meuArray = {1,2,3}",
    ],
    correta: 1,
  },
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    )
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }

    quizItem.querySelector("dl").appendChild(dt)
  }

  quizItem.querySelector("dl dt").remove()

  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
