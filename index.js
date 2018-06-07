$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    $("#bunny_container").click(function() {
		$("#bunny_container").addClass("crazy_bunny");
	    $("#bunny_sprite").addClass("bunny_paws");
	});

}
