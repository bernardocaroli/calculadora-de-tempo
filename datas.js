function corrigeHora(data) {
    let DataCorrigida = new Date(new Date(data).getTime() + (86400000));
    DataCorrigida.setHours(0);
    DataCorrigida.setMinutes(0);
    DataCorrigida.setSeconds(0);
    return DataCorrigida;
} //função que corrige o horário do dia em questão para meia noite (não entendi pq isso ocorre)

const feriados = {
    AC: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-01-20")), corrigeHora(new Date("2019-01-23")), corrigeHora(new Date("2019-03-08")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-06-15")), corrigeHora(new Date("2019-08-06")), corrigeHora(new Date("2019-09-06")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    AL: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-06-24")), corrigeHora(new Date("2019-06-29")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-09-16")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-11-20")), corrigeHora(new Date("2019-11-30")), corrigeHora(new Date("2019-12-25"))],
    AP: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-03-19")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-05-15")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-09-13")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-11-20")), corrigeHora(new Date("2019-11-30")), corrigeHora(new Date("2019-12-08")), corrigeHora(new Date("2019-12-25"))],
    AM: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-05")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-11-20")), corrigeHora(new Date("2019-12-08")), corrigeHora(new Date("2019-12-25"))],
    BA: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-02")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    CE: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-03-25")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    DF: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-11-30")), corrigeHora(new Date("2019-12-25"))],
    ES: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-06-20")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-09-08")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    MS: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-11-20")), corrigeHora(new Date("2019-12-25"))],
    MA: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-07-28")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-11-20")), corrigeHora(new Date("2019-12-25"))],
    MT: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-11-20")), corrigeHora(new Date("2019-12-25"))],
    MG: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    PA: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-08-15")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-10-13")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-08")), corrigeHora(new Date("2019-12-25"))],
    PB: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-08-05")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    PR: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-10-19")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    PI: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-08-15")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-10-13")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-08")), corrigeHora(new Date("2019-12-25"))],
    RJ: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-01-20")), corrigeHora(new Date("2019-03-05")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-04-23")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-11-20")), corrigeHora(new Date("2019-12-25"))],
    RN: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-03")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    RS: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-09-20")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    RO: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-01-04")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-06-18")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    RR: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-05")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-11-20")), corrigeHora(new Date("2019-12-25"))],
    SC: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-08-11")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    SP: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-01-25")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-06-20")), corrigeHora(new Date("2019-07-09")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-11-20")), corrigeHora(new Date("2019-12-25"))],
    SE: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-07-08")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    GO: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    PE: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-03-06")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-06-24")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
    TO: [corrigeHora(new Date("2019-01-01")), corrigeHora(new Date("2019-04-19")), corrigeHora(new Date("2019-04-21")), corrigeHora(new Date("2019-05-01")), corrigeHora(new Date("2019-09-07")), corrigeHora(new Date("2019-09-08")), corrigeHora(new Date("2019-10-05")), corrigeHora(new Date("2019-10-12")), corrigeHora(new Date("2019-11-02")), corrigeHora(new Date("2019-11-15")), corrigeHora(new Date("2019-12-25"))],
}; //objeto contendo os feriados em cada estado brasileiro

function selecionaEstado(feriados) {
    const selecionaEstado = document.querySelector('#estado');
    let vetorPercorrido = feriados[selecionaEstado.value];
    return vetorPercorrido.map(vetorPercorrido => vetorPercorrido.getTime());
} //função que pega o estado selecionado pelo usuário e cria um array apenas com os feriados no próprio estado

function diaAnterior(feriados) {
    const selecionaEstado = document.querySelector('#estado');
    let vetorPercorrido = feriados[selecionaEstado.value];
    return vetorPercorrido.map(vetorPercorrido => (vetorPercorrido.getTime()-86400000));
}

function diasCorridos(dtInicial, dias) {
    dtFinal = new Date(dtInicial.getTime() + (dias * 24 * 60 * 60 * 1000));

    if (dtFinal.getDate() < 10 && dtFinal.getMonth() + 1 < 10) {
        return dtFinal = document.querySelector("#datacorridos").value = "0" + dtFinal.getDate() + "/0" + (dtFinal.getMonth() + 1) + "/" + dtFinal.getFullYear();

    }
    else if (dtFinal.getMonth() + 1 < 10) {
        return dtFinal = document.querySelector("#datacorridos").value = dtFinal.getDate() + "/0" + (dtFinal.getMonth() + 1) + "/" + dtFinal.getFullYear();

    }
    else if (dtFinal.getDate() < 10) {
        return dtFinal = document.querySelector("#datacorridos").value = "0" + dtFinal.getDate() + "/" + (dtFinal.getMonth() + 1) + "/" + dtFinal.getFullYear();

    }
    else {
        return dtFinal = document.querySelector("#datacorridos").value = dtFinal.getDate() + "/" + (dtFinal.getMonth() + 1) + "/" + dtFinal.getFullYear();

    }


} //função que calcula a data final após n dias corridos, imprimindo-a no seu local devido na tela

