// add for API and number of clocks count

import Videos from './Videos';

const idx = {
  id: { videoId: 'TESTID' },
  snippet: {
    publishedAt:"2015-10-13T23:00:01.000Z",
    channelTitle: "TEstTtitle",
    description: "tastiana",
    title: 'Testtitle',
    thumbnails: {
      high: {
        url: '//src',
      },
    },
  },
};
const videoCount = 10;

describe('Draw Video', () => {
  it('.draw should wrap template with tag section.navitation', () => {
    // prepare - Arrange
    document.body.innerHTML = '<div id="video_container"><div class="videos"></div></div>';
    // action  - Act
    Videos.draw(idx, videoCount);
    const authorOfClip = document.querySelector('.author');
    // check - Assert
    expect(authorOfClip).not.toBe(null);
  });
});
