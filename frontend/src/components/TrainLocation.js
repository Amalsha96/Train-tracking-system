import React, { useState, useEffect } from 'react';

function TrainLocation() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    
    const mockData = [
      {
        _id: "1",
        trainId: "1176",
        route: "Colombo - Polgahawela",
        schedule: [
          { station: "Colombo Fort", arrival: "06:00 PM", departure: "06:15 PM" },
          { station: "Maradana", arrival: "06:20 PM", departure: "06:21 PM" },
          { station: "Ragama", arrival: "06:39 PM", departure: "06:40 PM" },
          { station: "Ganemulla", arrival: "06:47 PM", departure: "06:48 PM" },
          { station: "Yagoda", arrival: "06:50 PM", departure: "06:51 PM" },
          { station: "Gampaha", arrival: "06:55 PM", departure: "06:56 PM" },
          { station: "Veyangoda", arrival: "07:13 PM", departure: "07:14 PM" },
          { station: "Pallewela", arrival: "07:17 PM", departure: "07:18 PM" },
          { station: "Pattalagedara", arrival: "07:20 PM", departure: "07:21 PM" },
          { station: "Weweldeniya", arrival: "07:23 PM", departure: "07:24 PM" },
          { station: "Alawwa", arrival: "07:28 PM", departure: "07:29 PM" },
          { station: "Polgahawela", arrival: "07:35 PM", departure: "07:36 PM" },
        ],
        lastUpdate: "07:33 PM",
      },
      {
        _id: "2",
        trainId: "8378",
        route: "Panadura - Ragama",
        schedule: [
          { station: "Panadura", arrival: "05:30 PM", departure: "05:40 PM" },
          { station: "Moratuwa", arrival: "05:53 PM", departure: "05:54 PM" },
          { station: "Ratmalana", arrival: "06:02 PM", departure: "06:05 PM" },
          { station: "Dehiwala", arrival: "06:08 PM", departure: "06:10 PM" },
          { station: "Mount Lavinia", arrival: "06:12 PM", departure: "06:13 PM" },
          { station: "Angulana", arrival: "06:14 PM", departure: "06:15 PM" },
          { station: "Lunawa", arrival: "06:17 PM", departure: "06:18 PM" },
          { station: "Moratuwa", arrival: "06:19 PM", departure: "06:20 PM" },
          { station: "Egorowatte", arrival: "06:21 PM", departure: "06:22 PM" },
          { station: "Koralawella", arrival: "06:23 PM", departure: "06:24 PM" },
          { station: "Angulana", arrival: "06:25 PM", departure: "06:26 PM" },
          { station: "Kalutara South", arrival: "06:27 PM", departure: "06:28 PM" },
          { station: "Waskaduwa", arrival: "06:29 PM", departure: "06:30 PM" },
          { station: "Katukurunda", arrival: "06:31 PM", departure: "06:32 PM" },
          { station: "Payagala South", arrival: "06:33 PM", departure: "06:34 PM" },
          { station: "Maggona", arrival: "06:35 PM", departure: "06:36 PM" },
          { station: "Beruwala", arrival: "06:37 PM", departure: "06:38 PM" },
          { station: "Aluthgama", arrival: "06:39 PM", departure: "06:40 PM" },
          { station: "Bentota", arrival: "06:41 PM", departure: "06:42 PM" },
        ],
        lastUpdate: "07:49 PM",
      },
      {
        _id: "3",
        trainId: "4468",
        route: "Colombo Fort - Kurunegala",
        schedule: [
          { station: "Colombo Fort", arrival: "04:45 PM", departure: "04:55 PM" },
          { station: "Maradana", arrival: "04:50 PM", departure: "04:52 PM" },
          { station: "Ragama", arrival: "05:05 PM", departure: "05:08 PM" },
          { station: "Ganemulla", arrival: "05:17 PM", departure: "05:18 PM" },
          { station: "Yagoda", arrival: "05:20 PM", departure: "05:21 PM" },
          { station: "Gampaha", arrival: "05:25 PM", departure: "05:26 PM" },
          { station: "Veyangoda", arrival: "05:35 PM", departure: "05:36 PM" },
          { station: "Pallewela", arrival: "05:38 PM", departure: "05:39 PM" },
          { station: "Polgahawela", arrival: "05:40 PM", departure: "05:41 PM" },
          { station: "Warakapola", arrival: "05:50 PM", departure: "05:51 PM" },
          { station: "Weerambugedara", arrival: "05:55 PM", departure: "05:56 PM" },
          { station: "Ganegoda", arrival: "05:57 PM", departure: "05:58 PM" },
          { station: "Kurunegala", arrival: "06:02 PM", departure: "06:04 PM" },
        ],
        lastUpdate: "06:02 PM",
      },
    ];

    setLocations(mockData);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Train Locations</h1>
      <ul className="space-y-4">
        {locations.map((train) => (
          <li key={train._id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">{train.route}</h2>
            <p>Train ID: {train.trainId}</p>
            <p>Last Update: {train.lastUpdate}</p>
            <ul className="mt-2">
              {train.schedule.map((station, index) => (
                <li key={index} className="flex justify-between">
                  <span>{station.station}</span>
                  <span>{station.arrival} - {station.departure}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainLocation;
