//as variaveis abaixo identificam e guardam os botões seletores no topo da página
const botComprimento = document.querySelector(".comprimento"); 
const botPeso = document.querySelector(".peso");
const botVolume= document.querySelector(".volume");
const botTemperatura = document.querySelector(".temperatura");
const botTempo = document.querySelector(".tempo");

//as variaveis abaixo são as responsáveis por identificar as divs que serão manipuladas futuramente, fazendo com que elas apareçam ou sumam
const container = document.querySelector(".container");
const divComprimento = document.querySelector(".DivComprimento");
const divPeso = document.querySelector(".DivPeso");
const divVolume = document.querySelector(".DivVolume");
const divTemperatura = document.querySelector(".DivTemperatura");
const divTempo = document.querySelector(".DivTempo");

//essas variaveis vão garantir que esses elementos mudem de cor quando os botões de medidas forem pressionados
const moldura = document.querySelector(".moldura");
const moldura2 = document.querySelector(".moldura2");
const resultado = document.querySelector(".resultado");
const botConverter = document.querySelector(".botao");

let conta = 0; //variavel pivô
let conta2 = 0; //variavel pivô

function esconderAbas(){ // função que remove a classe "aba ativa" das divs
    container.classList.remove("aba-ativa");
    divComprimento.classList.remove("aba-ativa");
    divPeso.classList.remove("aba-ativa");
    divVolume.classList.remove("aba-ativa");
    divTemperatura.classList.remove("aba-ativa");
    divTempo.classList.remove("aba-ativa");
}

botComprimento.addEventListener("click",function(){
    esconderAbas();
    divComprimento.classList.add("aba-ativa");//após retirar a classe "aba  ativa" de todas as divs, acrescenta o "aba ativa" só no botão pressionado
    moldura.style.color = "#38BDF8";
    moldura2.style.color = "#38BDF8";
    resultado.style.background = "#38BDF8";
    botConverter.style.background = "#38BDF8";
    //cores de todo o site são alteradas para ficarem compativeis com o medida tratada
})

botPeso.addEventListener("click", function(){
    esconderAbas();
    divPeso.classList.add("aba-ativa");
    moldura.style.color = "#34D399";
    moldura2.style.color = "#34D399";
    resultado.style.background = "#34D399";
    botConverter.style.background = "#34D399";
})

botVolume.addEventListener("click", function(){
    esconderAbas();
    divVolume.classList.add("aba-ativa");
    moldura.style.color = "#A78BFA";
    moldura2.style.color = "#A78BFA";
    resultado.style.background = "#A78BFA";
    botConverter.style.background = "#A78BFA";
})

botTemperatura.addEventListener("click", function(){
    esconderAbas();
    divTemperatura.classList.add("aba-ativa");
    moldura.style.color = "#d32020";
    moldura2.style.color = "#d32020";
    resultado.style.background = "#d32020";
    botConverter.style.background = "#d32020";
})

botTempo.addEventListener("click", function(){
    esconderAbas();
    divTempo.classList.add("aba-ativa");
    moldura.style.color = "#dbd02f";
    moldura2.style.color = "#dbd02f";
    resultado.style.background = "#dbd02f";
    botConverter.style.background = "#dbd02f";
})

botConverter.addEventListener("click",function(){

    if (divComprimento.classList.contains("aba-ativa")){
        let inputComprimento = document.querySelector(".DivComprimento .numero").value;//variavel do que foi digitado
        let entrada = document.querySelector(".DivComprimento .entrada").value;//variavel da unidade original
        let saida = document.querySelector(".DivComprimento .saida").value;//variavel da unidade para conversão
        paraMetro(inputComprimento, entrada);//os parametros são necessários pois a função utiliza valores gerados fora dela, logo é necessário passar esses valores e depois retorna-los
        deMetro(conta2, saida);//sem esses parametros, ele manteria os valor 0 para as variaveis conta e conta2.
        resultado.innerHTML = `${inputComprimento} ${entrada} é igual a ${conta} ${saida}.`;//o innerHTML substiu o que está escrito na no paragrafo da classe "resultado" para o que está depois do =
}

    else if (divPeso.classList.contains("aba-ativa")){
        let inputPeso = document.querySelector(".DivPeso .numero").value;
        let entrada = document.querySelector(".DivPeso .entrada").value;
        let saida = document.querySelector(".DivPeso .saida").value;
        paraKilo(inputPeso, entrada);
        deKilo(conta2, saida);
        resultado.innerHTML = `${inputPeso} ${entrada} é igual a ${conta} ${saida}.`;
}

    else if (divVolume.classList.contains("aba-ativa")){
        let inputVolume = document.querySelector(".DivVolume .numero").value;
        let entrada = document.querySelector(".DivVolume .entrada").value;
        let saida = document.querySelector(".DivVolume .saida").value;
        paraLitro(inputVolume, entrada);
        deLitro(conta2, saida);
        resultado.innerHTML = `${inputVolume} ${entrada} é igual a ${conta} ${saida}.`;
}

    else if (divTemperatura.classList.contains("aba-ativa")){
        let inputTemperatura = document.querySelector(".DivTemperatura .numero").value;
        let entrada = document.querySelector(".DivTemperatura .entrada").value;
        let saida = document.querySelector(".DivTemperatura .saida").value;
        paraCelsius(inputTemperatura, entrada);
        deCelsius(conta2, saida);
        resultado.innerHTML = `${inputTemperatura} ${entrada} é igual a ${conta.toFixed(2)} ${saida}.`;
}

    else if (divTempo.classList.contains("aba-ativa")){
        let inputTempo = document.querySelector(".DivTempo .numero").value;
        let entrada = document.querySelector(".DivTempo .entrada").value;
        let saida = document.querySelector(".DivTempo .saida").value;
        paraMinutos(inputTempo, entrada);
        deMinutos(conta2, saida);
        resultado.innerHTML = `${inputTempo} ${entrada} é igual a ${conta} ${saida}.`;
}
})

