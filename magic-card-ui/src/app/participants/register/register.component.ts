import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParticipantsService } from 'src/app/common/service/participants.service';
import { SharedService } from 'src/app/common/service/shared.service';
import { Participant } from '../model/participant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  participantName ='';
  dob = '';
  email = '';
  contactNo = 0;
  cardName = '';
  cardPrice = 0;
  message = '';

  constructor(
    private participantService: ParticipantsService,
    private sharedService: SharedService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  
  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action);
  // }
  openSnackBar() {
    this._snackBar.open(this.message, 'Close');
  }

  submit() {
    this.sharedService.showProgressBar.next(true);
    let age = new Date().getFullYear() - new Date(this.dob).getFullYear();
    let participant: Participant = {
      name: this.participantName,
      age: age,
      mailId: this.email,
      contact: this.contactNo,
      card: {
        cardName: this.cardName,
        price: this.cardPrice
      }
    }
    this.participantService.register(participant).subscribe(
      (data) =>{
        this.sharedService.showProgressBar.next(false);
      }, (err: HttpErrorResponse) => {
        console.error(err.error.text)
        this.message =  err.error.text;
        this.openSnackBar();
        this.sharedService.showProgressBar.next(false);
      }
    )
  }

}
