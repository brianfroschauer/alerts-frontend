import {Component, OnInit} from '@angular/core';
import {Alert} from '../../models/alert.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'alerts.page.html',
  styleUrls: ['alerts.page.scss']
})
export class AlertsPage implements OnInit {

  alerts: Alert[];

  constructor() {
    this.alerts = []
  }

  ngOnInit(): void {
    this.getAlerts()
  }

  private getAlerts() {
    this.alerts = [
      new Alert(
        1,
        'Severe Thunderstorm',
        'There is no, repeat NO, active shooter at Walmart. It is a hoax being spread about numerous Walmarts across the state and country.',
        'Thunderstorm',
        'Severe',
        new Date()
      ),
      new Alert(
        2,
        'Police Activity',
        'This alert has expired.',
        'Thunderstorm',
        'Severe',
        new Date()
      ),
      new Alert(
        3,
        'High Wind Warning',
        'The storm which prompted the warning has weakened below severe limits, and has exited the warned area. Therefore, the warning has been allowed to expire.',
        'Thunderstorm',
        'Severe',
        new Date()
      ),
    ]
  }
}
