import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reel',
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './reel.component.html',
  styleUrl: './reel.component.css'
})
export class reelComponent {
  
    cards = [
      { title: 'Open Source LED Controller', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias, repellat,temporibus, consequatur, at ipsam sint iusto delectus laborum saepe sed erroraspernatur voluptatibus mollitia labore a? Nemo, reprehenderit, fugiat totamatque voluptas quae ex blanditiis deleniti soluta LED Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias, repellat,temporibus, consequatur, at ipsam sint iusto delectus laborum saepe sed erroraspernatur voluptatibus mollitia labore a? Nemo, reprehenderit, fugiat totamatque voluptas quae ex blanditiis deleniti soluta', image: 'pixel.jpeg' },
      { title: 'Frustratingly-Fun&Free in One!', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias, repellat,temporibus, consequatur, at ipsam sint iusto delectus laborum saepe sed erroraspernatur voluptatibus mollitia labore a? Nemo, reprehenderit, fugiat totamatque voluptas quae ex blanditiis deleniti soluta LED Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias, repellat,temporibus, consequatur, at ipsam sint iusto delectus laborum saepe sed erroraspernatur voluptatibus mollitia labore a? Nemo, reprehenderit, fugiat totamatque voluptas quae ex blanditiis deleniti soluta', image: 'pixel.jpeg' },
      { title: 'Linux Network Driver', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias, repellat,temporibus, consequatur, at ipsam sint iusto delectus laborum saepe sed erroraspernatur voluptatibus mollitia labore a? Nemo, reprehenderit, fugiat totamatque voluptas quae ex blanditiis deleniti soluta LED Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias, repellat,temporibus, consequatur, at ipsam sint iusto delectus laborum saepe sed erroraspernatur voluptatibus mollitia labore a? Nemo, reprehenderit, fugiat totamatque voluptas quae ex blanditiis deleniti soluta', image: 'pixel.jpeg' },
      { title: 'An Awwward Winning Landingpage', description: 'Cloud control Open Source LED Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias, repellat,temporibus, consequatur, at ipsam sint iusto delectus laborum saepe sed erroraspernatur voluptatibus mollitia labore a? Nemo, reprehenderit, fugiat totamatque voluptas quae ex blanditiis deleniti soluta LED Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias, repellat,temporibus, consequatur, at ipsam sint iusto delectus laborum saepe sed erroraspernatur voluptatibus mollitia labore a? Nemo, reprehenderit, fugiat totamatque voluptas quae ex blanditiis deleniti soluta', image: 'pixel.jpeg' },
      { title: 'A Slicer for the Professional User', description: 'Autonomous vehicle Open Source LED Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias, repellat,temporibus, consequatur, at ipsam sint iusto delectus laborum saepe sed erroraspernatur voluptatibus mollitia labore a? Nemo, reprehenderit, fugiat totamatque voluptas quae ex blanditiis deleniti soluta LED Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias, repellat,temporibus, consequatur, at ipsam sint iusto delectus laborum saepe sed erroraspernatur voluptatibus mollitia labore a? Nemo, reprehenderit, fugiat totamatque voluptas quae ex blanditiis deleniti soluta', image: 'pixel.jpeg' }
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
  const threshold = 50;

  if (diffX > threshold) {
    this.prev(); 
  } else if (diffX < -threshold) {
    this.next(); 
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