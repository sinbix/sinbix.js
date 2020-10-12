import * as _ from 'lodash-es';
import { BunchCallback, Bunch } from '../types';

export function bunchHandler(bunch: Bunch<any>, callback: BunchCallback<any>) {
  if (_.isArray(bunch)) {
    bunch.map((entiry) => {
      callback(entiry);
    });
  } else {
    callback(bunch);
  }
}
