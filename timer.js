
// Colocar o valor em minutos
//---------------------------

const timeNumber = 15

//---------------------------


var click = true
var newTime = convertTime(timeNumber)
var timer = decrementador(newTime)

function convertTime(timeNumber) {

  //console.log(numb)

  let hora = timeNumber / 60
  let newHora = Math.floor(hora)


  let minutos = hora - newHora
  let newMinutos = minutos * 60
  newMinutos = Math.floor(newMinutos)

  let segundos = timeNumber - Math.floor(timeNumber)
  let newSegundos = segundos * 60

  newSegundos = Math.floor(newSegundos)


  array = [newHora, newMinutos, newSegundos]

  //console.log(array)


  return array

}

function decrementador(tempo) {

  //console.log(tempo)

  const contadorElement = document.getElementById("number");

  const timerInterval = setInterval(function () {

    if (tempo[2] > 0) {

      tempo[2]--

    } else {

      tempo[2] = 59

      if (tempo[1] > 0) {

        tempo[1]--

      } else {

        tempo[1] = 59

        if (tempo[0] > 0) {

          tempo[0]--

        } else {

          alert('O tempo acabou')
          clearInterval(timerInterval)
          return 0

        }
      }
    }


    if(tempo[0] < 10) {

      contadorElement.innerHTML = `0${tempo[0]}:${tempo[1]}:${tempo[2]}`

      if (tempo[1] < 10) {

        contadorElement.innerHTML = `0${tempo[0]}:0${tempo[1]}:${tempo[2]}`

        if (tempo[2] < 10) {

          contadorElement.innerHTML = `0${tempo[0]}:0${tempo[1]}:0${tempo[2]}`

        }

      }else{

        contadorElement.innerHTML = `0${tempo[0]}:${tempo[1]}:${tempo[2]}`

        if(tempo[2] < 10){

          contadorElement.innerHTML = `0${tempo[0]}:${tempo[1]}:0${tempo[2]}`

        }
  
      }

    }else{

      contadorElement.innerHTML = `${tempo[0]}:${tempo[1]}:${tempo[2]}`

      if(tempo[1] < 10){

        contadorElement.innerHTML = `${tempo[0]}:0${tempo[1]}:${tempo[2]}`

        if(tempo[2] < 10){

          contadorElement.innerHTML = `${tempo[0]}:0${tempo[1]}:0${tempo[2]}`

        }
      }else{

        contadorElement.innerHTML = `${tempo[0]}:${tempo[1]}:${tempo[2]}`

        if(tempo[2] < 10){

          contadorElement.innerHTML = `${tempo[0]}:${tempo[1]}:0${tempo[2]}`

        }
        
      }
    }

    //contadorElement.innerHTML = `${tempo[0]}:${tempo[1]}:${tempo[2]}`

    //console.log(tempo)

  }, 1000);

  return timerInterval

}

function limpar() {


  newTime = [0,0,0]
  //console.log(newTime)

  clearInterval(timer)
  document.getElementById('number').innerHTML = '00:00:00'
  
}

function pausarRetomar() {

  let text = document.getElementById('pausar-retomar')


  if (click == true) {


    clearInterval(timer)
    text.innerHTML = "Retomar"
    text.style.background = "#2557FD"
    click = false

    //console.log(true)

  } else {

    timer = decrementador(newTime)
    text.innerHTML = "Pausar"
    text.style.background = "#EB3D3D"
    click = true

    //console.log(false)

  }

  //console.log(text)

}

function horas() {

  let dataHora = new Date();
  let hora = dataHora.getHours();
  let minutos = dataHora.getMinutes();

  if (minutos < 10) {

    minutos = "0" + minutos
  }
  if (hora < 10) {

    hora = "0" + hora

  }


  let tempo = String(hora) + ":" + String(minutos)
  //console.log(tempo)

  let horas = document.getElementById('tempo')

  horas.innerHTML = tempo


}


setInterval(horas, 1000)
