function corrigeHora(data) {
    let DataCorrigida = new Date(new Date(data).getTime() + (86400000));
    DataCorrigida.setHours(5);
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
    return vetorPercorrido.map(vetorPercorrido => vetorPercorrido.getTime()); //com o map, transforma o array de datas em um array de milisegundos
} //função que pega o estado selecionado pelo usuário e cria um array apenas com os feriados (em milisegundos) no próprio estado

function mostraDiaDaSemana(diaSelecionado) {
    if (diaSelecionado.getDay() == 0) { return "Domingo"; }
    else if (diaSelecionado.getDay() == 1) { return "Segunda-feira"; }
    else if (diaSelecionado.getDay() == 2) { return "Terça-feira"; }
    else if (diaSelecionado.getDay() == 3) { return "Quarta-feira"; }
    else if (diaSelecionado.getDay() == 4) { return "Quinta-feira"; }
    else if (diaSelecionado.getDay() == 5) { return "Sexta-feira"; }
    else { return "Sábado"; }
} //função que imprime na tela o dia da semana em português

function diasCorridos(dtInicial, dias) {
    dtFinal = new Date(dtInicial.getTime() + (dias * 24 * 60 * 60 * 1000)); 


    // parte responsável por mostrar a data na tela
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

function diasUteis(diaSelecionado, dias, arrayFeriadosTempo) {
    let u = 0; //contador de dias úteis
    let arrFeriados = []; //array de feriados que serão mostrados na tela
    arrFeriados.push("FERIADOS NESSA ÉPOCA");

    while(u<dias) {
        if(!(diaSelecionado.getDay() == 0 || diaSelecionado.getDay() == 6 || arrayFeriadosTempo.includes(diaSelecionado.getTime()))) { //se for dia útil, incrementa o contador de dias úteis
            u++;
        }

        if(arrayFeriadosTempo.includes(diaSelecionado.getTime())) {
            
            arrFeriados.push(`${diaSelecionado.getDate()}/${diaSelecionado.getMonth()+1}/${diaSelecionado.getFullYear()} (${mostraDiaDaSemana(diaSelecionado)})`); //adicionando datas no array de Feriados
        }
        diaSelecionado = new Date(diaSelecionado.getTime() + 86400000); //pulando um dia dentro do while
    }

    if(arrFeriados.length>0) { //imprimindo os feriados na tela
        arrFeriados.forEach(function(feriado){
            
            let mensagem = document.getElementById("mensagens-feriado");  
            const feriadoTemplate = `
            <li class="mensagens-feriado">${feriado}</li>
            `
            mensagem.innerHTML += feriadoTemplate;

           
        })
    }

    dtFinal = new Date(diaSelecionado);


    // parte responsável por ajustar a data final, caso esta caia num final de semana ou feriado
    if(dtFinal.getDay()==0) {
        dtFinal = new Date(dtFinal.getTime() + 86400000);
        if (arrayFeriadosTempo.includes(dtFinal.getTime())) { dtFinal = new Date(dtFinal.getTime() + 86400000); }
    }

    else if (dtFinal.getDay() == 6) {
        dtFinal = new Date(dtFinal.getTime() + (2 * 86400000));
        if (arrayFeriadosTempo.includes(dtFinal.getTime())) { dtFinal = new Date(dtFinal.getTime() + 86400000); }
    }

    else if (arrayFeriadosTempo.includes(dtFinal.getTime())) {
        dtFinal = new Date(dtFinal.getTime() + 86400000);
        if (dtFinal.getDay() == 0) {
            dtFinal = new Date(dtFinal.getTime() + 86400000);
        }
        else if (dtFinal.getDay() == 6) {
            dtFinal = new Date(dtFinal.getTime() + (2 * 86400000));
        }
    }
    

    // parte responsável por mostrar a data na tela
    if (dtFinal.getDate() < 10 && dtFinal.getMonth() + 1 < 10) {
        return dtFinal = document.querySelector("#datauteis").value = "0" + dtFinal.getDate() + "/0" + (dtFinal.getMonth() + 1) + "/" + dtFinal.getFullYear();

    }
    else if (dtFinal.getMonth() + 1 < 10) {
        return dtFinal = document.querySelector("#datauteis").value = dtFinal.getDate() + "/0" + (dtFinal.getMonth() + 1) + "/" + dtFinal.getFullYear();

    }
    else if (dtFinal.getDate() < 10) {
        return dtFinal = document.querySelector("#datauteis").value = "0" + dtFinal.getDate() + "/" + (dtFinal.getMonth() + 1) + "/" + dtFinal.getFullYear();

    }
    else {
        return dtFinal = document.querySelector("#datauteis").value = dtFinal.getDate() + "/" + (dtFinal.getMonth() + 1) + "/" + dtFinal.getFullYear();

    }
} //função que calcula a data final após n dias úteis, imprimindo-a no seu local devido na tela

document.querySelector("#submit").addEventListener("click", () => {
    let dataInicial = document.querySelector("#datainicial").value.split("/"); //leitura da data colocada no campo
    let novaData = corrigeHora(new Date(dataInicial[2], dataInicial[1] - 1, dataInicial[0] - 1)); //organização no formato new Date()
    const dias = document.querySelector("#dias").value; //recolhe o número de dias
    let arrayFeriadosTempo = selecionaEstado(feriados); //array que mostra os feriados no estado selecionado na tela (em milisegundos)
    let arrayDeErros = []; //array de erros causados por falha do usuário

    if (novaData.getFullYear() != 2019) {
        arrayDeErros.push("ERRO! APENAS O ANO DE 2019 É ACEITO!");
    }
    if (dias <= 0) {
        arrayDeErros.push("ERRO! NÚMERO DE DIAS NEGATIVO NÃO É ACEITO!");
    }

    if(arrayDeErros.length>0)
    {
        arrayDeErros.forEach(function(erro){
            let mensagem = document.getElementById("mensagens-erro");  
            const erroTemplate = `
            <li class="mensagens-erro">${erro}</li>
            `
            mensagem.innerHTML += erroTemplate;

           
        })
        setTimeout(function(){
            erroRemove = document.querySelectorAll(".mensagens-erro");
            erroRemove.forEach(function(erro){
                erro.classList.add("some");
                erro.addEventListener("transitionend", function(){
                erro.remove();
    });
            })
        },4000);
    }

    else {
        dtFinalCorridos = diasCorridos(novaData, dias); //data final de dias corridos a ser impressa na tela
        dtFinalUteis = diasUteis(novaData, dias, arrayFeriadosTempo); //data final de dias úteis a ser impressa na tela

    }

});


