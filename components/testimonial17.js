import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Testimonial17 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial17-max-width thq-section-max-width">
          <div className="testimonial17-container10">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="testimonial17-text28 thq-heading-2">
                    Our Happy Customers
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial17-text26 thq-body-small">
                    I have been using this website to book hotels for my
                    business trips and it has been a seamless experience every
                    time. Highly recommended!
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card1"
                >
                  <div className="testimonial17-container12">
                    <div className="testimonial17-container13">
                      <strong>
                        {props.author1Name ?? (
                          <Fragment>
                            <strong className="testimonial17-text37 thq-body-large">
                              John Doe
                            </strong>
                          </Fragment>
                        )}
                      </strong>
                      <span>
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="testimonial17-text36 thq-body-small">
                              CEO, Example Company
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial17-text31 thq-body-small">
                          5 stars
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card2"
                >
                  <div className="testimonial17-container14">
                    <div className="testimonial17-container15">
                      <strong>
                        {props.author2Name ?? (
                          <Fragment>
                            <strong className="testimonial17-text24 thq-body-large">
                              Jane Smith
                            </strong>
                          </Fragment>
                        )}
                      </strong>
                      <span>
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="testimonial17-text33 thq-body-small">
                              Marketing Manager, Testimonials Inc.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review2 ?? (
                      <Fragment>
                        <span className="testimonial17-text35 thq-body-small">
                          Great service! Easy to use platform with a wide range
                          of accommodation options.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card3"
                >
                  <div className="testimonial17-container16">
                    <div className="testimonial17-container17">
                      <strong>
                        {props.author3Name ?? (
                          <Fragment>
                            <strong className="testimonial17-text27 thq-body-large">
                              David Johnson
                            </strong>
                          </Fragment>
                        )}
                      </strong>
                      <span>
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial17-text30 thq-body-small">
                              Freelancer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review3 ?? (
                      <Fragment>
                        <span className="testimonial17-text29 thq-body-small">
                          I love how I can compare prices and read reviews
                          before making a decision. Makes my travel planning so
                          much easier!
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card4"
                >
                  <div className="testimonial17-container18">
                    <div className="testimonial17-container19">
                      <strong>
                        {props.author4Name ?? (
                          <Fragment>
                            <strong className="testimonial17-text25 thq-body-large">
                              Emily Brown
                            </strong>
                          </Fragment>
                        )}
                      </strong>
                      <span>
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="testimonial17-text34 thq-body-small">
                              Travel Blogger
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review4 ?? (
                      <Fragment>
                        <span className="testimonial17-text32 thq-body-small">
                          Booking through this website saved me both time and
                          money. Will definitely use it again for my future
                          trips.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial17-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial17-container10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial17-container12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-container14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-container16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-container18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text24 {
            display: inline-block;
          }
          .testimonial17-text25 {
            display: inline-block;
          }
          .testimonial17-text26 {
            display: inline-block;
            text-align: center;
          }
          .testimonial17-text27 {
            display: inline-block;
          }
          .testimonial17-text28 {
            display: inline-block;
          }
          .testimonial17-text29 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text30 {
            display: inline-block;
          }
          .testimonial17-text31 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text32 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text33 {
            display: inline-block;
          }
          .testimonial17-text34 {
            display: inline-block;
          }
          .testimonial17-text35 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text36 {
            display: inline-block;
          }
          .testimonial17-text37 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial17-card1 {
              width: 100%;
            }
            .testimonial17-card2 {
              width: 100%;
            }
            .testimonial17-card3 {
              width: 100%;
            }
            .testimonial17-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial17.defaultProps = {
  author2Name: undefined,
  author4Name: undefined,
  content1: undefined,
  author3Name: undefined,
  heading1: undefined,
  review3: undefined,
  author3Position: undefined,
  review1: undefined,
  review4: undefined,
  author2Position: undefined,
  author4Position: undefined,
  review2: undefined,
  author1Position: undefined,
  author1Name: undefined,
}

Testimonial17.propTypes = {
  author2Name: PropTypes.element,
  author4Name: PropTypes.element,
  content1: PropTypes.element,
  author3Name: PropTypes.element,
  heading1: PropTypes.element,
  review3: PropTypes.element,
  author3Position: PropTypes.element,
  review1: PropTypes.element,
  review4: PropTypes.element,
  author2Position: PropTypes.element,
  author4Position: PropTypes.element,
  review2: PropTypes.element,
  author1Position: PropTypes.element,
  author1Name: PropTypes.element,
}

export default Testimonial17
