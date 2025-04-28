function pegarValor() {

  let valorInserido = document.getElementById("valorDigitado").value;

  const moedaSelecionada = document.getElementById("selectMoeda").value;

  let valorMoeda = 0;
  if (moedaSelecionada === 'moedaReal') {
    valorMoeda = 845;
  }
  if (moedaSelecionada === 'moedaDolar') {
    valorMoeda = 148;
  }
  else if (moedaSelecionada === 'moedaEuro') {
    valorMoeda = 137;
  }

  let numConvert = valorInserido / valorMoeda;
  const numFormatado = numConvert.toLocaleString('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  alert(`B&C: ≈${numFormatado} Schmeckles`);

}

document.querySelectorAll('.btnList').forEach(item => {
  item.addEventListener('click', function () {
    const navBar = document.querySelector('.navbar'); 
    const content = document.querySelector('.imgFundo');
    const isSmallScreen = window.matchMedia('(max-width: 4100px)').matches;

    if (navBar) {
      // Aplica a transição no JavaScript
      if (content) {
        content.style.transition = 'margin-top 0.5s ease';
      }
      if (item) {
        item.style.transition = 'width 0.5s ease';
      }
    
      if (navBar.style.height && navBar.style.height !== '0px') {
        navBar.style.height = '0px';
        item.style.width = '30%';
    
        // Remove a margem se for tela pequena
        if (isSmallScreen && content) {
          content.style.marginTop = '0px';
        }
      } else {
        navBar.style.height = navBar.scrollHeight + 'px';
        item.style.width = '100%';
    
        // Adiciona a margem se for tela pequena
        if (isSmallScreen && content) {
          content.style.marginTop = '180px';
          item.style.width = '60%';
        }
      }
    }    
  });
});
