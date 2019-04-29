function result(){
    var firstDimension =parseInt(document.getElementById ('number1') .value)
    var secondDimension = parseInt (document.getElementById ('number2') .value)
    var thirdDimension = parseInt(document.getElementById ('number3').value)
    var someArray=[firstDimension,secondDimension,thirdDimension]
     if(firstDimension<=0||secondDimension<=0||thirdDimension<=0){
        document.getElementById("output").innerHTML="invalid values";
     }
        else if(firstDimension+secondDimension<=thirdDimension || secondDimension+thirdDimension<=firstDimension || firstDimension+thirdDimension<=secondDimension){
        document.getElementById("output").innerHTML="Not a triangle";
    }   
        else if(firstDimension===secondDimension&& secondDimension===thirdDimension){
                document.getElementById("output").innerHTML="Equilateral:All sides are equal";
         }
        else if(firstDimension===secondDimension||secondDimension===thirdDimension||firstDimension===thirdDimension){
            document.getElementById("output").innerHTML="Isosceles:Two sides are equal!";
        }
        else {
            document.getElementById("output").innerHTML="Scalene:No sides are equal";
        }
 

}