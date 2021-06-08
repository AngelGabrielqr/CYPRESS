import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { MockService } from '@commons/endpoints/http-mock/mock-service.endpoints';
import { Router } from '@angular/router';

@Component({
  selector: 'bio-login-demo-container',
  templateUrl: './login-demo.container.html',
  styleUrls: [ './login-demo.container.scss' ],
})
export class LoginContainer implements OnInit {

  public constructor(
    public http: HttpClient,
    private mock: MockService,
    private router: Router
  ) {
  }
  public ngOnInit() {
  }

  public async login() {
    try {
      await this.loginService();
      this.router.navigate(['company'])
    } catch (error) {
    }
  }

  public loginService(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.mock.getMessage('login')
      .subscribe(res => {
        resolve(res);
      },
        err => {
          reject(err);
      });
    });
  }
}
