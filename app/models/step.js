import DS from 'ember-data';

const { Model, attr } = DS;

export default class StepModel extends Model {
  @attr('number', { defaultValue: 0 }) volume;
}
