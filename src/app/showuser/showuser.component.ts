import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
 
@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit 
{
  userDetails:any[] = [];
  constructor(private userService: UsersService) 
  {
   
  }
  ngOnInit(): void 
  { this.userService.fetchData().subscribe(data=>{
    this.userDetails=data.map(e=>{
      return {
        id:e.payload.doc.id,
        name:e.payload.doc.data()['name'],
        email:e.payload.doc.data()['email'],
        phone:e.payload.doc.data()['phone'],
        address:e.payload.doc.data()['address'],
      }
    })
  });
  }

  deleteRec(tempId)
  {this.userService.deleteR(tempId);

  }
  
}
