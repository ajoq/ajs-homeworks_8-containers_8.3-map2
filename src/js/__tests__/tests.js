import Settings from '../app';

test('set user settings', () => {
  const expected = new Map([
    ['difficulty', 'hard'],
    ['music', 'rock'],
  ]);

  const received = new Settings();
  received.setUserSettings('difficulty', 'hard');
  received.setUserSettings('music', 'rock');
  expect(received.userSettings).toEqual(expected);
});

test('get user settings', () => {
  const expected = new Map([
    ['theme', 'dark'],
    ['difficulty', 'hard'],
    ['music', 'rock'],
  ]);

  const received = new Settings();
  received.setUserSettings('difficulty', 'hard');
  received.setUserSettings('music', 'rock');
  expect(received.settings).toEqual(expected);
});
