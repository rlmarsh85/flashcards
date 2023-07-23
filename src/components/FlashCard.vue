<template>
    <div id ="myPage">
        <div id="card">
            <p>{{ germanText }}</p>
            <p v-show="showPreposition">{{ preposition }}</p>
            <p v-show="showEnglishText">{{ englishText }}</p>
        </div>
        <div style="clear:both"></div>
        <div class = "all-buttons">
            <button v-on:click="pullCard()">Pull a New Card</button>
            <button v-on:click="exposePreposition()">Show Preposition</button>
            <button v-on:click="exposeEnglishText()">Show English</button>
        </div>
    </div>
</template>
  
<script>
  import axios from 'axios'
  export default {
    props: {
    }, 
    beforeMount() {
      console.log("Calling beforeMount")
      this.fetchCards()
    },    
    data() {
      return {
        germanText: '',
        preposition: '',
        englishText: '',
        showPreposition: false,
        showEnglishText: false,
        wordBank: []
      }
    },
    methods: {
      async fetchCards(){

        this.response = await axios.get("http://localhost:3000/words"); 
        this.wordBank = this.response.data

      },
      pullCard() {

        let cardNum = Math.floor(Math.random() * (this.wordBank.length ))
       
        this.germanText = this.wordBank[cardNum]['german']
        this.preposition = this.wordBank[cardNum]['preposition']
        this.englishText = this.wordBank[cardNum]['english']


        this.showEnglishText = false
        this.showPreposition = false
      },
      exposePreposition() {
        this.showPreposition = true
      },
      exposeEnglishText() {
        this.showEnglishText = true
      }
    }
  }
  </script>
  
  <style>

  #myPage {
    width:100%;
    margin-left: auto;
    margin-right: auto;
  }
  #card {
    border: dashed black 1px;
    display: block;
    width: 500px;
    margin: 10px;
    padding: 10px;
    background-color: #CFFFFF;
    text-align: center;
    margin-left: auto;
    margin-right: auto;    
  }  

  #all-buttons{
    margin-left: auto;
    margin-right: auto;    
  }

  #app > div > div > button {
    border: solid black 1px;
    display: block;
    float: left;
    width: 120px;
    margin: 10px;
    padding: 10px;
    background-color: #AAAAAA;
  }
  </style>