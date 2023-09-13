import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ApiService } from '../apiService';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss'],
})
export class DriveComponent implements OnInit {
  data: any[] = [];
  targetData: any[] = [];
  modelYearOptions: SelectItem[] = [];
  healthChartOptions: SelectItem[] = [];
  commodityFilterOptions: SelectItem[] = [];
  programFilterOptions: SelectItem[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.modelYearOptions = [
      {
        label: '2023.0 My',
        value: '2023',
      },
      {
        label: '2022.0 My',
        value: '2024',
      },
    ];
    this.healthChartOptions = [
      {
        label: 'eDrive Applications',
        value: 'eDrive Applications',
      },
    ];
    this.commodityFilterOptions = [
      {
        label: 'All',
        value: 'All',
      },
    ];
    this.programFilterOptions = [
      {
        label: 'All',
        value: 'All',
      },
    ];
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
