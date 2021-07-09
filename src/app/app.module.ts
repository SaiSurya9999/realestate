import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarousalComponent } from './carousal/carousal.component';
import { HomeComponent } from './home/home.component';
import { LegionComponent } from './legion/legion.component';
import { LegionLeftComponent } from './legion-left/legion-left.component';
import { LegionRightComponent } from './legion-right/legion-right.component';
import { LegionService } from './legion.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LeftComponent,
    RightComponent,
    CarousalComponent,
    HomeComponent,
    LegionComponent,
    LegionLeftComponent,
    LegionRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LegionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
