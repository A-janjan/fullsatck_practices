// Custom interfaces for TypeScript functions


/*
The most practical difference is that, unlike an interface, we cannot
directly modify a type a­ fter we’ve declared it.
*/

interface WeatherProps {
    weather: string;
    zipcode: string;
    temp?: number;
}


const weatherComponent = (props: WeatherProps): string => props.weather;