import ReactWeather, { useOpenWeather } from "react-open-weather";
import "./App.css";

function App() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "efc4e2076a87f7109489897fd09f36c3",
    lat: "1.2921",
    lon: "36.8219",
    lang: "en",
    unit: "imperial", // values are (metric, standard, imperial)
  });

  return (
    <div className="App">
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Nairobi"
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
    
    </div>
  );
}

export default App;
