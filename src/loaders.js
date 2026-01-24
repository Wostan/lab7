import { searchCities, getCityDetails } from './api/geonames';

export const citiesLoader = async ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('query');

    try {
        const cities = await searchCities(query);
        return { cities: cities || [], query };
    } catch (error) {
        throw new Response(error.message || "Помилка API", {
            status: 500,
            statusText: "Internal Server Error"
        });
    }
};

export const cityDetailsLoader = async ({ params }) => {
    try {
        const city = await getCityDetails(params.cityId);
        return city;
    } catch (error) {
        throw new Response(error.message || "Місто не знайдено", {
            status: 404,
            statusText: "Not Found"
        });
    }
};