import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    email = new FormControl('')
    password = new FormControl('')
    showError = false;
    constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }  
      ngOnInit() {}

    onLoginSubmit() {
    const username = this.email.value;
    const password = this.password.value;

    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const reqObject = {
      username: username,
      password: password
    };

    this.http.post('http://localhost:3000/users/login', reqObject, { headers: headers }).subscribe(
      
      // The response data
      (response) => {
       console.log(response);
       
        // If the user authenticates successfully, we need to store the JWT returned in localStorage
        localStorage.setItem("user", JSON.stringify(response))
        // Retrieving data:
        let text = JSON.stringify(response);
        let obj = JSON.parse(text);
        localStorage.setItem("token", obj.token)

       

      },

      // If there is an error
      (error) => {
        console.log(error);
        this.showError = true;
      },
      
      // When observable completes
      () => {
        console.log('done!');
        this.router.navigate(['dashboard']);
      }

    );
  }
}

