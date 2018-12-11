$(document).ready(function(){
    $(".get_result").click(function(){        
        generateGrades($(".total_points").val(), $(".num_students").val());
    });
});

function generateGrades(totalGrade, numStudents){
    maxGrade = totalGrade / numStudents;
    minGrade = maxGrade - 0.0000001;

    var grades = []
    var runningCount = 0;
    var actualTotal = 0;
    for(var i = 0; i < numStudents - 1; i++){
        grades.push(minGrade + (maxGrade - minGrade) * Math.random());
        runningCount += grades[i];
    }
    grades[numStudents - 1] = totalGrade - runningCount;

    $(".result").html("");
    for(var i = 0; i < numStudents; i++){
        $(".result").append("<p>Grade " + (i + 1) + ": " + grades[i] + "</p>");
        actualTotal += grades[i];
    }
    $(".result").append("<p>Total: " + actualTotal + "</p>");
    $(".result").show();
}