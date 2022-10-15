var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
    let header= document.getElementById('tm-header')
    header.textContent = customerName;
    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
    let iHeader = document.getElementById('introheader')
    iHeader.textContent = customerName
    iHeader.textContent = "Alliance"
};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let brokeBoy = document.querySelectorAll('.tm-white-rect');

    for (i = 0; i < brokeBoy.length; i++) {
        brokeBoy[i].classList.add('tm-blue-rect');
        brokeBoy[i].classList.remove('tm-white-rect');
    }
};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    var sneakySocial = document.querySelector('.tm-social-links');
    sneakySocial.style.visibility = "none";

};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    let intro = document.getElementById('intropara1')
    intro.textContent = "Alliance was founded in 1931 by Albert Daniels.";
    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    let backstory = document.getElementById('intropara2')
    backstory.textContent = "The company is a leader in P.C Manufacturing.";
     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
    let dPromise = document.getElementById('aboutpara1')
    dPromise.textContent = "We deliver the best service this side of creation. "
    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
    let motto = document.getElementById('aboutpara2')
    motto.textContent = "Our motto is satisfaction guaranteed."

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
    let phoneLine = document.getElementById('addresspara')
    phoneLine.textContent = "1-800-565-5656"
}; 



