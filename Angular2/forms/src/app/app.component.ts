import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContainerComponent} from './container/container.component'
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MidContainerComponent } from './mid-container/mid-container.component';
import { ThiredcontainerComponent } from './thiredcontainer/thiredcontainer.component';
import { FourtComponent } from './fourt/fourt.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContainerComponent,MidContainerComponent,ThiredcontainerComponent,FourtComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
}
