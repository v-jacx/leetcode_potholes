const solution = require('./solution');

test('checks for potholes and returns fixed', ()=>{
    expect(solution('......',5)).toBe(0);
} );

test('checks for potholes and returns fixed', ()=>{
    expect(solution('...xxx..x....xxx',7)).toBe(5);
} );

test('checks for potholes and returns fixed', ()=>{
    expect(solution('...xxxxx',4)).toBe(3);
} );

test('checks for potholes and returns fixed', ()=>{
    expect(solution('x.x.xxx...x',14)).toBe(6);
} );