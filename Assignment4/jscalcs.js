
///function returnText1(){
///    let input1 = document.getElementById("userInput1").value;
///
///    alert(input1)
///}



///function returnText2(){
///    let input2 = document.getElementById("userInput2").value;
///
///    alert(input2)
///}

function bmicompute()
{
    let username1 = document.getElementById("userInput1").value;
    let username2 = document.getElementById("userInput2").value;
    let userweight1 = parseInt(document.getElementById("userInput3").value);
    let userweight2 = parseInt(document.getElementById("userInput4").value);
    let userheight1 = parseInt(document.getElementById("userInput5").value);
    let userheight2 = parseInt(document.getElementById("userInput6").value);
    
    
    


    let htm1 = ( userheight1 / 100 );
    let ha = ( htm1 * htm1 );
    
    let htm2 = ( userheight2 / 100 );
    let hb = ( htm2 * htm2 );


    let bmi1 = (userweight1/ha);
    let bmi2 = (userweight2/hb);

    fbmi1 = Math.floor(bmi1);
    fbmi2 = Math.floor(bmi2);

    diff1  = bmi1 - fbmi1;
    diff2  = bmi2 - fbmi2;

    diff1 = diff1 * 10;
    diff2 = diff2 * 10;  
    
    diff1 = Math.round(diff1);
    diff2 = Math.round(diff2);

 



   if (diff1 == 10){
    
        fbmi1 += 1;
        diff1 = 0;
         }
        bmi1 = fbmi1 + "." + diff1;
       

     if (diff2 == 10){
    
        fbmi2 += 1;
        diff2 = 0;
         }
        bmi2 = fbmi2 + "." + diff2;
       
     if (bmi1 > bmi2) {
       
        alert (username1 + "'s BMI is " + bmi1 + ", " + username2 + "'s BMI is " + bmi2 + " and " + username1 + " has a higher BMI than " + username2);


     } else {
        
        alert (username1 + "'s BMI is " + bmi1 + ", " + username2 + "'s BMI is " + bmi2 + " and " + username2 + " has a higher BMI than" + username1);

     }



   /// alert (username1 + "'s BMI is " + bmi1 + "   " + username2 + "'s BMI is " + bmi2);

    ///return bmi1, bmi2;

    ///alert(bmi1)

}
    
    
 
 function fah() 
 {
    let fahrenheit = document.getElementById('fahrenheit').value;
    let c = (((parseFloat(fahrenheit) - 32) * 5) / 9).toFixed(2);
    
 

    alert (c)


}



  function cel() 
  {
    let celsius = document.getElementById('celsius').value;
     let f = ((parseFloat(celsius) * 9) / 5 + 32).toFixed(2);
    
    

     alert (f)

 }
 

  
  ///  function cal_bmi(kg, htc){


 ///       m = htc/100;
    ///    h2 = m * m;
     
       /// bmi = kg/h2;
     
     
 ///       f_bmi = Math.floor(bmi);
     
 ///       diff  = bmi - f_bmi;
  ///      diff = diff * 10;
     
  ///      diff = Math.round(diff);
  ///      if (diff == 10){
  ///         // Need to bump up the whole thing instead
  ///         f_bmi += 1;
   ///        diff = 0;
  ///      }
  ///      bmi = f_bmi + "." + diff;
     
  ///      return bmi;
 ///    }