const upNumElements = document.querySelectorAll("upNum");
const container = document.querySelector(".container");
const allWhite = document.querySelector(".national");
const Arcade = document.querySelector(".form-cont1");
const Advanced = document.querySelector(".form-cont2");
const Pro = document.querySelector(".form-cont3");
const onlineSCont = document.querySelector(".onlineS-cont");
const largerSCont = document.querySelector(".largerS-cont");
const customizablePCont = document.querySelector(".customizableP-cont");
const Form1 = document.querySelector(".first-form");
const Form2 = document.querySelector(".second-form");
const Form3 = document.querySelector(".Third-form");
const Form4 = document.querySelector(".Fourth-form");
const Form5 = document.querySelector(".fifth-form");
const nextPageBtn1 = document.getElementById("next-cont1");
const nextbtnCont2 = document.getElementById("next-cont2");
const nextbtnCont3 = document.getElementById("next-cont3");
const nextbtnCont4 = document.getElementById("next-cont4");
const nextPageBtn2 = document.getElementById("nextPage2");
const nextPageBtn3 = document.getElementById("nextPage3");
const nextPageBtn4 = document.getElementById("nextPage4");
const goBack1 = document.getElementById("goBack1");
const goBack2 = document.getElementById("goBack2");
const goBack3 = document.getElementById("goBack3");
const monthlySele = document.querySelector(".monthly");
const monthlyColor = document.querySelector(".color1");
const yearlyColor = document.querySelector(".color2");
const monthsFree1 = document.getElementById("yearlySele1");
const monthsFree2 = document.getElementById("yearlySele2");
const monthsFree3 = document.getElementById("yearlySele3");
const yearlySele = document.querySelector(".yearly");
const SeleContainer = document.querySelectorAll(".Sele-cont");
const arcadeAmount = document.getElementById("Form2Amount1");
const advancedAmount = document.getElementById("Form2Amount2");
const proAmount = document.getElementById("Form2Amount3");
const Amount1 = document.getElementById("payAmount1");
const Amount2 = document.getElementById("payAmount2");
const Amount3 = document.getElementById("payAmount3");
const pay1 = document.getElementById("payA1");
const pay2 = document.getElementById("payA2");
const pay3 = document.getElementById("payA3");
const ArcName = document.getElementById("Arc-name");
const totalName = document.getElementById("total-name");
const payT = document.getElementById("payT");
const Change = document.getElementById("changeLink");
const goToform1 = document.querySelector(".onenny");
const goToform2 = document.querySelector(".twonny");
const goToform3 = document.querySelector(".threenny");
const goToform4 = document.querySelector(".fournny");
// Form Validation stuff's
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");
const InputError1 = document.getElementById("err1");
const InputError2 = document.getElementById("err2");
const InputError3 = document.getElementById("err3");

