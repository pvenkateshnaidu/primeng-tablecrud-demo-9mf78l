import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiService';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss'],
})
export class DriveComponent implements OnInit {
  data: any[] = [];
  targetData: any[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().then((data) => (this.data = data));
    this.apiService.getTargetData().then((data) => (this.targetData = data));
  }
  getCellColor(name: string): string {
    if (name === 'G') {
      return '#34FE38';
    } else if (name === 'Y') {
      return 'rgb(254,254,105)';
    } else {
      return '';
    }
  }
}