function diasUteis(diaSelecionado, dias, diasAnteriores) {
    let u = 0;
    // let f = 0;
    while (u < dias) {
        if (diaSelecionado.getDay() == 5) {
            diaSelecionado = new Date(diaSelecionado.getTime() + 3 * 86400000);
            console.log(diaSelecionado);
        }
        else if (diasAnteriores.includes(diaSelecionado.getTime())) {
            console.log("primeiro dia " + diaSelecionado);
            diaSelecionado = new Date(diaSelecionado.getTime()+2*86400000);
            console.log("segundo dia " + diaSelecionado);
            u--;
                }
        else {
            diaSelecionado = new Date(diaSelecionado.getTime() + 86400000);
            console.log(diaSelecionado);
        }
        u++;
    }
    diaSelecionado = new Date(diaSelecionado.getTime() + 86400000);

    if(diaSelecionado.getDay()==0)
    {
        diaSelecionado = new Date(diaSelecionado.getTime() + 86400000);
    }

    else if(diaSelecionado.getDay()==6)
    {
        diaSelecionado = new Date(diaSelecionado.getTime() + 2 * 86400000);
    }

    else if(diasAnteriores.includes(diaSelecionado.getTime())) {

        // if(diaSelecionado.getDay()==0)
        // {
        // diaSelecionado = new Date(diaSelecionado.getTime() + 86400000);
        // }

        // else if(diaSelecionado.getDay()==6)
        // {
        // diaSelecionado = new Date(diaSelecionado.getTime() + 2 * 86400000);
        // }

            diaSelecionado = new Date(diaSelecionado.getTime() + 2*86400000);
        
        // diaSelecionado = new Date(diaSelecionado.getTime() + 86400000);
    }

    if (diaSelecionado.getDate() < 10 && diaSelecionado.getMonth() + 1 < 10) {
        return diaSelecionado = document.querySelector("#datauteis").value = "0" + diaSelecionado.getDate() + "/0" + (diaSelecionado.getMonth() + 1) + "/" + diaSelecionado.getFullYear();

    }
    else if (diaSelecionado.getMonth() + 1 < 10) {
        return diaSelecionado = document.querySelector("#datauteis").value = diaSelecionado.getDate() + "/0" + (diaSelecionado.getMonth() + 1) + "/" + diaSelecionado.getFullYear();

    }
    else if (diaSelecionado.getDate() < 10) {
        return diaSelecionado = document.querySelector("#datauteis").value = "0" + diaSelecionado.getDate() + "/" + (diaSelecionado.getMonth() + 1) + "/" + diaSelecionado.getFullYear();

    }
    else {
        return diaSelecionado = document.querySelector("#datauteis").value = diaSelecionado.getDate() + "/" + (diaSelecionado.getMonth() + 1) + "/" + diaSelecionado.getFullYear();

    }

} //função que calcula a data final após n dias úteis, imprimindo-a no seu local devido na tela

document.querySelector("#submit").addEventListener("click", () => {
    let dataInicial = document.querySelector("#datainicial").value.split("/"); //leitura da data colocada no campo
    let novaData = corrigeHora(new Date(dataInicial[2], dataInicial[1] - 1, dataInicial[0] - 1)); //organização no formato new Date()
    const dias = document.querySelector("#dias").value; //recolhe o número de dias
    let arrayFeriados = selecionaEstado(feriados); //array que mostra os feriados no estado selecionado na tela
    let arrayDiasAnteriores = diaAnterior(feriados);


    if (novaData.getFullYear() != 2019) {
        alert("ERRO! APENAS O ANO DE 2019 É ACEITO!");
        return null;
    }
    else if (dias < 0) {
        alert("ERRO! NÚMERO DE DIAS NEGATIVO NÃO É ACEITO!");
        return null;
    }
    else {
        dtFinalCorridos = diasCorridos(novaData, dias); //data final de dias corridos a ser impressa na tela
        dtFinalUteis = diasUteis(novaData, dias, arrayDiasAnteriores); //data final de dias úteis a ser impressa na tela

    }

});


