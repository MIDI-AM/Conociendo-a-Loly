<template>
  <div class="home">
    <div class="alert">
      <h1>Porfavor gire la pantalla</h1>
    </div>

    <div class="pasta">
      <span v-if="init && end" @click.prevent="next" class="flecha fdere">
        <img class="arrow" src="../assets/isq.png" alt />
      </span>
      <span v-if="init" @click.prevent="prev" class="flecha fisq">
        <img class="arrow" src="../assets/der.png" alt />
      </span>

      <book class="book" :data="pages" :turnPageByHand="false" ref="book">
        <!-- Aqui tienes las flechas ???? -->

        <template slot-scope="prop">
          <!-- imagen del cuento en grande -->
          <img v-if="prop.page.cover" :src="prop.page.urlcover" />

          <Contenido
            :texto="prop.page.title"
            :pictogramas="prop.page.pictogramas"
            :audio="prop.page.urlaudio"
            :funcion="next"
            :principal="prop.page.principal"
            :home="prop.page.home"
            :sonido="prop.page.sonido"
            :preguntas="prop.page.preguntas"
            :elije="prop.page.elije"
            :datos="prop.page.datos"
            :imagenfinal="prop.page.imagenfinal"
            :creditos="prop.page.creditos"
            :cerrar="prop.page.cerrar"
            :botonesdescarga="prop.page.botonesdescarga"
            :botonconfirmar="prop.page.botonconfirmar"
            :elejido="prop.page.elejido"
          />
        </template>
      </book>
    </div>
  </div>
</template>

<script>
import Contenido from "./Contenido";
import $ from "jquery";
import book from "vue-book-component";

