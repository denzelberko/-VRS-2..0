<template>
  <div>
 
 

  
  <b-container>
    <br />
    <router-view/>
    </b-container>

  </div>
  
  
  </template>
  
  <script>
  
  export default{
      name: "Header"
  
  }
  </script>
  <style>
   .nav a{
      background-color: #0D0047;
      overflow: hidden;
   }
   .nav c{
      background-color: #0D0047;
      overflow: hidden;
   }
   .nav c {
      color: #f2f2f2f2;
      padding: 20px 30px;
      text-align: center;
      text-decoration: none;
      font-size: 20px;
      font-weight: bold;
  }
   .nav a {
      color: #f2f2f2f2;
      padding: 20px 109.1px;
      text-align: center;
      text-decoration: none;
      font-size: 20px;
  }
  .nav a:hover{
      background-color:#ddd;
      color: #000160;
  }
  </style>
  

