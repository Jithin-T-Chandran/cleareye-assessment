import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private fb:FormBuilder){}

  sumitted = false
  Roles: any = ['Admin','Manager','HR','developer'];


  registrationForm = this.fb.group({
     userName: ["",Validators.required],
     address: ["",Validators.required],
     date: ["",Validators.required],
     role: ['', [Validators.required]],
     phone: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
     genderControl: ['', [Validators.required]],
  })




onSubmit(){
  this.sumitted  = true;
  if (!this.registrationForm.valid) {
    false;
  } else {
    localStorage.setItem(this.registrationForm.value.phone, JSON.stringify(this.registrationForm.value));
    alert(`submitted, please click on Employee Data`)
  }

}


changeRole(e: any) {
  this.cityName?.setValue(e.target.value, {
    onlySelf: true,
  });
}

get cityName() {
  return this.registrationForm.get('cityName');
}

ngOnInit(): void {
  
 }
}
