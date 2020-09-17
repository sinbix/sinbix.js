import * as path from 'path';
import * as webpack from 'webpack';

export default (config: webpack.Configuration) => {
  config.resolve.alias['@sinbix/ngx-ui/theming'] = path.resolve(
    __dirname,
    'ngx-ui/_theming'
  );
  config.resolve.alias['@sinbix/ngx-ui-material/theming'] = path.resolve(
    __dirname,
    'ngx-ui-material/_theming'
  );

  return config;
};
