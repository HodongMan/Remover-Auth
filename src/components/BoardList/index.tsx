import * as React from 'react';

import BoardItem from './boarditem';

import { IStatusDeclareBordTypes } from '../../types/typeDefined';

export default class BoardList extends React.Component< IStatusDeclareBordTypes, any> {
    
    constructor(props: IStatusDeclareBordTypes) {
        super(props);
    }

    public render() {
        return (
            <div className="main-panel">
               <nav className="navbar navbar-default">
                   <div className="container-fluid">
                       <div className="navbar-header">
                           <button type="button" className="navbar-toggle">
                               <span className="sr-only">Toggle navigation</span>
                               <span className="icon-bar bar1" />
                               <span className="icon-bar bar2" />
                               <span className="icon-bar bar3" />
                           </button>
                           <a className="navbar-brand" href="#">신고글 리스트</a>
                       </div>
                       <div className="collapse navbar-collapse">
                           <ul className="nav navbar-nav navbar-right">
                               <li>
                                   <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                       <i className="ti-panel" />
                                       <p>Stats</p>
                                   </a>
                               </li>
                               <li className="dropdown">
                                     <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                           <i className="ti-bell" />
                                           <p className="notification">5</p>
                                           <p>Notifications</p>
                                           <b className="caret" />
                                     </a>
                                     <ul className="dropdown-menu">
                                       <li><a href="#">Notification 1</a></li>
                                       <li><a href="#">Notification 2</a></li>
                                       <li><a href="#">Notification 3</a></li>
                                       <li><a href="#">Notification 4</a></li>
                                       <li><a href="#">Another notification</a></li>
                                     </ul>
                               </li>
                               <li>
                                   <a href="#">
                                       <i className="ti-settings" />
                                       <p>Settings</p>
                                   </a>
                               </li>
                           </ul>

                       </div>
                   </div>
               </nav>


               <div className="content">
                   <div className="container-fluid">
                       <div className="row">
                           <div className="col-md-12">
                               <div className="card">
                                   <div className="header">
                                       <h4 className="title">신고글 리스트</h4>
                                       <p className="category">현재 신고당한 있는 글 명단입니다.</p>
                                   </div>
                                   <div className="content table-responsive table-full-width">
                                       <table className="table table-striped">
                                           <thead>
                                               <tr>
                                                   <th>ID</th>
                                                   <th>UUID</th>
                                                   <th>제목</th>
                                                   <th>작성일</th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                                {
                                                    this.props.dataList.map((item, index) => {
                                                        return (
                                                            <BoardItem
                                                                key={index}
                                                                pk={item.pk}
                                                                user={item.user}
                                                                title={item.title}
                                                                board_id={item.board_id}
                                                                description={item.description}
                                                                created={item.created}
                                                                updated={item.updated}
                                                            />
                                                        );
                                                    }) 
                                                }
                                           </tbody>
                                       </table>

                                   </div>
                               </div>
                           </div>

                       </div>
                   </div>
               </div>
           </div>
        );
    }
}