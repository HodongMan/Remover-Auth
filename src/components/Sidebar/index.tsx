import * as React from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends React.Component {

    public render() {
        return (
            <div className="sidebar" data-background-color="white" data-active-color="danger">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="./admin" className="simple-text">
                            Moodumdum Admin
                        </a>
                    </div>

                    <ul className="nav">
                        <li className="active">
                            <Link to='/admin'>
                                <i className="ti-panel" />
                                <p>메인</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/board">
                                <i className="ti-user" />
                                <p>글 목록</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/adminitem">
                                <i className="ti-view-list-alt" />
                                <p>신고글</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/adminpayment">
                                <i className="ti-text" />
                                <p>신고글</p>
                            </Link>
                        </li>
                        <li>
                            <a href="icons.html">
                                <i className="ti-pencil-alt2" />
                                <p>신고글</p>
                            </a>
                        </li>
                        <li>
                            <a href="icons.html">
                                <i className="ti-pencil-alt2" />
                                <p>신고글</p>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
} 