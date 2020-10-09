describe('shapeArea',()=>{

  it('Test1',()=>{

    const area = require('../shapeArea');

    expect(area(2)).toBe(5);
  });

  it('Test2',()=>{

    const area = require('../shapeArea');

    expect(area(3)).toBe(13);
  });

  it('Test3',()=>{

    const area = require('../shapeArea');

    expect(area(1)).toBe(1);
  });

  it('Test4',()=>{

    const area = require('../shapeArea');

    expect(area(5)).toBe(41);
  });

  it('Test5',()=>{

    const area = require('../shapeArea');

    expect(area(7000)).toBe(97986001);
  });

});