console.log(Arcade);
// console.log(Amount1.textContent = 'abc');
window.addEventListener("DOMContentLoaded", function () {
  const mediaQuery = window.matchMedia("(min-width: 376px)");
  // const mobbquery = window.matchMedia("(min-width: 376px)");
  if (mediaQuery.matches) {
    if ((Form1.style.display = "block")) {
    }
  } else if ((Form1.style.display = "block")) {
  }

  for (let i = 0; i < upNumElements.length; i++) {
    upNumElements[i].addEventListener("mouseover", function () {
      this.style.color = "var(--primary-color1)";
      this.style.backgroundColor = "var(--primary-color4)";
    });

    upNumElements[i].addEventListener("mouseout", function () {
      this.style.color = "";
      this.style.backgroundColor = "";
    });
  }

  const FormValidation = (event) => {
    event.preventDefault();
  
    // Name validation
    const nameRegex = /[A-Za-z]+$/;
    if (nameInput.value.trim() === "") {
      nameInput.style.border = "var(--primary-color5) 1px solid";
      InputError1.style.display = "block";
      return false;
    } if(!nameRegex.test(nameInput.value.trim())){
  nameInput.style.border = "var(--primary-color5) 1px solid";
          InputError1.textContent = "Has invalid characters";
             InputError1.style.display = "block";
             return false;
    }
    else {
      nameInput.style.border = "var(--neutral-color2) 1px solid";
      InputError1.style.display = "none";
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      emailInput.style.border = "var(--primary-color5) 1px solid";
      InputError2.style.display = "block";
      return false;
    } 
    else {
      emailInput.style.border = "var(--neutral-color2) 1px solid";
      InputError2.style.display = "none";
    }
    if( !emailRegex.test(emailInput.value.trim())){
      emailInput.style.border = "var(--primary-color5) 1px solid";
          InputError2.textContent = "invalid email Address";
             InputError2.style.display = "block";
             return false;
   } else {
    emailInput.style.border = "var(--neutral-color2) 1px solid";
    InputError2.style.display = "none";
  }
  
    // Number validation
    const numberRegex = /^\d+$/;
    if (numberInput.value.trim() === "") {
      numberInput.style.border = "var(--primary-color5) 1px solid";
      InputError3.style.display = "block";
      return false;
    }if(!numberRegex.test(numberInput.value.trim())){
          numberInput.style.border = "var(--primary-color5) 1px solid";
                InputError3.textContent = "invalid phone Number";
      InputError3.style.display = "block";
      return false;
    }
     else {
      numberInput.style.border = "var(--neutral-color2) 1px solid";
      InputError3.style.display = "none";
    }
    if(numberInput.value.trim().length < 11){
      numberInput.style.border = "var(--primary-color5) 1px solid";
            InputError3.textContent = "incomplete phone No.";
  InputError3.style.display = "block";
  return false;
}
 else {
  numberInput.style.border = "var(--neutral-color2) 1px solid";
  InputError3.style.display = "none";
}
  
    ShowTwo(event);
    return true;
  };
  emailInput.addEventListener("focus", function() {
    nameInput.style.border = "var(--neutral-color2) 1px solid"
    InputError1.style.display="none"
    numberInput.style.border = "var(--neutral-color2) 1px solid"
      InputError3.style.display="none"
  });
  numberInput.addEventListener("focus", function() {
    emailInput.style.border = "var(--neutral-color2) 1px solid"
    InputError2.style.display="none"
    nameInput.style.border = "var(--neutral-color2) 1px solid"
    InputError1.style.display="none"
  });

  Arcade.addEventListener("mouseover", function () {
    this.style.backgroundColor = "var(--neutral-color3)";
    this.style.border = "var(--primary-color1) 1px solid";
    this.style.borderRadius = "7px";
  });
  Arcade.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
    this.style.border = "";
    this.style.borderRadius = "";
  });
  Advanced.addEventListener("mouseover", function () {
    this.style.backgroundColor = "var(--neutral-color3)";
    this.style.border = "var(--primary-color1) 1px solid";
    this.style.borderRadius = "7px";
  });
  Advanced.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
    this.style.border = "";
    this.style.borderRadius = "";
  });

  Pro.addEventListener("mouseover", function () {
    this.style.backgroundColor = "var(--neutral-color3)";
    this.style.border = "var(--primary-color1) 1px solid";
    this.style.borderRadius = "7px";
  });
  Pro.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
    this.style.border = "";
    this.style.borderRadius = "";
  });


  onlineSCont.addEventListener("mouseover", function () {
    this.style.border = "var(--primary-color2) 1px solid";
    this.style.backgroundColor = "var(--neutral-color3)";
  });
  onlineSCont.addEventListener("mouseout", function () {
    this.style.border = "";
    this.style.backgroundColor = "";
  });
  advancedAmount.addEventListener("mouseover", function () {
    this.style.border = "var(--primary-color2) 1px solid";
    this.style.backgroundColor = "var(--neutral-color3)";
  });
  advancedAmount.addEventListener("mouseout", function () {
    this.style.border = "";
    this.style.backgroundColor = "";
  });
  proAmount.addEventListener("mouseover", function () {
    this.style.border = "var(--primary-color2) 1px solid";
    this.style.backgroundColor = "var(--neutral-color3)";
  });
  proAmount.addEventListener("mouseout", function () {
    this.style.border = "";
    this.style.backgroundColor = "";
  });

  if (Form1.style.display === "block") {
    container.style.paddingTop = "24em";
  } else if (Form1.style.display === "none") {
    container.style.paddingTop = "33em";
  }

  function ShowTwo(event) {
    event.preventDefault();
    Form1.style.display = "none";
    Form2.style.display = "block";
    nextPageBtn1.style.display = "none";
    nextbtnCont2.style.display = "block";
    container.style.paddingTop = "33em";
    Form4.style.display = "none";
    Form3.style.display = "none";
    for (let i = 0; i < SeleContainer.length; i++) {
      SeleContainer[i].style.display = "block";
    }
  }
  goToform2.addEventListener("click", (e) => {
    e.preventDefault();
    if(!FormValidation(event)){
      backToone(e)
    }else if (FormValidation(event)) {
      ShowTwo(event);
      
    Form1.style.display = "none"
    nextPageBtn1.style.display = "none"
    Form3.style.display = "none"
    nextbtnCont3.style.display = "none"
    // nextPageBtn3.style.display = "none"
    Form4.style.display = "none"
    nextbtnCont4.style.display = "none"
    Form5.style.display = "none"
    }
   
  });
  nextPageBtn1.addEventListener("click", (event) => {
    event.preventDefault();
    FormValidation(event);
  });


  Change.addEventListener("click", (event) => {
    ShowTwo(event);
    nextbtnCont4.style.display = "none"
  });
