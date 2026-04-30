let data, info;

async function init() {
    let link = "https://cityofnewyork.us";
    info = await fetch(link);
    data = await info.json();
    let output = document.getElementById("output");
    let build = "";

    for (let i = 0; i < data.length; i++) {
        let crash = data[i];
        build += `<div class="fitted card">
            <h3>ID: ${crash.collision_id}</h3>
            <hr>
            <p> ${crash.borough}</p>
            <p> ${crash.on_street_name}</p>
            <hr>
            <p> ${crash.contributing_factor_vehicle_1}</p>
            <p> ${crash.vehicle_type_code1}</p>
            <p> ${crash.number_of_persons_injured}</p>
        </div>`;
    }
    output.innerHTML = build;
}

// Challenge 2: Filter by Zip Code
function filterByZip() {
    let output = document.getElementById("output");
    let zip = document.getElementById("Zip").value;
    let result = document.getElementById("result");
    let build = "";
    let ct = 0;

    for (let i = 0; i < data.length; i++) {
        let crash = data[i];
        if (crash.zip_code == zip) {
            build += `<div class="fitted card">
                <h3> ${crash.collision_id}</h3>
                <hr>
                <p> ${crash.borough}</p>
                <p> ${crash.on_street_name}</p>
                <hr>
                <p> ${crash.contributing_factor_vehicle_1}</p>
                <p> ${crash.vehicle_type_code1}</p>
                <p> ${crash.number_of_persons_injured}</p>
            </div>`;
            ct += 1;
        }
    }
    result.innerHTML = `${ct} Results found for Zip Code ${zip}.`;
    output.innerHTML = build;
}

// Challenge 4: Filter by Crash Type (Contributing Factor)
function filterByCrash() {
    let output = document.getElementById("output");
    let result = document.getElementById("result");
    let build = "";
    let ct = 0;

    for (let i = 0; i < data.length; i++) {
        let crash = data[i];
        // Checks if the contributing factor includes the text you searched for
        if (crash.contributing_factor_vehicle_1 && crash.contributing_factor_vehicle_1.value) {
            build += `<div class="fitted card">
                <h3>${crash.collision_id}</h3>
                <hr>
                <p> ${crash.borough }</p>
                <p> ${crash.on_street_name}</p>
                <hr>
                <p> ${crash.contributing_factor_vehicle_1}</p>
                <p> ${crash.vehicle_type_code1}</p>
                <p> ${crash.number_of_persons_injured}</p>
            </div>`;
            ct += 1;
        }
    }
    result.innerHTML = `${ct} Results found for "${type}".`;
    output.innerHTML = build;
}