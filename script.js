function calc() {
    if (amount=="" || fullName.value==""||phoneNumber.value== ""||product1.value == "" || product2.value=="" || product3.value== "" || product4.value=="" || productPrice1.value=="" || productPrice2.value=="" || productPrice3.value=="" ||productPrice4.value== ""){
        err.style.display ="block"
    }else{
        err.style.display ="none"
        intro.innerHTML = "Hi " + fullName.value + ", Welcome to Favson budgetting calculator, it's our outermost pleasure to have you here, these are your inputs check them out"
        intro1.innerHTML= product1.value + " = " + productPrice1.value
        intro2.innerHTML = product2.value + " = " + productPrice2.value
        intro3.innerHTML = product3.value + " = " + productPrice3.value
        intro4.innerHTML = product4.value + " = " + productPrice4.value
        note.innerHTML = "To proceed, click the button below"
        procced.style.display= "block"
    }
}
function preceed() {
    var confirmation = confirm("Do you want to proceed")
    if (confirmation == true) {
        err.style.display ="none"
        intro.innerHTML = ""
        intro1.innerHTML = ""
        intro2.innerHTML =""
        intro3.innerHTML =""
        intro4.innerHTML =""
        note.innerHTML = ""
        procced.style.display= "none"
        var sum =Number(productPrice1.value) + Number(productPrice2.value) + Number(productPrice3.value) + Number(productPrice4.value)
        if(sum > amount.value){
            result.innerHTML = "Dear " + fullName.value + ", Sorry you won't be able to move on with your budgetting as you're spending more than the price you intend to spend"
        }else{
            result.innerHTML = "Dear " + fullName.value + ", You've successfully budgetted your money, the total money you're spending is " + sum + ", you can proceed in making your payment"
        }
        document.getElementById("amount").value=""
        document.getElementById("fullName").value=""
        document.getElementById("phoneNumber").value=""
        document.getElementById("product1").value=""
        document.getElementById("product2").value=""
        document.getElementById("product3").value=""
        document.getElementById("product4").value=""
        document.getElementById("productPrice1").value=""
        document.getElementById("productPrice2").value=""
        document.getElementById("productPrice3").value=""
        document.getElementById("productPrice4").value=""


    }

}