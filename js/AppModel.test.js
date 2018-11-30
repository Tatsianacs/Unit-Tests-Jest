import AppModel from './AppModel';

test('make URL for the initial load properly', () => {
  const testModel = new AppModel();
  const testURL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAdN8-ADK8taSLMpdFXguKfp9NXH4g6UtE&type=video&part=snippet&'
    + 'maxResults=15&q=tatsiana';
  const receivedURL = testModel.makeUrl('&q=tatsiana');
  expect(receivedURL).toBe(testURL);
});

test('make URL for the next page load properly', () => {
  const testModel = new AppModel();
  testModel.nextPageToken = 'vd3Bdj56';
  const testURL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAdN8-ADK8taSLMpdFXguKfp9NXH4g6UtE&type=video&part=snippet&'
    + 'maxResults=15&q=tatsiana&pageToken=CaaF';
  const receivedURL = testModel.makeUrlForToken('&q=tatsiana', '&pageToken=CaaF');
  expect(receivedURL).toBe(testURL);
});
