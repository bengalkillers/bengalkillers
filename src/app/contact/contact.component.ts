import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {

	townHalls = ['Town Hall 10', 'Town Hall 9', 'Town Hall 8', 'Town Hall 7', 'Town Hall 6', 'Town Hall 5', 'Just Started Playing'];


	submitForm(f: NgForm) { 

	
/*
		var http_request;
http_request = new XMLHttpRequest();
http_request.onreadystatechange = function () { console.log('sdfsdfsdf'); };
http_request.open("POST", "https://api.clashofclans.com");
http_request.withCredentials = true;
http_request.setRequestHeader("Content-Type", "application/json");
http_request.send({ 'request': "authentication token" });


$.ajax
({
  type: "GET",
  url: "https://api.clashofclans.com/v1/clans/%23PUYPY9vQ",
  async: false,
  //crossDomain: true,
  dataType: 'jsonp',
  //Access-Control-Allow-Origin: '*',
  headers: {
  	'Access-Control-Allow-Origin': '*',
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijc5YjczY2Q0LWQ2NjQtNGZjNi05MmM2LWNkN2NlNzU0OTE5YyIsImlhdCI6MTUzMDk2MjY0MSwic3ViIjoiZGV2ZWxvcGVyL2E5MzViZmU4LTE0MmUtYjczYS03ZWNlLTcxODQ1Y2VmYTAwZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ3LjE1Ljc4LjYxIl0sInR5cGUiOiJjbGllbnQifV19.8LxbUFZabRvwVGnVZQgnfB38l9dTKagX-B_AiHN-Zx5ht6Xe-2wPsU1xJD-EvzNqnSnvwAtCrk4dRKlTMe8XqQ"
  },
  //data: '{ "comment" }',
  success: function (){
    alert('Thanks for your comment!'); 
  },
  error: function() { alert('Failed!'); }
});

		
*/





		//console.log(f.value);
		if ($('#contact_form').validator('validate').has('.has-error').length) {
        	//alert('Server error, please try again after sometime!');
      	} else {
        	 $.ajax({
			    url: "//formspree.io/bengalkillers2015@gmail.com", 
			    method: "POST",
			    data: f.value,
			    dataType: "json",
			     success: function(data) {
			     	//console.log(JSON.stringify(data));
			     	$('#contact_form')[0].reset();
			       $('#success_message').slideDown({ opacity: "show" }, "slow");
			   },
			    error: function() {
			      alert('Server error, please try again later!');
			   }
			});
      	}
  	}  /*Submin ends*/

  constructor() { 

  }

  ngOnInit() {

  }

}
