import { CustompipePipe } from './custompipe.pipe';

// describe('CustompipePipe', () => {
//   it('create an instance', () => {
//     const pipe = new CustompipePipe();
//     expect(pipe).toBeTruthy();
//   });
// });


function greetings() {
  return 'Good Morning';
}
describe('greeting message',() =>{
let expected ='';
beforeEach(() => {
  expected ='Good Morning';
});
afterEach(() => {
  expected = '';
});
it('My GreetingMessage',() =>{

  expect(greetings()).toEqual(expected);
});

fit('Good Bye',()=>{
  expect(greetings()).toEqual(expected)
});
});


