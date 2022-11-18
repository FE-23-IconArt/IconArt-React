import React from "react";
import { Link } from "react-router-dom";

const PageDaftar = () => {
  return (
    <>
      <section className="main py-3">
        <div className="container">
          <div className="row">
            <div className="col text-center pt-5">
              <h2>Welcome</h2>
              <p>Let's Join Us</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <div className="login-form mt-4 p-4">
                  <form id="formSignUp" className="row g-3" method="POST">
                    <h4 className="text-center">Sign Up</h4>

                    <div className="col-12">
                      <label>Username</label>
                      <input type="text" id="username" name="username" className="form-control" placeholder="Username" />
                    </div>
                    <div className="col-12">
                      <label>Email</label>
                      <input type="text" id="email" name="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <label>Password</label>
                      <input type="password" id="password" name="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <hr className="mt-4" />
                  <div className="col-12">
                    <p className="text-center mb-0">
                      Sudah memiliki Akun ?, Silahkan <Link to="/masuk">Masuk</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageDaftar;
