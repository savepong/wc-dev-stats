import { format, formatAlt } from './utils';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
  });

  it('formats just first names', () => {
    expect(format('Joseph', undefined, undefined)).toEqual('Joseph');
  });

  it('formats first and last names', () => {
    expect(format('Joseph', undefined, 'Publique')).toEqual('Joseph Publique');
  });

  it('formats first, middle and last names', () => {
    expect(format('Joseph', 'Quincy', 'Publique')).toEqual('Joseph Quincy Publique');
  });

  it('formats alt without username', () => {
    expect(formatAlt('test')).toEqual('test');
  });

  it('formats alt with username', () => {
    expect(formatAlt('test', 'username')).toEqual(`Username's test`);
  });
});
