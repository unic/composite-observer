import test from 'ava';
import observer from './index';

test('Composite is executed without failing', t => {
  t.notThrows(observer);
});
