// a minimal example of a type declaration file

// theses files have .d.ts extension


interface WeatherQueryInterface {
    zipcode: string;
}

type WeatherDetailType = {
    weather: string;
    zipcode: string;
    temp?: number;
};