import { Component, OnInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import 'core-js/es7/reflect';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from "@angular/router";
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isBrowser = false
  errorMessage: string;
  successMessage: string;
  myForm: FormGroup;
  divname: any = 1;

 

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private meta: Meta,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute

  ) {



    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
  }

  ngOnInit() {
    if (!this.isBrowser) {
      return;
    }
  }


  // sets the displayed left item on hover
  mouseHoverEnter(a) {
    this.divname = a;
    document.getElementById(a).style.display ="block";
  }
  mouseHoverLeave(a){
    this.divname = a;
    document.getElementById(a).style.display ="none";
  }
  offline() {
    document.getElementsByClassName('bigpicture1').namedItem
  }


}
