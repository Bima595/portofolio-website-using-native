document.addEventListener("DOMContentLoaded", function () {
    const showListButton1 = document.getElementById("showListButton1");
    const showListButton2 = document.getElementById("showListButton2");
    const popup1 = document.getElementById("popup1");
    const popup2 = document.getElementById("popup2");
    const closePopup1 = document.getElementById("closePopup1");
    const closePopup2 = document.getElementById("closePopup2");
    const nameList1 = document.getElementById("nameList1");
    const nameList2 = document.getElementById("nameList2");

    // Event listener to open the first pop-up
    showListButton1.addEventListener("click", function () {
        // Make an AJAX request for the first list (replace with your data source)
        fetch("data1.json")
            .then((response) => response.json())
            .then((data) => {
                // Clear any previous names in the first list
                nameList1.innerHTML = "";

                // Populate the first list with names
                data.names.forEach((name) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = name;
                    nameList1.appendChild(listItem);
                });

                // Show the first pop-up
                popup1.style.display = "block";
            })
            .catch((error) => {
                console.error("Error fetching data for list 1:", error);
            });
    });

    // Event listener to open the second pop-up
    showListButton2.addEventListener("click", function () {
        // Make an AJAX request for the second list (replace with your data source)
        fetch("data2.json")
            .then((response) => response.json())
            .then((data) => {
                // Clear any previous names in the second list
                nameList2.innerHTML = "";

                // Populate the second list with names
                data.names.forEach((name) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = name;
                    nameList2.appendChild(listItem);
                });

                // Show the second pop-up
                popup2.style.display = "block";
            })
            .catch((error) => {
                console.error("Error fetching data for list 2:", error);
            });
    });

    // Event listeners to close the pop-ups
    closePopup1.addEventListener("click", function () {
        popup1.style.display = "none";
    });

    closePopup2.addEventListener("click", function () {
        popup2.style.display = "none";
    });
});
