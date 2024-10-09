let search = document.querySelector(".search");
let screen = document.querySelector("input[type='text']");
let temperature = document.querySelector(".temperature");
let humidity = document.querySelector(".humidity");
function fetching() {
    if (screen.value !== "") {
        let city = screen.value;
        let apiKey = "96f3b3c0abd9e0707c2f56f7d58b5576";  
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Using metric units for Celsius
        
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    alert("City not found");
                }
                return response.json();
            })
            .then(data => {
                
                temperature.innerText = `Temperature in ${city}: ${data.main.temp}°C. `;
                humidity.innerText = ` Humidity in ${city}:${data.main.humidity}`;
                
            })
            .catch(error => {
                console.log(error.message);
            });
    } else {
        console.log("Enter your city");
    }
}

search.addEventListener("click", fetching);
