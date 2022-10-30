export class StorageService {
  static setSomething(name, model) {
    return localStorage.setItem(name, JSON.stringify(model));
  }
  static getSomething(name) {
    return JSON.parse(localStorage.getItem(name));
  }
}
