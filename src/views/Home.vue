<template>
  <div class="home">
    <Cuento />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Cuento from "@/components/Cuento.vue";

export default {
  name: "Home",
  components: {
    Cuento,
  },
};
</script>
