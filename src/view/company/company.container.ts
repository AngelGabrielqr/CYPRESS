import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockService } from '@commons/endpoints/http-mock/mock-service.endpoints';

@Component({
  selector: 'bio-company-container',
  templateUrl: './company.container.html',
  styleUrls: [ './company.container.scss' ],
})
export class CompanyContainer implements OnInit {

  public constructor(
    private mock: MockService,
    private router: Router
  ) {
  }
  public ngOnInit() {

  }

  public async save() {
    try {
      await this.loginService();
      this.router.navigate(['upload'])
    } catch (error) {
    }
  }

  public loginService(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.mock.getMessage('register')
      .subscribe(res => {
        resolve(res);
      },
        err => {
          reject(err);
      });
    });
  }
}
