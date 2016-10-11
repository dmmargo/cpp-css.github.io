function submitEmail() {
  var email = jQuery('#emailResponse').val();
  if (email != "" && isValidEmail(email)) {
    jQuery.ajax({
      url: "insert google doc link here",
      data: {"entry.778832238" : email},
      type: "POST",
      dataType: "xml",
    });
    jQuery('#emailResponse').val("Thanks, you'll hear from us soon!");
  }
}

function isValidEmail(email) {
  var regString = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return regString.test(email);
}

