$(document).ready(function() {
    let riddles = {}

    loadRiddle();

    $("#check_blue").on("submit", function( event ) {
        
        let index = $('#riddle_num_b').find(":selected").val();
        let size = $("#vector_size_b").val()
        let angle = $("#vector_angle_b").val()
        if (!isValidParams(size, angle)) {
            $("#response_blue").html("יש להזין את גודל וכיוון הוקטור")
            return event.preventDefault();
        }
        let vector = getVector("blue",index)
        if (vector.vecSize == size && vector.vecAngle == angle)
            $("#response_blue").html("הוקטור נכון! המשיכו לנקודה הבאה")
        else
            $("#response_blue").html("הוקטור לא נכון - בידקו שוב את הפתרון שלכם")
        return event.preventDefault();
    }); 
    
    $("#check_green").on("submit", function( event ) {
        let index = $('#riddle_num_g').find(":selected").val();
        let size = $("#vector_size_g").val()
        let angle = $("#vector_angle_g").val()
        if (!isValidParams(size, angle)) {
            $("#response_green").html("יש להזין את גודל וכיוון הוקטור")
            return event.preventDefault();
        }
        let vector = getVector("green",index)
        if (vector.vecSize == size && vector.vecAngle == angle)
            $("#response_green").html("הוקטור נכון! המשיכו לנקודה הבאה")
        else
            $("#response_green").html("הוקטור לא נכון - בידקו שוב את הפתרון שלכם")
        return event.preventDefault();
    }); 

    $("#check_red").on("submit", function( event ) {
        let index = $('#riddle_num_r').find(":selected").val();
        let size = $("#vector_size_r").val()
        let angle = $("#vector_angle_r").val()
        if (!isValidParams(size, angle)) {
            $("#response_red").html("יש להזין את גודל וכיוון הוקטור")
            return event.preventDefault();
        }
        let vector = getVector("red",index)
        if (vector.vecSize == size && vector.vecAngle == angle)
            $("#response_red").html("הוקטור נכון! המשיכו לנקודה הבאה")
        else
            $("#response_red").html("הוקטור לא נכון - בידקו שוב את הפתרון שלכם")
        return event.preventDefault();    }); 

    function loadRiddle() {
        $.getJSON("https://odedigo.github.io/treasure/assets/data/vectors.json", function(data){
            riddles = data;
        }).fail(function(){
            console.log("Failed to load data from JSON.");
        });
    }

    function getVector(team, index) {
        let resp = {}
        riddles[team].riddles.forEach(element => {
            if (element.index == index) {
                resp = {vecSize: element.vecSize, vecAngle: element.vecAngle}
            }
        });
        return resp;
    }

    function isValidParams(size, angle) {
        if (size == "" || angle == "" || size <= 0 || angle > 360 || angle < 0)
            return false;
        return true;
    }

    
});
