export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map();
  }

  setUserSettings(key, value) {
    this.userSettings.set(key, value);
  }

  get settings() {
    this.userSettings.forEach((value, key) => {
      this.defaultSettings.set(key, value);
    });
    return this.defaultSettings;
  }
}
