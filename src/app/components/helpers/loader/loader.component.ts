import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Loader } from './../../../models/loader.model';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styles: [
    `
      .loading {
    position: fixed;
    z-index: 999;
    height: 2em;
    width: 2em;
    overflow: show;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
/* Transparent Overlay */
.loading:before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
   /* hide "loading..." text */
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
}
.loading:not(:required):after {
    content: '';
    display: block;
    font-size: 20px;
    width: 1em;
    height: 1em;
    margin-top: -0.5em;
    -webkit-animation: spinner 1500ms infinite linear;
    -moz-animation: spinner 1500ms infinite linear;
    -ms-animation: spinner 1500ms infinite linear;
    -o-animation: spinner 1500ms infinite linear;
    animation: spinner 1500ms infinite linear;
    border-radius: 0.5em;
    -webkit-box-shadow: rgba(235, 235, 235, 0.75) 1.5em 0 0 0, rgba(235, 235, 235, 0.75) 1.1em 1.1em 0 0, rgba(235, 235, 235, 0.75) 0 1.5em 0 0, rgba(235, 235, 235, 0.75) -1.1em 1.1em 0 0, rgba(235, 235, 235, 0.5) -1.5em 0 0 0, rgba(235, 235, 235, 0.5) -1.1em -1.1em 0 0, rgba(235, 235, 235, 0.75) 0 -1.5em 0 0, rgba(235, 235, 235, 0.75) 1.1em -1.1em 0 0;


    box-shadow: rgba(235, 235, 235, 0.75) 1.5em 0 0 0, rgba(235, 235, 235, 0.75) 1.1em 1.1em 0 0, rgba(235, 235, 235, 0.75) 0 1.5em 0 0, rgba(235, 235, 235, 0.75) -1.1em 1.1em 0 0, rgba(235, 235, 235, 0.75) -1.5em 0 0 0, rgba(235, 235, 235, 0.75) -1.1em -1.1em 0 0, rgba(235, 235, 235, 0.75) 0 -1.5em 0 0, rgba(235, 235, 235, 0.75) 1.1em -1.1em 0 0;
}
/* Animation */
@-webkit-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
   }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
   }
}
@-moz-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
   }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
   }
}
@-o-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
   }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
   }
}
@keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
   }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
   }
}
    `
  ]
})
export class LoaderComponent implements OnInit, OnDestroy {
  show: boolean = false;
  private subscription: Subscription;

  constructor(private loading: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loading.loader
        .subscribe((state: Loader) => {
          this.show = state.show;
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
