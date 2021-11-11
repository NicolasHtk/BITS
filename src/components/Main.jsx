import React from 'react'

function Main() {

    const Cover = "https://c.tenor.com/29Ok5pc0ivAAAAAM/gatinho-gato.gif"

    return (
        <div>
            <main className="container">
                <div className="row">
                    <div className="col-md-6 order-md-1">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h3>Sign In to BITES</h3>
                                <p>Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                                <form>
                                    <div className="mb-4">
                                        <label for="Email" className="form-label"></label>
                                        <input className="rounded-0 border-0 border-bottom form-control flex-fill" type="text"
                                            className="form-control" id="Email" placeholder="Email" />
                                    </div>
                                    <div className="mb-4">
                                        <label for="Password" className="form-label"></label>
                                        <input className="rounded-0 border-0 border-bottom form-control flex-fill" type="password"
                                            className="form-control" id="Password" placeholder="Password" />
                                    </div>
                                    <div className="row row mb-3">
                                        <div className="col">
                                            <div className="mb-4 form-check">
                                                <input type="checkbox" className="form-check-input" id="check1" />
                                                <label className="form-check-label" for="check1">
                                                    Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col center-block text-end">
                                            <a href="#" className="stretched-link text-muted relative">Forgot
                                                Password</a>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2 mb-4">
                                        <button type="submit" className="btn btn-primary btn-logreg border-0">Log In</button>
                                    </div>
                                </form>
                                <div className="mb-5">
                                    <a href="SignUp.html" className="stretched-link text-muted relative">Or Sign
                                        Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-2">
                        <img src={Cover} width="80%" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main
