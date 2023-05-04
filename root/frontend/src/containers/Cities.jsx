import { useEffect, useState } from "react";
import travel from "../images/travel.jpg";
import {
  makeStyles,
  Card,
  TextField,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import {useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  root: {
    width: 150,
  },
  media: {
    height: 150,
  },
});

export const Cities = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [searchCity, setSearchCity] = useState("");
  const classes = useStyles();
  const navigate = useNavigate()
  let cityFilter = [];

  useEffect(() => {
    fetch("http://localhost:3000/all")
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
        setIsLoading(false);
      });
  }, []);

  const handleOnSearchCity = (e) => {
    setSearchCity(e.target.value);
  };

  if (searchCity === "") {
    cityFilter = cities;
  } else {
    cityFilter = cities.filter((x) =>
      x.name.toLowerCase().startsWith(searchCity.toLowerCase())
    );
  }

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <>
      <h2>Cities</h2>
      <div style={{display:'flex', justifyContent:'center'}}>
        <TextField
          onChange={handleOnSearchCity}
          id="outlined-basic"
          label="Search City"
          variant="outlined"
          size="small"
          margin="normal"
        />
        <Button onClick={() => navigate ('/newCity')} style={{marginTop:11, margin:10}} variant="outlined"> New City</Button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
        }}
      >
        {cityFilter.map((city) => (
          <Card key={city.name} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={city.img ? city.img : travel}
                title={city.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {city.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {city.country}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );
};
