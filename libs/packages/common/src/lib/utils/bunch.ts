import * as _ from 'lodash-es';
import { IBunchCallback, TBunch } from '../types';

export function bunchHandler(
  bunch: TBunch<any>,
  callback: IBunchCallback<any>
) {
  if (_.isArray(bunch)) {
    bunch.map((entiry) => {
      callback(entiry);
    });
  } else {
    callback(bunch);
  }
}
