import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default class SongModel extends Model {
  @attr name;
  @attr('number', { defaultValue: 120 }) tempo;
  @hasMany channels;
}