//para não fazer todas as conversões manualmente, optei por escolher um valor padrão para o qual todos os valores seriam transformados e depois transformar todos os valores a partir dele.
//as funções abaixo facilitam as conversões, diminuindo a quantidade de comparações escritas em código.A titulo de comparação, se fosse para escrever todas as comparações de comprimento, seriam necessárias 30 comparações, porém utilizando essa estratégia, foram necessárias apenas 12.
function paraMetro(inputComprimento, entrada){
    if (entrada === "Milímetros (mm)"){
        conta2 = inputComprimento / 1000;
    }
    else if (entrada === "Centímetros (cm)"){
        conta2 = inputComprimento / 100;
    }
    else if (entrada === "Metros (m)"){
        conta2 = inputComprimento;
    }
    else if (entrada === "Quilômetros (km)"){
        conta2 = inputComprimento * 1000;
    }
    else if (entrada === "Polegadas (in)"){
        conta2 = inputComprimento / 39.37; 
    }
    else if (entrada === "Pés (ft)"){
        conta2 = inputComprimento / 3.281;
    }
    return conta2 //isso garante que o valor de conta2 seja atualizado para o valor obtido na conta e seja passado para a próxima função
}
function deMetro(conta2, saida){
    if (saida === "Milímetros (mm)"){
        conta = conta2 * 1000;
    }
    else if (saida === "Centímetros (cm)"){
        conta = conta2 * 100;
    }
    else if (saida === "Metros (m)"){
        conta = conta2;
    }
    else if (saida === "Quilômetros (km)"){
        conta = conta2 / 1000;
    }
    else if (saida === "Polegadas (in)"){
        conta = conta2 * 39.37;
    }
    else if (saida === "Pés (ft)"){
        conta = conta2 * 3.281;
    }
    return conta//esse return garante que o valor de conta seja atualizado e seja utilizado para dar a resposta ao usuário
}

function paraKilo(inputPeso, entrada){
    if (entrada === "Miligramas (mg)"){
        conta2 = inputPeso / 1000000;
    }
    else if (entrada === "Gramas (g)"){
        conta2 = inputPeso / 1000;
    }
    else if (entrada === "Quilos (kg)"){
        conta2 = inputPeso;
    }
    else if (entrada === "Toneladas (t)"){
        conta2 = inputPeso * 1000;
    }
    else if (entrada === "Libras (lb)"){
        conta2 = inputPeso / 2.205;
    }
    return conta2
}
function deKilo(conta2, saida){
    if (saida === "Miligramas (mg)"){
        conta = conta2 * 1000000;
    }
    else if (saida === "Gramas (g)"){
        conta = conta2 * 1000;
    }
    else if (saida === "Quilos (kg)"){
        conta = conta2;
    }
    else if (saida === "Toneladas (t)"){
        conta = conta2 / 1000;
    }
    else if (saida === "Libras (lb)"){
        conta = conta2 * 2.205;
    }
    return conta
}

function paraLitro(inputVolume, entrada){
    if (entrada === "Mililitros (ml)"){
        conta2 = inputVolume / 1000;
    }
    else if (entrada === "Litros (l)"){
        conta2 = inputVolume;
    }
    return conta2;
}
function deLitro(conta2, saida){
    if (saida === "Mililitros (ml)"){
        conta = conta2 * 1000;
    }
    if (saida === "Litros (l)"){
        conta = conta2;
    }
    return conta;
}

function paraCelsius(inputTemperatura, entrada){
    if (entrada === "Celsius (ºC)"){
        conta2 = inputTemperatura;
    }
    else if (entrada === "Fahrenheit (ºF)"){
        conta2 = (inputTemperatura - 32) * (5 / 9);
    }
    else if (entrada === "Kelvin (K)"){
        conta2 = inputTemperatura - 273.15;
    }
    return conta2;
}
function deCelsius(conta2, saida){
    if (saida === "Celsius (ºC)"){
        conta = conta2;
    }
    if (saida === "Fahrenheit (ºF)"){
        conta = (conta2 * (9 / 5)) + 32;
    }
    if (saida === "Kelvin (K)"){
        conta = conta2 + 273.15;
    }
    return conta;
}

function paraMinutos(inputTempo, entrada){
    if (entrada === "Segundos (s)"){
        conta2 = inputTempo / 60;
    }
    else if (entrada === "Minutos (min)"){
        conta2 = inputTempo;
    }
    else if (entrada === "Horas (h)"){
        conta2 = inputTempo * 60;
    }
    else if (entrada === "Dias"){
        conta2 = inputTempo * 1440; //quantidade de minutos em um dia
    }
    return conta2;
}
function deMinutos(conta2, saida){
    if (saida === "Segundos (s)"){
        conta = conta2 * 60;
    }
    else if (saida === "Minutos (min)"){
        conta = conta2;
    }
    else if (saida === "Horas (h)"){
        conta = conta2 / 60;
    }
    else if (saida === "Dias"){
        conta = conta2 / 1440;
    }
    return conta;
}
