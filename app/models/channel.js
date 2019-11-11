import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default class ChannelModel extends Model {
  @attr('string', { defaultValue: 'kick' }) sound;
  @hasMany steps;
}
