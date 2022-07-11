let userId = sessionStorage.getItem("userId");

if(userId !== ""){
    fetchTrips(userId);
}

async function fetchTrips(userId) {
    const params = new Headers();

    params.append('userID', userId);

    var response = await fetch('/get-trips', {method: 'GET', headers: params});
    console.log(response);
    var responseData = await response.json();
    console.log(responseData);
    // responseData.then((trips) => {
    //     trips.forEach(
    //         (trip) => {
    //             displayTrips(trip.title, trip.totalBudget, trip.startDate, trip.endDate)});
    // });
}

function displayTrips(title, totalBudget, startDate, endDate) {
    const trip = document.createElement("div");
    trip.className = "trip";

    var tripBox = 
        '<h3 class="trip-title">' + title + '</h3>'
        + '<p class="trip-info">' + totalBudget + '</p>'
        + '<p class="trip-info">' + startDate + '</p>'
        + '<p class="trip-info">' + endDate + '</p>';

    trip.innerHTML = tripBox;

    document.getElementById("trips-div").appendChild(trip);
}