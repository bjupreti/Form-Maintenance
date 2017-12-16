$(function() {
	var remcounter = $(".rem").length;
	var remcounter1 = $(".rem").length;
	$("#add-item").on("click", function() {
		$(".copy-row").clone().appendTo(".copy-row1");
		$(".copy-row1 tr:last-child").removeClass("copy-row");
		remcounter = $(".rem").length;
		var i, j;
		for (i = 0; i < remcounter; i++) {
			$(".rem:eq(" + i + ")").parent().siblings().eq(0).find("input").attr("id", "itemname" + i);
			$(".rem:eq(" + i + ")").parent().siblings().eq(1).find("input").attr("id", "itemrate" + i);
			$(".rem:eq(" + i + ")").parent().siblings().eq(2).find("input").attr("id", "itemquantity" + i);
			$(".rem:eq(" + i + ")").parent().siblings().eq(3).find("input").attr("id", "itemtotal" + i);
			if(i == remcounter - 1) {
				$("#itemname" + i + ", #itemrate" + i + ", #itemquantity" + i + ", #itemtotal" + i).val("");
			}
		}
		remcounter1 = remcounter;
		// $(".copy-row1:nth-child(1)").addClass("copy-row");
		$(".rem").on("click", function() {
			remcounter = $(".rem").length;
			if (remcounter == 1) {
				$(this).parent().siblings().find("input").val("");
			}
			else {
				var rem = $(this).parent();
				rem.parent().remove();
				if ($(".copy-row1 tr:first-child").hasClass("copy-row") == false) {
					$(".copy-row1 tr:first-child").addClass("copy-row");
				}
			}
		});
	});
	// remove button starts here
	$(".rem").on("click", function() {
		$(this).parent().siblings().find("input").val("");
	});
	// Calculation starts here
	$("#main-form").keyup(function() {
		var k;
		for (k = 0; k < remcounter1; k++) {
			var itemrate1 = $("#itemrate" + k).val();
			var itemquantity1 = $("#itemquantity" + k).val();
			var totalitem1 = itemrate1 * itemquantity1;
			var itemtotal1 = $("#itemtotal" + k).val(totalitem1);
			if (itemrate1 == "" && itemquantity1 == "") {
				var itemtotal1 = $("#itemtotal" + k).val("");
			}
		}
	});
	// Modal starts here
	$("#totalbtn").on("click", function() {
		$("#table1").clone().appendTo(".modal-body");
		$(".modal-body #table1 tbody:last-child, .modal-body #table1 thead tr th:last-child, .modal-body #table1 tbody tr td:last-child").remove();
		$(".modal-body input").attr("readonly", "true");
		var l, tot, total2 = 0;
		for (l = 0; l < remcounter; l++) {
			tot = parseInt($("#itemtotal" + l).val());
			if (!isNaN(tot)) {
				total2 += tot;
			}
		}
		var elem = $("<h2>The sum total is: " + total2 + "</h2>");
		$(".modal-body").append(elem);
	});
	$("#modal-table").on("hidden.bs.modal", function() {
		$(".modal-body").empty();
	});
});