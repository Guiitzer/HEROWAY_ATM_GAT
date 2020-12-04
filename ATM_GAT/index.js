// Cash Machine
// O Problema
// Desenvolva uma aplicação que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico.

// Sua aplicação deve:

// Entregar sempre o menor número de notas possíveis
// Sacar valores apenas com as notas disponíveis
// Ter saldo do cliente infinito
// Ter quantidade de notas infinita
// Possuir apenas notas de R$ 100,00, R$ 50,00, R$ 20,00 e R$ 10,00
// Retornar mensagens de erro em caso de entradas inválidas
// Observação:

// Exemplos:
// Entrada: 30.00
// Resultado: [20.00, 10.00]

// Entrada: 80.00
// Resultado: [50.00, 20.00, 10.00]

// Entrada: 125.00
// Resultado: Erro de notas indisponíveis

// Entrada: -130.00
// Resultado: Erro de valor inválido

// Entrada: NULL
// Resultado: Erro de valor nulo
//-------------------INICIO-------------------------------------

//Declaração das variaveis
const withdrawValue = document.getElementById("withdraw");
const confirmValue = document.getElementById("confirm");
const cleanNumbers = document.getElementById("clean");
const reportedValue = document.getElementById("inputWindow");
const btn = document.getElementsByClassName("btn");

const billsAvailable = [100, 50, 20, 10];
let withdrawBills = [0, 0, 0, 0];

//Identificação do botão clicado
for (let x = 0; x < btn.length; x++) {
  let currentButton = btn[x];

  currentButton.addEventListener("click", () => {
    reportedValue.value += currentButton.innerHTML;
  });

  //Botão Limpar
  cleanNumbers.addEventListener("click", () => {
    reportedValue.value = "";
    withdrawBills = [0, 0, 0, 0];
    withdrawValue.innerHTML = "$ 100, $ 100, $50, $10";
  });
}

//Botão Confirmar
confirmValue.addEventListener("click", () => {
  //Verificação de digito correto
  if (reportedValue.value < 0) {
    alert("Verifique o valor inserido!");
    reportedValue.value = "";
    withdrawValue.innerHTML = `ERROR`
  } else if (
    reportedValue.value % billsAvailable[0] == 0 ||
    reportedValue.value % billsAvailable[1] == 0 ||
    reportedValue.value % billsAvailable[2] == 0 ||
    reportedValue.value % billsAvailable[3] == 0
  ) {
    
    alert("Saque efetuado com sucesso!");

    //Contagem de notas de 100
    while (reportedValue.value >= 100) {
      reportedValue.value = reportedValue.value - 100;
      withdrawBills[0] = withdrawBills[0] + 1;
    }

    //Contagem de notas de 50
    while (reportedValue.value >= 50) {
      reportedValue.value = reportedValue.value - 50;
      withdrawBills[1] = withdrawBills[1] + 1;
    }

    //Contagem de notas de 20
    while (reportedValue.value >= 20) {
      reportedValue.value = reportedValue.value - 20;
      withdrawBills[2] = withdrawBills[2] + 1;
    }

    //Contagem de notas de 10
    while (reportedValue.value >= 10) {
      reportedValue.value = reportedValue.value - 10;
      withdrawBills[3] = withdrawBills[3] + 1;
    }

    
    withdrawValue.innerHTML = `
      <div class="result">
          <div>Quantidade de notas de $ 100 = ${withdrawBills[0]}</div>
          <div>Quantidade de notas de $ 50  = ${withdrawBills[1]}</div>
          <div>Quantidade de notas de $ 20  = ${withdrawBills[2]}</div>
          <div>Quantidade de notas de $ 10  = ${withdrawBills[3]}</div>
      </div>
    `;
    withdrawBills = [0, 0, 0, 0];
    //Alerta de notas indisponiveis
  } else {
    alert("Notas insuficientes para efetuar o saque!");
    reportedValue.value = "";
    withdrawValue.innerHTML = `ERROR`
  }

  if (reportedValue.value == 0) {
    reportedValue.value = "";
  }
});
