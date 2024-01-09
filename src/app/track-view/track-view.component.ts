import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Item {
  id: number;
  name: string;
}

const fullNameItems: Item[] = [
  { id: 3, name: 'Item #3' },
  { id: 2, name: 'Item #2' },
  { id: 1, name: 'Item #1' },
];

@Component({
  selector: 'app-track-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './track-view.component.html',
  styleUrl: './track-view.component.scss'
})
export class TrackViewComponent {
  values = ['', '', '']; // Werte der Eingabefelder (initial)
  items: Item[]; // Array mit Werten für *ngFor
  toggle: boolean;

  constructor() {
    this.items = fullNameItems;
    this.toggle = false;
    setInterval(() => {
      if (this.items.length >= 50) {
        this.items = [];
      }
      this.addItem();
    }, 5000);
  }

  addItem() {
    const num = this.items.length + 1;
    this.toggle = !this.toggle;
    this.items = [
      { id: num, name: `Item #${num}` },

      // with the following line will make the third column work as referecnes of the objects are kept
      // ...this.items,

      // with the follwoing line will make the third column not working as the references are not the same anymore (item === item  => false)
      ...structuredClone(this.items),
    ];
  }
}
