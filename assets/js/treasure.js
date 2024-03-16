$(document).ready(function() {
    let riddles = {}

    loadRiddle();

    $("#submit_blue").click(function(){
        $("#response_blue").html("הוקטור נכון! המשיכו לנקודה הבאה")
        console.log("right")
        return false;
    }); 
    
    function loadRiddle() {
        $.getJSON("assets/data/vectors.json", function(data){
            console.log(data.version);
        }).fail(function(){
            console.log("An error has occurred.");
        });
    }

    function getVector(team, index) {

    }
});
