import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  beforeModel() {
    let kidA = this.store.createRecord('song', { id: 1, name: 'Kid A' });
    let kickChannel = kidA.channels.createRecord({ sound: 'kick' });
    kickChannel.steps.createRecord();
    kickChannel.steps.createRecord();
    kickChannel.steps.createRecord();
    kickChannel.steps.createRecord();

    let clapChannel = kidA.channels.createRecord({ sound: 'clap' });
    clapChannel.steps.createRecord();
    clapChannel.steps.createRecord();
    clapChannel.steps.createRecord();
    clapChannel.steps.createRecord();

    this.store.createRecord('song', { id: 2, name: 'Threefingers' });
    this.store.createRecord('song', { id: 3, name: 'Rounded' });
  }
}
