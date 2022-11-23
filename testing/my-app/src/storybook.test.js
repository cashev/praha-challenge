import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import path from 'path'
import playwrite from 'playwright';

let Browser;
const getCustomBrowser = async () => {
  Browser = await playwrite.chromium.launch();
  return Browser;
};

initStoryshots({ 
    suite: 'Image storyshots',
    test: imageSnapshot({
        storybookUrl: `file://${path.resolve(__dirname, '../storybook-static')}`,
        getCustomBrowser,
        setupTimeout: 30000,
    }),
});

test.afterAll = async () => {
    await Browser.close();
};
