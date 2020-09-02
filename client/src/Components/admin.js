import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store";


class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "Products",
      edit: false,
    };
  }

  componentDidMount() {
    this.props.handleFetchProducts();
  }

  changeView(view) {
    this.setState({ view, edit: false });
  }

  products() {
    if (!this.props.products.length) {
      return (
        <div className="col-sm-12">
          <h2>No Products Found.</h2>
        </div>
      );
    } else {
      return this.props.products.map((product) => {
        return (
          <li key={product.id}>
            <a className="edit-product">{product.name}</a>
          </li>
        );
      });
    }
  }

  users() {
    const { user } = this.props;
    if (!user) {
      return (
        <div className="col-sm-12">
          <h2>No User Found.</h2>
        </div>
      );
    } else {
      return (
        <li key={user.id}>
          <a className="edit-product">
            {user.id} - {user.email}
          </a>
        </li>
      );
    }
  }

  render() {
    const { email } = this.props;

    return (
      <div className="admin-home-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Welcome, {email}</h3>
            </div>
            <div className="col-sm-3 left-sidebar">
              <div className="panel panel-default category-products">
                <ul className="category-list">
                  <li onClick={() => this.changeView("Products")}>
                    Manage Products
                  </li>
                  <li onClick={() => this.changeView("Orders")}>
                    Manage Orders
                  </li>
                  <li onClick={() => this.changeView("Users")}>Manage Users</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="col-sm-12">
                <hr />
              </div>
              <div className="col-sm-12">
                <h2 className="product-grid-title">Manage {this.state.view}</h2>
              </div>
              <div className="col-sm-12">
                <ul className="manage-products-list">
                  {this.state.view === "Products" && this.renderProducts()}
                  {this.state.view === "Orders" && undefined}
                  {this.state.view === "Users" && this.renderUsers()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    email: state.user.email,
    products: state.products,
    user: state.user,
  };
};
//testing

const mapDispatch = (dispatch) => {
  return {
    handleFetchProducts() {
      dispatch(fetchProducts());
    },
  };
};


export default Admin;
