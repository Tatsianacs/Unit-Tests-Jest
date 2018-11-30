import AppController from './AppController';
import AppModel from './AppModel';

jest.mock('../js/AppModel');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  AppModel.mockClear();
});

test('check if tooltip is removed when the mouse is UP', () => {
  document.body.innerHTML = '<div class="tooltiptext visible"></div>';
  expect(document.querySelector('.visible')).not.toBeNull();
  AppController.onUpHideTooltip();
  expect(document.querySelector('.visible')).toBeNull();
});

test('check if previous button is disabled when needed', () => {
  const appController = new AppController();
  appController.currentPage = 0;
  expect(appController.isPrevDisabled()).toBeTruthy();
  appController.currentPage = 5;
  expect(appController.isPrevDisabled()).not.toBeTruthy();
});

test('check if number of block is calculated properly', () => {
  document.body.innerHTML = '<div class="gallery"></div>';
  const appController = new AppController();
  appController.calculateSize(1199);
  expect(appController.numOfBlocks).toEqual(2);
  appController.calculateSize(3599);
  expect(appController.numOfBlocks).toEqual(4);
  appController.calculateSize(760);
  expect(appController.numOfBlocks).toEqual(1);
});
