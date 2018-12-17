/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#nameq").val();
        var id = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#nameq").val();
        var q2Result = $("#dereq").val();
        var q3Result = $("#mainq").val();
        var q4Result = $("#powerq").val();
        var q5Result = $("#genreq").val();
        
        function namae() {
            return 0;
        }
        
        namae();
        
        function dere() {
            if(q2Result === "Yandere") {
                return 0;
            } else if(q2Result === "Tsundere") {
                return 1;
            } else if(q2Result === "Kuudere") {
                return 2;
            } else if(q2Result === "Dandere") {
                return 3;
            } else {
                return 5;
            }
        } 
        
        dere();
        
        function protag() {
            if(q3Result === "Yuki") {
                return 0;
            } else if(q3Result === "Soma") {
                return 1;
            } else if(q3Result === "Yuki") {
                return 2;
            } else if(q3Result === "Yuki") {
                return 3;
            } else {
                return 5;
            }
        } 
        
        protag();
        
        function power() {
            if(q4Result === "killing") {
                return 0;
            } else if(q4Result === "cooking") {
                return 1;
            } else if(q4Result === "magic") {
                return 2;
            } else if(q4Result === "cooking") {
                return 3;
            } else {
                return 5;
            }
        } 
        
        power(); 
        
        function genre() {
            if(q5Result === "Psychological") {
                return 0;
            } else if(q5Result === "Shounen") {
                return 1;
            } else if(q5Result === "Mahou Shoujo") {
                return 2;
            } else if(q5Result === "RomCom") {
                return 3;
            } else {
                return 5;
            }
        }
        
        genre();
        
        var totalScore = namae() + dere() + protag() + power() + genre();
        
        function congrats() {
            if(totalScore >= 0) {
            name = q1Result;
            id = "Yuno";
            $(".result").text("Congratulations " + name + "! " + "You are " + id + "!");
            } else if(totalScore >= 3) {
            name = q1Result;
            id = "Erina";
            $(".result").text("Congratulations " + name + "! " + "You are " + id + "!");
            } else if(totalScore >= 6) {
            name = q1Result;
            id = "Mikasa";
            $(".result").text("Congratulations " + name + "! " + "You are " + id + "!");
            } else if(totalScore >= 9) {
            name = q1Result;
            id = "Homura";
            $(".result").text("Congratulations " + name + "! " + "You are " + id + "!");
            } 
            else {
                name = q1Result;
                id = "C.C."; 
            $(".result").text("Congratulations " + name + "! " + "You are " + id + "!");
            }
        } 
        
        congrats();
            });
        }); 