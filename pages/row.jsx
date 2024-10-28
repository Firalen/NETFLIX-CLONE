import axios from "axios";
import { useEffect, useState } from "react";
import Movie from '../pages/movie'
import { MdChevronLeft , MdChevronRight  } from 'react-icons/md'
// eslint-disable-next-line react/prop-types
const Row = ({ title, fetchingURL,rowId }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchingURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchingURL]);
    const slideLeft = ()=> {
      var slider = document.getElementById('slider'+rowId)
      slider.scrollLeft=slider.scrollLeft - 500;
  };
   const slideRight = ()=> {
      var slider = document.getElementById('slider'+rowId )
      slider.scrollLeft=slider.scrollLeft + 500;
  };

    console.log(movies);
    
    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center group">
            <MdChevronLeft onClick={slideLeft}  className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
                <div id={"slider"+ rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative box-border">
                    {movies.map((item,id) => (
                      <Movie item={item} key={id} />
                     
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} className='bg-white right-0  rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            </div>
        </>
    );
};

export default Row;
