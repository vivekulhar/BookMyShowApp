import React, { useEffect, useState } from "react";
import { Col, message, Row, Table } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { GetAllMovies, GetMovieById } from "../../apicalls/movies";
import moment from "moment";
import { GetAllTheatresByMovie } from "../../apicalls/theatres";

const TheatresForMovie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const tempDate = new URLSearchParams(window.location.search).get("date");
  const [date, setDate] = React.useState(
    tempDate || moment().format("YYYY-MM-DD")
  );
  const [theatres, setTheatres] = useState([]);


  const getDate = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetMovieById(params.id);
      if (response.success) {
        setMovie(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const getTheatres = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllTheatresByMovie({ date, movie: params.id });
      if (response.success) {
        setTheatres(response.data);
        console.log(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };


  useEffect(() => {
    getDate();
  }, []);

   useEffect(() => {
     getTheatres();
   }, [date]);

  return (
    <div>
      {movie && (
        <div>
          {/* movie information */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-2xl uppercase">
                {movie.title} ({movie.language})
              </h1>
              <h1 className="text-md">Duration : {movie.duration} mins</h1>
              <h1 className="text-md">
                Release Date : {moment(movie.releaseDate).format("MMM Do yyyy")}
              </h1>
              <h1 className="text-md">Genre : {movie.genre}</h1>
            </div>

            <div className="mr-3">
              <h1 className="text-md ">Select Date</h1>
              <input
                type="date"
                min={moment().format("YYYY-MM-DD")}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  navigate(`/movie/${params.id}?date=${e.target.value}`);
                }}
              />
            </div>

                
          </div>
        </div>
      )}
    </div>
  );
};

export default TheatresForMovie;