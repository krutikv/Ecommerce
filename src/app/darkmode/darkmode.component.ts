import { Component } from "@angular/core";
import { DarkModeService } from "angular-dark-mode";
import { Observable } from "rxjs";

@Component({
    selector: 'app-dark-mode-toggle',
    templateUrl:'darkmode.component.html'
  
  })
  export class DarkModeToggle {
    darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
    isactive:boolean=true;
    constructor(private darkModeService: DarkModeService) {}
  
    onToggle(): void {
      this.darkModeService.toggle();
      this.isactive=!this.isactive;
    }
  }