export default {
  name: "Cuento",
  components: { book, Contenido },

  data() {
    return {
      init: false,
      end: false,
      page: 1,
      pages: [
        {
          cover: true,
          have_title: false,
          button: false,
          urlcover: require("../assets/Portada.jpg"),
          title: "",
        },
        {
          cover: false,
          have_title: false,
          button: false,
          title: "",
          principal: true,
          opciones: false,
          datos: true,
          creditos: true,
          cerrar: true,
          elejido: false,
          sonido: true,
          urlaudio: require("../assets/sonido/BIENVENIDA.mp3"),
        },

        {
          cover: true,
          have_title: false,
          button: true,
          urlcover: require("../assets/Pag1.png"),
          title: "",
        },
        {
          cover: false,
          have_title: true,
          button: true,
          principal: false,
          home: true,
          sonido: true,
          title: "",
          urlaudio: require("../assets/sonido/audio1.mp3"),
          pictogramas: [
            { url: require("../assets/un.jpg"), name: "UN" },
            { url: require("../assets/dia.jpg"), name: "DÍA" },
            { url: require("../assets/una.jpg"), name: "UNA" },
            { url: require("../assets/linda.jpg"), name: "LINDA" },
            { url: require("../assets/lora.jpg"), name: "LORA" },
            { url: require("../assets/nacer.jpg"), name: "NACIO" },
            { url: require("../assets/de.jpg"), name: "DE" },
            { url: require("../assets/un.jpg"), name: "UN" },
            { url: require("../assets/huevo.jpg"), name: "HUEVO" },

            { url: require("../assets/sus.jpg"), name: "SUS" },
            { url: require("../assets/padres.jpg"), name: "PADRES" },
            { url: require("../assets/la.jpg"), name: "LA" },
            { url: require("../assets/llamo.jpg"), name: "LLAMARON" },
            { url: require("../assets/loly.jpg"), name: "LOLY" },
          ],
        },

        {
          cover: true,
          have_title: false,
          button: false,
          urlcover: require("../assets/Pag2.png"),
          title: "",
        },
        {
          cover: false,
          have_title: true,
          button: true,
          title: "",
          urlaudio: require("../assets/sonido/audio2.mp3"),
          principal: false,
          sonido: true,
          home: true,

          pictogramas: [
            { url: require("../assets/loly.jpg"), name: "LOLY" },
            { url: require("../assets/ir.jpg"), name: "IBA" },
            { url: require("../assets/al.jpg"), name: "AL" },
            { url: require("../assets/parque.jpg"), name: "PARQUE" },
            { url: require("../assets/conm.jpg"), name: "CON" },
            { url: require("../assets/su.jpg"), name: "SU" },
            { url: require("../assets/mama.jpg"), name: "MAMÁ" },
            { url: require("../assets/jugar.jpg"), name: "JUGABA" },
            { url: require("../assets/sola.jpg"), name: "SOLA" },
            { url: require("../assets/o.jpg"), name: "O" },
            { url: require("../assets/conm.jpg"), name: "CON" },
            { url: require("../assets/sus.jpg"), name: "SUS" },
            { url: require("../assets/amigos.jpg"), name: "AMIGOS" },
          ],
        },

        {
          cover: true,
          have_title: false,
          button: false,
          urlcover: require("../assets/Pag3.png"),
          title: "",
        },
        {
          cover: false,
          have_title: true,
          button: true,
          principal: false,
          title: "",
          urlaudio: require("../assets/sonido/audio3.mp3"),
          sonido: true,
          home: true,

          pictogramas: [
            { url: require("../assets/a.jpg"), name: "A" },
            { url: require("../assets/loly.jpg"), name: "LOLY" },
            { url: require("../assets/le.jpg"), name: "LE" },
            { url: require("../assets/gusta.jpg"), name: "GUSTABA" },
            { url: require("../assets/estudiar.jpg"), name: "ESTUDIAR" },
            { url: require("../assets/mucho.jpg"), name: "MUCHO" },
            { url: require("../assets/junto.jpg"), name: "JUNTO" },
            { url: require("../assets/a.jpg"), name: "A" },
            { url: require("../assets/sus.jpg"), name: "SUS" },
            { url: require("../assets/companieros.jpg"), name: "COMPAÑEROS" },
            { url: require("../assets/de.jpg"), name: "DE" },
            { url: require("../assets/clases.jpg"), name: "CLASE" },
          ],
        },

        {
          cover: true,
          have_title: false,
          button: false,
          urlcover: require("../assets/Pag4.png"),
          title: "",
        },
        {
          cover: false,
          have_title: true,
          button: true,
          principal: false,
          title: "",
          urlaudio: require("../assets/sonido/audio4.mp3"),
          sonido: true,
          home: true,

          pictogramas: [
            { url: require("../assets/a.jpg"), name: "A" },
            { url: require("../assets/amenudo.jpg"), name: "MENUDO" },
            { url: require("../assets/loly.jpg"), name: "LOLY" },
            { url: require("../assets/suenio.jpg"), name: "SOÑABA" },
            { url: require("../assets/conm.jpg"), name: "CON" },
            { url: require("../assets/ayudar.jpg"), name: "AYUDAR" },
            { url: require("../assets/a.jpg"), name: "A" },
            { url: require("../assets/otros.jpg"), name: "OTROS" },
            { url: require("../assets/ninios.jpg"), name: "NIÑOS" },
            { url: require("../assets/a.jpg"), name: "A" },
            { url: require("../assets/aprender.jpg"), name: "APRENDER" },
          ],
        },

        {
          cover: true,
          have_title: false,
          button: false,
          urlcover: require("../assets/Pag5.png"),
          title: "",
        },
        {
          cover: false,
          have_title: true,
          button: true,
          principal: false,
          title: "",
          urlaudio: require("../assets/sonido/audio5.mp3"),
          sonido: true,
          home: true,

          pictogramas: [
            { url: require("../assets/grande.jpg"), name: "YA" },
            { url: require("../assets/de.jpg"), name: "GRANDE" },
            { url: require("../assets/loly.jpg"), name: "LOLY" },
            { url: require("../assets/trabajar.jpg"), name: "TRABAJO " },
            { url: require("../assets/muy.jpg"), name: "MUY" },
            { url: require("../assets/duro.jpg"), name: "DURO" },
            { url: require("../assets/para.jpg"), name: "PARA" },
            { url: require("../assets/cumplir.jpg"), name: "CUMPLIR" },
            { url: require("../assets/sus.jpg"), name: "SUS" },
            { url: require("../assets/suenio.jpg"), name: "SUEÑOS" },
          ],
        },

        {
          cover: true,
          have_title: false,
          button: false,
          urlcover: require("../assets/Pag6.png"),
          title: "",
        },
        {
          cover: false,
          have_title: true,
          button: true,
          principal: false,
          home: true,
          title: "",
          urlaudio: require("../assets/sonido/audio6.mp3"),
          sonido: true,

          pictogramas: [
            { url: require("../assets/y.jpg"), name: "Y" },
            { url: require("../assets/construir.jpg"), name: "CREÓ" },
            { url: require("../assets/al.jpg"), name: "A" },
            { url: require("../assets/robot.jpg"), name: "ROBOT" },
            { url: require("../assets/loly1.0.jpg"), name: "LOLY1.0" },
            { url: require("../assets/quien.jpg"), name: "QUIEN" },
            { url: require("../assets/te.jpg"), name: "TE" },
            { url: require("../assets/ayudar.jpg"), name: "AYUDARÁ" },
            { url: require("../assets/a.jpg"), name: "A" },
            { url: require("../assets/aprender.jpg"), name: "APRENDER" },
            { url: require("../assets/jugar.jpg"), name: "JUGANDO" },
          ],
        },
        {
          cover: true,
          have_title: false,
          button: false,
          urlcover: require("../assets/Pag7.png"),
          title: "",
        },
        {
          cover: false,
          have_title: true,
          button: true,
          principal: false,
          sonido: true,
          home: true,
          title: "",
          urlaudio: require("../assets/sonido/audio7.mp3"),

          pictogramas: [
            { url: require("../assets/junto.jpg"), name: "JUNTO" },
            { url: require("../assets/a.jpg"), name: "A" },
            { url: require("../assets/loly1.0.jpg"), name: "LOLY1.0" },
            { url: require("../assets/alcanzar.jpg"), name: "ALCANZARÁS" },
            { url: require("../assets/tus.jpg"), name: "TUS" },
            { url: require("../assets/suenio.jpg"), name: "SUEÑOS" },
            { url: require("../assets/al.jpg"), name: "AL" },
            { url: require("../assets/igual.jpg"), name: "IGUAL" },
            { url: require("../assets/que.jpg"), name: "QUE" },
            { url: require("../assets/loly.jpg"), name: "ELLA" },
          ],
        },
        {
          cover: false,
          have_title: false,
          button: false,
          urlcover: "",
          title: "",
          urlaudio: require("../assets/sonido/audio8.mp3"),
          sonido: true,
          home: false,
          creditos: false,
          cerrar: false,
          imagenfinal: true,

          pictogramas: [
            { url: require("../assets/colorin.jpg"), name: "COLORIN" },
            { url: require("../assets/este.jpg"), name: "ESTE" },
            { url: require("../assets/cuento.jpg"), name: "CUENTO" },
            { url: require("../assets/a.jpg"), name: "A" },
            { url: require("../assets/fin.jpg"), name: "TERMINADO" },
          ],
        },
        {
          cover: false,
          have_title: true,
          button: false,
          urlaudio: require("../assets/sonido/opcionfin.mp3"),
          sonido: true,
          urlcover: "",
          title: "",
          principal: true, //div principal de preguntas
          preguntas: true, // seccion preguntas
          home: true, //boton home
          elije: true,
          datos: false, //datos nombre y edad
          cerrar: true,
          creditos: true,
          botonesdescarga: true,
          botonconfirmar: true,
          elejido: true,
        },
      ],
    };
  },
  methods: {
    next() {
      if (!this.$refs.book.animating) {
        this.init = true;
        this.end = true;

        if (this.$refs.book.curPage === this.pages.length / 2 - 1) {
          this.end = false;
          this.init = false;
        }
        this.$refs.book.next();
        this.$refs.book.resetAnimateClass();
      }
    },

    prev() {
      if (!this.$refs.book.animating) {
        if (this.$refs.book.curPage === 2) {
          this.init = false;
        }

        if (this.$refs.book.curPage === this.pages.length / 2) {
          this.end = true;
        }

        this.$refs.book.prev();
        this.$refs.book.resetAnimateClass();
      }
    },
  },
  mounted: function () {},
};
</script>




