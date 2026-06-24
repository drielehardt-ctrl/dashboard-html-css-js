// MÓDULO 1: ESTRUTURA DE DADOS E NAVEGAÇÃO

// Exercício 1: Objeto literal do Freelancer
const freelancer = {
  nome: "Driele Hardt",
  stack: ["HTML", "CSS", "JS", "React"],
  anosXP: 1,

  apresentar: function () {
    console.log(
      "Olá! Eu sou " +
        this.nome +
        ", trabalho com " +
        this.stack +
        " e tenho " +
        this.anosXP +
        " anos de experiência."
    );
  },

  ficarDisponivel: function () {
    console.log("O freelancer está disponível para trabalho!");
  },
};

freelancer.apresentar();
freelancer.ficarDisponivel();

// Exercício 2: Construtor de Projetos
function Projeto(nome, valor, prazo) {
  this.nome = nome;
  this.valor = valor;
  this.prazo = prazo;
  this.mostrarProjeto = function () {
    console.log(
      `Projeto: ${this.nome} | Valor: R$${this.valor} | Prazo: ${this.prazo}`
    );
  };
}
const projetoEcommerce = new Projeto("E-commerce", 2000, "30 dias");
const projetoLanding = new Projeto("Landing Page", 3000, "15 dias");
const projetoApp = new Projeto("App Mobile", 5000, "60 dias");

projetoEcommerce.mostrarProjeto();
projetoLanding.mostrarProjeto();
projetoApp.mostrarProjeto();

// Exercício 3: Manipulação do Cabeçalho

const tituloPainel = document.getElementById("titulo-painel");
tituloPainel.textContent = "Painel de Controle Avançado";

const descricaoCabecalho =
  document.getElementsByClassName("descricao-header")[0];
descricaoCabecalho.style.backgroundColor = "#f2f2f2";

const primeiroParagrafo = document.getElementsByTagName("p")[0];
primeiroParagrafo.textContent =
  primeiroParagrafo.textContent + ": Bem-vindo ao sistema";

//Exercício 4: Navegação na Sidebar (Árvore DOM)

const menu = document.getElementById("menuPrincipal");

const umFilhoQualquer = menu.children[0];
const paiUl = umFilhoQualquer.parentNode;
const primeiroItem = paiUl.firstElementChild;

console.log("Primeiro item do menu:", primeiroItem.textContent.trim());

const ultimoItem = menu.lastElementChild;
console.log("Último item do menu:", ultimoItem.textContent.trim());

const novoItem = document.createElement("li");
novoItem.textContent = "Configurações";
menu.appendChild(novoItem);
console.log("Novo item 'Configurações' adicionado!");

// MÓDULO 2: PAINEL VISUAL

// Exercício 5: Avatar
const avatarUser = document.getElementById("avatarPerfil");
avatarUser.src = "https://i.pravatar.cc/150?img=32";
avatarUser.alt = "Foto de perfil atualizada";
avatarUser.title = "Usuário Verificado";

// Exercício 6: Status de Disponibilidade
const caixaStatus = document.getElementById("blocoStatus");
const botaoAlternarStatus = document.getElementById("botaoStatus");
caixaStatus.classList.add("disponivel");

botaoAlternarStatus.onclick = function () {
  if (caixaStatus.classList.contains("disponivel")) {
    caixaStatus.classList.remove("disponivel");
    caixaStatus.classList.add("ocupado");
  } else {
    caixaStatus.classList.remove("ocupado");
    caixaStatus.classList.add("disponivel");
  }
};

// Exercício 7: Widget de Depoimentos
const frasesDepoimentos = [
  "Entrega disruptiva!",
  "Sinergia total!",
  "Mindset ágil!",
  "Qualidade impecável!",
  "Comunicação clara e objetiva!",
];
const containerDep = document.getElementById("containerDepoimentos");
const btnGerarDep = document.getElementById("botaoDepoimento");

btnGerarDep.onclick = function () {
  const indice = Math.floor(Math.random() * frasesDepoimentos.length);
  const p = document.createElement("p");
  p.textContent = frasesDepoimentos[indice];
  containerDep.appendChild(p);
};

