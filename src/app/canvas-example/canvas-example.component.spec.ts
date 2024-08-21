import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanvasExampleComponent } from './canvas-example.component';
import { ElementRef } from '@angular/core';
import 'jest-canvas-mock';

describe('AdvancedCanvasComponent', () => {
  let component: CanvasExampleComponent;
  let fixture: ComponentFixture<CanvasExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasExampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasExampleComponent);
    component = fixture.componentInstance;

    // Mock the canvas element
    component.myCanvas = new ElementRef<HTMLCanvasElement>(
      document.createElement('canvas')
    );

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a gradient and draw rectangles', () => {
    const canvasElement = component.myCanvas.nativeElement;
    const context = canvasElement.getContext('2d') as jest.Mocked<CanvasRenderingContext2D>;

    // Ensure gradient creation and rectangle drawing were called
    expect(context.createLinearGradient).toHaveBeenCalledWith(0, 0, 200, 0);
    expect(context.fillRect).toHaveBeenCalledWith(10, 10, 200, 100); // First rectangle
    expect(context.rotate).toHaveBeenCalledWith((Math.PI / 180) * 45); // Rotation
    expect(context.fillRect).toHaveBeenCalledWith(50, 50, 100, 50); // Rotated rectangle
  });

  it('should save and restore canvas state', () => {
    const canvasElement = component.myCanvas.nativeElement;
    const context = canvasElement.getContext('2d') as jest.Mocked<CanvasRenderingContext2D>;

    // Ensure save and restore were called
    expect(context.save).toHaveBeenCalledTimes(1);
    expect(context.restore).toHaveBeenCalledTimes(1);
  });
});
