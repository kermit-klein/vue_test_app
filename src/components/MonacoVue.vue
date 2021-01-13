<template>
  <div>
    <vue-resizable :width="2000" :height="45">
      <div class="navbar">
        <button v-on:click="funcPrimary(initPrimary)" id="primary">
          <font-awesome-icon icon="file" /> Editor
        </button>
        <button v-on:click="funcSecondary(initSecondary)" id="secondary">
          <font-awesome-icon icon="file-code" /> Tutorial
        </button>
      </div>
    </vue-resizable>
    <div class="wrapper">
      <vue-resizable :class="['box', toggleXpri]" :width="800" :height="500">
        <div id="pri-con" :class="['pri-con', togglePrimary]">
          <button
            v-on:click="closePrimary(initPrimary)"
            id="close-pri"
            :class="['close-pri', toggleXpri]"
          >
            <font-awesome-icon icon="times" />
          </button>
        </div>
      </vue-resizable>
      <div class="handler"></div>
      <vue-resizable :class="['box', toggleXsec]" :width="300" :height="500">
        <div id="sec-con" :class="['sec-con', toggleSecondary]">
          <button
            v-on:click="closeSecondary(initSecondary)"
            id="close-sec"
            :class="['close-sec', toggleXsec]"
          >
            <font-awesome-icon icon="times" />
          </button>
        </div>
      </vue-resizable>
    </div>
  </div>
</template>

<script>
import buildPrimary from "../modules/buildPrimary.js";
import buildSecondary from "../modules/buildSecondary.js";
import VueResizable from "vue-resizable";

export default {
  name: "MonacoVue",
  components: { VueResizable },
  methods: {
    funcPrimary: function(togg) {
      if (togg == false) {
        buildPrimary();
        this.initPrimary = true;
        this.toggleXpri = "";
      } else {
        this.togglePrimary = "";
        this.toggleXpri = "";
      }
    },
    funcSecondary: function(togg) {
      if (togg == false) {
        buildSecondary();
        this.initSecondary = true;
        this.toggleXsec = "";
      } else {
        this.toggleSecondary = "";
        this.toggleXsec = "";
      }
    },
    closePrimary: function(togg) {
      if (togg == true) {
        this.togglePrimary = "hidden";
        this.toggleXpri = "hidden";
      }
    },
    closeSecondary: function(togg) {
      if (togg == true) {
        this.toggleSecondary = "hidden";
        this.toggleXsec = "hidden";
      }
    },
  },
  data() {
    return {
      initPrimary: false,
      initSecondary: false,
      toggleXsec: "hidden",
      toggleXpri: "hidden",
      togglePrimary: "",
      toggleSecondary: "",
    };
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 100%;
  background-color: #bbb8ae;
  text-align: left;
  overflow: none;
}

.navbar > button {
  color: black;
  font: 800;
  font-size: 1.5em;
  padding: 0 20px 0 10px;
  font-family: "Lucida Console", "Courier New", monospace;
}

.pri-con {
  width: 100%;
  height: 100%;
  overflow: none;
}
.sec-con {
  width: 100%;
  height: 100%;
  margin-left: 5px;
  overflow: none;
}

.close-pri {
  position: absolute;
  top: 0px;
  right: 10px;
  color: black;
  z-index: 1;
  font-size: 20px;
  opacity: 0.5;
}
.close-sec {
  position: absolute;
  top: 0px;
  right: 10px;
  color: black;
  z-index: 1;
  font-size: 20px;
  opacity: 0.5;
}
.close-sec:hover,
.close-pri:hover {
  opacity: 1;
}

.box {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  margin-top: 5px;
  padding: 20px;
  font-size: 150%;
  box-sizing: border-box;
  flex: 1 1 auto;
}

.hidden {
  display: none;
}

.wrapper {
  background-color: #fff;
  color: #444;
  display: flex;
}

.handler {
  width: 20px;
  padding: 0;
  cursor: ew-resize;
  flex: 0 0 auto;
}

.handler::before {
  content: "";
  display: block;
  width: 3px;
  height: 100%;
  background: rgb(212, 159, 159);
  margin: 0 auto;
}
</style>
