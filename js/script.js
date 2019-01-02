/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $(".nameq").val();
        var id = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $(".nameq").val();
        var q2Result = $(".dereq").val().toLowerCase();
        var q3Result = $(".mainq").val().toLowerCase();
        var q4Result = $(".powerq").val().toLowerCase();
        var q5Result = $(".genreq").val().toLowerCase();
        
        function namae() {
            return 0;
        }
        
        namae();
        
        function dere() {
            if(q2Result === "yandere") {
                return 0;
            } else if(q2Result === "dandere") {
                return 1;
            } else if(q2Result === "kuudere") {
                return 2;
            } else if(q2Result === "tsundere") {
                return 3;
            } else {
                return 5;
            }
        } 
        
        dere();
        
        function protag() {
            if(q3Result === "yuki") {
                return 0;
            } else if(q3Result === "madoka") {
                return 1;
            } else if(q3Result === "eren") {
                return 2;
            } else if(q3Result === "soma") {
                return 3;
            } else {
                return 5;
            }
        } 
        
        protag();
        
        function power() {
            if(q4Result === "killing") {
                return 0;
            } else if(q4Result === "magic") {
                return 1;
            } else if(q4Result === "fighting") {
                return 2;
            } else if(q4Result === "cooking") {
                return 3;
            } else {
                return 5;
            }
        } 
        
        power(); 
        
        function genre() {
            if(q5Result === "psychological") {
                return 0;
            } else if(q5Result === "mahou shoujo") {
                return 1;
            } else if(q5Result === "dark fantasy") {
                return 2;
            } else if(q5Result === "comedy") {
                return 3;
            } else {
                return 5;
            }
        }
        
        genre();
        
        var totalScore = namae() + dere() + protag() + power() + genre();
        
        function congrats() {
            if(totalScore <= 0) {
            name = q1Result;
            id = "Yuno";
            $(".resulttext").text("Congratulations " + name + "! " + "You are " + id + "!");
            $(".resultimg").html("<img class='yunimg' src='https://www.anime-planet.com/images/characters/yuno-gasai-10078.jpg?t=1507921014'>");
            } else if(totalScore <= 4) {
            name = q1Result;
            id = "Homura";
            $(".resulttext").text("Congratulations " + name + "! " + "You are " + id + "!");
            $(".resultimg").html("<img class='homimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUoHuo8aElX3kwI55zl2GfODPEPmqO8kWzfns9o1XDQULreckpQ'>");
            } else if(totalScore <= 8) {
            name = q1Result;
            id = "Mikasa";
            $(".resulttext").text("Congratulations " + name + "! " + "You are " + id + "!");
            $(".resultimg").html("<img class='mikimg' src='https://cdn.myanimelist.net/images/characters/9/215563.jpg'>");
            } else if(totalScore <= 12) {
            name = q1Result;
            id = "Erina";
            $(".resulttext").text("Congratulations " + name + "! " + "You are " + id + "!");
            $(".resultimg").html("<img class='eriimg' src='https://i.ytimg.com/vi/qLUS0zspc5c/maxresdefault.jpg'>");
            } 
            else {
                name = q1Result;
                id = "Grell"; 
            $(".resulttext").text("Congratulations " + name + "! " + "You are " + id + "!");
            $(".resultimg").html("<img class='greimg' src='https://vignette.wikia.nocookie.net/kuroshitsuji/images/b/b7/Ep44_Grell_Sutcliff.png/revision/latest?cb=20140830030502'>");
            }
        } 
        
        congrats();
            });
        }); 
        