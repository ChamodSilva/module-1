function displayInfo()
{
    //Input field values:
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;

    //String for the information
    const displayText = "First Name: " + firstName + "<br>" +
                        "Last Name: " + lastName + "<br>" +
                        "Address: " + address;

    //display the information
    document.getElementById("display").innerHTML = displayText;
}