

const Discord = require("discord.js")
const https =  require("https")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
 
    if(msg.content.startsWith("$"))
    {
      msg.content=msg.content.slice(1);
      const url = "https://api.openweathermap.org/data/2.5/weather?q="+msg.content+"&appid=a770ec540edf1f1ed404bc83978c0f9d&units=metric";

      https.get(url , function(response){
          console.log(response.statusCode);

          response.on("data", function(data){
              const weatherData = JSON.parse(data)
              const temp = weatherData.main.temp
              const des = weatherData.weather[0].description
              const icon = weatherData.weather[0].icon
              const place = weatherData.name
              msg.reply("The temperature of "+place+" is "+temp+" degree Celcius.");
          })

      })
    }
  
})

client.login('ODI5Njk5ODg5MTMwMzczMTQz.YG78PA.TnNLwhdtQ6yWE6dQ-QaQEmObcgY')