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
    this.userDetails= userService.getUser();
  }
  ngOnInit(): void 
  {
  }
  
}
