import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/**
 * Representa los endpoints del API que permite listar los modulos
 */

@Injectable({providedIn: 'root'})
export class MockService {

  constructor(
    private httpClient: HttpClient
    ) { }

  public getMessage(path: string): Observable<any> {
    return this.httpClient
    .get(`http://localhost:8010/${path}`)
  }
}
