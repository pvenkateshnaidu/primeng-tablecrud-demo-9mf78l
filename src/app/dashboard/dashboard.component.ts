import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../apiService';
import { Organizationts } from '../organizations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  organizations: Organizationts[];

  selectedOrg: Organizationts;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getOrgs().then((data) => (this.organizations = data));
  }
  onRowSelect(event) {
    this.router.navigate(['edrive']);
  }
}
