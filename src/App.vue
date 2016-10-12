<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(270deg, #ffffff, rgba(122,184,0 0.25));
  background-size: 400% 400%;

  -webkit-animation: sea-green-soft-glowing-pulse 6s ease infinite;
  -moz-animation: sea-green-soft-glowing-pulse 6s ease infinite;
  -o-animation: sea-green-soft-glowing-pulse 6s ease infinite;
  animation: sea-green-soft-glowing-pulse 6s ease infinite;

  @-webkit-keyframes sea-green-soft-glowing-pulse {
      0%{background-position:0% 94%}
      50%{background-position:100% 7%}
      100%{background-position:0% 94%}
  }
  @-moz-keyframes sea-green-soft-glowing-pulse {
      0%{background-position:0% 94%}
      50%{background-position:100% 7%}
      100%{background-position:0% 94%}
  }
  @-o-keyframes sea-green-soft-glowing-pulse {
      0%{background-position:0% 94%}
      50%{background-position:100% 7%}
      100%{background-position:0% 94%}
  }
  @keyframes sea-green-soft-glowing-pulse {
      0%{background-position:0% 94%}
      50%{background-position:100% 7%}
      100%{background-position:0% 94%}
  }
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: rgb(122,184,0);
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
