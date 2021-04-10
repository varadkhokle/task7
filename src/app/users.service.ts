import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: "root"
})
export class UsersService {
 
 totalCaseUrl="https://api.covid19api.com/world/total";
 private casesUrl='';
 public selectCountry= "";

 constructor( private http:HttpClient,private store:AngularFirestore)
 {
 }

 getCountries():Observable<any>
 {
   const url="https://api.covid19api.com/countries";
   return this.http.get<any>(url)
 }
 getTotalData()
 {
   return this.http.get(this.totalCaseUrl);
 }
  private Details:any[] = [];
  public Records:{};
 generateUser()
  {this.Details.forEach(Records=>{
    this.store.collection('users').add({
      name:Records.inputName,
      email:Records.inputEmail,
      phone:Records.inputPhone,
      address:Records.inputAddress,

    });
  }
  );

  }
  fetchData()
  {return this.store.collection('users').snapshotChanges();

  }
  deleteR(tempR){
    this.store.doc('users'+tempR).delete();

  }
    addUser(details: FormGroup) {
        this.Details.push(details);
    }
 
    getUser() {
        return this.Details;
    }
}
