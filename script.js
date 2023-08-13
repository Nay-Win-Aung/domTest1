document.getElementById("fetchButton").addEventListener("click", function() {
    // Simulate fetching data from an API endpoint
    simulateApiCall()
        .then(data => {
            document.getElementById("output").innerHTML = "Response: " + data;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("output").innerHTML = "Error fetching data.";
        });
});

function simulateApiCall() {
    // Simulate a delay and return data as a promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hey Sayar gyi");
        }, 1000); // Simulating a delay of 1 second
    });
}
