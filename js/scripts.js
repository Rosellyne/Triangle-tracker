function myFunction:(){
    var firstDimension =parseInt(document.getElementById (number))
    var secondDimension = parseInt (document.getElementById (number))
    var thirdDimension = parseInt(document.getElementById (number))
    var answer = document.getElementById ('rose')

    if(firstDimension+secondDimension>thirdDimension&&secondDimension+thirdDimension>firstDimension&&firstDimension+thirdDimension>secondDimension){
        if(firstDimension===secondDimension&& secondDimension===thirdDimension&& firstDimension===thirdDimension){
         document.getElementById("rose").innerHTML="Equilateral:All sides are equal";
         }
        else if(firstDimension===secondDimension||secondDimension===thirdDimension||firstDimension===thirdDimension){
            document.getElementById("rose").innerHTML="Isosceles:Two sides are equal!";
        }
        else if(firstDimension!==secondDimension||secondDimension!==thirdDimension||firstDimension!==thirdDimension){
            document.getElementById("rose").innerHTML="Scalene:No sides are equal";
        }
    }
    else{
        answer ="Not a triangle";
    }
function reset(){
    var firstDimension =parseInt(document.getElementById ())
    var secondDimension = parseInt (document.getElementById)
    var thirdDimension = parseInt(document.getElementById)
    var answer = document.getElementById ('rose');
}
}

    