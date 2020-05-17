var size = 8
var fill = "#";
var spacing = " ";
var complete;

for(var line=0; line<size; line++){
    complete='';
        for(var column=0; column<size; column++){
            //Se par iniciar com #
            if(line%2==0){
                complete += fill;
                complete += spacing;
            }
            //Se ímpar iniciar com ' '
            else {
                complete += spacing;
                complete += fill;
            }
        }
        console.log(complete)
}