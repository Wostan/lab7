const Username = 'wostan';
const BaseUrl = 'https://secure.geonames.org';

export const searchCities = async (query) => {
    const searchQuery = query || 'capital';

    const response = await fetch(
        `${BaseUrl}/searchJSON?q=${searchQuery}&maxRows=12&style=MEDIUM&username=${Username}`
    );

    if (!response.ok) {
        throw new Error('Не вдалося отримати дані');
    }

    const data = await response.json();

    if (data.status) {
        throw new Error(data.status.message);
    }

    return data.geonames;
};

export const getCityDetails = async (geonameId) => {
    const response = await fetch(
        `${BaseUrl}/getJSON?geonameId=${geonameId}&username=${Username}`
    );

    if (!response.ok) {
        throw new Error('Не вдалося отримати дані');
    }

    const data = await response.json();
    if (data.status) {
        throw new Error(data.status.message);
    }

    return data;
};