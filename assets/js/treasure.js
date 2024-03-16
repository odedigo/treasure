$(document).ready(function() {
    let riddles = {}

    loadRiddle();

    $("#submit_blue").click(function(){
        $("#response_blue").html("הוקטור נכון! המשיכו לנקודה הבאה")
        console.log("right")
        return false;
    }); 
    
    function loadRiddle() {
        $.getJSON("https://odedigo.github.io/treasure/assets/data/vectors.json", function(data){
            console.log(data);
        }).fail(function(){
            console.log("An error has occurred.");
        });
    }

    function getVector(team, index) {

    }
});
