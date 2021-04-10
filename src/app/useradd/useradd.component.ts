import { Component, VERSION, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsersService } from "../users.service";

@Component({
  selector: "app-useradd",
  templateUrl: "./useradd.component.html",
  styleUrls: ["./useradd.component.css"]
})
export class UseraddComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UsersService) {}
  nameOfUser = "";
  isSubmitted: boolean;
  userData = [];
  ngOnInit(): void {
    this.createprofileForm();
  }
  createprofileForm() {
    this.profileForm = this.fb.group({
      inputName: [null, Validators.required],
      inputPhone: [null, [Validators.required, Validators.maxLength(10)]],
      inputEmail: [null, [Validators.required, Validators.email]],
      inputAddress: [null, Validators.required]
    });
  }
  get inputName() {
    return this.profileForm.get("inputName") as FormControl;
  }
  get inputPhone() {
    return this.profileForm.get("inputPhone") as FormControl;
  }
  get inputEmail() {
    return this.profileForm.get("inputEmail") as FormControl;
  }
  get inputAddress() {
    return this.profileForm.get("inputAddress") as FormControl;
  }
  onSubmit() {
    console.warn(this.profileForm.value);
    this.isSubmitted = true;
    if (this.profileForm.valid) {
      this.userService.addUser(this.profileForm.value);
      this.isSubmitted = false;
    }
  }
  
}
imports: [FormsModule, ReactiveFormsModule];
