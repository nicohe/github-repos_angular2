import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

@Injectable()
export class RepositoriesService {

  baseUrl : string = 'https://api.github.com';

  username : string = 'nicohe';

  constructor(private http: Http) { }

  getRepo(){
    return this.http.get(this.baseUrl+"/users/"+this.username+"/repos");
  }

}
