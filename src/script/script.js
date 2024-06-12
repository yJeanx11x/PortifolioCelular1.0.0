const data = new Date();
const dataHoras=data.getHours()
const dataMin=data.getMinutes()

// Horas Tela Principal

const relogio=document.getElementById('horas')
relogio.innerHTML=`${ZeroAEsquerdaHora()}:${ZeroAEsquerdaMin()}`


const mes = data.getMonth() + 1;
const SemanaData=document.getElementById('data1')
SemanaData.innerHTML=`${diaDaSemana()}, ${data.getDate()}/${ZeroAEsquerda()}`

//Dia da Semana /mes /
function diaDaSemana() {
  switch (data.getDay()) {
    case 1:
      return "Seg";
    case 2:
      return "Ter";
    case 3:
      return "Qua";
    case 4:
      return "Qui";
    case 5:
      return "Sex";
    case 6:
      return "Sab";
    case 0:
      return "Dom";
    default:
  }
}
diaDaSemana();

function ZeroAEsquerda() {
  return mes >= 10 ? mes : `0${mes}`;
}
ZeroAEsquerda(mes);


function ZeroAEsquerdaHora() {
  return dataHoras >= 10 ? dataHoras : `0${dataHoras}`;
}
ZeroAEsquerdaHora();
function ZeroAEsquerdaMin() {
  return dataMin >= 10 ? dataMin : `0${dataMin}` ;
}
ZeroAEsquerdaMin(dataMin);
