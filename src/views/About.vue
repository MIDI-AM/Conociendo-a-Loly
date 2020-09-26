
<template>
  <div class="main">
    <a href="#/" class="router-link-active">
      <img src="../assets/homeb.png" class="close" />
    </a>
    <a href="http://midi.espol.edu.ec">
      <img src="../assets/cerrar.png" class="home" />
    </a>

    <div class="about">
      <div class="creditos">
        <div class="m-color">
          <br />
          <h2
            class="maintitle"
          >Fomentar la educación de niños con TEA mediante herramientas digitales interactivas</h2>
          <h2>“Conociendo a Loly” Cuento animado con Pictogramas</h2>
          <h1>Créditos</h1>
        </div>
        <div class="container">
          <div class="wrapper">
            <h2 class="m-color">Equipo de Trabajo:</h2>
            <div>
              <p>
                <strong>Animación Cuento y Pictogramas :</strong> Daniel Vinces
              </p>
            </div>
            <div>
              <p>
                <strong>Diseño e ilustración del cuento:</strong> Antonio Enmanuel Miranda Yagual
              </p>
            </div>
            <div>
              <p>
                <strong>Elaboración y revisión de historia y guiones</strong>
              </p>
              <p>Fabricia Rossy Hurtado Moscoso</p>
              <p>Psc. Lenny Párraga</p>
              <p>Ph.D. Nayeth Idalid Solórzano Alcívar</p>
            </div>
            <h2 class="m-color">Gestores del Proyecto:</h2>
            <p>
              Ph.D. Nayeth Idalid Solórzano Alcívar:
              <strong>Tutora del Proyecto Integrador FADCOM</strong>
              <br />
              <strong>Directora Proyectos de investigación MIDI y Loly-MIDI</strong>
            </p>
            <p>
              Ph.D. Dennys Fabian Paillacho Chiluiza:
              <strong>Co-Director Proyecto Loly-MIDI</strong>
            </p>
          </div>

          <div class="wrapper">
            <h2 class="m-color">Agradecimientos y colaboración:</h2>
            <div>
              <p>
                M.Sc. Jaqueline Mejía Luna:
                <strong>Profesor Materia Integradora LICWEB, FADCOM</strong>
              </p>
              <p>
                M.Sc. Da Hee Park Kim:
                <strong>Tutora Materia Integradora LIGRA, FADCOM</strong>
              </p>
              <p>
                M.Sc. Diego Alejandro Carrera Gallego:
                <strong>Co-Director Proyectos MIDI</strong>
              </p>
              <p>
                Msc. Elizabeth Estephania Elizalde Rios:
                <strong>Investigadora Proyectos MIDI</strong>
              </p>
              <p>
                M.Sc. Psic. Ed. Lenny Gina Párraga Toala:
                <strong>Directora de Educación Especializada Dolores Cacuango</strong>
              </p>
            </div>

            <h2 class="m-color">Colaboradores</h2>
            <div>
              <p>
                <strong>Voz Loly:</strong> Máster Diana Ruth Macias Larrea Velastegui
              </p>
              <p>
                <strong>Grabaciones y Sonido:</strong> Máster Guillermo Alejnadro Doylet Larrea
              </p>
              <p>
                <strong>Diseño iconos y destacados:</strong> Kleber José Avalino Mosquera
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <img class="cidi" src="../assets/cidis.png" alt />
        <img class="fadcom" src="../assets/fadcom.png" alt />
        <img class="midi" src="../assets/midi.png" alt />
        <img class="fundacion" src="../assets/fundacion.png" alt />
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.home {
  position: absolute;
  right: 20px;
  top: 10px;
}

.close {
  position: absolute;
  left: 20px;
  top: 10px;
}

.creditos {
}

.wrapper {
  width: 50%;
  box-sizing: border-box;
  margin: 0;
}

img {
  width: 5%;
}

.maintitle {
}

.m-color {
  color: green;
}
.main {
  background-image: url(../assets/fondocreditos.png);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  height: 100vh;
  overflow: auto;
}

.about {
  /* max-width: 1000px; */
  margin: 0 auto;
  box-sizing: border-box;
}

.cidi {
  width: 200px;
  margin-right: 10px;
}

.fadcom {
  width: 350px;
  margin-right: 10px;
}

.midi,
.fundacion {
  width: 90px;
  margin-right: 10px;
}
.router-link-active {
  font-weight: 700;
}

@media only screen and (max-width: 850px) {
  .maintitle {
    width: 60%;
    margin: 0 auto;
  }
  .maintitle h2 {
    font-size: 10pt;
  }
  .creditos {
    font-size: 12pt;
  }
}
</style>
