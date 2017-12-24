'use strict';

function toggleAboutMe() {
    var x = document.getElementById("mainAbout");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

function toggleExperiments() {
    var x = document.getElementById("mainExperiments");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

function toggleContact() {
    var x = document.getElementById("mainContact");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
    /*
    if the resume is being displayed, and the contact link is
    clicked, hide the resume section and display contact info.
    */
    var y = document.getElementById('mainResume');
    if (y.style.display === "block")
      y.style.display = "none";
}

function toggleResume() {
    var x = document.getElementById('mainResume');
    var z = document.getElementById('dloadResume');
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }

    if (z.style.display === "block") {
      z.style.display = "none";
    }
    else {
      z.style.display = "block";
    }
    /*
    if the contact is being displayed, and the resume link is
    clicked, hide the contact section and display the resume.
    */
    var y = document.getElementById('mainContact');
    if (y.style.display === "block")
      y.style.display = "none";
}
