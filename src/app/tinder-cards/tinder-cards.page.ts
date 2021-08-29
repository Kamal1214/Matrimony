import { Component, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { UserdataService } from "../services/userdata.service";
import { Gesture, GestureController, IonCard } from "@ionic/angular";

@Component({
  selector: 'app-tinder-cards',
  templateUrl: './tinder-cards.page.html',
  styleUrls: ['./tinder-cards.page.scss'],
})
export class TinderCardsPage implements AfterViewInit {
  @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef>;
  gesture: any;
  userData: any;
  longPressActive = false;
  cardArray: any;

  constructor(public userDetails: UserdataService, public gestureCtrl: GestureController) {
    this.userData = this.userDetails.userDetails;
  }

  ngAfterViewInit() {
    this.cardArray = this.cards.toArray();
    this.useTinderSwipe(this.cardArray);
  }

  useTinderSwipe(cardArray) {
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swipte',
        onStart: ev => {
        },
        onMove: ev => {
          card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
        },
        onEnd: ev => {
          card.nativeElement.style.transition = '1s ease-out';
          if (ev.deltaX > 150 || ev.deltaX < -150) {
            this.onEndMethod(ev);
          } else {
            card.nativeElement.style.transform = '';
          }
        }
      });
      gesture.enable(true);
    }
  }

  onEndMethod(ev) {
    if (ev.deltaX > 150) {
      this.userDetails.presentToast('Interested');
    } else if (ev.deltaX < -150) {
      this.userDetails.presentToast('Not Interested');
    }
  }

  onEndShortlist() {
    this.userDetails.presentToast('Shortlisted');
  }

  interested(i) {
    const card = this.cardArray[i];
    card.nativeElement.style.transform = `translateX(${2500}px) rotate(${2500 / 10}deg)`;
    card.nativeElement.style.transition = '1s ease-out';
    this.onEndMethod({ deltaX: 2500 });
  }
  notInterested(i) {
    const card = this.cardArray[i];
    card.nativeElement.style.transform = `translateX(-${2500}px) rotate(-${2500 / 10}deg)`;
    card.nativeElement.style.transition = '1s ease-out';
    this.onEndMethod({ deltaX: -2500 });
  }
  shortlist(i) {
    const card = this.cardArray[i];
    card.nativeElement.style.transform = `translateX(${2500}px) rotate(${2500 / 10}deg)`;
    card.nativeElement.style.transition = '1s ease-out';
    this.onEndShortlist();
  }

}