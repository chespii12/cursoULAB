import { Component, ViewChild } from '@angular/core';
import { IonList, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('myList') listRef: IonList;
  reorder: boolean;
  list: any;
  text: string;
  constructor(public loadingController:LoadingController,private camera:Camera) {
    this.text = "";
    this.list = localStorage.getItem('places-list');
    if (this.list) this.list = JSON.parse(this.list);
    else this.list = [];
  }
  async add(event?) {
    let loading = await this.loadingController.create({duration:15000});
    loading.present();
    navigator.geolocation.getCurrentPosition(pos => {
      let url = "https://maps.google.com/maps?&z=15&t=k&q="+pos.coords.latitude+" "+pos.coords.longitude;
      if (event) {
        let reader = new FileReader();
        reader.onload = (data:any) => {
          this.list.unshift({name:this.text,img:data.target.result,url:url});
          this.save();
          loading.dismiss();
        }
        reader.readAsDataURL(event.target.files[0]);
      }
      else {
        loading.dismiss();
        const options:CameraOptions = {targetWidth:100,destinationType:this.camera.DestinationType.DATA_URL};
        this.camera.getPicture(options).then(data => {
          this.list.unshift({name:this.text,img:"data:image/jpeg;base64,"+data,url:url});
          this.save();         
        });
      }
    });
  }
  save() {
    localStorage.setItem('places-list', JSON.stringify(this.list));
    this.text = "";
  }
  delete(item) {
    this.listRef.closeSlidingItems();
    this.list.splice(item, 1);
    this.save();
  }
  move(indexes) {
    let item = this.list[indexes.from];
    this.list.splice(indexes.from, 1);
    this.list.splice(indexes.to, 0, item);
    this.save();
  }
}