
const switchFn =
  (lookupObject, defaultCase = '_default') => (expression) =>
    (lookupObject[expression] || lookupObject[defaultCase])()

const logMood = {
  javascript: () => 
    '{background: #D1913C;background: linear-gradient(to bottom, #FFD194, #D1913C);color: #fafafa;}',
  typescript: () =>
    '{background: #56CCF2;background: linear-gradient(to bottom, #2F80ED, #56CCF2);color: #fafafa;}',
  vue: () =>
    '{background: #41B883;background: linear-gradient(to bottom, #9ed7be, #41B883);color: #fafafa;}',
  angular: () =>
    '{background: #C3002F;background: linear-gradient(to bottom, #B42E58, #C3002F);color: #fafafa;}',
  framework: () =>
    '{background: #a8ff78;background: linear-gradient(to bottom, #a8ff78, #78ffd6);color: #042E3E;}',
  python: () =>
    '{background: #386996;background: linear-gradient(to bottom, #FFC233, #386996);color: #fafafa;}',
  programacion: () => 
    '{background: #614385;background: linear-gradient(to bottom, #516395, #614385);color: #fafafa;}',
  default: () => 
    '{background: #cb2d3e;background: linear-gradient(to bottom, #ef473a, #cb2d3e);color: #fafafa;}',
}

export const selectTag = switchFn(logMood, 'default')
