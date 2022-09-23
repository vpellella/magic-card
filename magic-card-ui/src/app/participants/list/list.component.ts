import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ParticipantsService } from 'src/app/common/service/participants.service';
import { merge, switchMap, startWith, catchError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/common/service/shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  participants: any[] = [];
  

  displayedColumns: string[] = ['participantId', 'name', 'mailId', 'contact'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private participantsService: ParticipantsService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.showProgressBar.next(true);
    this.participantsService.getAllParticipants().subscribe(
      (data: any) =>{
        this.participants = data;
        this.dataSource = new MatTableDataSource(this.participants);
        this.sharedService.showProgressBar.next(false);
      }, (error: any) => {
        console.log("Exception encountered");
        this.sharedService.showProgressBar.next(false);
      }
    )
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

