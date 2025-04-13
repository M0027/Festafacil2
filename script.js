function abrirModal() {
  document.getElementById("modal").style.display = "flex";
}

const modal = document.getElementById("modal");


function fecharModal(event) {
  const alvo = event.target;

  if (alvo.classList.contains('modal')) {
    modal.style.display = 'none';
  }
}

modal.addEventListener('click', fecharModal);


function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}
document.getElementById("form-participar").addEventListener("submit", function(e) {
  e.preventDefault();
  const perguntaApoio = document.querySelector('.perguntaApoio');
  const perguntaApoio_content = document.querySelector('.perguntaApoio_content');

  //Não, só participar

  perguntaApoio.style.display = 'flex';

  perguntaApoio_content.addEventListener('click', (e)=>{
     const alvoSIM = e.target.classList.contains('sim');
     const alvoNAO =e.target.classList.contains('nao');

     

    if (alvoSIM) {
      document.querySelector(".apoiar_mascara").style.display = "flex";
      perguntaApoio.style.display = 'none';
      document.getElementById("modal").style.display = "none";
  const apoiar_mascara = document.querySelector('.apoiar_mascara');

  apoiar_mascara.addEventListener('click', (e)=>{
    let alvo = e.target.classList.contains('apoiar_mascara');

    if (alvo) {
      document.querySelector(".apoiar_mascara").style.display = "none";
    }
  })
     
    }
    if (alvoNAO) {
      perguntaApoio.style.display = 'none';
      document.getElementById("modal").style.display = "none";
      document.querySelector(".apoiar_mascara").style.display = "none";
      finalizarOenvio()
    }
       
  })

//funcao para pertuntar se quer apoiar ou nao




});
function enviarImagemParaWhatsApp() {
  document.querySelector(".apoiar_mascara").style.display = "none";
  const valor = document.getElementById("imagem").value;
  finalizarOenvio(valor)
}

/// funcao para finalizar envio
function finalizarOenvio(x) {
    
    
    
  const nome = document.getElementById("nome").value;
  const celular = document.getElementById("celular").value;
  const tipo = document.getElementById("tipo").value;
  const avaliacao = document.getElementById("avaliacao").value;
  
  const msg = `Olá! Meu nome é ${nome}, telefone: ${celular}, valor:${x? x: 0}, quero participar como ${tipo}. Avaliação: ${avaliacao}`;
  const url = `https://wa.me/258833072296?text=${encodeURIComponent(msg)}`;
  
  window.open(url, "_blank");
  
  document.getElementById("modal").style.display = "none";
  document.getElementById("link-apoio").style.display = "inline";
}


// copiar numero
function copiarTexto(elemento) {
  const texto = elemento.innerText.trim();
  navigator.clipboard.writeText(texto).then(() => {
    mostrarToast(`Copiado: ${texto}`);
  }).catch(err => {
    console.error('Erro ao copiar!', err);
  });
}

function mostrarToast(mensagem) {
  const toast = document.getElementById('toast');
  toast.textContent = mensagem;
  toast.style.display = 'block';
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.opacity = '0';
  }, 2000); // Desaparece após 2 segundos

  setTimeout(() => {
    toast.style.display = 'none';
  }, 2500); // Remove do layout após 2.5s
}
    