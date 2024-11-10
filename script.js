var form = document.getElementById("resume-form");
var resumedisplayElemet = document.getElementById("resume-display");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n    <h2><b>Resume</b></h2> \n    <h3>Personal Information</h3> \n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>E-mail:</b>").concat(email, "</p>\n    <p><b>Phone NO:</b>").concat(phone, "</p>\n\n     <h3>Education:</h3><p>").concat(education, "</p>\n\n     <h3>Experience:</h3><p>").concat(experience, "</p>\n\n     <h3>Skills:</h3><p>").concat(skills, "</p>\n    ");
    if (resumedisplayElemet) {
        resumedisplayElemet.innerHTML = resumeHTML;
    }
    else {
        console.error("the resmue dispaly element is missing");
    }
});
