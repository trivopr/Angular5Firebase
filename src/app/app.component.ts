import { Component } from '@angular/core';
// import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  courses: any[];

  constructor(db: AngularFireDatabase) {
    db.object(`connected`).valueChanges().subscribe(conn => console.log('conn:', conn));
    const courses$ = db.list('/courses').valueChanges();

    courses$
      .take(2)
      .subscribe(
        next => console.log('next', next),
        // error => console.log('You get err:', error),
        () => console.log('you complete')
      );
  }
}
