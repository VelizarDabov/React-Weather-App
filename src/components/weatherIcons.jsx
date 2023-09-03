import sunnyIcon from '../icons/sunny.png'
import partlyCloudyIcon from '../icons/cloudy.png'
import partlySunnyIcon from '../icons/partlysunny.png'
const WeatherIcons =({condition}) => {
const getWeatherIcon = (condition) => {
    switch(condition){
        case 'Sunny':
            return sunnyIcon;
            case 'Partly Cloudy':
                return partlyCloudyIcon
                case 'Partly Sunny':
                    return partlySunnyIcon;
                    default:
                        return 
    }
}
const iconPath = getWeatherIcon(condition);
return <img src={iconPath} alt={condition} />
}
export default WeatherIcons
