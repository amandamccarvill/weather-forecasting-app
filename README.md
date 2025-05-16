** Weather Forecasting App

A weather forecasting app built with React and Vite that retrieves weather data from the Open Weather Map API. This app allows users to search for a city and view the 5-day weather forecast, along with current weather conditions such as temperature, humidity, and wind speed.

The app also features a temperature unit toggle (Celsius/Fahrenheit) and the ability to refresh the weather data.

** Features
- 5-Day Weather Forecast: Displays the 5-day weather forecast for the selected city.
- City Search: Users can search for a city and retrieve weather data.
- Temperature Toggle: Switch between Celsius and Fahrenheit units.
- Weather Display: Displays current temperature, humidity, and wind speed.
- Error Handling: Displays error messages if data cannot be fetched, such as "City not found" or "Unable to fetch forecast data."

** Setup Instructions
1. Clone the repository
    git clone https://github.com/amandamccarvill weather-forecasting-app.git
    cd weather-forecasting-app

2. Install dependencies
    Run the following command to install the necessary dependencies using npm:
    npm install

3. API Key
    To fetch weather data from Open Weather Map (https://openweathermap.org/), you will need an API key.
    Go to Open Weather Map and sign up or log in to get an API key.
    Create a .env file in the root of your project and add the following line:
    VITE_OPENWEATHERMAP_API_KEY=your-api-key-here

4. Start the development server
    Run the following command to start the development server:
    npm run dev

** External Libraries:  
This project is built using the following libraries:
1. React: A JavaScript library for building user interfaces.
2. Vite: A fast build tool that provides a smooth development experience with React.
3. Axios: A promise-based HTTP client for making requests to the OpenWeatherMap API.

** Components Overview:
1. App.jsx:
    - Fetches weather data using the OpenWeatherMap API.
    - Handles errors such as "City not found" or "API error."

2. Forecast.jsx:
    - Displays the 5-day weather forecast if the data is fetched successfully.
    - Shows an error message ("Unable to fetch forecast data") if the API fails.

3. Searchbar.jsx:
    - A search bar where users can input a city name to fetch weather data.
    - On click of the "Get Weather" button, it triggers the weather fetch.

4. TemperatureToggle.jsx:
    - A toggle button to switch between Celsius and Fahrenheit.

5. WeatherDisplay.jsx:
    - Displays the current weather conditions (temperature, humidity, wind speed) for the selected city.

** UI Buttons/Interactions
1. Refresh Button: Brings the user back to the home screen with the initial weather data.
2. Temperature Toggle Button: Switches between Celsius and Fahrenheit units.
3. Get Weather Button: Triggers the API call to load weather for the searched city.
