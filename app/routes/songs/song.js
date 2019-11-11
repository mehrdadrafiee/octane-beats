import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SongsSongRoute extends Route {
  @service store;
  @service playback;

  model({ song_id }) {
    return this.store.peekRecord('song', song_id);
  }

  afterModel(song) {
    this.playback.song = song;
  }
}
