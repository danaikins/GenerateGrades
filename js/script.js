$(document).ready(function(){
    $(".get_result").click(function(){        
        generateGrades($(".total_points").val(), $(".num_students").val(), $("#grade_tolerance").val());
    });
});

function generateGrades(totalGrade, numStudents, tolerance){
    maxGrade = totalGrade / numStudents;
    minGrade = maxGrade - tolerance;

    var grades = []
    var runningCount = 0;
    var actualTotal = 0;
    for(var i = 0; i < numStudents - 1; i++){
        grades.push(minGrade + (maxGrade - minGrade) * Math.random());
        runningCount += grades[i];
    }
    grades.push(totalGrade - runningCount);
    $(".result").html("");
    for(var i = 0; i < numStudents; i++){
        $(".result").append("<p>Grade " + (i + 1) + ": " + grades[i] + "</p>");
        actualTotal += grades[i];
    }
    $(".result").append("<p>Total: " + actualTotal + "</p>");
    $(".result").show();
}