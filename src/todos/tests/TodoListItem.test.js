import { expect } from 'chai';
import { getBorderStyleForDate } from '../TodoListItem';

describe('getBorderStyleForDate', () => {
  it('Returns none when the date is less than 3 days ago', () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 24 * 3600 * 1000 * 2);

    const expected = 'none';
    const actual = getBorderStyleForDate(recentDate, today);

    expect(actual).to.equal(expected);
  });

  it('Returns a border when the date s more than 3 days ago', () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 24 * 3600 * 1000 * 6);

    const expected = '2px solid red';
    const actual = getBorderStyleForDate(recentDate, today);

    expect(actual).to.equal(expected);
  });
});
