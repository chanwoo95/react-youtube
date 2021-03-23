import axios from 'axios';

class Youtube {
    constructor(key) {
        this.youtube = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: { key: key },
        });
    }

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 24,
                regionCode: 'KR',
            },
        });
        return response.data.items;
    }

    async search(query) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 24,
                type: 'video',
                regionCode: 'KR',
                q: query,
            },
        });
        return response.data.items.map((item) => ({
            ...item,
            id: item.id.videoId,
        }));
    }
}

export default Youtube;
