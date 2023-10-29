import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl("Default Username"), // this is creating controls and their default values which can also be null in my new formgroup
      'email': new FormControl(null),
      'gender': new FormControl('male')
    }); // this is our first basic form created programmatically.!
  }
}
