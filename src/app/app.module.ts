import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { UsersService } from './services/users.service';
import { TimeSpan } from './utils/timeSpanPipe';
import { UserName } from './utils/userName';
import { ChangeBackgroundDirective } from './change-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    TimeSpan,
    UserName,
    ChangeBackgroundDirective,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
