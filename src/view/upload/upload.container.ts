import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MockService } from '@commons/endpoints/http-mock/mock-service.endpoints';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.container.html',
  styleUrls: ['./upload.container.scss']
})
export class UploadContainer {

  public constructor(
    private router: Router,
    private mock: MockService
  ) {

  }

  public async upload() {
    try {
      await this.loginService();
      this.router.navigate(['summary'])
    } catch (error) {
    }
  }

  public loginService(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.mock.getMessage('upload')
      .subscribe(res => {
        resolve(res);
      },
        err => {
          reject(err);
      });
    });
  }
}
