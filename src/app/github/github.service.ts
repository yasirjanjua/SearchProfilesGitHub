import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class GithubService {
	userName: string;
	clientId: '89b9f2b8af92c17a96a5';
	clientSecretKey: 'e9161083359ffcf5dbd011f999abb26a64f26fcb';

  constructor(private _http: Http) { 
  	this.userName = "yasirjanjua";
  	this.clientId = '89b9f2b8af92c17a96a5';
	this.clientSecretKey= 'e9161083359ffcf5dbd011f999abb26a64f26fcb';
  	console.log("github service init...");
  }

  getUser(){
  	return this._http.get('https://api.github.com/users/'+this.userName+'?client_id='+this.clientId+'&client_secret='+this.clientSecretKey)
  		.map(res => res.json());
  }

  getRepos(){
  	return this._http.get('https://api.github.com/users/'+this.userName+'/repos'+'?client_id='+this.clientId+'&client_secret='+this.clientSecretKey)
  		.map(res => res.json());
  }

  searchUser(name){
  	return this.userName = (name) ? name : 'toddmotto';
  }

}
