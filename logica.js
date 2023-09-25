const letra = document.getElementById("Letra_Principal");
const panel_mostrar = document.getElementById("Panel_JUEGO");
const boton_mostrar = document.getElementById("Iniciar_nivel");
const elemento_noGame = document.getElementById("titulo_principal");
const rest_test1=document.getElementById("rest1");
const rest_test2=document.getElementById("rest2");
const rest_test3=document.getElementById("rest3");
const panel_respt=document.getElementById("panel_respuesta");
const timer_01=document.getElementById("time_timer01");
const timer_02=document.getElementById("time_timer02");
const timer_03=document.getElementById("time_timer03");
//const timer_03=document.querySelector("#time_timer03");

var number_random=Math.floor(Math.random()*4);
var number_random_temp=4;
var number_count=0;
var categoria=0;
var respuesta_1=0;
var respuesta_2=0;
var respuesta_3=0;
var milisegundo=0;
var segundos=0;
var minutos=0;
var time=[];

function Empezar_juego(){
    panel_mostrar.style.display = "block";
    boton_mostrar.style.display = "none";
    elemento_noGame.style.display = "none";
    funcion_niveles();
    Incio_contador1();    
}

function ocultar_elementos(sub_titulo){
    panel_mostrar.style.display = "none";
    elemento_noGame.style.display = "block";
    elemento_noGame.textContent = sub_titulo;
    number_count=0;
    categoria++;
}

function funcion_niveles(){
    switch(categoria){
        case 0:
            change_random_color_ver1();
            break;
        case 1:
            change_random_color_ver2();
            break;
        case 2:
            change_random_color_ver3();
            break;
    }
}

function change_random_color_ver1(){
    if(number_random_temp==number_random){
        number_random=Math.floor(Math.random()*4);
        change_random_color_ver1();
    }else if(number_count>=30){
        Parar_cronometro();
        timer_01.textContent=time[0];
        ocultar_elementos("Fase 2: Color sin interferencia semantica");
        habilitar_botton()
        console.log(categoria);
        console.log("termino1");
    }else{
        switch(number_random){
            case 0:
                letra.textContent = "Rojo";
                letra.style.color="red";
                break;
            case 1:
                letra.textContent = "Amarillo";
                letra.style.color="Yellow";
                break;
            case 2:
                letra.textContent = "Azul";
                letra.style.color="blue";
                break;
            case 3:
                letra.textContent = "Verde"
                letra.style.color="green";
                break;
        }
        number_random_temp=number_random;
    }
}

function change_random_color_ver2(){
    letra.textContent="XXXXXXX";
    if(number_random_temp==number_random){
        number_random=Math.floor(Math.random()*4);
        change_random_color_ver2();
    }else if(number_count>=30){
        Parar_cronometro();
        timer_02.textContent=time[1];
        ocultar_elementos("Fase 3: Color con interferencia semantica");
        habilitar_botton();
        console.log(categoria);
        console.log("termino2");
    }else{
        switch(number_random){
            case 0:
                letra.style.color="red";
                break;
            case 1:
                letra.style.color="Yellow";
                break;
            case 2:
                letra.style.color="blue";
                break;
            case 3:
                letra.style.color="green";
                break;
        }
        number_random_temp=number_random;
    }
}

function change_random_color_ver3(){
    let number_random_letra=Math.floor(Math.random()*4);
    if(number_random_temp==number_random){
        number_random=Math.floor(Math.random()*4);
        change_random_color_ver3();
    }else if(number_count>=30){
        Parar_cronometro();
        timer_03.textContent=time[2];
        console.log("fELICIDADES TERMINASTE");
        ocultar_elementos("Termino la prueba");
        rest_test1.textContent=respuesta_1;
        rest_test2.textContent=respuesta_2;
        rest_test3.textContent=respuesta_3;
        panel_respt.style.display="grid";
        boton_mostrar.style.display="none";
    }else{
        if(number_random_letra===number_random){
            change_random_color_ver3();
         }else{
            switch(number_random){
                case 0:
                    letra.style.color="red";
                    break;
                case 1:
                    letra.style.color="Yellow";
                    break;
                case 2:
                    letra.style.color="blue";
                    break;
                case 3:
                    letra.style.color="green";
                    break;
            } 
            switch(number_random_letra){
                case 0:
                    letra.textContent = "Rojo";
                    break;
                case 1:
                    letra.textContent = "Amarillo";
                    break;
                case 2:
                    letra.textContent = "Azul";
                    break;
                case 3:
                    letra.textContent = "Verde"
                    break;
         }
        number_random_temp=number_random;
        }
    }
}

const timer = setInterval(()=>{
    
}, 100);

function Respuesta_correcta(){
    if(number_random==0){
        console.log("correcto");
        switch(categoria){
            case 0:
                respuesta_1++;
                break;
            case 1:
                respuesta_2++;
                break;
            case 2:
                respuesta_3++;
                break;
        }
    }else{
        console.log("incorrecto");
    }
    number_count ++;
    funcion_niveles();
    console.log(number_count);
}

function Changecolor_R(){
    Respuesta_correcta();
}

function Changecolor_Y(){
    Respuesta_correcta();
}

function Changecolor_B(){
    Respuesta_correcta();
}

function Changecolor_G(){
    Respuesta_correcta();
}

function Incio_contador1(){
    control=setInterval(Cronometro, 10);
}

function Cronometro(){
    if(milisegundo<99){
        milisegundo++;
    }else{
        milisegundo= -1;
    }
    if(milisegundo==0){
        segundos++
    }else if(segundos==59){
        segundos=-1;
    }
    if(milisegundo==0 && segundos==0){
        minutos++;
    }else if(minutos==59){
        minutos=-1;
    }
}

function Parar_cronometro(){
    clearInterval(control);
    let milisegundo_temp;
    let segundos_temp;
    let minutos_temp;

    if(milisegundo<10){
        milisegundo_temp=`0${milisegundo}`;
    }else{
        milisegundo_temp=milisegundo;
    }
    if(segundos<10){
        segundos_temp=`0${segundos}`;
    }else{
        segundos_temp=segundos;
    }
    if(minutos<10){
        minutos_temp=`0${minutos}`;
    }else{
        minutos_temp=minutos;
    }
    time.push(`${minutos_temp}:${segundos_temp}:${milisegundo_temp}`);
    milisegundo=0;
    segundos=0;
    milisegundo=0;
}

function habilitar_botton(){
    let restroseso=3;
    botton_continuar=setInterval(()=>{
        restroseso--;
        if(restroseso<=0){
            boton_mostrar.style.display="block";
            clearInterval(botton_continuar);
        }
    }, 1000);
}