import {Component} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

/**
 * @title Testing with MatProgressSpinnerHarness
 */
@Component({
  selector: 'loader',
  templateUrl: 'loader.component.html',
  styleUrls:['loader.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class loaderComponent {
  //value: number;
}