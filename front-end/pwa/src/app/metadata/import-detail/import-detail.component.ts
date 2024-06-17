import { Component } from '@angular/core';

@Component({
  selector: 'app-import-detail',
  templateUrl: './import-detail.component.html',
  styleUrls: ['./import-detail.component.scss']
})
export class ImportDetailComponent {

  isCollapsed: { [key: string]: boolean } = {
    station: false,
    element: false,
    period: false,
    period1: false,
    elevation: false,
    value: false,
    flag: false,
    utc: true,
    scaled: true,
    skipRows: true,
    delimiters: true,
    datetimeColumns: true,
    datetimeFormat: true,
    hourColumn: true
  };

toggleCollapse(column: string) {
    this.isCollapsed[column] = !this.isCollapsed[column];
}

// Other component logic as needed

isElementSingle: boolean = true;

  toggleElementType(type: string) {
    this.isElementSingle = (type === 'single');
  }

  save() {
    // Implement save logic here
    console.log('Save button clicked');
  }

  preview() {
    // Implement preview logic here
    console.log('Preview button clicked');
  }

  cancel() {
    // Implement cancel logic here
    console.log('Cancel button clicked');
  }

}
