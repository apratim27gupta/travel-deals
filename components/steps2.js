import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Steps2 = (props) => {
  return (
    <>
      <div className="steps2-container1 thq-section-padding">
        <div className="steps2-max-width thq-section-max-width">
          <div className="steps2-container2 thq-grid-2">
            <div className="steps2-section-header">
              <h2 className="thq-heading-2">Find the best hotel deals</h2>
              <div className="steps2-actions">
                <button className="thq-button-animated thq-button-filled steps2-button">
                  <span className="thq-body-small">Book Now</span>
                </button>
              </div>
            </div>
            <div className="steps2-container3">
              <div className="steps2-container4 thq-card">
                <h2>
                  {props.step1Title ?? (
                    <Fragment>
                      <h2 className="steps2-text27 thq-heading-2">
                        Search for Hotels
                      </h2>
                    </Fragment>
                  )}
                </h2>
                <span>
                  {props.step1Description ?? (
                    <Fragment>
                      <span className="steps2-text29 thq-body-small">
                        Enter your destination, check-in and check-out dates,
                        and number of guests to search for available hotels.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text14 thq-heading-3">01</label>
              </div>
              <div className="steps2-container5 thq-card">
                <h2>
                  {props.step2Title ?? (
                    <Fragment>
                      <h2 className="steps2-text26 thq-heading-2">
                        Select Room
                      </h2>
                    </Fragment>
                  )}
                </h2>
                <span>
                  {props.step2Description ?? (
                    <Fragment>
                      <span className="steps2-text28 thq-body-small">
                        Browse through the list of available rooms and choose
                        the one that suits your preferences and budget.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text17 thq-heading-3">02</label>
              </div>
              <div className="steps2-container6 thq-card">
                <h2>
                  {props.step3Title ?? (
                    <Fragment>
                      <h2 className="steps2-text25 thq-heading-2">
                        Enter Details
                      </h2>
                    </Fragment>
                  )}
                </h2>
                <span>
                  {props.step3Description ?? (
                    <Fragment>
                      <span className="steps2-text31 thq-body-small">
                        Fill in your personal details and payment information to
                        confirm your booking.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text20 thq-heading-3">03</label>
              </div>
              <div className="steps2-container7 thq-card">
                <h2>
                  {props.step4Title ?? (
                    <Fragment>
                      <h2 className="steps2-text24 thq-heading-2">
                        Confirmation
                      </h2>
                    </Fragment>
                  )}
                </h2>
                <span>
                  {props.step4Description ?? (
                    <Fragment>
                      <span className="steps2-text30 thq-body-small">
                        Receive a confirmation email with all the details of
                        your booking. Your reservation is now complete!
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps2-text23 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps2-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps2-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps2-container2 {
            align-items: start;
          }
          .steps2-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps2-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps2-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps2-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text14 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text17 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text20 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text23 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-text24 {
            display: inline-block;
          }
          .steps2-text25 {
            display: inline-block;
          }
          .steps2-text26 {
            display: inline-block;
          }
          .steps2-text27 {
            display: inline-block;
          }
          .steps2-text28 {
            display: inline-block;
            text-align: center;
          }
          .steps2-text29 {
            display: inline-block;
            text-align: center;
          }
          .steps2-text30 {
            display: inline-block;
            text-align: center;
          }
          .steps2-text31 {
            display: inline-block;
            text-align: center;
          }
          @media (max-width: 991px) {
            .steps2-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps2-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .steps2-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps2-container4 {
              width: 100%;
            }
            .steps2-container5 {
              width: 100%;
            }
            .steps2-container6 {
              width: 100%;
            }
            .steps2-container7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps2-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps2.defaultProps = {
  step4Title: undefined,
  step3Title: undefined,
  step2Title: undefined,
  step1Title: undefined,
  step2Description: undefined,
  step1Description: undefined,
  step4Description: undefined,
  step3Description: undefined,
}

Steps2.propTypes = {
  step4Title: PropTypes.element,
  step3Title: PropTypes.element,
  step2Title: PropTypes.element,
  step1Title: PropTypes.element,
  step2Description: PropTypes.element,
  step1Description: PropTypes.element,
  step4Description: PropTypes.element,
  step3Description: PropTypes.element,
}

export default Steps2