// Exercício 8: Gestão de Skills
const listaSkills = document.getElementById("listaHabilidades");
const btnAddSkill = document.getElementById("botaoAddSkill");
const btnRemSkill = document.getElementById("botaoRemSkill");

listaSkills.getElementsByTagName("li")[1].textContent = "CSS Avançado";

btnAddSkill.onclick = function () {
  const novaSkill = document.createElement("li");
  novaSkill.textContent = "Python Básico";
  listaSkills.appendChild(novaSkill);
};

btnRemSkill.onclick = function () {
  const ultimaSkill = listaSkills.lastElementChild;
  if (ultimaSkill) {
    listaSkills.removeChild(ultimaSkill);
  }
};

// MÓDULO 3: INTERATIVIDADE

// Exercício 9: Contador de Visualizações
let viewsPerfil = 0;
const txtViews = document.getElementById("contadorViews");
const btnVerPerfil = document.getElementById("botaoVerPerfil");

btnVerPerfil.onclick = function () {
  viewsPerfil++;
  txtViews.textContent = "Visualizações do Perfil: " + viewsPerfil;
  btnVerPerfil.textContent = "Visualizando...";

  console.log("Perfil visualizado. Contador: " + viewsPerfil);
};

btnVerPerfil.onmouseover = function () {
  btnVerPerfil.style.backgroundColor = "lightblue";
};

btnVerPerfil.onmouseout = function () {
  btnVerPerfil.style.backgroundColor = "";
};

// Exercício 10: Load Event
window.onload = () => {
  console.log("Sistema Carregado");
  console.log("Idioma:", navigator.language);
  console.log("URL:", window.location.href);

  document.getElementById("idioma").textContent =
    "Idioma: " + navigator.language;
  document.getElementById("url").textContent = "URL: " + window.location.href;

  alert("Sistema carregado e informações verificadas");

  // Redirecionamento para o site do Infnet.
  // window.location.href = "https://www.infnet.edu.br";
};

// Exercício 11: Botão Deploy
const botaoDeploy = document.getElementById("botaoDeploy");
botaoDeploy.onmouseover = () => (botaoDeploy.style.backgroundColor = "#a0ffa0");
botaoDeploy.onmouseout = () => (botaoDeploy.style.backgroundColor = "");
botaoDeploy.onmousedown = () => (botaoDeploy.textContent = "Enviando...");

// Exercício 12: Galeria de Projetos
const imgProjeto = document.getElementById("imgProjeto");
const iconeCurtir = document.getElementById("iconeLike");
const txtContadorLikes = document.getElementById("contadorLikes");
const iconeComentario = document.getElementById("iconeComentario");
const iconeSalvar = document.getElementById("iconeSalvar");
const containerComentarios = document.getElementById("containerComentarios");

let totalLikes = 0;
let curtido = false;

imgProjeto.onmouseover = function () {
  imgProjeto.style.transform = "scale(1.1)";
  imgProjeto.style.transition = "transform 0.3s";
};

imgProjeto.onmouseout = function () {
  imgProjeto.style.transform = "scale(1)";
};

function curtir() {
  if (!curtido) {
    totalLikes++;
    txtContadorLikes.textContent = `${totalLikes} Likes`;
    iconeCurtir.style.color = "red";
    curtido = true;
  }
}

imgProjeto.ondblclick = curtir;
iconeCurtir.onclick = curtir;

iconeComentario.onclick = function () {
  if (document.getElementById("inputComentario")) {
    return;
  }

  const input = document.createElement("input");
  input.type = "text";
  input.id = "inputComentario";
  input.placeholder = "Escreva um comentário...";
  input.style.width = "100%";
  input.style.marginTop = "10px";

  input.onblur = function () {
    if (this.value.trim() !== "") {
      const p = document.createElement("p");
      p.textContent = this.value;
      p.style.margin = "5px 0";
      containerComentarios.appendChild(p);
    }
    this.remove();
  };

  containerComentarios.appendChild(input);
  input.focus();
};

