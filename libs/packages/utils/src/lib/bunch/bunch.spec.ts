import { bunchHandler, TBunch } from './bunch';

describe('bunchHandler', () => {
  it('should work', () => {
    const singleBunch: TBunch<string> = 'BunchAlone';

    const multipleBunch: TBunch<string> = ['BunchFirst', 'BunchSecond'];

    let testingResult: string = 'Joining is: ';

    const bunchCb = (entity: string) => {
      testingResult += entity;
    };

    bunchHandler(singleBunch, bunchCb);

    bunchHandler(multipleBunch, bunchCb);

    expect(testingResult).toEqual(
      'Joining is: BunchAloneBunchFirstBunchSecond'
    );
  });
});
