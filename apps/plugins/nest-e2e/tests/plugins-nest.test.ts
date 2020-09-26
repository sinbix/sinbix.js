import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('plugins-nest e2e', () => {
  it('should create plugins-nest', async (done) => {
    const plugin = uniq('plugins-nest');
    ensureNxProject('@sinbix/nest', 'dist/libs/plugins/nest');
    await runNxCommandAsync(`generate @sinbix/nest:pluginsNest ${plugin}`);

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Builder ran');

    done();
  });

  describe('--directory', () => {
    it('should create src in the specified directory', async (done) => {
      const plugin = uniq('plugins-nest');
      ensureNxProject('@sinbix/nest', 'dist/libs/plugins/nest');
      await runNxCommandAsync(
        `generate @sinbix/nest:pluginsNest ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
      done();
    });
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async (done) => {
      const plugin = uniq('plugins-nest');
      ensureNxProject('@sinbix/nest', 'dist/libs/plugins/nest');
      await runNxCommandAsync(
        `generate @sinbix/nest:pluginsNest ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
      done();
    });
  });
});
