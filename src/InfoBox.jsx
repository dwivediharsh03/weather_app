import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/WbSunny'; // correct import
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const hot_url = "https://images.unsplash.com/photo-1730813803981-e62123681aec?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0";
  const cold_url = "https://images.unsplash.com/photo-1638023334855-e637422323d0?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0";
  const rain_url = "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0";

  // Conditional image
  const image_url = info.humidity > 60 ? rain_url : info.temp > 25 ? hot_url : cold_url;

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image_url}
          title="weather image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{" "}
            {info.humidity > 60 ? (
              <ThunderstormIcon />
            ) : info.temp > 25 ? (
              <SunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            <p>Temperature: {info.temp}&deg;C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Min Temp: {info.tempMin}&deg;C</p>
            <p>Max Temp: {info.tempMax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C.
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
