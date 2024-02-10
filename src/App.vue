<template>
  <link rel="icon" href="<%=../assets%>Icon.png">
  <nav>
    <img src="../src/assets/Icon.jpg" alt="" srcset="">
    <router-link to="/">Home</router-link> 
    <router-link :to="{ name: 'creation' }">Creation</router-link>
    <router-link :to="{ name: 'social' }">Social</router-link>
  </nav>
  <router-view/>
</template>

<style>
body{
  margin: 0 !important;
  padding: 0;
  background-color: rgb(55, 55, 55);
}
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;


}
img {
  height: 50px;
  margin: 20px;
  border-radius: 50%;
}
nav {
  background-color: #222222;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0%;

}
nav a {
  font-weight: bold;
  color: white;
  margin-top: 25px;
  margin-right: 25px;
  margin-bottom: 25px;
  padding: 10px;
  border-radius: 15px;
  text-decoration: none;
  font-size: large;

}
nav :hover {
  background-color: rgba(0, 0, 0, 0.616);
}
nav a:hover {
  color: white; 
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #B2F7FF;
  background-color: #425495;
}
</style>
