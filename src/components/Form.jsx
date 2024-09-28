import React from "react";

const Form = () => {
    return (
        <>
        <div className="container">
        <h2 className="book text-center">Book Your Table </h2>
        <form>
          <div className="row">
            <div className="col-md-4">
              <label for="inputCity"></label>
              <input type="text" className="form-control form-control-sm" placeholder="Your Name*" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label for="inputZip"></label>
              <input type="text" className="form-control form-control-sm" placeholder="Your Email*" id="inputZip" />
            </div>
            <div className="col-md-4">
              <label for="inputState"></label>
              <select id="inputState" className="form-control  form-control-sm">
                <option selected>Select a Service</option>
                <option></option>
              </select>
            </div>
          </div>
          <div className="">
            <label for="exampleFormControlTextarea1"></label>
            <textarea className="form-control" placeholder="Please write your comment" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
          <button type="submit" className="sendmsg">Send Message</button>
        </form>
      </div>
      </>
    )
}

export default Form;