<style scoped>
.home {
  box-sizing: border-box;
  width: 100%;
  height: 99vh;
  transition: 0.5s;
  position: relative;
}

.book {
  /* position: relative;*/
  position: relative;
  margin: 0 auto;
  width: 95%;
  height: 93vh;
}

.bookMain {
  border: none !important;
  box-shadow: 0 0 20px #888;
}
.book img {
  width: 97%;
  height: 100%;
}

.flecha {
  font-size: 36pt;
  cursor: pointer;
  z-index: 10;
  position: absolute;
}

.fdere {
  right: 10px;
}

.fisq {
  left: 10px;
}

.fdere,
.fisq {
  top: 45%;
}

.arrow {
  width: 125px;
  height: auto;
}

.alert {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
}

.alert h1 {
  box-sizing: border-box;
}

.pasta {
  margin: 0 auto;
  width: 92% !important;
  height: 98vh;
  background-image: url(../assets/Pasta.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-top: 0.8%;
}

@media only screen and (orientation: portrait) {
  .alert {
    display: block;
  }
}
@media only screen and (orientation: landscape) {
  .alert {
    display: none;
  }
}

@media only screen and (max-width: 1024px) {
  .arrow {
    width: 90px;
    height: auto;
  }
  .fisq {
    left: -16px;
  }
  .fdere {
    right: -8px;
  }
}

@media only screen and (max-width: 825px) {
  .arrow {
    width: 90px;
    height: auto;
  }
  .fisq {
    left: -11px;
  }
  .fdere {
    right: -6px;
  }
}

@media only screen and (max-width: 375) {
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
</style>