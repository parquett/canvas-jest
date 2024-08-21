import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-canvas-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas-example.component.html',
  styleUrls: ['./canvas-example.component.scss']
})
export class CanvasExampleComponent implements AfterViewInit {
  title = 'jest-canvas-testing-app';

  @ViewChild('myCanvas', { static: false }) myCanvas!: ElementRef<HTMLCanvasElement>;

  constructor() {
    // Assign a value to the 'myCanvas' property
    this.myCanvas = new ElementRef<HTMLCanvasElement>(document.createElement('canvas'));
  }

  ngAfterViewInit(): void {
    this.draw();
  }

  draw(): void {
    const canvasElement = this.myCanvas.nativeElement;
    const context = canvasElement.getContext('2d');

    if (!context) {
      throw new Error('Failed to get 2D context');
    }

    // Save the canvas state
    context.save();

    // Apply a gradient
    const gradient = context.createLinearGradient(0, 0, 200, 0);
    gradient.addColorStop(0, 'green');
    gradient.addColorStop(1, 'blue');

    // Fill with gradient
    context.fillStyle = gradient;
    context.fillRect(10, 10, 200, 100);

    // Rotate the canvas
    context.rotate((Math.PI / 180) * 45); // Rotate 45 degrees
    context.fillStyle = 'red';
    context.fillRect(50, 50, 100, 50);

    // Restore canvas state
    context.restore();
  }
}