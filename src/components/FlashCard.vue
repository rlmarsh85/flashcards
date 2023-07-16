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
  export default {
    props: {
    }, 
    data() {
      return {
        germanText: '',
        preposition: '',
        englishText: '',
        showPreposition: false,
        showEnglishText: false
      }
    },
    methods: {
      pullCard() {
        let wordBank = [
            ['sich ärgert', 'über', 'anger yourself'],
            ['haben Angst', 'vor etw.', 'be afraid of something'],
            ['arbeiten', 'bei', 'work for a company']
        ]
        let cardNum = Math.floor(Math.random() * (wordBank.length ))
        this.germanText = wordBank[cardNum][0]
        this.preposition = wordBank[cardNum][1]
        this.englishText = wordBank[cardNum][2]

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