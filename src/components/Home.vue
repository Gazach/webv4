<template>
    <div class="Homes">
      <div>
        <img src="../assets/Icon.jpg" alt="" srcset="">
        <h1 class="title">Hello! My name is {{ names }}</h1>
        <p>I am a programmer 💻 who is still a beginner so far<br>
          I was born in Indonesia and have Indonesian citizenship <br>too, I live in Bekasi and
          I study at Teratai Putih Global 4 <br>Vocational School with a major in RPL

          <br>
          <br>
          My dream is to become a game developer 🎮 and my highest dream <br>
          is that I want to create a game studio that has quality games
        </p>
      </div>
    </div>



    
    <div class="skill">
        <h1>My programing skill</h1>

        <div>
          <label for="">Web programing</label>
          <div>
            <progress id="file" value="64" max="100"></progress>
          <button @click="toggledetail1">
            <span>Detail</span>
          </button>
          <div class="Details" v-if="detail1" >
              <p>I Do : {{ d1 }},{{ d2 }},{{ d3 }},{{ d4 }},{{ d5 }}</p>
            </div>
          </div>
        </div>
        <div>
          <label for="">Desktop programing</label>
          <div>      
          <progress id="file" value="35" max="100"></progress>
          <button @click="toggledetail2">
            <span>Detail</span>
          </button></div>
          <div class="Details" v-if="detail2" >
              <p>I Do : {{ da1 }},{{ da2 }},{{ da3 }}</p>
            </div>
        </div>
        <div>
          <label for="">Game programing</label>
          <div>      
          <progress id="file" value="15" max="100"></progress>
          <button @click="toggledetail3">
            <span>Detail</span>
          </button></div>
          <div class="Details" v-if="detail3" >
              <p>I Do : {{ da1 }}</p>
            </div>
        </div>

        <br>
        <br>

        <h1>Hobby Skill</h1>
        <div>
          <label for="">Drawing</label>
          <div>      
          <progress id="file" value="30" max="100"></progress>
</div>
        </div>
        <div>
          <label for="">3D Modelling</label>
          <div>      
          <progress id="file" value="6" max="100"></progress>
 </div>
        </div>
      </div>



      <footer class="more">
          <h2>See my creation and my social media by click this button!</h2>
        <br>
          <router-link :to="{ name: 'creation' }" class="LOLink">Creation</router-link>
          <router-link :to="{ name: 'social' }" class="LOLink">Social</router-link>
        <br>
        <br>
        <br>
        <br>
          <h6>web v4</h6>
      </footer>
  </template>
<script>
export default {
  data() {
    return {
      names: 'Gazach',
      detail1: false,
      d1: 'HTML',
      d2: 'CSS',
      d3: 'JavaScript',
      d4: 'PHP',
      d5: 'Vue.js',
      toggledetail1(){
        this.detail1 = !this.detail1 
      },

      detail2: false,
      da1: 'JAVA',
      da2: 'C#',
      da3: 'Visual Basic',
      toggledetail2(){
        this.detail2 = !this.detail2 
      },

      detail3: false,
      da1: 'Unity C#',
      toggledetail3(){
        this.detail3 = !this.detail3 
      }
    }
  }
}

</script>
<style>
.Homes{
    margin: 0 !important;
  padding: 0;
    background-image: url("../assets/wp7133293.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}
.Homes img {
  height: 200px;
  margin-top: 50px; 
}
.title{
  font-weight: bold;

}
.Homes > div {
  background-color: rgba(0, 0, 0, 0.265);
}
.Homes p {
  font-size: larger;
  
}
p {
  padding-bottom: 50px;
}
progress {
  width: 400px;
  margin-left: 10px;
}
button {
  width: 100px;
  height: 30px;
  margin-left: 20px;
  border-radius: 20px;
  background: white;
  border: none;
}
button:hover {
  background-color: #7184ca;
  color: white;
}
.skill div {
  margin-top: 15px;
}
.skill div label {
  margin: 15px;
}
.Details{
font-size: large;
font-weight: bold;
}
footer{
  background-color: rgba(0, 0, 0, 0.616);
  margin: 0;
  padding: 0;
  margin-top: 80px;
  height: 40vh;
}
h2 {
  padding: 20px;
}
.LOLink {
  font-weight: bold;
  color: white;
  margin-top: 50px;
  margin-right: 25px;
  margin-bottom: 25px;
  padding: 10px;
  border-radius: 15px;
  text-decoration: none;
  font-size: x-large;
  background-color: #5b6381;
}
.LOLink:hover {
  background-color: #7184ca;
  color: white;
}
</style>