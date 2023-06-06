function sell() {
    var cel1 = document.getElementById("cel1").value;
    var cel2 = document.getElementById("cel2").value;
    var cel3 = document.getElementById("cel3").value;
    var totalall = totalall
  
    var price1 = 600000;
    var price2 = 500000;
    var price3 = 400000;
    var totalall = 0;
  
    var total1 = cel1 * price1;
    var total2 = cel2 * price2;
    var total3 = cel3 * price3;


    if(cel1>=10){
        total1 = total1*0.90
    }
    if(cel2>=10){
        total2 = total2*0.90
    }
    if(cel3>=10){
        total3 = total3*0.90
    }

    var totalall = total1 + total2 + total3
  
    document.getElementById("result1").textContent = "El total de la venta del Samsung es: $" + total1;
    document.getElementById("result2").textContent = "El total de la venta del Motorola es: $" + total2;
    document.getElementById("result3").textContent = "El total de la venta del Huawei es: $" + total3;
    document.getElementById("result4").textContent = "El total de las ventas es: $" + totalall;

 
  }