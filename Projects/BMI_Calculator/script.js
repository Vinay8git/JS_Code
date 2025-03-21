const but = document.getElementById('calculate');

but.addEventListener("click", function() {
    let wt = parseFloat(document.getElementById("weight").value);
    let ht = parseFloat(document.getElementById("height").value);
    let bmi = wt / (ht * ht);
    
    const res= document.getElementById("result");
    res.innerText=`BMI: ${bmi.toFixed(2)}`;

});