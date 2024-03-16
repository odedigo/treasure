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
            riddles = data;
            getVector("blue",1)
        }).fail(function(){
            console.log("Failed to load data from JSON.");
        });
    }

    function getVector(team, index) {
        console.log(riddles[team])
    }
});
