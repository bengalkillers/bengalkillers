import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'From controller';
  name = 'Sample text';	

  constructor() { }


  closeMenu() {
  	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	 $('.navbar-toggle').click();
	}
  	
  }

  statsAlert() {
  	alert('Supposed to show real time data of Clan and Members.Facing some issue rendering COC API data.This section will be live soon');
  	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  		$('.navbar-toggle').click();
  	}
  }


}
