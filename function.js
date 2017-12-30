'use strict';

function toggleAboutMe() {
    var x = document.getElementById("mainAbout");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }

    var y = document.getElementById('mainExperiments');
    if (y.style.display === "block")
      y.style.display = "none";

    var z = document.getElementById('mainExperiments2');
    if (z.style.display === "block")
      z.style.display = "none";

}

function toggleExperiments() {
    var x = document.getElementById("mainExperiments");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
    /*
    if the skills is are displayed, and the project link is
    clicked, hide the resume section and display projects.
    */
    var y = document.getElementById('mainResume');
    if (y.style.display === "block")
      y.style.display = "none";

    var a = document.getElementById('mainAbout');
    if (a.style.display === "block")
      a.style.display = "none";

    var b = document.getElementById('mainContact');
    if (b.style.display === "block")
      b.style.display = "none";
}

function toggleExperiments2() {
    var x = document.getElementById("mainExperiments2");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
    /*
    if the skills is are displayed, and the project link is
    clicked, hide the resume section and display projects.
    */
    var y = document.getElementById('mainResume');
    if (y.style.display === "block")
      y.style.display = "none";

    var a = document.getElementById('mainAbout');
    if (a.style.display === "block")
      a.style.display = "none";

    var b = document.getElementById('mainContact');
    if (b.style.display === "block")
      b.style.display = "none";
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
    if the skills is are being displayed, and the contact link is
    clicked, hide the resume section and display contact info.
    */
    var y = document.getElementById('mainResume');
    if (y.style.display === "block")
      y.style.display = "none";

    var z = document.getElementById('mainExperiments');
    if (z.style.display === "block")
      z.style.display = "none";

    var a = document.getElementById('mainExperiments2');
    if (a.style.display === "block")
      a.style.display = "none";
}

function toggleResume() {
    var x = document.getElementById('mainResume');
    // var z = document.getElementById('dloadResume');
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
    /*
    if the contact is being displayed, and the resume link is
    clicked, hide the contact section and display the resume.
    */
    var y = document.getElementById('mainExperiments');
    if (y.style.display === "block"){
      y.style.display = "none";
    }

    var a = document.getElementById('mainExperiments2');
    if (a.style.display === "block"){
      a.style.display = "none";
    }

    var y = document.getElementById('mainContact');
    if (y.style.display === "block")
      y.style.display = "none";
}

function toggleDloadResume() {
    var x = document.getElementById('dloadResume');
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
}

function resumeBoth(){
  toggleDloadResume();
  toggleResume();
}

function projectsBoth(){
  toggleExperiments();
  toggleExperiments2();
}
