function PlanodeFundo(cor)
{
    switch (cor){
        case 1:
            var botao = document.getElementById("body");
    botao.style.backgroundColor="red";
    document.getElementById("linkVermelho").style.color = "white";
            break;

        case 2:
            var botao = document.getElementById("body");
    botao.style.backgroundColor="green";    
    document.getElementById("linkAzul").style.color = "white";
            break;

        case 3:
            var botao = document.getElementById("body");
    botao.style.backgroundColor="yellow";
    document.getElementById("linkAmarelo").style.color = "white";
            break;

        case 4:
            var botao = document.getElementById("body");
    botao.style.backgroundColor="blue";
    document.getElementById("linkVerde").style.color = "white";
            break;
    }
}

/////////////           Exercicio 2           //////////////////////////////////////////

function mouseOut() {
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("linkVermelho").style.color = "black";
    document.getElementById("linkVerde").style.color = "black";
    document.getElementById("linkAmarelo").style.color = "black";
    document.getElementById("linkAzul").style.color = "black";
}

////////////////              Exercicio 3             //////////////////


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

function CheckTodos(todos)
{
    var cbox = document.getElementsByName("animal");

    for (let i = 0; i < cbox.length; i++) {
        cbox[i].checked = todos.checked;
        
    }

    VerificaChecks();
}

function VerificaChecks()
{
    var boxes = document.getElementsByName("animal");
    var contagem = 0;
    boxes.forEach(function(item) {
        if(item.checked==true){
            contagem++;
        }        
    });
    if(contagem>1){
        document.getElementById("btn1").removeAttribute("disabled");
    }else{
        document.getElementById("btn1").setAttribute("disabled","disabled");
    }
}

/////////////       Exercicio 6       ///////////////

function Tema()
{
        var texto = document.getElementById("texto");
        var corpo = document.getElementById("corpo");
    
        if(corpo.style.backgroundColor == ("white")){
            texto.style.color = "white";
            corpo.style.backgroundColor = "black";
        }else{
            texto.style.color = "black";
            corpo.style.backgroundColor = "white";
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

//////////////////////            Exercicio 9              //////////////////////////

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


////////////////////////              Exercicio 10                   ///////////////////////
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