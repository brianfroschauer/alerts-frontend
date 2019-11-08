import {Component, OnInit} from '@angular/core';
import {Channel} from '../../models/channel.model';


@Component({
  selector: 'app-subscriptions',
  templateUrl: 'subscriptions.page.html',
  styleUrls: ['subscriptions.page.scss']
})
export class SubscriptionsPage implements OnInit {

  subscriptions: Channel[];

  constructor() {
    this.subscriptions = [];
  }

  ngOnInit() {
    this.getSubscriptions();
  }

  private getSubscriptions() {
    this.subscriptions = [
      new Channel(
        1,
        'National Weather Service',
        'Important alerts from across the web',
        new Date()
      ),
      new Channel(
        2,
        'Goffstown Police Department',
        'Official News from the Goffstown',
        new Date()
      ),
      new Channel(
        3,
        'Nixle',
        'Relevant information from your local public safety departments & schools',
        new Date()
      ),
    ]
  }
}
