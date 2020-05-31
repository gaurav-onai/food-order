import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'food-order-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'food-order';

  links: {url:string,name:string}[] = [
    {url:'', name:'Home'},
    {url:'restaurants', name:'Restaurants'},
    {url:'order', name:'Orders'},
  ]

  @ViewChild('sidenav')sideNav:MatSidenav;

  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription

  constructor(){}

  ngAfterViewInit(){
    this.setWidth();

  }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.setWidth();
    })
  }

  setWidth(){
    if(this.sideNav){
    if(window.innerWidth>1050)
    this.sideNav.mode = 'side';
    else
    this.sideNav.mode ='push';
  }
  }
  toggle(){
    this.sideNav.toggle()
  }
  
}
