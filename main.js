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
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    const body = document.querySelector('body');
    const html = document.querySelector('html');

    if (navBar) {
      // Aplica a transição no JavaScript
      content?.style.setProperty('transition', 'margin-top 0.5s ease');
      body?.style.setProperty('transition', 'height 0.5s ease');
      html?.style.setProperty('transition', 'height 0.5s ease');
      item?.style.setProperty('transition', 'width 0.5s ease');

      if (navBar.style.height && navBar.style.height !== '0px') {
        navBar.style.height = '0px';
        item.style.width = '30%';
        body.style.height = '100%';
        html.style.height = '100%';
    
        // Remove a margem se for tela pequena
        if (isSmallScreen && content) {
          content.style.marginTop = '0px';
        }
      } else {
        navBar.style.height = navBar.scrollHeight + 'px';

        // Ajusta a largura de acordo com o tamanho da tela
        if (isSmallScreen) {
          item.style.width = '60%';
          content.style.marginTop =  '300px';
          body.style.height = '110%';
          html.style.height = '110%';
        } else {
          item.style.width = '100%';
        }
      }
    }    
  });
});
