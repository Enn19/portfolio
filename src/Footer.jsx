import React, { Component } from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return <>
    <Nav/>
    <Outlet/>
    <app-footer _ngcontent-lpg-c22="" _nghost-lpg-c21="">
      <div _ngcontent-lpg-c21="" className="footer"
      ><div _ngcontent-lpg-c21="" className="card-group m-4">
        <div _ngcontent-lpg-c21="" className="card">
          <div _ngcontent-lpg-c21="" className="card-body text-center">
            <h3 _ngcontent-lpg-c21="">LOCATION</h3>
            <p _ngcontent-lpg-c21="">2215 John Daniel Drive</p>
            <p _ngcontent-lpg-c21="">Clark, MO 65243</p>
            </div>
            </div>
            <div _ngcontent-lpg-c21="" className="card text-white">
              <div _ngcontent-lpg-c21="" className="card-body text-center">
                <h3 _ngcontent-lpg-c21="">AROUND THE WEB</h3>
                <div _ngcontent-lpg-c21="" className="icons">
                  <i _ngcontent-lpg-c21="" className="fa-brands fa-facebook mx-1 icon"></i>
                  <i _ngcontent-lpg-c21="" className="fa-brands fa-twitter mx-1 icon"></i>
                  <i _ngcontent-lpg-c21="" className="fa-brands fa-linkedin-in mx-1 icon"></i>
                  <i _ngcontent-lpg-c21="" className="fa-solid fa-globe mx-1 icon"></i>
                  </div>
                  </div>
                  </div>
                  <div _ngcontent-lpg-c21="" className="card">
                    <div _ngcontent-lpg-c21="" className="card-body text-center">
                      <h3 _ngcontent-lpg-c21="">ABOUT FREELANCER</h3
                      ><p _ngcontent-lpg-c21=""> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                      </div>
                      </div>
                      </div>
                      </div>
                      <div _ngcontent-lpg-c21="" class="p">
      <p _ngcontent-lpg-c21="">Copyright © Your Website 2021</p></div></app-footer>
    </>
  }
}
