import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  cityName:string='Agra';
  weatherData:any;
  // image: string="";
  // textColor: string="";
  constructor(private _weatherService : WeatherService){}

  onSubmit(){
    console.log(this.cityName);
    this.getWeatherData(this.cityName);
    this.cityName="";
  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName="";
  };

  private getWeatherData(cityName: string){
    this._weatherService.getData(cityName).subscribe(res=>{
      this.weatherData=res;
    })    
  }
}
