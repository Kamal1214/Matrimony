import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  userDetails: any = [
    {
      "userId": "M1234567",
      "user_img": "../../assets/imgs/1.jpg",
      "name": "Kamal",
      "age": "29",
      "ht_ft": "5",
      "ht_in": "11",
      "lang": "Tamil",
      "caste": "Nair",
      "education": "MBA",
      "profession": "Engineer",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "country": "India"
    }, {
      "userId:": "M1234568",
      "user_img": "../../assets/imgs/2.jpg",
      "name": "Kannan",
      "age": "30",
      "ht_ft": "5",
      "ht_in": "8",
      "lang": "Tamil",
      "caste": "Naidu",
      "education": "MCA",
      "profession": "Engineer",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "country": "India"
    }, {
      "userId:": "M1234569",
      "user_img": "../../assets/imgs/3.jpg",
      "name": "Balaji",
      "age": "30",
      "ht_ft": "5",
      "ht_in": "6",
      "lang": "Tamil",
      "caste": "Nair",
      "education": "MCA",
      "profession": "Engineer",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "country": "India"
    }, {
      "userId:": "M1234570",
      "user_img": "../../assets/imgs/4.jpg",
      "name": "Naveen",
      "age": "25",
      "ht_ft": "5",
      "ht_in": "9",
      "lang": "Tamil",
      "caste": "Nair",
      "education": "MCA",
      "profession": "Engineer",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "country": "India"
    }
  ]

  constructor(public toast: ToastController) { }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: `${message}`,
      duration: 2000
    });
    toast.present();
  }

  
}
