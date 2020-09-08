import {
  chain,
  externalSchematic,
  SchematicContext,
  Rule,
  Tree,
  apply,
  source
} from '@angular-devkit/schematics';
// import { getProjectConfig } from '@nrwl/workspace';

export default function (schema: any): Rule {

  console.log(schema);
  return async (tree: Tree, _context: SchematicContext) => {


    // console.log(getProjectConfig(tree, 'packages-ngx-utils'));

    return chain([]);
  };
}
