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
            $(".result").text("Congratulations " + name + "! " + "You are " + id + "!");
            } else if(totalScore <= 4) {
            name = q1Result;
            id = "Homura";
            $(".result").text("Congratulations " + name + "! " + "You are " + id + "!");
            } else if(totalScore <= 8) {
            name = q1Result;
            id = "Mikasa";
            $(".result").text("Congratulations " + name + "! " + "You are " + id + "!");
            } else if(totalScore <= 12) {
            name = q1Result;
            id = "Erina";
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
        