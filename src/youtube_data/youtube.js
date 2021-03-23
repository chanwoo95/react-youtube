import axios from 'axios';

class Youtube {
    constructor(key) {
        const axios = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3/',
            headers: { key: key },
        });
    }

    async mostPopular() {
        const response = await fetch(
            aixos.get('videos', {
                part: snippet,
                chart: mostPopular,
                maxResults: 24,
                regionCode: KR,
            }),
        );
        const result = await response.json();
        return result.items;
    }

    async search(query) {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&regionCode=KR&key=${this.key}`,
            this.getRequestOptions,
        );
        const result = await response.json();
        return result.items.map((item) => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;
