 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../reducer/actions';
import { addFav, removeFav } from '../../reducer/actions';
import { useState, useEffect } from 'react';


 const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav}) => {
  const [isFav, setFav] = useState(false)
  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
    setFav(!isFav)
  }
  
   return (
     <div className='cards'>
       {
         isFav ? (
           <button onClick={handleFavorite}>❤️</button>
         ) : (
           <button onClick={handleFavorite}>🤍</button>
         )
       }
       <button onClick={() => { onClose(id) }}>Close</button>
       <Link to={`/detail/${id}`}>
         <div className='face front'>
           <img src={image} alt="" />
         </div>
         <div className='face back'>
           <p>Name: "{name}"</p>
           <p>Status: "{status}"</p>
           <p>Species: "{species}"</p>
           <p>Gender: "{gender}"</p>
           <p>Origin: "{origin}"</p>
         </div>
       </Link>


     </div>
   );
};

const mapDispatchToProps = (dispatch) => {
    return {
      addFav: () => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
    }
};

const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)


