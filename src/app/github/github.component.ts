import { Component, OnInit } from '@angular/core';
import {GithubService} from './github.service';
import { NgModel} from '@angular/forms';


@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})
export class GithubComponent implements OnInit {
	user: any;
	repos: any;
	username: string;

  constructor(private _githubService: GithubService) {
  	this.findUser();
   }

  ngOnInit() {
  }

  findUser(){
  	this._githubService.searchUser(this.username);
  	this._githubService.getUser().subscribe((user)=> {
  		console.log(user);
  		this.user = user;
  	});
  	this._githubService.getRepos().subscribe((repos)=>{
  		this.repos = repos;
  	});
  }

  getUserFullName(){
  	return this.user.name;
  }

  getUserProfileLink(){
  	return this.user.html_url;
  }

  getUsername(){
  	return this.user.login;
  }

  getUserPublicRepos(){
  	return this.user.public_repos;
  }

  getUserPublicGists(){
  	return this.user.public_gists;
  }

  getUserFollowers(){
  	return this.user.followers;
  }

  getUserHire(){
  	return this.user.hireable;
  }

  getUserLocation(){
  	return (this.user.location) ? this.user.location : 'Not Provided';
  }

  getUserBio(){
  	return (this.user.bio) ? this.user.bio : 'Not Provided';
  }

    getUserEmail(){
  	return (this.user.email) ?this.user.email : 'Not Provided';
  }


  getRepoName(repo){
  	return repo.name;
  }
  getRepoDesc(repo){
  	return (repo.description) ? repo.description : 'No Descripton';
  }
  getRepoWatchers(repo){
  	return (repo.watchers_count > -1) ? repo.watchers_count : 'No Watchers';
  }

  getRepoForks(repo){
  	return repo.forks_count;
  }

  getRepoUrl(repo){
  	return repo.html_url;
  }
}
