import { Component, OnInit } from '@angular/core';

import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})


export class RepositoriesComponent implements OnInit {

  repositories : any = [];

  repository : IRepository = {name:"", description:""};
  newRepository : IRepository = {name:"", description:""};

  constructor(private repoService : RepositoriesService) { }

  ngOnInit() {
    this.repository = {name: 'nombre1', description: 'description1'};
    //
    // setTimeout(() => {
    //   this.repositories = [
    //     {name: 'nombre1', description: 'description1'},
    //     {name: 'nombre2', description: 'description2'},
    //     {name: 'nombre3', description: 'description3'},
    //     {name: 'nombre4', description: 'description4'}
    //   ];
    // }, 2000);


    this.repoService.getRepo().subscribe((data) => {
      this.repositories = data.json();
      this.repository = this.repositories[0];

      console.log(data.json());
    })
  }

  setMainRepository(repository){
    this.repository = repository;
  }

  addNewRepo() {
    this.repositories.unshift(this.newRepository);

    this.newRepository = {name:"", description:""};
  }

}


interface IRepository {
  name : string,
  description : string
}
