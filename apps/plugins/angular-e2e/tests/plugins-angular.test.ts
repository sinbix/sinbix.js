import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('plugins-angular e2e', () => {
  it('should create plugins-angular', async (done) => {
    const plugin = uniq('plugins-angular');
    ensureNxProject('@sinbix/angular', 'dist/libs/plugins/angular');
    await runNxCommandAsync(
      `generate @sinbix/angular:app ${plugin}`
    );

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Builder ran');

    done();
  }, 30000);

  describe('--directory', () => {
    it('should create src in the specified directory', async (done) => {
      const plugin = uniq('plugins-angular');
      ensureNxProject('@sinbix/angular', 'dist/libs/plugins/angular');
      await runNxCommandAsync(
        `generate @sinbix/angular:app ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
      done();
    }, 30000);
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async (done) => {
      const plugin = uniq('plugins-angular');
      ensureNxProject('@sinbix/angular', 'dist/libs/plugins/angular');
      await runNxCommandAsync(
        `generate @sinbix/angular:app ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
      done();
    }, 30000);
  });
});
