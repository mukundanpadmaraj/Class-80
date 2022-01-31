var student_array=[]
function submit(){
    var display=[]
    for(var j=1; j<=4; j++){
        var student_name=document.getElementById("name_of_the_student_"+j).value
        student_array.push(student_name)
    }
    console.log(student_array)
    var length=student_array.length
    for(var k=0; k<length; k++){
        display.push("<h4>Name- "+student_array[k]+"</h4>")
    }
    console.log(display)
    document.getElementById("display_name_with_commas").innerHTML=display
    var remove_commas=display.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=remove_commas

    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    student_array.sort()
    var display_sorted_array=[]
    var length=student_array.length
    for(var k=0; k<length; k++){
        display_sorted_array.push("<h4>Name- "+student_array[k]+"</h4>")
    }
    console.log(display_sorted_array)
    var remove_commas=display_sorted_array.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=remove_commas

}