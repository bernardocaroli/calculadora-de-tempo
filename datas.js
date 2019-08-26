const feriados = {
    AC: [new Date("2019-01-01"),new Date("2019-01-20"),new Date("2019-01-23"),new Date("2019-03-08"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-06-15"),new Date("2019-08-06"),new Date("2019-09-06"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    AL: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-06-24"),new Date("2019-06-29"),new Date("2019-09-07"),new Date("2019-09-16"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-11-20"),new Date("2019-11-30"),new Date("2019-12-25")],
    AP: [new Date("2019-01-01"),new Date("2019-03-19"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-05-15"),new Date("2019-09-07"),new Date("2019-09-13"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-11-20"),new Date("2019-11-30"),new Date("2019-12-08"),new Date("2019-12-25")],
    AM: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-05"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-11-20"),new Date("2019-12-08"),new Date("2019-12-25")],
    BA: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-02"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    CE: [new Date("2019-01-01"),new Date("2019-03-25"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")], 
    DF: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-11-30"),new Date("2019-12-25")],
    ES: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-06-20"),new Date("2019-09-07"),new Date("2019-09-08"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    MS: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-11-20"),new Date("2019-12-25")],
    MA: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-07-28"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-11-20"),new Date("2019-12-25")], 
    MT: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-11-20"),new Date("2019-12-25")],
    MG: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    PA: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-08-15"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-10-13"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-08"),new Date("2019-12-25")],
    PB: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-08-05"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    PR: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-10-19"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    PI: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-08-15"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-10-13"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-08"),new Date("2019-12-25")],
    RJ: [new Date("2019-01-01"),new Date("2019-01-20"),new Date("2019-03-05"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-04-23"),new Date("2019-05-01"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-11-20"),new Date("2019-12-25")],
    RN: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-07"),new Date("2019-10-03"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    RS: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-07"),new Date("2019-09-20"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    RO: [new Date("2019-01-01"),new Date("2019-01-04"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-06-18"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    RR: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-07"),new Date("2019-10-05"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-11-20"),new Date("2019-12-25")],
    SC: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-08-11"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    SP: [new Date("2019-01-01"),new Date("2019-01-25"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-06-20"),new Date("2019-07-09"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-11-20"),new Date("2019-12-25")],
    SE: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-07-08"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    GO: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    PE: [new Date("2019-01-01"),new Date("2019-03-06"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-06-24"),new Date("2019-09-07"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
    TO: [new Date("2019-01-01"),new Date("2019-04-19"),new Date("2019-04-21"),new Date("2019-05-01"),new Date("2019-09-07"),new Date("2019-09-08"),new Date("2019-10-05"),new Date("2019-10-12"),new Date("2019-11-02"),new Date("2019-11-15"),new Date("2019-12-25")],
};

function corrigeHora(data) {
    let DataCorrigida = new Date(new Date(data).getTime() + (24 * 60 * 60 * 1000));
    return DataCorrigida;
    
};

console.log(corrigeHora(feriados.GO[2]));
console.log(corrigeHora(feriados.TO[0].getTime()));

document.querySelector("#submit").addEventListener("click", function(){
    
})

    /*

    function diasCorridos(){
        let dataInicial = document.querySelector("#datainicial");
        let dias = document.querySelector("#dias");
        
        if(dataInicial.getFullYear() != 2019) {
            console.log("Ano não coberto pelo sistema");
            return null;
        }

        else {
        let dataCorreta = corrigeHora(dataInicial);
        
       // console.log("Data inicial inserida: " + dataInicial.getDate() + "/" + (dataInicial.getMonth() + 1) + "/" + dataInicial.getFullYear());
        let dataFinal = new Date(dataCorreta.getTime() + (dias * 24 * 60 * 60 * 1000));
        
       // return "Data após " + dias + " corridos: " + dataFinal.getDate() + "/" + (dataFinal.getMonth() + 1) + "/" + dataFinal.getFullYear();
        
        }
    }

    let dataInicial = document.querySelector("#datainicial");
    dataInicial.textContent = "TESTE";  }); 
*/
/*
let feri2 = {
    RJ: [new Date("2019-01-01"),new Date("2019-01-20")],
    SP: [new Date("2019-01-01"),new Date("2019-01-20"),new Date("2019-03-19")]
} ;

console.log(feri2.RJ[0].toString());


let teste = new Date("2019-08-21");
console.log(teste.getTime());



function diasCorridos(data, dias){  

    if(new Date(data).getFullYear() != 2019) {
        console.log("Ano não coberto pelo sistema");
        return null;
    }
    else {
    let dataInicial = new Date(new Date(data).getTime() + (24 * 60 * 60 * 1000));
    
    console.log("Data inicial inserida: " + dataInicial.getDate() + "/" + (dataInicial.getMonth() + 1) + "/" + dataInicial.getFullYear());
    let dataFinal = new Date(dataInicial.getTime() + (dias * 24 * 60 * 60 * 1000));
    return "Data após " + dias + " corridos: " + dataFinal.getDate() + "/" + (dataFinal.getMonth() + 1) + "/" + dataFinal.getFullYear();
    }
}
let novaDataCorrida = diasCorridos("2019-09-01",1);
  console.log(novaDataCorrida);

  
  function isequal(a,b) {
      if(a==b)
      return true;
      else
      return false;
  }  
  
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
