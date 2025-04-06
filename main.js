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
    
    let numConvert = valorInserido/ valorMoeda;
    const numFormatado = numConvert.toLocaleString('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
    
    alert(`B&C: ≈${numFormatado} Schmeckles`);
  
  }
  