function corrigeHora(data) {
    let DataCorrigida = new Date(new Date(data).getTime() + (86400000));
    DataCorrigida.setHours(0);
    DataCorrigida.setMinutes(0);
    DataCorrigida.setSeconds(0);
    return DataCorrigida;
};

const feriados = {
    AC: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-01-20")),corrigeHora(new Date("2019-01-23")),corrigeHora(new Date("2019-03-08")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-06-15")),corrigeHora(new Date("2019-08-06")),corrigeHora(new Date("2019-09-06")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    AL: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-06-24")),corrigeHora(new Date("2019-06-29")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-09-16")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-11-20")),corrigeHora(new Date("2019-11-30")),corrigeHora(new Date("2019-12-25"))],
    AP: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-03-19")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-05-15")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-09-13")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-11-20")),corrigeHora(new Date("2019-11-30")),corrigeHora(new Date("2019-12-08")),corrigeHora(new Date("2019-12-25"))],
    AM: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-05")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-11-20")),corrigeHora(new Date("2019-12-08")),corrigeHora(new Date("2019-12-25"))],
    BA: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-02")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    CE: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-03-25")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    DF: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-11-30")),corrigeHora(new Date("2019-12-25"))],
    ES: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-06-20")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-09-08")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    MS: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-11-20")),corrigeHora(new Date("2019-12-25"))],
    MA: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-07-28")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-11-20")),corrigeHora(new Date("2019-12-25"))],
    MT: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-11-20")),corrigeHora(new Date("2019-12-25"))],
    MG: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    PA: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-08-15")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-10-13")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-08")),corrigeHora(new Date("2019-12-25"))],
    PB: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-08-05")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    PR: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-10-19")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    PI: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-08-15")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-10-13")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-08")),corrigeHora(new Date("2019-12-25"))],
    RJ: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-01-20")),corrigeHora(new Date("2019-03-05")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-04-23")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-11-20")),corrigeHora(new Date("2019-12-25"))],
    RN: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-03")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    RS: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-09-20")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    RO: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-01-04")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-06-18")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    RR: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-05")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-11-20")),corrigeHora(new Date("2019-12-25"))],
    SC: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-08-11")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    SP: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-01-25")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-06-20")),corrigeHora(new Date("2019-07-09")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-11-20")),corrigeHora(new Date("2019-12-25"))],
    SE: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-07-08")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    GO: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    PE: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-03-06")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-06-24")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
    TO: [corrigeHora(new Date("2019-01-01")),corrigeHora(new Date("2019-04-19")),corrigeHora(new Date("2019-04-21")),corrigeHora(new Date("2019-05-01")),corrigeHora(new Date("2019-09-07")),corrigeHora(new Date("2019-09-08")),corrigeHora(new Date("2019-10-05")),corrigeHora(new Date("2019-10-12")),corrigeHora(new Date("2019-11-02")),corrigeHora(new Date("2019-11-15")),corrigeHora(new Date("2019-12-25"))],
};

function isequalHora(a,b) {
    if(a.getDate()==b.getDate() && a.getMonth()==b.getMonth())
    return true;
    else
    return false;
}

function isEqual(a,b) {
    if(a==b)
    return true;
    else
    return false;
}

function selecionaEstado(feriados) {
    const selecionaEstado = document.querySelector('#estado');
    let vetorPercorrido = feriados[selecionaEstado.value];
    return vetorPercorrido.map(vetorPercorrido => vetorPercorrido.getTime());
}

document.querySelector("#submit").addEventListener("click", () => {
   let dataInicial = document.querySelector("#datainicial").value.split("/"); //leitura da data colocada no campo
   let novaData = corrigeHora(new Date(dataInicial[2], dataInicial[1]-1, dataInicial[0]-1)); //organização no formato new Date()
   const dias = document.querySelector("#dias").value; //recolhe o número de dias
   let dataFinalC; //data final de dias corridos a ser impressa na tela
   let dataFinalU; //data final de dias úteis a ser impressa na tela
   let vetorFeriado = selecionaEstado(feriados);
    
    console.log(novaData);
    console.log(vetorFeriado);
    

    if(vetorFeriado.includes(novaData)){console.log("teste");}


    if(novaData.getFullYear() != 2019) {
        alert("ERRO! APENAS O ANO DE 2019 É ACEITO!");
        return null;}
    else if(dias<0) {
        alert("ERRO! NÚMERO DE DIAS NEGATIVO NÃO É ACEITO!");
        return null;
    }
    else {
    dataFinalC = new Date(novaData.getTime() + (dias* 24 * 60 * 60 * 1000));
    dataFinalU = new Date(novaData.getTime() + (dias* 24 * 60 * 60 * 1000));

    dataFinalU = document.querySelector("#datauteis").value = dataFinalU.getDate() + "/" + (dataFinalU.getMonth() + 1) + "/" + dataFinalU.getFullYear();

        if(dataFinalC.getDate()<10 && dataFinalC.getMonth()+1<10){
            dataFinalC = document.querySelector("#datacorridos").value = "0"+dataFinalC.getDate()+"/0"+(dataFinalC.getMonth()+1)+"/"+dataFinalC.getFullYear();
        }
        else if(dataFinalC.getMonth()+1<10){
            dataFinalC = document.querySelector("#datacorridos").value = dataFinalC.getDate()+"/0"+(dataFinalC.getMonth()+1)+"/"+dataFinalC.getFullYear();
        }
        else if(dataFinalC.getDate()<10){
            dataFinalC = document.querySelector("#datacorridos").value = "0"+dataFinalC.getDate()+"/"+(dataFinalC.getMonth()+1)+"/"+dataFinalC.getFullYear();
        }
        else{
            dataFinalC = document.querySelector("#datacorridos").value = dataFinalC.getDate() + "/" + (dataFinalC.getMonth() + 1) + "/" + dataFinalC.getFullYear();
        }
    }
});



