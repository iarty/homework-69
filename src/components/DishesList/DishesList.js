import React, { useEffect } from "react";
import DishesListItem from "./DishesListItem/DishesListItem";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getDishes } from "../../store/actions/dishesAction";
import { addToCart } from "../../store/actions/orderAction";
import Spinner from "../UI/Spinner/Spinner";

const DishesList = props => {
  useEffect(() => {
    props.getDishes();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <div className="col-8">
      <div className="d-flex flex-wrap">
        {props.loading ? (
          <div className="w-100 text-center mt-5">
            <Spinner />
          </div>
        ) : props.error ? (
          <div>
            <h1>Error!!!</h1>
            <p>{props.error}</p>
          </div>
        ) : (
          props.dishes.length &&
          props.dishes.map((dish, index) => (
            <DishesListItem
              key={index}
              title={dish.title}
              price={dish.price}
              image={dish.image}
              onClick={() =>
                props.addToCart({
                  title: dish.title,
                  price: dish.price,
                  amount: 1
                })
              }
            />
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  dishes: state.dishes.dishes,
  loading: state.dishes.loading,
  error: state.dishes.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getDishes, addToCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DishesList);
