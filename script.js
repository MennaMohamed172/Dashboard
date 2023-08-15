let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
	nav.classList.toggle("navclose");
})
const input = document.querySelector("input")
const output = document.querySelector("output")
let imagesArray = []

input.addEventListener("change", function() {
})
input.addEventListener("change", () => {
    const file = input.files
 })
 

 const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

var iptEls = document.querySelectorAll('input');
[].forEach.call(inps, function(iptEl) {
    iptEl.onchange = function(e) {
        console.log(this.files);
    };
});

// SEO
    // تحديث الكلمات الرئيسية الميتا باستخدام JavaScript
    const dynamicKeywords = "HTML, CSS, JavaScript, Web Development";
    const metaKeywordsTag = document.getElementById('metaKeywords');
    metaKeywordsTag.setAttribute('content', dynamicKeywords);
