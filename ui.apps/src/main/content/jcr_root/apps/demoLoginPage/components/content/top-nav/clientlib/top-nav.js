// this is the id of the form

function loginuser() {
	var loginPopup = document.getElementById("loginPopup");

	if (loginPopup.style.display == "block") {

		loginPopup.style.display = "none";

	} else {

		loginPopup.style.display = "block"

	}

}

$("#register")
		.submit(
				function(e) {

					e.preventDefault(); // avoid to execute the actual submit of
										// the form.

					var form = $(this);

					var url = "/bin/demologinPages";

					$
							.ajax({

								type : "POST",

								url : url,

								data : form.serialize(), // serializes the
															// form's elements.

								success : function(data, textStatus, jqXHR) {

									if (data.status == "202") {

										alert("success")

										window
												.open("http://localhost:4502/content/demoLoginPage/en/home.html")
									} else {
										alert("fail")
										location.href = "http://localhost:4502/sites.html/content/training-site/en/product"

									}

								},
								error : function(XMLHttpRequest, textStatus,
										errorThrown) {
									// write your logic that you need to perform
									// on error

								}

							});

				});



