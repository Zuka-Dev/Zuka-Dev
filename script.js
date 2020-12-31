function validateForm() {
  var x = document.forms["main-form"]["firstName"].value;
  if (typeof (x) !== 'string') {
    alert("Wrong Input");
    return;
  }
    var y = document.forms["main-form"]["telNo"].value;
  if (typeof (y) !== 'number') {
    alert("Wrong Input");
    return;
  }
}

validateForm()