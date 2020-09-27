import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { AppAngularSchematicSchema } from './schema';

describe('plugins-angular schematic', () => {
  let appTree: Tree;
  const options: AppAngularSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@sinbix/plugins-angular',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner
        .runSchematicAsync('plugins-angular', options, appTree)
        .toPromise()
    ).resolves.not.toThrowError();
  });
});
