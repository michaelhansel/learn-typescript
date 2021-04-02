import ErrorHandler from '../models/ErrorHandler';

class ThemeA {
  defaultMethod() {
    throw new ErrorHandler(501, 'Not implemented method');
  }
}

export = new ThemeA();