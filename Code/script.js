document.addEventListener('DOMContentLoaded', () => {
    const stations = ["Johannesburg", "Braamfontein", "Mayfair", "Langlaagte", "Bosmont", "Unified", "Florida"];
    const schedules = {
        "0251": ["05:30", "05:35", "05:42", "05:52", "05:59", "06:04", "06:10"],
        "0253": ["07:10", "07:15", "07:22", "07:32", "07:39", "07:44", "07:50"],
        // ... other schedules
    };

    const fromStationSelect = document.getElementById('from-station');
    const toStationSelect = document.getElementById('to-station');
    const searchBtn = document.getElementById('search-btn');
    const scheduleTable = document.getElementById('schedule-table');

    // Populate station dropdowns
    stations.forEach(station => {
        const option = document.createElement('option');
        option.value = station;
        option.textContent = station;
        fromStationSelect.appendChild(option.cloneNode(true));
        toStationSelect.appendChild(option);
    });

    searchBtn.addEventListener('click', () => {
        const fromStation = fromStationSelect.value;
        const toStation = toStationSelect.value;

        if (fromStation && toStation) {
            displaySchedule(fromStation, toStation);
        } else {
            alert('Please select both stations.');
        }
    });

    function displaySchedule(from, to) {
        scheduleTable.innerHTML = '';

        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `<th>Train No</th><th>From ${from}</th><th>To ${to}</th><th>Departure</th>`;
        scheduleTable.appendChild(headerRow);

        for (const trainNo in schedules) {
            const schedule = schedules[trainNo];
            const row = document.createElement('tr');
            row.innerHTML = `<td>${trainNo}</td><td>${from}</td><td>${to}</td><td>${schedule.join(', ')}</td>`;
            scheduleTable.appendChild(row);
        }
    }
});
