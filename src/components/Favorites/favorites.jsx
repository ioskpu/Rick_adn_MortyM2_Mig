import { Connect, connect } from "react-redux"
import Card from "../Card/Card"


const Favorites (myFavorites) => {
    return {
        <div>
            {
                myFavorites.map((id, name, status, species, gender, origin, image, onClose))=> {
                    return {
                        <Card 
                        key=(fav.id)
                        />
                    }
                })
            }
        </div>
    }

}
const mapStateToProps = ({myFavorites}) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)