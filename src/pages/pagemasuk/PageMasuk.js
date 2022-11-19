import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Signin } from "../../redux/actions/UserActions";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageMasuk = () => {
  const { user } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(Signin([email], [password]));
  });

  const SubmitForm = (e) => {
    e.preventDefault();
    const cariAkun = user.find((item) => item.email === email && item.password === password);

    if (cariAkun) {
      localStorage.setItem("user", JSON.stringify(cariAkun));
      toast.success(" Selamat kamu berhasil login!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    } else {
      toast.error("kamu belum punya akun", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <>
      <section className="main py-3">
        <div className="container">
          <ToastContainer />
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
                  <form id="formSignIn" className="row g-3" method="GET" onSubmit={SubmitForm}>
                    <h4 className="text-center">Sign In</h4>
                    <div className="col-12">
                      <label>Email</label>
                      <input type="text" id="username" name="username" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-12">
                      <label>Password</label>
                      <input type="password" id="password" name="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
