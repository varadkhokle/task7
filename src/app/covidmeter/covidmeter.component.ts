import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-covidmeter',
  templateUrl: './covidmeter.component.html',
  styleUrls: ['./covidmeter.component.css']
})
export class CovidmeterComponent implements OnInit {
  totalData:any;
  countries:any;
   selectedCountry:any;
  private covidCaseUrl='https://api.covid19api.com/country/';
  constructor( private user:UsersService) { }

  ngOnInit(): void 
  {
    this.user.getTotalData().subscribe((result)=>{
      console.warn("Cases",result )
      this.totalData=result
    })

    this.user.getCountries().subscribe((data)=>{
     console.warn(data) 
     this.countries=data
    })
  }
  getCountry(country:any)
  {
    this.selectedCountry = country;
    this.covidCaseUrl='https://api.covid19api.com/country/'+this.selectedCountry;
    console.warn(this.selectedCountry);
  }
  updateCountry()
  {
    alert(this.selectedCountry)
  }
}