console.log(nextbtnCont4);
  function backToone(e){
e.preventDefault();
nextbtnCont2.style.display = "none";
container.style.paddingTop = "24em";
Form1.style.display = "block";
Form2.style.top = "-100%";
Form2.style.display = "none";
nextPageBtn1.style.display = "block";
nextbtnCont4.style.display = "none";

for (let i = 0; i < SeleContainer.length; i++) {
  SeleContainer[i].style.display = "none";
}
  }
  goBack1.addEventListener("click", backToone);
  goToform1.addEventListener("click", (e) => {
    e.preventDefault();
    if(!FormValidation(event)){
      backToone(e)
    }else if (FormValidation(event)) {
      backToone(e);
      Form2.style.display = "none"
    nextbtnCont2.style.display ="none"
    Form3.style.display = "none"
    nextbtnCont3.style.display = "none"
    Form4.style.display = "none"
    nextbtnCont4.style.display = "none"
    Form5.style.display = "none"
    }
  });
  monthlyColor.addEventListener("click", function () {
    yearlySele.style.opacity = "0.9";
    monthlySele.style.opacity = "0.2";
    this.style.backgroundColor = "var(--neutral-color4)";
    this.style.color = "var(--neutral-color4)";
    yearlyColor.style.backgroundColor = "var(--primary-color1)";
    yearlyColor.style.color = "var(--primary-color1)";
    monthsFree1.style.display = "block";
    monthsFree2.style.display = "block";
    monthsFree3.style.display = "block";
    if (monthlySele.style.opacity === "0.9") {
      arcadeAmount.textContent = "$9/mo";
      advancedAmount.textContent = "$12/mo";
      proAmount.textContent = "$15/mo";
    } else if (monthlySele.style.opacity === "0.2") {
      arcadeAmount.textContent = "$90/yr";
      advancedAmount.textContent = "$120/yr";
      proAmount.textContent = "$150/yr";
    }
    if (yearlySele.style.opacity === "0.2") {
      Amount1.textContent = "+$1/mo";
      Amount2.textContent = "+$2/mo";
      Amount3.textContent = "+$2/mo";
    } else if (yearlySele.style.opacity === "0.9") {
      Amount1.textContent = "+$10/yr";
      Amount2.textContent = "+$20/yr";
      Amount3.textContent = "+$20/yr";
    }
    if (yearlySele.style.opacity === "0.2") {
      ArcName.textContent = "Arcade(Monthly)";
      totalName.textContent = "Total(per month)";
      pay1.textContent = "+$9/mo";
      pay2.textContent = "+$1/mo";
      pay3.textContent = "+$2/mo";
      payT.textContent = "+$12/mo";
    } else if (yearlySele.style.opacity === "0.9") {
      ArcName.textContent = "Arcade(Yearly)";
      totalName.textContent = "Total(per year)";
      pay1.textContent = "+$90/yr";
      pay2.textContent = "+$10/yr";
      pay3.textContent = "+$20/yr";
      payT.textContent = "+$120/yr";
    }
  });

  yearlyColor.addEventListener("click", function () {
    yearlySele.style.opacity = "0.2";
    monthlySele.style.opacity = "0.9";
    this.style.backgroundColor = "var(--neutral-color4)";
    this.style.color = "var(--neutral-color4)";
    monthlyColor.style.color = "var(--primary-color1)";
    monthlyColor.style.backgroundColor = "var(--primary-color1)";
    monthsFree1.style.display = "none";
    monthsFree2.style.display = "none";
    monthsFree3.style.display = "none";
    if (yearlySele.style.opacity == "0.2") {
      Amount1.textContent = "+$1/mo";
      Amount2.textContent = "+$2/mo";
      Amount3.textContent = "+$2/mo";
    } else if (yearlySele.style.opacity == "0.9") {
      Amount1.textContent = "+$10/yr";
      Amount2.textContent = "+$20/yr";
      Amount3.textContent = "+$20/yr";
    }
    if (monthlySele.style.opacity === "0.9") {
      arcadeAmount.textContent = "$9/mo";
      advancedAmount.textContent = "$12/mo";
      proAmount.textContent = "$15/mo";
    } else if (monthlySele.style.opacity === "0.2") {
      arcadeAmount.textContent = "$90/yr";
      advancedAmount.textContent = "$120/yr";
      proAmount.textContent = "$150/yr";
    }
    if (yearlySele.style.opacity === "0.2") {
      ArcName.textContent = "Arcade(Monthly)";
      totalName.textContent = "Total(per month)";
      pay1.textContent = "+$9/mo";
      pay2.textContent = "+$1/mo";
      pay3.textContent = "+$2/mo";
      payT.textContent = "+$12/mo";
    } else if (yearlySele.style.opacity === "0.9") {
      ArcName.textContent = "Arcade(Yearly)";
      totalName.textContent = "Total(per yearly)";
      pay1.textContent = "+$90/yr";
      pay2.textContent = "+$10/yr";
      pay3.textContent = "+$20/yr";
      payT.textContent = "+$120/yr";
    }
  });
  function ThirdForm(e){
    e.preventDefault();
    nextbtnCont3.style.display = "block";
    Form3.style.display = "block";
    Form2.style.display = "none";
    container.style.paddingTop = "26em";
    for (let i = 0; i < SeleContainer.length; i++) {
      SeleContainer[i].style.display = "none";
    }
    nextbtnCont2.style.display = "none";
    nextbtnCont4.style.display = "none";
  }
  nextPageBtn2.addEventListener("click", ThirdForm);
  goToform3.addEventListener("click", (e) => {
    if(!FormValidation(event)){
      backToone(e)
    }else if (FormValidation(event)) {
      ThirdForm(e);
      Form1.style.display = "none";
      nextPageBtn1.style.display = "none"
      Form4.style.display = "none"
      Form5.style.display = "none"
    }
 
  });
  goBack2.addEventListener("click", function () {
    nextbtnCont3.style.display = "none";
    Form3.style.display = "none";
    Form2.style.display = "block";
    container.style.paddingTop = "33em";
    for (let i = 0; i < SeleContainer.length; i++) {
      SeleContainer[i].style.display = "block";
    }
    nextbtnCont2.style.display = "block";
  });
  function fourthForm(e){
  e.preventDefault();
   Form4.style.display = "block";
    Form3.style.display = "none";
    Form2.style.display = "none"
    nextbtnCont2.style.display = "none"
    nextbtnCont3.style.display = "none";
    nextbtnCont4.style.display = "block"
    container.style.paddingTop = "26em"
  }
  nextPageBtn3.addEventListener("click", fourthForm);
  goToform4.addEventListener("click", (e) => {
  e.preventDefault();
   if(!FormValidation(event)){
    backToone(e)
  }else if (FormValidation(event)) {
    fourthForm(e);
    Form1.style.display = "none"
    nextPageBtn1.style.display = "none"
    Form2.style.display = "none"
    nextbtnCont2.style.display = "none"
    Form5.style.display = "none"
    for (let i = 0; i < SeleContainer.length; i++) {
     SeleContainer[i].style.display = "none";
   }
  }
  });
  goBack3.addEventListener("click", function () {
    Form4.style.display = "none";
    Form3.style.display = "block";

    nextbtnCont3.style.display = "block";
    nextbtnCont4.style.display = "none";
  });
  nextPageBtn4.addEventListener("click", function () {
    Form5.style.display = "block";
    Form4.style.display = "none";
    nextbtnCont4.style.display = "none";
  });
});
