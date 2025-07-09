function registrarFardo() {
  const setor = document.getElementById("setor").value;
  const codigo = document.getElementById("codigo").value.trim();

  if (!codigo) {
    alert("Por favor, escaneie ou digite um código.");
    return;
  }

  const fardo = {
    setor,
    codigo,
    data: new Date().toLocaleString()
  };

  let fardos = JSON.parse(localStorage.getItem("fardos") || "[]");
  fardos.push(fardo);
  localStorage.setItem("fardos", JSON.stringify(fardos));

  document.getElementById("codigo").value = "";
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("lista-fardos");
  lista.innerHTML = "";

  const fardos = JSON.parse(localStorage.getItem("fardos") || "[]");

  fardos.forEach(fardo => {
    const li = document.createElement("li");
    li.textContent = `[${fardo.setor}] ${fardo.codigo} — ${fardo.data}`;
    lista.appendChild(li);
  });
}

// Atualiza a lista ao abrir o app
document.addEventListener("DOMContentLoaded", atualizarLista);
