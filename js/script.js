/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var id = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#nameq").val();
        var q2Result = $("#dereq").val();
        var q3Result = $("#mainq").val();
        var q4Result = $("#powerq").val();
        var q5Result = $("#genreq").val();
        
        function name() {
            if(q1Result === "Shiro") {
                return 1;
            } else {
                return 0;
            }
        }
        
        function dere() {
            if(q2Result === "Yandere") {
                return 0;
            } else if(q2Result === "Tsundere") {
                return 1;
            }
        } 
        
        function protag() {
            if(q3Result === "Yuki") {
                return 0;
            } 
        } 
        
        function power() {
            if(q4Result === "killing") {
                return 0;
            }
        } 
        
        function genre() {
            if(q5Result === "Psychological") {
                return 0;
            }
        }
        
        var totalScore = name() + dere() + protag() + power() + genre();
        
        function congrats() {
            if(totalScore >= 0) {
            var name = $("#question1").val();
            var id = "Yuno";
            $(".result").text("Congratulations " + name + "! " + "You are " + id + "!");
            } else {
                name = "Ok";
                id = "cookie"; 
                $(".result").text("Congratulations " + name + "! " + "You are " + id + "!");
            }
            $(".result").text("Congratulations " + name + "! " + "You are " + id + "!");
        }
            });
        });

