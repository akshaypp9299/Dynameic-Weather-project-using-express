const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));




// In this function we had requested a "get" request ot the external URL, 
// app.get('/', function(req, res){ //-> this functn is used when the user visits our server to see the weather data

//     const url = "https://api.openweathermap.org/data/2.5/weather?q=Wardha&units=metric&appid=b7af8c490aa5ad5b6e70ab30cbc17955";

//     https.get(url, function(respose){//-> after user visiting our server, now our server will try to fetch the data from the external URL.
//         console.log(respose.statusCode);
//         respose.on("data", function(data){//->after successful connection to the external URL, with the "on" function we will try to get into the data that we have fetched through external URL;
//             const weatherData = JSON.parse(data);//-> always after tapping into that data, always extract that data using parse function
//             console.log(weatherData.main.temp);
//             const weatherDesc = weatherData.weather[0].description;
//             console.log(weatherDesc);
//             //by followinf the above process, now our server has all the data from the external server....and now we can show that data to the user
//             // res.send("<h1>The weather desc is "+ weatherDesc+"</h1>");//-> with these we can send the data from external server to the user.

//             /********Note********** */
//             //we can use res.send() only once in the whole app.get() method.

//             //hence always use res.write() to display the data instead on res.send();
//             res.write("<p>The weather temp is " + weatherData.main.temp +"</p>");
//             res.write("<h1> The weather Desc is " + weatherDesc +"</h1>");

//         })
//     })
    
// })

// app.get("/weather", function (req, res) {
//     res.sendFile(__dirname+"/index.html");
// });

// app.post("/weather", function (req, res) {
//     let city = req.body.city;

//     const query = city;
//     // const apikey = b7af8c490aa5ad5b6e70ab30cbc17955;
//     // const unit = metric;
//    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units=metric&appid=b7af8c490aa5ad5b6e70ab30cbc17955";


//     https.get(url, function(response){
//         console.log(response.statusCode);
//         response.on("data", function(data){
//             const weatherData = JSON.parse(data);
//             const weatherDesc = weatherData.weather[0].description;
//             const weatherTemp = weatherData.main.temp;

//             res.write("<p>Weather in "+ city +" is "+ weatherDesc+"</p>");
//             res.write("<h1>Temperature in "+ city +" is "+ weatherTemp+"</h1>");

//         })
//     })
// })




// app.listen(3000,function() {
//     console.log('listening on port 3000');
// })


app.listen(3000,function() {
    console.log('listening on port 3000');
});


app.get('/temp', function(req, res) {
    res.sendFile(__dirname+"/index.html");
})

app.post('/temp', function(req, res) {
    let city = req.body.city;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=b7af8c490aa5ad5b6e70ab30cbc17955";

    https.get(url, function(response){
        response.on('data', function(data){
            let weatherData = JSON.parse(data);
            let temp = weatherData.main.temp;
            let desc = weatherData.weather[0].description;

            res.write("<p>Temp in your city is"+ temp+"</p>");
            res.write("<p>Weather desc in your city is"+ desc+"</p>");
        })
    })

})