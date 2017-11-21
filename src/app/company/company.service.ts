import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';

@Injectable()
export class CompanyService {
  company$: AngularFireObject<{}>;

  constructor(private db: AngularFireDatabase) {
    this.company$ = db.object('/company');
  }

  saveCompany(name) {
    Observable
      .from(this.company$.set({name: name}))
      .catch(err => {
        console.log('errrrrrr');
        return Observable.throw(err);
      });
  }

  editCompany(name) {
    this.company$.update({phone: '12356897'});
  }

  removeCompany() {
    this.company$.remove().then(() => console.log('Delected Successfull !'));
  }

}
