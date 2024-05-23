// Define the API endpoints
const api1 = "https://api1.example.com";
const api2 = "https://api2.example.com";

// Fetch data from the APIs concurrently
async function fetchApiData() {
  try {
    const [response1, response2] = await Promise.all([fetch(api1), fetch(api2)]);

    // Check if all responses are successful
    const allSuccessful = response1.ok && response2.ok;

    if (!allSuccessful) {
      throw new Error("One or more API requests failed.");
    }

    // Extract the JSON data from the responses
    const data1 = await response1.json();
    const data2 = await response2.json();

    // Combine the data from the APIs
    const combinedData = {...data1, ...data2};

    // Display the combined data
    console.log(combinedData);
  } catch (error) {
    // Handle API failures
    console.error(error.message);
  }
}

fetchApiData();
