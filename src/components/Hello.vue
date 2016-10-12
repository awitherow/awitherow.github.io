<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2> {{ subtitle }}</h2>
    <ul>
      <li v-for="link in linkList">
          <a v-bind:href="link.url">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'austin witherow',
      subtitle: 'maker',
      linkList: [
        {
          text: 'home',
          url: 'http://awitherow.github.io/'
        },
        {
          text: 'github',
          url: 'https://github.com/awitherow'
        },
        {
          text: 'linkedin',
          url: 'https://www.linkedin.com/in/austinwitherow'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: rgb(122,184,0);
  margin: 0 auto 5px auto;
}

h2 {
  margin: 0 auto 20px auto;
  font-size: 22px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  padding: 5px;
}
</style>
