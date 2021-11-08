function FundoVermelho()
{
    var botao = document.getElementById("body");
    botao.style.backgroundColor="red";
}

function FundoVerde()
{
    var botao = document.getElementById("body");
    botao.style.backgroundColor="green";
}

function FundoAmarelo()
{
    var botao = document.getElementById("body");
    botao.style.backgroundColor="yellow";
}

function FundoAzul()
{
    var botao = document.getElementById("body");
    botao.style.backgroundColor="blue";
}
/////////////           Exercicio 2           //////////////////////////////////////////
function mouseOverRed() {
  document.getElementById("corpo").style.backgroundColor = "red";
  document.getElementById("linkVermelho").style.color = "white";
}
function mouseOverBlue() {
    document.getElementById("corpo").style.backgroundColor = "blue";
    document.getElementById("linkAzul").style.color = "white";
}

function mouseOverYellow() {
    document.getElementById("corpo").style.backgroundColor = "yellow";
    document.getElementById("linkAmarelo").style.color = "white";
}

function mouseOverGreen() {
    document.getElementById("corpo").style.backgroundColor = "green";
    document.getElementById("linkVerde").style.color = "white";
}
function mouseOut() {
    document.getElementById("corpo").style.backgroundColor = "white";
    document.getElementById("linkVermelho").style.color = "black";
    document.getElementById("linkVerde").style.color = "black";
    document.getElementById("linkAmarelo").style.color = "black";
    document.getElementById("linkAzul").style.color = "black";
}

////////////////              Exercicio 3             //////////////////

function RadioVermelho(){
    let radios = document.getElementsByTagName("input");
    for(i = 0; i< radios.length; i++){
        radios[i].onclick = function(e){
            if(e.ctrlKey){
                this.checked = true;
            }
        }
    }
}

function RadioVermelho(){
    document.getElementById("corpo").style.backgroundColor = "red";

    let radio1 = document.getElementById("r1");
    let radio2 = document.getElementById("r2");
    let radio3 = document.getElementById("r3");
    let radio4 = document.getElementById("r4");
    if(radio1.checked == true){
        radio2.checked=false;
        radio3.checked=false;
        radio4.checked=false;
    }
}
function RadioAzul(){
    document.getElementById("corpo").style.backgroundColor = "blue";

    let radio1 = document.getElementById('r1');
    let radio2 = document.getElementById('r2');
    let radio3 = document.getElementById('r3');
    let radio4 = document.getElementById('r4');
    if(radio2.checked == true){
        radio1.checked=false;
        radio3.checked=false;
        radio4.checked=false;
    }
}

function RadioAmarelo(){
    document.getElementById("corpo").style.backgroundColor = "yellow";

    let radio1 = document.getElementById('r1');
    let radio2 = document.getElementById('r2');
    let radio3 = document.getElementById('r3');
    let radio4 = document.getElementById('r4');
    if(radio3.checked == true){
        radio1.checked=false;
        radio2.checked=false;
        radio4.checked=false;
    }
}

function RadioVerde(){
    document.getElementById("corpo").style.backgroundColor = "green";

    let radio1 = document.getElementById('r1');
    let radio2 = document.getElementById('r2');
    let radio3 = document.getElementById('r3');
    let radio4 = document.getElementById('r4');
    if(radio4.checked == true){
        radio1.checked=false;
        radio2.checked=false;
        radio3.checked=false;
    }
}

/////////////////        Exercicio 4      //////////////

function SumirTexto(){
    var texto = document.getElementById("texto");
    texto.style.visibility = "hidden";
}

function AparecerTexto(){
    var texto = document.getElementById("texto");
    texto.style.visibility = "visible";
}

//////////////////      Exercicio 5      //////////////

function SelecaoFormulario(){
    let radio1 = document.getElementById("cachorro");
    let radio2 = document.getElementById("gato");
    let radio3 = document.getElementById("passaro");

    var btn1 = document.getElementById("btn1");

    if(radio1.checked == true && radio2.checked == true || 
        radio2.checked == true && radio3.checked == true ||
        radio1.checked == true && radio3.checked == true){
            btn1.disabled=false;
        }

}

/////////////       Exercicio 6       ///////////////
var tema = 0;
function Tema(){
    var texto = document.getElementById("texto");
    var corpo = document.getElementById("corpo");

    if(tema == 0){
        texto.style.color = "white";
        corpo.style.backgroundColor = "black";
        tema = 1;
    }else{
        texto.style.color = "black";
        corpo.style.backgroundColor = "white";
        tema = 0;
    }
    
}

function FonteUperLower(value){
    
    var texto = document.getElementById("texto");
    if(value == 1){
        texto.style.textTransform = "uppercase";
    }else if(value == 2){
        texto.style.textTransform = "lowercase";
    }else{
        texto.style.textTransform = "none";
    }
    
}

function Fonte(value){
    var texto = document.getElementById("texto");
    if(value == 1){
        texto.style.fontSize = "larger";
    }else if(value == 2){
        texto.style.fontSize = "smaller";
    }else{
        texto.style.fontSize = "medium";
    }
}

function SubmitButton(){

    var nome1 = document.getElementById("nome").value;
    var senha1 = document.getElementById("senha").value;
    var senha2 = document.getElementById("senha2").value;

    var botao = document.getElementById("btnS");
    
        if(nome1!=""&&senha1!=""&&senha1==senha2){
            botao.disabled = false;
        }else{
            botao.disabled = true;
        }
        
}

function PessoaFisicaJuridica(valor){
    let rd1 = document.getElementById("rdFisica");
    let rd2 = document.getElementById("rdJuridica");
    let cpf = document.getElementById("CPF");
    let cnpj = document.getElementById("CNPJ");
    let dataNascimento = document.getElementById("dataNasc");

    if(valor==1 && rd1.checked==true) {
        rd2.checked=false;
        cpf.disabled = false;
        cnpj.disabled = true;
        dataNascimento.disabled = false;
    }else if(valor==2&&rd2.checked==true){
        rd1.checked=false;
        cnpj.disabled = false;
        cpf.disabled = true;
        dataNascimento.disabled = true;
    }
}