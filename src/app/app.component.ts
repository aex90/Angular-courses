import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-driven-form';

  firstName : string = ''
  lastName : string = ''
  emailAdress : string = ''
  dob : string = ''
  gender : string = ''
  country : string = ''
  city : string = ''
  region : string = ''
  postal : string = ''
  userName : string = ''
  isAgreed : boolean = false

  @ViewChild('registrationForm') form : NgForm

  genders = [
    {id : 'check-male', value : 'male', display : 'Male'},
    {id : 'check-female', value : 'female', display : 'Female'}
  ]

  OnFormSubmitted(){
    // console.log(this.form);
    // console.log(this.form.controls['firstname'].value);
    // console.log(this.form.value.lastname);
    // console.log(this.form.value.email);
    // console.log(this.form.value.adress.country);
    
    this.firstName = this.form.value.firstname
    this.lastName = this.form.value.lastname
    this.dob = this.form.value.dob
    this.emailAdress = this.form.value.email
    this.country = this.form.value.adress.country
    this.city = this.form.value.adress.city
    this.postal = this.form.value.adress.postal
    this.userName = this.form.value.userName
    this.isAgreed = this.form.value.isAgreed

    console.log(this.form.value.firstname);
    console.log(this.form.value.lastname);
    console.log(this.form);
    
    

    //this.form.reset()

    this.form.form.patchValue({
      gender : 'male',
      adress : {
        country : 'Morocco'
      }
    })
  }

  GenerateUsername(){
    let username : string = ''
    if(this.firstName.length >= 3){
      username += this.firstName.slice(0,3)
    } else {
      username+= this.firstName
    }
    if(this.lastName.length >= 3){
      username += this.lastName.slice(0,3)
    } else {
      username+= this.lastName
    }

    let datetime = new Date(this.dob)
    username += datetime.getFullYear()
    
    username = username.toLowerCase()
    console.log(username);
    // this.form.controls['username'].value = username
    // console.log(this.form.controls['username'].value);
    // this.form.setValue({
    //   adress :
    //    {
    //         street1: this.form.value.adress.street1, 
    //         street2: this.form.value.adress.street2,
    //         country: this.form.value.adress.country, 
    //         city: this.form.value.adress.city, 
    //         region: this.form.value.adress.region,
    //         postal : this.form.value.adress.postal
    //   },
    //   dob :  this.form.value.dob,
    //   email : this.form.value.email,
    //   firstname :  this.form.value.firstname,
    //   gender :  this.form.value.gender,
    //   lastname : this.form.value.lastname,
    //   phone :  this.form.value.phone,
    //   username : username
    // })

    this.form.form.patchValue({
      username : username,
      adress : {
        country : 'Morocco'
      }
    })
              
    }
}
