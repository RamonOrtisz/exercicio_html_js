if (campoB > campoA) {
    document.getElementById("mensagem").innerHTML = "Formulário válido!";
    document.getElementById("mensagem").classList.add("mensagem-valida");
  } else {
    document.getElementById("mensagem").innerHTML = "Formulário inválido!";
    document.getElementById("mensagem").classList.add("mensagem-invalida");
  }
  