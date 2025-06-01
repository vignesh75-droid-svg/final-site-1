import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-showreel',
  imports: [CommonModule],
  templateUrl: './showreel.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './showreel.component.css'
})
export class ShowreelComponent{

    cards = [
      { title: 'Hexa LED', description: 'Open Source LED Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, dolorem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, dolorem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, dolorem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, doloremLorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, dolorem', image: 'pixel.jpeg' },
      { title: 'Springy Penguin', description: 'Fun & Free...', image: 'assets/penguin.jpg' },
      { title: 'Smart Sensor', description: 'IoT magic...', image: 'assets/sensor.jpg' },
      { title: 'Cloud Box', description: 'Cloud control...', image: 'assets/cloud.jpg' },
      { title: 'Auto Rover', description: 'Autonomous vehicle...', image: 'assets/rover.jpg' }
    ];
  
    centerIndex = 0;
    visibleCount = 3;
  
    get visibleCards() {
      const half = Math.floor(this.visibleCount / 2);
      const result = [];
      for (let i = -half; i <= half; i++) {
        const index = (this.centerIndex + i + this.cards.length) % this.cards.length;
        result.push(this.cards[index]);
      }
      return result;
    }
  
    get centerRelativeIndex() {
      return Math.floor(this.visibleCount / 2);
    }
  
    next() {
      this.centerIndex = (this.centerIndex + 1) % this.cards.length;
    }
  
    prev() {
      this.centerIndex = (this.centerIndex - 1 + this.cards.length) % this.cards.length;
    }
  
    getCardStyle(i: number) {
      const offset = i - this.centerRelativeIndex;
      const scale = offset === 0 ? 1 : 0.8;
      const zIndex = 10 - Math.abs(offset);
      const translateX = offset * 110;
  
      return {
        transform: `translateX(${translateX}%) scale(${scale})`,
        zIndex: zIndex,
        opacity: offset > 1 || offset < -1 ? '0' : '1',
        transition: 'transform 0.5s ease, opacity 0.5s ease'
      };
    }
    private isDragging = false;
private startX = 0;
private currentX = 0;

onDragStart(event: MouseEvent | TouchEvent) {
  this.isDragging = true;
  this.startX = this.getX(event);
}

onDragMove(event: MouseEvent | TouchEvent) {
  if (!this.isDragging) return;
  this.currentX = this.getX(event);
}

onDragEnd(event: MouseEvent | TouchEvent) {
  if (!this.isDragging) return;
  this.isDragging = false;

  const diffX = this.currentX - this.startX;
  const threshold = 50; // Adjust sensitivity

  if (diffX > threshold) {
    this.prev(); // Swipe Right → Show previous card
  } else if (diffX < -threshold) {
    this.next(); // Swipe Left → Show next card
  }
}

private getX(event: MouseEvent | TouchEvent): number {
  if (event instanceof MouseEvent) {
    return event.clientX;
  } else {
    return event.touches[0].clientX;
  }
}
  }
