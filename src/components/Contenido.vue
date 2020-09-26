<template>
  <!-- principal -->

  <div class="wrapper-contenido">
    <div v-if="principal" class="portada">
      <div class="book-cover-inner">
        <div class="dato">
          <form @submit.prevent="addTea">
            <div v-show="datos">
              <input
                v-if="name"
                class="name"
                type="text"
                v-model="newTea.nombre"
                id="nombre"
                placeholder="nombre:"
                maxlength="20"
              />
              <input
                v-if="edad"
                class="edad"
                type="text"
                v-model="newTea.edad"
                placeholder="edad:"
                id="edad"
                maxlength="2"
              />
              <div class="ini">
                <a v-if="btnempezar" @click="funcion()" class="iniciar">Empezar</a>
              </div>
            </div>

            <div>
              <!-- <audio class="audiopregunta" :src="this.audiopregunta"></audio> -->
              <h3 v-show="elije" class="elije">
                <img @click="pregunta" src="../assets/audiob.gif" alt class="pbtn" /> ¿Quien es tu personaje Favorito?
              </h3>
            </div>

            <div v-show="preguntas" id="example-3">
              <label class="checkeable">
                <input type="radio" id="Loly" value="Loly" v-model="newTea.personajes" />
                <img src="../assets/seleccion/loly2.jpg" alt="Loly" />
                Loly
              </label>

              <label class="checkeable">
                <input type="radio" id="Loly 1.0" value="Loly 1.0" v-model="newTea.personajes" />
                <img src="../assets/seleccion/loly1.0.jpg" alt="Loly 1.0" />
                Loly 1.0
              </label>

              <label class="checkeable">
                <input
                  type="radio"
                  id="Amiga de loly"
                  value="Amiga de Loly"
                  v-model="newTea.personajes"
                />
                <img src="../assets/seleccion/amigaloly.jpg" alt />
                Amiga de Loly
              </label>

              <label class="checkeable">
                <input
                  type="radio"
                  id="Amigo de Loly "
                  value="Amigo de Loly "
                  v-model="newTea.personajes"
                />
                <img src="../assets/seleccion/amigololy.jpg" alt />
                Amigo de Loly
              </label>

              <label class="checkeable">
                <input
                  type="radio"
                  id="Loly cientifica"
                  value="Loly cientifica"
                  v-model="newTea.personajes"
                />
                <img src="../assets/seleccion/CIENTIFICA.jpg" alt /> Loly Cientifica
              </label>

              <label class="checkeable">
                <input type="radio" id="Profesor" value="Profesor" v-model="newTea.personajes" />
                <img src="../assets/seleccion/profe.jpg" alt /> Profesor
              </label>

              <br />
            </div>

            <div v-if="elejido">
              <h6>
                Seleccionaste a:
                <span>{{ newTea.personajes }}</span>
              </h6>
            </div>
            <button v-if="botonconfirmar" type="submit" @click="win" class="env">Confirmar</button>

            <div v-if="botonesdescarga" class="descargas">
              <span @click="download" class="des">Descargar cuento</span>
              <span @click="downloadpictos" class="desp">Descargar Pictogramas</span>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="wrapper-picto">
      <div class="tooltip" v-for="p7 in p" v-bind:key="p7" :class="classpictogramas">
        <!-- etiquetas de nombre de los pictogramas -->
        <span class="tooltip-content">{{ p7.name }}</span>
        <!-- imagenes de los pictogramas -->
        <img class="picto" :src="p7.url" />
      </div>
      <img class="lolyfin" v-if="imagenfinal" src="../assets/FINAL.png" alt />
    </div>

    <div class="wrapper-text">
      <!-- texto del cuento en parrafo -->
      <span v-for="(s, i) in textoarray" v-bind:key="i" :class="classtext">
        {{
        s
        }}
      </span>
    </div>

    <audio class="audio" :src="this.audio"></audio>

    <div v-if="botones" class="buttons">
      <div v-if="home">
        <a href="/">
          <img class="bfu" src="../assets/homeb.png" alt />
        </a>
      </div>
      <div v-if="sonido">
        <img @click.stop="Animar" class="bfu" src="../assets/audiob.gif" alt />
      </div>
      <div>
        <a v-if="creditos" href="#/about">
          <img class="bfu" src="../assets/creditos.png" alt />
        </a>
      </div>
      <div>
        <a v-if="cerrar" @onclick="cerrar" href="http://midi.espol.edu.ec">
          <img class="bfu" src="../assets/cerrar.png" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import CuentoVue from "./Cuento.vue";
import axios from "axios";
import Firebase, { app, functions } from "firebase";
import config from "../config";
let cone = Firebase.initializeApp(config); //conexion con firebase viene del archivo config sdk unico
let db = cone.database(); // para guardar la conexion
let ninosRef = db.ref("tea");

