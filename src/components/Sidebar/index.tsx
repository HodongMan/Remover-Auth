import * as React from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends React.Component {

    public render() {
        return (
            <div className="sidebar" data-background-color="white" data-active-color="danger">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="./" className="simple-text">
                            Moodumdum Admin
                        </a>
                    </div>

                    <ul className="nav">
                        <li className="active">
                            <Link to='/'>
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
                            <Link to="/declare">
                                <i className="ti-view-list-alt" />
                                <p>신고 글</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/black">
                                <i className="ti-text" />
                                <p>차단 유저</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="ti-pencil-alt2" />
                                <p>아직 없음</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="ti-pencil-alt2" />
                                <p>아직 없음</p>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
} 