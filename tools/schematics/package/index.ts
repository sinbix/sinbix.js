import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function (schema: any): Rule {

  console.log('hi');
  return chain([
    // externalSchematic('@nrwl/workspace', 'lib', {
    //   name: schema.name,
    // }),
  ]);
}