var audiopregunta = new Audio(require("../assets/sonido/pregunta.mp3"));
var audiowin = new Audio(require("../assets/sonido/felicitaciones.mp3"));

export default {
  name: "Contenido",

  firebase: {
    tea: ninosRef,
  },

  props: {
    texto: {
      type: String,
    },
    pictogramas: {
      type: Array,
    },
    audio: {
      type: String,
    },

    funcion: {
      type: Function,
    },
    principal: {
      type: Boolean,
    },
    home: {
      type: Boolean,
    },
    sonido: {
      type: Boolean,
    },

    preguntas: {
      type: Boolean,
    },

    datos: {
      type: Boolean,
    },

    elije: {
      type: Boolean,
    },

    imagenfinal: {
      type: Boolean,
    },

    cerrar: {
      type: Boolean,
    },

    creditos: {
      type: Boolean,
    },

    botonesdescarga: {
      type: Boolean,
    },

    botonconfirmar: {
      type: Boolean,
    },

    elejido: {
      type: Boolean,
    },
  },
  data() {
    return {
      newTea: {
        nombre: "",
        edad: "",
        personajes: [],
      },

      textoarray: "",
      classtext: "visible",
      classpictogramas: "visible",
      elije: false,
      principal: true,
      botones: true,
      home: false,
      sonido: false,
      name: true,
      edad: true,
      btnempezar: true,
      preguntas: false,
      imagenfinal: true,
      creditos: true,
      cerrar: true,
      botonesdescarga: false,
      botonconfirmar: false,
      elejido: false,

      p: [],
    };
  },
  mounted() {
    this.textoarray = this.texto.split(" ");
    this.p = this.pictogramas;
    this.portada = this.portada;
  },

  methods: {
    Animar() {
      this.classpictogramas = "hide";

      let cont = 0;
      let temp = this.p;

      if (this.classpictogramas == "hide") {
        this.classpictogramas = "visible";
        this.p = [];
        let t = setInterval(() => {
          this.p.push(temp[cont]);
          console.log(cont);

          cont++;
          if (cont === temp.length) {
            clearInterval(t);
          }
        }, 500);
        this.clickaudio();
      }
    },

    clickaudio() {
      let a = this.$el.querySelector("audio");
      if (this.playing) {
        // console.log(a);
      } else {
        a.play();
        //console.log(a);
      }
    },

    pregunta() {
      audiopregunta.play();
    },

    win() {
      audiowin.play();
      //window.location.reload();
      setTimeout("document.location.reload()", 10000);
    },

    download() {
      axios({
        url: "https://conociendo-a-loly.web.app/cuento.pdf",
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
        var filelink = document.createElement("a");
        filelink.href = fileUrl;

        filelink.setAttribute("download", "file.pdf");
        document.body.appendChild(filelink);
        filelink.click();
      });
    },

    downloadpictos() {
      axios({
        url: "https://conociendo-a-loly.web.app/pictos.pdf",
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
        var filelink = document.createElement("a");
        filelink.href = fileUrl;

        filelink.setAttribute("download", "pictos.pdf");
        document.body.appendChild(filelink);
        filelink.click();
      });
    },

    // guardar() {
    //   db.ref("tea/").on("value", function (snapshot) {
    //     console.log(snapshot.val());
    //   });
    // },

    cerrar() {
      Window.close();
      //this.Window.close();
    },

    addTea() {
      console.log("hola entre aqui");
      var x = document.getElementById("nombre").value;

      var y = document.getElementById("edad").value;
      this.newTea.nombre = x;
      this.newTea.edad = y;
      console.log(x);
      console.log(y);

      if (this.newTea.nombre == "" && this.newTea.edad == "") {
        this.newTea.nombre = "general";
        this.newTea.edad = "n/a";
        ninosRef.push(this.newTea);

        this.newTea.nombre = "";
        this.newTea.edad = "";
        this.botonconfirmar = false;
        this.win();
      } else {
        ninosRef.push(this.newTea);

        this.newTea.nombre = "";
        this.newTea.edad = "";
        this.botonconfirmar = false;
        this.win();
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
.list-item,
span {
  /* display: ruby; */
  display: inline-block;
  margin-right: 10px;
  transition: 0.2s ease;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

#example-3 {
  display: flex;
  font-size: 15pt;
}

.checkeable input {
  display: none;
}

.checkeable img {
  width: 100px;
  border: 5px solid transparent;
}

.checkeable input {
  display: none;
}
.checkeable input:checked + img {
  border-color: Green;
}

.elije {
  padding-top: 70px;
}

.descargas {
  font-size: 14pt;
}

.tooltip {
  width: 15%;
  padding: 12px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  float: left;
}

.tooltip-content {
  /* opacity: 0; */
  /* background-color: rgb(12, 128, 47); */
  color: rgb(0, 0, 0);
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  margin: auto;
  z-index: 1;
}

.tooltip:hover .tooltip-content {
  /* opacity: 1; */
  color: rgb(255, 255, 255);
  background-color: rgb(12, 128, 47);
  text-align: center;
  border-radius: 6px;
  padding: 5px 20px;
  margin: auto;
  z-index: 1;
}

.hide {
  visibility: hidden;
  transition: 0.1s;
}

.visible {
  visibility: visible;
  transition: 0.1s;
}
.wrapper-contenido {
  /* height: fit-content; */
  height: 100%;
  position: relative;
  box-sizing: border-box;
  border-left: 1px solid #ccc;
  /* background-image: url("../assets/fondotenue.png"); */
  background-image: url("../assets/fondoc.png");

  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.edad,
.name {
  display: inline-block;
  box-sizing: border-box;
  color: #8d743b;
  background-color: #f4e695;
  padding: 4px;
  border: 5px solid #2ec183;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 700;
  margin-top: 3px;
  margin-left: 4px;
  font-size: 21pt;
  margin-bottom: 10px;
}

.preguntas {
  margin: 0 auto;
}

.sel-charact {
  display: flex;
  border-radius: 5px;
  justify-content: center;
}

.personaje {
  box-sizing: border-box;
  margin: 5px;
  width: 200px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  font-size: 8pt;
}

.imapersonaje {
  width: 100px;
}

.env {
  box-sizing: border-box;
  color: #8d743b;
  background-color: #f4e695;
  padding: 10px;
  border: 10px solid #2ec183;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 700;
  margin-top: 0px;
  font-size: 20px;
}

.iniciar {
  box-sizing: border-box;
  color: #8d743b;
  background-color: #f4e695;
  padding: 10px;
  border: 10px solid #2ec183;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 700;
  margin-top: 10px;
}

.ini {
  margin-top: 40px;
}

.wrapper-text {
  /* clear: both;
  padding-top: 40px;
  font-size: 28px;
} */

  clear: both;
  padding-top: 40px;
  font-size: 18pt;
  box-sizing: border-box;
  text-align: center;
}

.buttons {
  position: absolute;
  display: block;
  margin: 0;
  width: 100%;
  bottom: 1%;
  box-sizing: border-box;
}
.buttons div {
  width: 70%;
  float: left;
  display: contents;
  text-align: center;
}

.wrapper-picto {
  width: 100%;
  /* height: fit-content; */
  height: 50%;
  margin: auto;
  /* display: flex;
  align-items: flex-start; */
  border: 0vmin;
}
/* .picto {
  width: 90px;
  margin: auto 5px 0 5px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #c7cdda;
} */

.picto {
  width: auto;
  margin: auto;
  box-sizing: border-box;
  box-shadow: 0 0 10px #c7cdda;
}
.opcionescaja {
  display: block;
}

.portada {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 30px;
  font-size: 24pt;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pbtn {
  width: 30px;
  height: 30px;
  padding: 0;
  margin-top: 0;
  margin-right: 3px;
}

.des,
.desp,
.selecpersonaje {
  box-sizing: border-box;
  color: #8d743b;
  background-color: #f4e695;
  padding: 10px;
  border: 10px solid #2ec183;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 700;
  margin-top: 15px;
}

.dato {
  display: table-caption;
  margin-bottom: auto;
}

.book-cover-inner {
  padding-bottom: 270px;
}
.book-cover-title {
  margin: 0;
  padding-bottom: 80px;
}

.book-cover-buttons {
  margin: 0 auto;
  width: 100%;
}

.bfu {
  padding-top: 20px;
  width: 14%;
  margin: 14px;
  padding-left: 5px;
  padding-right: 15px;
}

@media only screen and (orientation: portrait) {
  .wrapper {
    display: none;
  }
}

@media only screen and (max-width: 1600px) {
  .body-cuento {
    height: 800px;
  }
  .checkeable img {
    width: 87px;
  }
}
@media only screen and (max-width: 1440px) {
  .body-cuento {
    height: 740px;
  }
  .elije {
    padding-top: 0px;
  }
}
@media only screen and (max-width: 1280px) {
  .body-cuento {
    height: 700px;
  }
}

@media only screen and (max-width: 1200px) {
  .wrapper-text {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14pt;
    padding-top: 0px;
  }
  .tooltip-content {
    font-size: 7pt;
  }
  .portada {
    font-size: 13pt;
  }
}

@media only screen and (max-width: 1024px) {
  .body-cuento {
    height: 600px;
  }
  .picto {
    width: 100%;
  }

  .env {
    font-size: 15pt;
  }
  .tooltip {
    padding: 10px;
  }

  .descargas {
    display: block;
    font-size: 10pt;
  }
  .dato {
    padding-top: 100px;
  }

  .elije {
    padding-top: 0px;
  }
  #example-3 {
    font-size: 10pt;
  }
  .checkeable img {
    width: 60px;
  }

  .bfu {
    padding-top: 20px;
    width: 13%;
    margin: 7px;
    padding-left: 3px;
    padding-right: 16px;
  }
}

@media only screen and (max-width: 825px) {
  .body-cuento {
    height: 375px;
  }
  .contenido {
    padding: 10px;
  }

  .tooltip {
    padding: 8px;
  }

  .picto {
    width: 100%;
  }

  .imapersonaje {
    width: 43px;
  }

  .des,
  .desp {
    padding: 5px;
    border: 5px solid #2ec183;
  }
  .dato {
    padding-top: 160px;
  }

  .edad,
  .name {
    font-size: 14pt;
  }

  .env {
    margin-top: 0px;
    font-size: 20px;
  }

  .lolyfin {
    width: 70%;
  }

  .elije {
    padding-top: 30px;
    font-size: 10pt;
  }

  .descargas {
    font-size: 8pt;
  }

  .bfu {
    padding-top: 20px;
    width: 16%;
    margin: 0px;
    padding-left: 5px;
    padding-right: 15px;
  }

  .env {
    padding: 5px;
    border: 7px solid #2ec183;
    border-radius: 12px;
    margin-top: 31px;
    font-size: 9px;
  }

  .checkeable img {
    width: 37px;
    border: 5px solid transparent;
  }
  #example-3 {
    font-size: 7pt;
  }
}

@media only screen and (max-width: 812px) {
  .wrapper-text {
    font-size: 7pt;
  }

  .tooltip-content {
    font-size: 7px;
  }
  .picto {
    width: 70%;
  }

  .tooltip {
    padding: 7px;
  }

  .des,
  .desp,
  .selecpersonaje {
    display: inline-block;
    box-sizing: border-box;
    color: #8d743b;
    background-color: #f4e695;
    padding: 4px;
    border: 5px solid #2ec183;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 700;
    margin-top: 3px;
    font-size: 8pt;
  }

  .book-cover-buttons {
    width: 35%;
  }

  .empezar {
    padding: 1px;
  }
}

@media only screen and (max-width: 768px) {
  .wrapper-text[data-v-4aed0a6c] {
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 10pt;
  }
  .tooltip {
    width: 15%;
    padding: 6px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    float: left;
  }

  .tooltip-content {
    padding: 5px 0px;
    font-size: 7pt;
  }
  .picto {
    width: 114%;
  }
  .portada {
    font-size: 13pt;
  }
  .book-cover-buttons {
    width: 57%;
  }

  .des,
  .desp,
  .selecpersonaje {
    display: inline-block;
    box-sizing: border-box;
    color: #8d743b;
    background-color: #f4e695;
    padding: 4px;
    border: 5px solid #2ec183;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 700;
    margin-top: 3px;
    font-size: 8pt;
  }
}

@media only screen and (max-width: 640px) {
  .portada {
    font-size: 11pt;
  }
  .wrapper-text {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 10pt;
  }
  .tooltip-content {
    font-size: 6pt;
    padding: 6px;
    margin: auto;
  }

  .tooltip {
    width: 15%;
    padding: 6px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    float: left;
  }
  .picto {
    width: 100%;
  }

  .arrow {
    width: 36px;
  }
  .fisq {
    left: 3px;
  }
  .fdere {
    right: 3px;
  }
}

@media only screen and (max-width: 568px) {
  .body-cuento {
    height: 320px;
  }

  .dato {
    padding-top: 176px;
  }
  .checkeable img {
    width: 30px;
  }
  #example-3 {
    font-size: 6pt;
  }

  .env {
    padding: 5px;
    border: 7px solid #2ec183;
    border-radius: 12px;
    margin-top: 0px;
    font-size: 9px;
  }

  .des,
  .desp,
  .selecpersonaje {
    display: inline-block;
    box-sizing: border-box;
    color: #8d743b;
    background-color: #f4e695;
    padding: 4px;
    border: 6px solid #2ec183;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 700;
    margin-top: 3px;
    font-size: 6pt;
  }
}
@media only screen and (max-width: 415px) {
  .alert {
    display: block;
  }
}

@media only screen and (max-width: 375) {
  .tooltip-content {
    font-size: 7px;
    padding: 0px 0px;
  }
  .wrapper-text {
    font-size: 9px;
  }

  .book-cover-buttons {
    width: 25%;
  }
}
</style>
