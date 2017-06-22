import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./user";
@Component({
    selector: 'my-app',
    template: `
        <h1>Users</h1>
        <p>
            <a class="btn btn-primary" href="/users/new">Add user</a>
        </p>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>

            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let user of users">
                <td>{{user?.name}}</td>
                <td>{{user?.email}}</td>
                <td><i class=" glyphicon glyphicon-pencil "></i></td>
                <td><i class=" glyphicon glyphicon-remove "></i></td>

            </tr>
            </tbody>
        </table>
    `
})
export class HomePageComponent implements OnInit {
    private users: User[] = [];

    constructor(private _userService: UserService) {


    }

    ngOnInit() {
        this._userService.getUsers()
            .subscribe(
                users => {
                    console.log("Usersss")

                    console.log(JSON.parse(JSON.stringify(users)));
                    this.users = users;
                },
                error => {
                    console.log(error);
                    console.log("Error");
                });
        console.log("X")

    }
}
/*{

 users = [ {"firstName":"Ali" , "lastName":"Yapar","userName":"User1"}, {"firstName":"Mehmet", "lastName":"Yapar","userName":"User2"},
 {"firstName":"Can", "lastName":"Yapar","userName":"User3"}];


 }
 */