import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div class="offcanvas offcanvas-start w-20 bg-dark" tabindex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
                <div class="offcanvas-header text-white">
                    <h6 class="offcanvas-title d-none d-sm-block" id="offcanvas">Menu</h6>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body px-0">
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                        <li class="nav-item">
                            <Link to={"/"} href="#" class="nav-link text-white">
                                <i class="fs-5 bi-house"></i><span class="ms-1 d-none d-sm-inline ">Home</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={"/country"} href="#" class="nav-link text-white">
                                <i class="fs-5 bi-house"></i><span class="ms-1 d-none d-sm-inline">Countries</span >
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;