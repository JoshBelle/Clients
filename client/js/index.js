import { createClientHeader } from './createHeader.js';

const createApp = () => {
    const header = createClientHeader();
    document.body.append(header);
};

createApp();
