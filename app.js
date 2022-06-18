function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == false) {
        document.getElementById('myCheck').style.display = 'none';
    }
};