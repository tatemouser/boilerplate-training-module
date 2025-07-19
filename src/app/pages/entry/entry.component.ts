import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
    constructor(private router: Router) { }

    onSubmit() : void {
        this.router.navigate(['/home']);
    }
}