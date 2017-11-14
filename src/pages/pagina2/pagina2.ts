import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  canEnter:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

ir_pagina3(){
  this.navCtrl.push("mi-pagina3")
}
ionViewDidLoad(){
  console.log("ionViewDidLoad")
}

ionViewWillEnter(){
  console.log("ionViewWillEnter")

}
ionViewDidEnter(){
  console.log("ionViewDidEnter")

}
ionViewWillLeave(){
  console.log("ionViewWillLeave")

}
ionViewDidLeave(){
  console.log("ionViewDidLeave")

}
ionViewWillUnload(){
  console.log("ionViewWillUnload")

}
ionViewCanEnter(){
  console.log("ionViewCanEnter");

  // let numero = Math.round( Math.random() * 10);
  // console.log(numero);
  //
  // if(numero>=3){
  //   return true
  // }else{
  //   return false
  // }
  let promesa = new Promise((resolve,reject)=>{
    let confirm = this.alertCtrl.create({
      title: 'Seguro?',
      message: 'Está seguro que desea entrar?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => resolve(false)
        },
        {
          text: 'Segurísimo',
          handler: () => resolve(true)
        }
      ]
    });
    confirm.present();

  })
  return promesa;


}
ionViewCanLeave(){
  let loading = this.loadingCtrl.create({
    content: "Espere por favor"
  })
  loading.present();
  console.log("Espere dos segundos para salir");

  let promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      loading.dismiss();
      resolve(true);

    },2000);
  })
  return promesa

}

showConfirm() {
   let confirm = this.alertCtrl.create({
     title: 'Seguro?',
     message: 'Está seguro que desea entrar?',
     buttons: [
       {
         text: 'Cancelar',
         handler: () => {

           console.log('Disagree clicked');
           return true;
         }
       },
       {
         text: 'Segurísimo',
         handler: () => {
           this.canEnter
           console.log('Agree clicked');
           return false;
         }
       }
     ]
   });
   confirm.present();
 }

}
