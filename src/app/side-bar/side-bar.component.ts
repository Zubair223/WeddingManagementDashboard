import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
