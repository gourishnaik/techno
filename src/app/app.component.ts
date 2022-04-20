import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ServiceService } from './service.service';

interface Animal {
  name: string;
}
interface mamals {
  name: string;
}
interface submamls {
  name: string;
}





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
public searchterm: string='';
  searchkey:string='';

  constructor(private service:ServiceService){}

  myform!:any
  animalControl = new FormControl('');
  selectFormControl = new FormControl('');
  animals: Animal[] = [
    {name: 'Coustomer success'},
    {name: 'Engineering'},
   
  ];
  mamals: mamals[] = [
    {name: 'Karwar'},
    {name: 'Verna,Goa'},
   
  ];

submamls:submamls[]=[

  {name: 'Customer success'},
  {name: 'Information Technology'},

]



   ngOnInit() {
     
    this.service.search.subscribe((val:any)=>{

this.searchkey=val;
    })
      
    
   
  
   }
   
   search(event:any){
     this.searchterm=(event.target as HTMLInputElement).value;
     this.service.search.next(this.searchterm);
   }


  }
   
 
  
    
      
    