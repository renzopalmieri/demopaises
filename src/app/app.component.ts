import { Component, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loadedFeature = false;


  private _opened: boolean = false;

private _toggleSidebar() {
  this._opened = !this._opened;
}  

  onNavigate( ) {

    if(this.loadedFeature == true){
      $("#contenido").toggleClass("active");

      console.log("funciona el togle");
      this.loadedFeature = false;
      console.log(this.loadedFeature);
    }
    else if(this.loadedFeature == false){
      console.log("funciona el togle");
      this.loadedFeature = true;
      console.log(this.loadedFeature);
    }

   
  }

}
