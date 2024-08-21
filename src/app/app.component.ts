import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasExampleComponent } from "./canvas-example/canvas-example.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CanvasExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jest-canvas-testing-app';
}
