import * as path from 'path';
import * as webpack from 'webpack';

export default (config: webpack.Configuration) => {
  config.resolve.alias['@sinbix/angular-ui/theming'] = path.resolve(
    __dirname,
    'angular-ui/_theming'
  );

  return config;
};
