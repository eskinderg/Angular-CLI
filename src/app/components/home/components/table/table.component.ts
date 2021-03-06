import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../../../theme/components/event/event';

@Component(
  {
    selector: 'app-table-event-list',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
  }
)
export class TableComponent {

  @Input()
  events: Event[];

  @Input()
  title: string;

  // @Output()
  // remove: EventEmitter<Event> = new EventEmitter();

  // @Output()
  // toggleComplete: EventEmitter<Event> = new EventEmitter();

  constructor() {
  }

  // onToggleEventComplete(event: Event) {
  //   this.toggleComplete.emit(event);
  // }
  //
  // onRemoveEvent(event: Event) {
  //   this.remove.emit(event);
  // }

}
