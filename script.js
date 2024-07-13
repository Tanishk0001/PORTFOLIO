var typed = new Typed(".text", {
    strings: ["Frontend Developer . . ." , "Programmer . . ." , "Web Developer . . ."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})
document.getElementById("dark-mode").addEventListener("click",function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("moreaboutme").addEventListener("click", function(event) {
    event.preventDefault();
    var additionalText = " I am a Judo player and have played at various levels, achieving a Gold Medal at the state level in Bihar. I also have hobbies in playing cricket and traveling.";
    var existingText = document.getElementById("aboutMeContent").innerText;
    document.getElementById("aboutMeContent").innerText = existingText + additionalText;
});
