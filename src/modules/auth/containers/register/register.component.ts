import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    email = new FormControl('')
    password = new FormControl('')
    firstname = new FormControl('')
    lastname = new FormControl('')
    constructor(private http: HttpClient, private router: Router) { }  
      ngOnInit() {}
  
      // Submits a post request to the /users/register route of our Express app
    onRegisterSubmit() {
      const username = this.email.value;
      const email = this.email.value;
      const password = this.password.value;
      const firstname = this.firstname.value;
      const lastname = this.lastname.value;

  
      const headers = new HttpHeaders({'Content-type': 'application/json'});
  
      const reqObject = {
        username: username,
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
      };
  
      this.http.post('http://localhost:3000/users/register', reqObject, { headers: headers }).subscribe(
        
        // The response data
        (response) => {
          console.log(response);
          this.router.navigate(['/auth/login']);
        },
  
        // If there is an error
        (error) => {
          console.log(error);
        }
  
      );
    }
  
}
