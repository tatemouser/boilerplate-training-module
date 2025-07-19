import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user.service';
import { HttpClientModule } from '@angular/common/http';  

@Component({
    selector: 'app-entry',
    standalone: true,
    imports: [FormsModule, CommonModule, HttpClientModule],
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
    isSignup = false;
    username = '';
    password = '';
    repeatPassword = '';

    constructor(private router: Router, private userService: UserService) {}

    onSubmit(): void {
        if (!this.username) {
            alert("Username is required");
            return;
        }

        if (this.isSignup) {
            this.userService.addUser(this.username).subscribe(() => {
                this.router.navigate(['/home']);
            });
        } else {
            this.userService.checkUserExists(this.username).subscribe(exists => {
                if (exists) {
                    this.router.navigate(['/home']);
                } else {
                    alert("User does not exist, please sign up.");
                }
            });
        }
    }
}