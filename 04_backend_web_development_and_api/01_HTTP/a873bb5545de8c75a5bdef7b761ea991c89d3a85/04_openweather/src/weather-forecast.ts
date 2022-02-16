import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByZipcode(zipcode: string, countryCode: string):void {
  // code the function here
  request(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`,(error, body) => {
     if(error){
       console.error(error);
    }else{
     const data = JSON.parse(body);
      console.log(`Weather for ${data.city.name}`);

    }
   })
}


function weatherByLatitudeAndLongitude(latitude: number, longitude: number):void {
  // code the function here
  request(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`,(error, body) => {
    if(error){
      console.error(error);
   }else{
     const data = JSON.parse(body);
     console.log(`Weather for ${data.city.name}`);
     
   }
  })
}


// leave lines below for tests to work properly
export {
  weatherByZipcode,
  weatherByLatitudeAndLongitude
}
