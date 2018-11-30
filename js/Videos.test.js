import Videos from './Videos';

const idx = {
  id: { videoId: 'nq4aU9gmZQk' },
  snippet: {
    publishedAt: '2015-10-13T23:00:01.000Z',
    channelTitle: 'Rolling Scopes',
    description: 'Rolling Scopes youtube search client',
    title: 'Youtube search client is the best app forever',
    thumbnails: {
      high: {
        url: 'https://i.ytimg.com/vi/nq4aU9gmZQk/default.jpg',
      },
    },
  },
};
const videoCount = 91238;

beforeAll(() => {
  document.body.innerHTML = '<div id="video_container"><div class="videos"></div></div>';
  Videos.draw(idx, videoCount);
});

describe('Draw Video Clip and check that information is inserted properly', () => {
  it('.draw should add author to video container', () => {
    const authorOfClip = document.querySelector('.author');
    expect(authorOfClip).not.toBe(null);
  });
  it('.draw should add description', () => {
    const description = document.querySelector('.description');
    expect(description).not.toBe(null);
  });
  it('.draw should contain proper title', () => {
    const title = document.querySelector('.video-title').textContent;
    expect(title).toBe(idx.snippet.title);
  });
  it('.draw should contain counter', () => {
    const counter = document.querySelector('.rate');
    const valueForCounter = counter.textContent.includes(videoCount);
    expect(valueForCounter).toBeTruthy();
  });
});
