import { Component } from '@angular/core';
import { MidContainerComponent } from '../mid-container/mid-container.component';
import { ThiredcontainerComponent } from '../thiredcontainer/thiredcontainer.component';
import { FourtComponent } from '../fourt/fourt.component';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [MidContainerComponent,ThiredcontainerComponent,FourtComponent],
  templateUrl: 'container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