/*
function diasUteis(data,dias,feriados) {
    let fer = 0; //contador que vai percorrer o vetor de feriados
    let arrDatas = [];
    if(new Date(data).getFullYear() != 2019) {
        console.log("Ano não coberto pelo sistema");
        return null;
    }
    else {
    let dataInicial = new Date(new Date(data).getTime() + (24 * 60 * 60 * 1000));
    console.log("Data inicial inserida: " + dataInicial.getDate() + "/" + (dataInicial.getMonth() + 1) + "/" + dataInicial.getFullYear());
    arrDatas[0] = dataInicial;
        for(let i=0;i!=dias;){
            if(arrDatas[i].getDay()==0||arrDatas[i].getDay()==6)


            ||arrDatas[i].getTime()==feriados[f].getTime()){
                f++;
                arrDatas[i++] = arrDatas[i] + (24*60*60*1000);
                i++;
            }
        }



        for(let i=dataInicial;i<dias;i++) {
            let f = 0;
            while(f<feriados.RJ.length){
            if (diaContador.getDay()!=0 && diaContador.getDay()!=6 && diaContador.getTime()!=feriados.RJ[f].getTime()){
                contador++;
                f++;
            }
        }
        }

    let dataFinal = new Date(dataInicial.getTime() + (dias * 24 * 60 * 60 * 1000));
    return "Data após " + dias + " úteis: " + dataFinal.getDate() + "/" + (dataFinal.getMonth() + 1) + "/" + dataFinal.getFullYear();
    }
}

let novaDataUtil = diasUteis("2016-09-01",7);
  console.log(novaDataUtil);


/*

function diasUteis(data) {

  let novaData = new Date(data.valueOf());
  let diasUteisRemanescente;
  let isFimDeSemana;
  let direcao;
  let diasSoma;


  // Remove decimais
  if (diasSoma !== parseInt(diasSoma, 10)) { throw new TypeError('AdicionaDiaUtil utiliza apenas dias uteis.'); }

  // Se zero dias, não realiza mudança
  if (diasSoma === 0) { return dataBase; }

  //Decide soma ou subtração
  direcao = diasSoma > 0 ? 1 : -1;

  //decide numero de iterações
  diasUteisRemanescente = Math.abs(diasSoma);

  //Intera até chegar zerar os dias
  while (diasUteisRemanescente) {
      // adiciona/subtrai um dia
      novaData.setDate(novaData.getDate() + direcao);
      //Verifica se o dia é util
      if (isSabadoUtil) {
          isFimDeSemana = novaData.getDay() in { 0: 'Sunday' };
      }
      else {
          isFimDeSemana = novaData.getDay() in { 0: 'Sunday', 6: 'Saturday' };
      }
      //Se for util remove um dia
      if (!isFimDeSemana) { diasUteisRemanescente--; }
  }
  return novaData;
}

diasUteis("2019-02-24");

 /*   for(let i=0;i<dias;i++)
    {
            let dataVenc = new Date(hojeCorreto.getTime() + (dias * 24 * 60 * 60 * 1000));
    }
    console.log(dataVenc);
    return dataVenc.getDate() + "/" + (dataVenc.getMonth() + 1) + "/" + dataVenc.getFullYear();
  }



  function isDiaUtil(date) {
      return date.gatDay() != 0
        || date.gatDay() != 6
        || !feriados.RJ.map(dt => Date.parse(new Date(new Date(dt).getTime() + (24 * 60 * 60 * 1000)))).includes(date)
  }


*/
