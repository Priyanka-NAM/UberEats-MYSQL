import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/all.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../Styles/SideBar.css";
import "../../Styles/Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const FavButton = {
  position: "absolute",
  fontSize: "22px",
  right: "0",
  color: "white",
  zIndex: "1000",
  marginTop: "10px",
  marginRight: "20px",
};

class RestoCard extends Component {
  constructor(props) {
    super(props);
    let favInitClass = "fa fa-heart-o";
    if (props.isLiked) favInitClass = "fa fa-heart";

    this.state = {
      Orderquantity: 1,
      isFav: props.isLiked,
      liked: favInitClass,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      Orderquantity: prevState.Orderquantity + 1,
    }));
  };

  handleAddToCart = () => {};

  handleFavorite = (e) => {
    const { isFav } = this.state;
    if (!isFav) {
      this.setState({
        liked: "fa fa-heart",
        isFav: true,
      });
    } else {
      this.setState({
        liked: "fa fa-heart-o",
        isFav: false,
      });
    }
  };

  handleRestaPage = (e) => {
    const { RestaRedirect, restaurant } = this.props;
    RestaRedirect(restaurant);
  };

  render() {
    const { restaurant } = this.props;

    const { liked } = this.state;
    return (
      <>
        <Card
          style={{
            objectFit: "fit",
            width: "23rem",
            height: "12.5rem",
            paddingLeft: "0px",
          }}
          onClick={this.handleRestaPage}>
          <Link to={{ pathname: "/restaurents", state: { restaurant } }}>
            <img
              style={{
                objectFit: "cover",
                width: "23rem",
              }}
              src={restaurant.imageurl}
              alt=''
            />
          </Link>
          <i
            style={FavButton}
            className={liked}
            aria-hidden='true'
            onClick={this.handleFavorite}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <div className='resta-info'>
              <h2 className='restar-name'>
                {restaurant.title}
                <span>({restaurant.address})</span>
              </h2>
              <h4 className='resta-descr'>
                <span style={{ color: "black" }}>$0.49 Delivery Fee • </span>35
                - 45 • min
              </h4>
            </div>
            <div
              style={{
                backgroundColor: "#eeee",
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                fontFamily: "sans-serif",
                fontSize: "15px",
                marginRight: "12px",
                marginTop: "10px",
              }}>
              <span>4.5</span>
            </div>
          </div>
        </Card>
      </>
    );
  }
}
RestoCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  restaurant: PropTypes.object.isRequired,
  isLiked: PropTypes.bool.isRequired,
  RestaRedirect: PropTypes.func.isRequired,
};

export default RestoCard;
