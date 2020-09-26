import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { PluginsNestSchematicSchema } from './schema';

describe('plugins-nest schematic', () => {
  let appTree: Tree;
  const options: PluginsNestSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@sinbix/plugins-nest',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('plugins-nest', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
