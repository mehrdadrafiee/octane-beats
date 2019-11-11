import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';

export default class PlaybackService extends Service {
  @tracked song;
  @tracked tickCount = 0;
  @tracked isPlaying = false;

  @action
  play() {
    this.tickCount = 0;
    this.isPlaying = true;
    this.tick.perform();
  }

  @action
  stop() {
    this.isPlaying = false;
  }

  @action
  decreaseTempo() {
    this.song.tempo -= 5;
  }

  @action
  increaseTempo() {
    this.song.tempo += 5;
  }

  @task
  *tick() {
    if (this.isPlaying) {
      yield timeout(500);
      this.tickCount++;
      this.tick.perform();
    }
  }
}
