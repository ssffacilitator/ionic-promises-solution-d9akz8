import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public toast: ToastController,
    public loadCtrl: LoadingController,
    ) {
      this.toast1.onDidDismiss(_ => {
      this.loader.dismiss()
        .then(_ => {
          this.toast2.present()
        })
    })
      
      this.toast1.present()
        .then(_ => {
          this.loader.present()
        })
  }

  toast1: any = this.toast.create({
      message: 'fetching Data',
      duration: 2000,
      position: 'top',
    })

  toast2 = this.toast.create({
    message: 'Unable to Locate Date',
    duration: 2000,
    position: 'top',
  });

  loader = this.loadCtrl.create({

  })


}
