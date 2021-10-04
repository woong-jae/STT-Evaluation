import axios from 'axios';
import Cookie from 'universal-cookie';
import dotenv from 'dotenv';

dotenv.config();

export async function getTokenOrRefresh() {
    const cookie = new Cookie();
    const speechToken = cookie.get('speech-token');
    const speechKey = process.env.REACT_APP_AZURE_KEY;
    const speechRegion = process.env.REACT_APP_AZURE_REGION;

    const headers = {
        headers: {
            'Ocp-Apim-Subscription-Key': speechKey,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    const tokenResponse = await axios.post(`https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`, null, headers);
    console.log({ token: tokenResponse.data, region: speechRegion });

    if (speechToken === undefined) {
        try {
            const token = tokenResponse.data;
            const region = speechRegion;
            cookie.set('speech-token', region + ':' + token, {maxAge: 540, path: '/'});

            console.log('Token fetched from back-end: ' + token);
            return { authToken: token, region: region };
        } catch (err) {
            console.log(err.response.data);
            return { authToken: null, error: err.response.data };
        }
    } else {
        console.log('Token fetched from cookie: ' + speechToken);
        const idx = speechToken.indexOf(':');
        return { authToken: speechToken.slice(idx + 1), region: speechToken.slice(0, idx) };
    }
}