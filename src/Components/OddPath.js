import React from "react"

function OddPath(props){
    return(
        <div>     
                        <div class="row timeline">
        <div class="col-2">
          <div class="corner right-bottom"></div>
        </div>
        <div class="col-8">
          <hr />
        </div>
        <div class="col-2">
          <div class="corner top-left"></div>
        </div>
      </div>
      <div class="row align-items-center how-it-works">
        <div class="col-2 text-center full ">
          <div class="circle ">3</div>
        </div>
        <div class="col-9">
          <div class="course-container-right">

            <div class="row ">
              <div class="col-lg-6">
                <h4>{props.data.courseName}</h4>

              </div>
              <div class="col-lg-6 lef-end">


              </div>


            </div>
            <div class="row">
              <div class="col-lg-7">
                <div class="course-details">

                  <div class="row">

                    <div class="course-date">
                      <h6><i class="fa fa-calendar" aria-hidden="true"></i>
                        Saturday 6/june</h6>
                    </div>
                    <div class="course-hours">
                      <h6><i class="fa fa-tags" aria-hidden="true"></i>
                        60 hour</h6>
                    </div>
                    <div class="course-time">
                      <h6><i class="fa fa-clock-o"></i>




                        00.9 - 10.00</h6>
                    </div>

                  </div>
                </div>
                <div class="course-row">
                  <div class="course-detaitls-container">
                    <div class="course-desc">
                      <h6>Description</h6>{props.data.courseDetatils}
                    </div>
                    <div class="course-desc">
                      <h6>Pre Requiest </h6> <span class="pre-req">{props.data.preReq} <span class="tooltiptext">you have yo take this
                          course to keep going to the path</span> </span>
                    </div>
                    <div class="course-duration">
                      <h6>Course Duration </h6> <span>{props.data.courseDuration}</span> <span class="course-price"> |
                      {props.data.price}$</span>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-lg-5 lef-end">
                <div class="course-photo "><a href class="enroll">Enroll Now</a><img class="course-img" src="data:image/png;base64,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"/>
                </div>
              </div>


            </div>

          </div>

        </div>
      </div>
        </div>
    )
}

export default OddPath