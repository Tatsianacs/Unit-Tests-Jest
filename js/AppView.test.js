import AppView from './AppView';

describe('Draw youtube search client properly', () => {
  it('should draw gallery for clips', () => {
    AppView.drawContainer();
    const gallery = document.querySelector('.gallery');
    expect(gallery).not.toBe(null);
  });
  it('should draw search box', () => {
    AppView.drawContainer();
    const searchBox = document.querySelector('.search-box');
    expect(searchBox).not.toBe(null);
  });
  it('should draw pagination', () => {
    document.body.innerHTML = '<div id="video_container"></div>';
    const appViewTest = new AppView();
    appViewTest.drawPagination();
    const paginationContainer = document.querySelector('.pagination-container');
    expect(paginationContainer).not.toBe(null);
  });
});
