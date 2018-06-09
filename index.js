$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    $("#bunny_container").click(function() {
		$("#bunny_container").addClass("crazy_bunny");
	    $("#bunny_sprite").addClass("bunny_paws");
	});

}



 var i = 0;
var txt = 'Giv Lonni et 12 tal!';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("sjov").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
