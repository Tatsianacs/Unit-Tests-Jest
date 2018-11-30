import AppController from '../js/AppController';
import AppView from '../js/AppView';
import AppModel from '../js/AppModel';
import App from '../js/App';

jest.mock('../js/AppView');
jest.mock('../js/AppModel');
jest.mock('../js/AppController');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  AppView.mockClear();
  AppModel.mockClear();
  AppController.mockClear();
});


it('check if the consumer called the required class constructors', () => {
  const app = new App();
  expect(AppView).toHaveBeenCalledTimes(1);
  expect(AppModel).toHaveBeenCalledTimes(1);
  expect(AppController).toHaveBeenCalledTimes(1);
});

it('check if the consumer called a method on the class instance', () => {
  // Show that mockClear() is working:
  expect(AppController).not.toHaveBeenCalled();

  const app = new App();
  // Constructor should have been called again:
  expect(AppController).toHaveBeenCalledTimes(1);

  app.start();
  const mockInstance = AppController.mock.instances[0];
  const mockInit = mockInstance.init;
  expect(mockInit).toHaveBeenCalledTimes(1);
});
