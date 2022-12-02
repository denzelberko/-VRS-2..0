<template>
    <div class='nav'>
    <c>Vacation Recommender</c>
    <a href='http://localhost:3000/#/Home/'>Home</a>
    <a href='http://localhost:3000/Recommendations/'>Recommendations</a>
    <a href='http://localhost:3000/#/searchtrips'>Search Trips</a>
    <a href='http://localhost:3000/#/adminpage'>Admin</a> 
    </div>
    </template>
    
    <script>
    export default{
        name: "Header"
    
    }
    </script>
    <style>
     .nav{
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
        padding: 20px 30px;
        text-align: center;
        text-decoration: none;
        font-size: 20px;
    }
    .nav a:hover{
        background-color:#ddd;
        color: #000160;
    }
    </style>
    