import React from "react";
import { Link } from "react-router-dom";

const PageMasuk = () => {
  return (
    <>
      <section className="main py-3">
        <div className="container">
          <div className="row">
            <div className="col text-center pt-5">
              <h2>Welcome Back</h2>
              <p>Let's continue what you learn about Art</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <div className="login-form mt-4 p-4">
                  <form id="formSignIn" className="row g-3" method="GET">
                    <h4 className="text-center">Sign In</h4>
                    <div className="col-12">
                      <label>Username</label>
                      <input type="text" id="username" name="username" className="form-control" placeholder="Username" />
                    </div>
                    <div className="col-12">
                      <label>Password</label>
                      <input type="password" id="password" name="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Sign In
                      </button>
                    </div>
                  </form>
                  <hr className="mt-4" />
                  <div className="col-12">
                    <p className="text-center mb-0">
                      Belum Memiliki Akun ?, Silahkan <Link to="/daftar">Daftar</Link>
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

export default PageMasuk;
