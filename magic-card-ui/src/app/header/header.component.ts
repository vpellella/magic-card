import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loading: boolean = false;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.showProgressBar.subscribe(data => {
      this.loading = data;
    });
  }

}
