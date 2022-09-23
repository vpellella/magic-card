import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../common/module/material.module';
import { ListComponent } from './list/list.component';
import { ParticipanstRoutingModule } from './participants-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    ListComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ParticipanstRoutingModule,
    MaterialModule,
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  exports: [ListComponent]
})
export class ParticipantsModule { }
