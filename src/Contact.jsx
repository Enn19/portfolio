import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return <>
    <div className="mb-4">
      <div className="container"pt-3>
      <div className="text-center pt-4 porto">
      <h2 className="text-uppercase mb-3 fs-1 fw-border">
      CONATCT SECTION
      </h2>
      <div className=' d-flex mb-3 align-items-center justify-content-center '>
            <div className="line me-3 bg-bla"></div>
            <i  class="fa-solid fa-star porto"></i>
            <div className="line ms-3 bg-bla"></div>
          </div>
      </div>
      <form  className="w-50 p-3 mx-auto mt-5 ">
      <input id="userName" type="text" placeholder="userName" name="userName" class="form-control my-2 border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"></input>
      <input id="userAge" type="text" placeholder="userAge" name="userName" class="form-control my-3 border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"></input>
      <input  id="userEmail" type="text" placeholder="userEmail" name="userName" class="form-control my-3 border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"></input>
      <input  id="userPassword" type="text" placeholder="userPassword" name="userName" class="form-control  my-3 border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"></input>
      <button  class="border-0 py-2 px-3 rounded-3 mt-4 text-white bg-green" > send Message </button>
      </form>
      </div>
      </div></>
  }
}