iconeSalvar.onclick = function () {
  iconeSalvar.style.color = "black";
  alert("Projeto salvo na coleção!");
};

// MÓDULO 4: FORMULÁRIOS E VALIDAÇÃO

// Exercício 13: Tarefas
const listaTarefas = document.getElementById("listaTarefas");
const inputTarefa = document.getElementById("inputTarefa");
const botaoAddTarefa = document.getElementById("botaoAddTarefa");

botaoAddTarefa.onclick = () => {
  const texto = inputTarefa.value;
  if (texto.length < 4) {
    inputTarefa.style.border = "2px solid red";
    alert("A tarefa deve ter no mínimo 4 caracteres");
    return;
  }
  inputTarefa.style.border = "";
  const li = document.createElement("li");
  li.innerHTML = `${texto} <button onclick="this.parentNode.remove()">Remover</button>`;
  listaTarefas.appendChild(li);
  inputTarefa.value = "";
};

// Exercício 14: Form Cliente
document.getElementById("formCliente").onsubmit = function (e) {
  e.preventDefault();

  const nome = document.getElementById("nomeEmpresa").value;
  const data = document.getElementById("dataFundacao").value;
  const email = document.getElementById("emailEmpresa").value;
  const desc = document.getElementById("descricaoEmpresa").value;
  const atuacao = document.getElementById("areaAtuacao").value;

  let erros = [];

  if (nome.length < 4 || nome.indexOf("SA") == -1) {
    erros.push("Nome precisa ter pelo menos 4 letras e ter SA");
  }

  if (data <= "2000-01-01") {
    erros.push("Data tem que ser depois de 01/01/2000");
  }

  const arroba = email.indexOf("@");
  const ponto = email.lastIndexOf(".");
  if (arroba < 1 || ponto < arroba + 2 || ponto + 2 >= email.length) {
    erros.push("Email tá errado");
  }

  if (desc.length > 50) {
    erros.push("Descrição muito grande (máximo 50 letras)");
  }

  if (atuacao == "") {
    erros.push("Tem que escolher uma atuação");
  }

  const divErro = document.getElementById("erroMensagem");

  if (erros.length > 0) {
    divErro.innerHTML = erros.join("<br>");
  } else {
    divErro.innerHTML = "";
    alert("Cliente cadastrado com sucesso!");
    e.target.reset();
  }
};

// Exercício 15: Form Parceiro
document.getElementById("formParceiro").onsubmit = function (e) {
  e.preventDefault();

  const login = document.getElementById("parceiroLogin").value;
  const idade = document.getElementById("parceiroIdade").value;
  const genero = document.getElementById("parceiroGenero").value;
  const musicas = document.querySelectorAll("input[name='musica']:checked");
  const senha = document.getElementById("parceiroSenha").value;
  const confirma = document.getElementById("parceiroConfirmaSenha").value;

  const erros = [];

  if (login.length > 8) {
    erros.push("Login muito grande (máx 8 caracteres)");
  }

  if (idade <= 12) {
    erros.push("Idade tem que ser maior que 12");
  }

  if (genero === "") {
    erros.push("Escolha um gênero");
  }

  if (musicas.length < 2) {
    erros.push("Escolha pelo menos 2 estilos musicais");
  }

  if (senha.length < 4 || senha.length > 10) {
    erros.push("Senha precisa ter entre 4 e 10 caracteres");
  }

  if (senha !== confirma) {
    erros.push("As senhas são diferentes");
  }

  const divErro = document.getElementById("erroMensagem");

  if (erros.length > 0) {
    divErro.innerHTML = erros.join("<br>");
  } else {
    divErro.innerHTML = "";
    alert("Parceiro cadastrado com sucesso!");
    e.target.reset();
  }
};

// Exercício 16: Cobrança WhatsApp
document.getElementById("botaoEnviarCobranca").onclick = () => {
  const tel = document.getElementById("cobrancaTel").value;
  const msg = document.getElementById("cobrancaMsg").value;
  if (!tel || !msg) return alert("Preencha telefone e mensagem");
  const url = `https://wa.me/${tel}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
};
