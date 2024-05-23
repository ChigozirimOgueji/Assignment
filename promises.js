// Define the API endpoints
const api1 = "https://api1.example.com";
const api2 = "https://api2.example.com";

// Fetch data from the APIs concurrently
Promise.all([fetch(api1), fetch(api2)])
  .then((responses) => {
    // Check if all responses are successful
    const allSuccessful = responses.every((response) => response.ok);

    if (!allSuccessful) {
      throw new Error("One or more API requests failed.");
    }

    // Extract the JSON data from the responses
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => {
    // Combine the data from the APIs
    const combinedData = {...data[0], ...data[1]};

    // Display the combined data
    console.log(combinedData);
  })
  .catch((error) => {
    // Handle API failures
    console.error(error.message);
  });