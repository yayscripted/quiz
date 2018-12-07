/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var id = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var totalScore = q1Result + q2Result + q3Result +q4Result;
        congrats(name, id);
    });
});

function congrats(name, id) {
    $(".result").text("Congratulations " + name + "! " + "You are " + id + "!");
}