/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63f55220e76aa41c96709c83").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class JobListingView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/JobListingController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = JobListingView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6415ef35826a426eeddfea13'
    htmlEl.dataset['wfSite'] = '63f55220e76aa41c96709c83'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = JobListingView.Controller !== JobListingView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/joshuas-dandy-site-06ecb9.webflow.css);


            * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-page-wrapper">
              <div className="af-class-global-styles w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n/* Get rid of top margin on first element in any rich text element */\n.af-view .w-richtext > :not(div):first-child, .af-view .w-richtext > div:first-child > :first-child {\n  margin-top: 0 !important;\n}\n/* Get rid of bottom margin on last element in any rich text element */\n.af-view .w-richtext>:last-child, .af-view .w-richtext ol li:last-child, .af-view .w-richtext ul li:last-child {\n\tmargin-bottom: 0 !important;\n}\n/* \nMake the following elements inherit typography styles from the parent and not have hardcoded values. \nImportant: You will not be able to style for example \"All Links\" in Designer with this CSS applied.\nUncomment this CSS to use it in the project. Leave this message for future hand-off.\n*/\n/*\na,\n.w-input,\n.w-select,\n.w-tab-link,\n.w-nav-link,\n.w-dropdown-btn,\n.w-dropdown-toggle,\n.w-dropdown-link {\n  color: inherit;\n  text-decoration: inherit;\n  font-size: inherit;\n}\n*/\n/* Prevent all click and hover interaction with an element */\n.af-view .af-class-pointer-events-off {\n\tpointer-events: none;\n}\n/* Enables all click and hover interaction with an element */\n.af-view .af-class-pointer-events-on {\n  pointer-events: auto;\n}\n/* Snippet enables you to add class of div-square which creates and maintains a 1:1 dimension of a div.*/\n.af-view .af-class-div-square::after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n/*Hide focus outline for main content element*/\n    .af-view main:focus-visible {\n    outline: -webkit-focus-ring-color auto 0px;\n}\n/* Make sure containers never lose their center alignment*/\n.af-view .af-class-container-medium, .af-view .af-class-container-small, .af-view .af-class-container-large {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n/*Reset selects, buttons, and links styles*/\n.af-view .w-input, .af-view .w-select, .af-view a {\ncolor: inherit;\ntext-decoration: inherit;\nfont-size: inherit;\n}\n/*Apply \"...\" after 3 lines of text */\n.af-view .af-class-text-style-3lines {\n    display: -webkit-box;\n    overflow: hidden;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n/* Apply \"...\" after 2 lines of text */\n.af-view .af-class-text-style-2lines {\n    display: -webkit-box;\n    overflow: hidden;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n/* Apply \"...\" at 100% width */\n.af-view .af-class-truncate-width { \n\t\twidth: 100%; \n    white-space: nowrap; \n    overflow: hidden; \n    text-overflow: ellipsis; \n}\n/* Removes native scrollbar */\n.af-view .af-class-no-scrollbar {\n    -ms-overflow-style: none;  // IE 10+\n    overflow: -moz-scrollbars-none;  // Firefox\n}\n.af-view .af-class-no-scrollbar::-webkit-scrollbar {\n    display: none; // Safari and Chrome\n}\n/* Adds inline flex display */\n.af-view .af-class-display-inlineflex {\n  display: inline-flex;\n}\n/* These classes are never overwritten */\n.af-view .af-class-hide {\n  display: none !important;\n}\n@media screen and (max-width: 991px) {\n    .af-view .af-class-hide, .af-view .af-class-hide-tablet {\n        display: none !important;\n    }\n}\n  @media screen and (max-width: 767px) {\n    .af-view .af-class-hide-mobile-landscape{\n      display: none !important;\n    }\n}\n  @media screen and (max-width: 479px) {\n    .af-view .af-class-hide-mobile{\n      display: none !important;\n    }\n}\n.af-view .af-class-margin-0 {\n  margin: 0rem !important;\n}\n.af-view .af-class-padding-0 {\n  padding: 0rem !important;\n}\n.af-view .af-class-spacing-clean {\npadding: 0rem !important;\nmargin: 0rem !important;\n}\n.af-view .af-class-margin-top {\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-top {\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-right {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-right {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-bottom {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-bottom {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-left {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.af-view .af-class-padding-left {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.af-view .af-class-margin-horizontal {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.af-view .af-class-padding-horizontal {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.af-view .af-class-margin-vertical {\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-vertical {\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-button {\nbackground: #F9F4F1;\nbox-shadow: 8px 8px 16px #E8D1C9, -8px -8px 16px #FFFFFF;\nborder-radius: 100px;\n}\n" }} />
              </div>
              <div data-animation="default" className="af-class-navbar1_component w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav" af-view="navbar" data-easing="ease" data-collapse="medium" data-w-id="a7165b6f-ca4e-bb61-f058-025bca0e6683" role="banner" data-duration={400}>
                <div className="af-class-navbar1_container">
                  <a href="#" className="af-class-navbar1_logo-link w-nav-brand"><img src="images/Group-1.svg" loading="lazy" alt className="af-class-navbar1_logo" /></a>
                  <nav role="navigation" className="af-class-navbar1_menu af-class-is-page-height-tablet w-nav-menu">
                    <a href="#" className="af-class-navbar1_link w-nav-link">Find Work</a>
                    <a href="#" className="af-class-navbar1_link w-nav-link">Find Talent</a>
                    <a href="#" className="af-class-navbar1_link w-nav-link">Why Bitworx</a>
                    <div className="af-class-navbar1_menu-buttons">
                      <a data-w-id="a7165b6f-ca4e-bb61-f058-025bca0e668f" href="#" className="af-class-button af-class-is-small w-button">Login</a>
                      <div className="af-class-signup-modal3_component">
                        <div className="af-class-signup-modal3_content-wrapper">
                          <div data-current="Sign up" data-easing="ease" data-duration-in={300} data-duration-out={100} className="af-class-signup-modal3_tabs w-tabs">
                            <div className="af-class-signup-modal3_tabs-menu w-tab-menu">
                              <a data-w-tab="Sign up" className="af-class-signup-modal3_tab-link w-inline-block w-tab-link w--current">
                                <div>Sign Up</div>
                              </a>
                              <a data-w-tab="Log in" className="af-class-signup-modal3_tab-link w-inline-block w-tab-link">
                                <div>Login</div>
                              </a>
                            </div>
                            <div className="af-class-signup-modal3_tabs-content w-tab-content">
                              <div data-w-tab="Sign up" className="af-class-signup-modal3_signup w-tab-pane w--tab-active">
                                <div className="af-class-signup-modal3_signup-form-block w-form">
                                  <form id="wf-form-Sign-up-Form-10" name="wf-form-Sign-up-Form-10" data-name="Sign up Form" method="get" className="af-class-signup9_signup-form">
                                    <div className="af-class-form-field-wrapper">
                                      <div className="af-class-field-label">Wallet Address</div><input type="text" className="af-class-form-input w-input" maxLength={256} name="Wallet-Address-2" data-name="Wallet Address 2" placeholder id="Wallet-Address-2" required />
                                    </div>
                                    <div className="af-class-form-field-wrapper">
                                      <div className="af-class-field-label">User name</div><input type="text" className="af-class-form-input w-input" maxLength={256} name="User-Name-4" data-name="User Name 4" placeholder id="User-Name-4" required />
                                    </div>
                                    <div className="af-class-form-field-wrapper">
                                      <div className="af-class-field-label">Password</div><input type="password" className="af-class-form-input w-input" maxLength={256} name="Password-3" data-name="Password 3" placeholder id="Password-3" required />
                                    </div>
                                    <div className="af-class-form-field-wrapper">
                                      <div className="af-class-field-label">Password confirmation</div><input type="password" className="af-class-form-input w-input" maxLength={256} name="Password-Confirmation-2" data-name="Password Confirmation 2" placeholder id="Password-Confirmation-2" required />
                                    </div><input type="submit" defaultValue="Sign Up" data-wait="Please wait..." id="w-node-a7165b6f-ca4e-bb61-f058-025bca0e66af-ca0e6683" className="af-class-button af-class-max-width-full w-button" />
                                  </form>
                                  <div className="af-class-success-message w-form-done">
                                    <div className="af-class-success-text">Thank you! Your submission has been received!</div>
                                  </div>
                                  <div className="af-class-error-message w-form-fail">
                                    <div className="af-class-error-text">Oops! Something went wrong while submitting the form.</div>
                                  </div>
                                </div>
                              </div>
                              <div data-w-tab="Log in" className="af-class-signup-modal3_login w-tab-pane">
                                <div className="af-class-signup-modal3_login-form-block w-form">
                                  <form id="wf-form-Log-in-Form-9" name="wf-form-Log-in-Form-9" data-name="Log in Form 9" method="get" className="af-class-signup-modal3_login-form">
                                    <div className="af-class-form-field-wrapper">
                                      <div className="af-class-field-label">Wallet Address</div><input type="text" className="af-class-form-input w-input" maxLength={256} name="User-Name-4" data-name="User Name 4" placeholder id="User-Name-4" required />
                                    </div>
                                    <div className="af-class-form-field-wrapper">
                                      <div className="af-class-field-label-wrapper">
                                        <div className="af-class-field-label">Password</div>
                                      </div><input type="password" className="af-class-form-input w-input" maxLength={256} name="Password-3" data-name="Password 3" placeholder id="Password-3" required />
                                    </div>
                                    <div id="w-node-a7165b6f-ca4e-bb61-f058-025bca0e66c2-ca0e6683" className="w-layout-grid af-class-form-button-wrapper"><input type="submit" defaultValue="Log In" data-wait="Please wait..." id="w-node-a7165b6f-ca4e-bb61-f058-025bca0e66c3-ca0e6683" className="af-class-button af-class-max-width-full w-button" /></div>
                                  </form>
                                  <div className="af-class-success-message w-form-done">
                                    <div className="af-class-success-text">Thank you! Your submission has been received!</div>
                                  </div>
                                  <div className="af-class-error-message w-form-fail">
                                    <div className="af-class-error-text">Oops! Something went wrong while submitting the form.</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a data-w-id="a7165b6f-ca4e-bb61-f058-025bca0e66ca" href="#" className="af-class-signup-modal3_close-button w-inline-block"><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031627a354aee7f_icon_close-modal-white.svg" loading="lazy" alt className="af-class-hide-mobile-landscape" /><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031623afe4aee7e_icon_close-modal.svg" loading="lazy" alt className="af-class-show-mobile-landscape" /></a>
                        <div data-w-id="a7165b6f-ca4e-bb61-f058-025bca0e66cd" className="af-class-signup-modal3_background-overlay" />
                      </div>
                    </div>
                  </nav>
                  <div className="af-class-navbar1_menu-button w-nav-button">
                    <div className="af-class-menu-icon1">
                      <div className="af-class-menu-icon1_line-top" />
                      <div className="af-class-menu-icon1_line-middle">
                        <div className="af-class-menu-icon_line-middle-inner" />
                      </div>
                      <div className="af-class-menu-icon1_line-bottom" />
                    </div>
                  </div>
                </div>
              </div>
              <main af-view="job-listing" className="af-class-main-wrapper">
                <section className="af-class-section_contact12">
                  <div className="af-class-padding-global">
                    <div className="af-class-container-large">
                      <div className="af-class-padding-section-large">
                        <div className="af-class-margin-bottom af-class-margin-large">
                          <div className="af-class-max-width-large">
                            <div className="af-class-margin-bottom af-class-margin-small">
                              <h2>Post a job</h2>
                            </div>
                            <p className="af-class-text-size-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </div>
                        </div>
                        <div className="af-class-contact12_form-block w-form">
                          <form id="wf-form-Contact-12-Form" name="wf-form-Contact-12-Form" data-name="Contact 12 Form" method="get" className="af-class-contact12_form">
                            <div className="af-class-form-field-2col">
                              <div className="af-class-form-field-wrapper"><label htmlFor="Contact-12-First-Name" className="af-class-field-label">Job listing title</label><input type="text" className="af-class-form-input w-input" maxLength={256} name="Contact-12-First-Name" data-name="Contact 12 First Name" placeholder id="Contact-12-First-Name" required /></div>
                              <div className="af-class-form-field-wrapper"><label htmlFor="Contact-12-Last-Name" className="af-class-field-label">Budget</label><input type="text" className="af-class-form-input w-input" maxLength={256} name="Contact-12-Last-Name" data-name="Contact 12 Last Name" placeholder id="Contact-12-Last-Name" required /></div>
                            </div>
                            <div className="af-class-form-field-wrapper"><label htmlFor="Contact-12-Last-Name-2" className="af-class-field-label">Public key</label><input type="text" className="af-class-form-input w-input" maxLength={256} name="Contact-12-Last-Name-2" data-name="Contact 12 Last Name 2" placeholder id="Contact-12-Last-Name-2" required /></div>
                            <div className="af-class-form-field-wrapper"><label htmlFor="Contact-12-Message" className="af-class-field-label">Job description</label><textarea placeholder="Describe your listing" maxLength={5000} id="Contact-12-Message" name="Contact-12-Message" data-name="Contact 12 Message" required className="af-class-form-input af-class-is-text-area w-input" defaultValue={""} /></div>
                            <div className="af-class-padding-vertical af-class-padding-xsmall">
                              <div className="af-class-form-field-wrapper">
                                <div className="af-class-margin-bottom af-class-margin-xsmall"><label htmlFor="Contact-2-Select-3" className="af-class-field-label">Job Category</label></div>
                                <div className="w-layout-grid af-class-form-radio-2col"><label className="af-class-form-radio w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-form-radio-icon w-radio-input" /><input type="radio" data-name="Contact 12 Radio" defaultValue="Contact 12 Radio 1" name="Contact-12-Radio" id="Contact 12 Radio -7" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span htmlFor="Contact 12 Radio -7" className="af-class-form-radio-label w-form-label">Art</span>
                                  </label><label className="af-class-form-radio w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-form-radio-icon w-radio-input" /><input type="radio" data-name="Contact 12 Radio" defaultValue="Contact 12 Radio 2" name="Contact-12-Radio" id="Contact 12 Radio -6" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span htmlFor="Contact 12 Radio -6" className="af-class-form-radio-label w-form-label">Web Development</span>
                                  </label><label className="af-class-form-radio w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-form-radio-icon w-radio-input" /><input type="radio" data-name="Contact 12 Radio" id="Contact 12 Radio -5" name="Contact-12-Radio" defaultValue="Contact 12 Radio 3" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span htmlFor="Contact 12 Radio -5" className="af-class-form-radio-label w-form-label">Illustration</span>
                                  </label><label className="af-class-form-radio w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-form-radio-icon w-radio-input" /><input type="radio" data-name="Contact 12 Radio" defaultValue="Contact 12 Radio 4" name="Contact-12-Radio" id="Contact 12 Radio -4" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span htmlFor="Contact 12 Radio -4" className="af-class-form-radio-label w-form-label">Logo Design</span>
                                  </label><label className="af-class-form-radio w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-form-radio-icon w-radio-input" /><input type="radio" data-name="Contact 12 Radio" id="Contact 12 Radio -3" name="Contact-12-Radio" defaultValue="Contact 12 Radio 5" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span htmlFor="Contact 12 Radio -3" className="af-class-form-radio-label w-form-label">Software Development</span>
                                  </label><label className="af-class-form-radio w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-form-radio-icon w-radio-input" /><input type="radio" data-name="Contact 12 Radio" id="Contact 12 Radio -2" name="Contact-12-Radio" defaultValue="Contact 12 Radio 6" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span htmlFor="Contact 12 Radio -2" className="af-class-form-radio-label w-form-label">Data Entry</span>
                                  </label><label className="af-class-form-radio w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-form-radio-icon w-radio-input" /><input type="radio" data-name="Contact 12 Radio" id="Contact 12 Radio -2" name="Contact-12-Radio" defaultValue="Contact 12 Radio 6" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span htmlFor="Contact 12 Radio -2" className="af-class-form-radio-label w-form-label">Voice over</span>
                                  </label><label className="af-class-form-radio w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-form-radio-icon w-radio-input" /><input type="radio" data-name="Contact 12 Radio" id="Contact 12 Radio -2" name="Contact-12-Radio" defaultValue="Contact 12 Radio 6" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span htmlFor="Contact 12 Radio -2" className="af-class-form-radio-label w-form-label">Video Entry</span>
                                  </label><label className="af-class-form-radio w-radio">
                                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-form-radio-icon w-radio-input" /><input type="radio" data-name="Contact 12 Radio" id="Contact 12 Radio -2" name="Contact-12-Radio" defaultValue="Contact 12 Radio 6" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span htmlFor="Contact 12 Radio -2" className="af-class-form-radio-label w-form-label">Writing</span>
                                  </label></div>
                              </div>
                            </div><input type="submit" defaultValue="Submit" data-wait="Please wait..." id="w-node-_8cb2c85b-74ae-99c1-05d5-68fe23b1311e-eddfea13" className="af-class-button w-button" />
                          </form>
                          <div className="af-class-success-message w-form-done">
                            <div className="af-class-success-text">Thank you! Your submission has been received!</div>
                          </div>
                          <div className="af-class-error-message w-form-fail">
                            <div className="af-class-error-text">Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="af-class-footer4_component">
                  <div className="af-class-padding-global">
                    <div className="af-class-container-large">
                      <div className="af-class-padding-vertical af-class-padding-xxlarge">
                        <div className="af-class-padding-bottom af-class-padding-xxlarge">
                          <div className="w-layout-grid af-class-footer4_top-wrapper">
                            <a href="#" id="w-node-b7a57a53-c1cf-9291-fe9a-15b0e6681d34-eddfea13" className="af-class-footer4_logo-link w-nav-brand"><img src="images/Group-1.svg" loading="lazy" alt /></a>
                            <div className="w-layout-grid af-class-footer4_link-list">
                              <a href="#" className="af-class-navbar1_link">Find work</a>
                              <a href="#" className="af-class-navbar1_link">Find Talent</a>
                              <a href="#" className="af-class-navbar1_link">Why Bitworx</a>
                            </div>
                            <div id="w-node-b7a57a53-c1cf-9291-fe9a-15b0e6681d41-eddfea13" className="w-layout-grid af-class-footer4_social-list">
                              <a href="#" className="af-class-footer4_social-link w-inline-block">
                                <div className="af-class-social-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z" fill="CurrentColor" />
                                  </svg></div>
                              </a>
                              <a href="#" className="af-class-footer4_social-link w-inline-block">
                                <div className="af-class-social-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z" fill="CurrentColor" />
                                  </svg></div>
                              </a>
                              <a href="#" className="af-class-footer4_social-link w-inline-block">
                                <div className="af-class-social-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9728 6.7174C20.5084 7.33692 19.947 7.87733 19.3103 8.31776C19.3103 8.47959 19.3103 8.64142 19.3103 8.81225C19.3154 11.7511 18.1415 14.5691 16.0518 16.6345C13.962 18.6999 11.1312 19.8399 8.19405 19.7989C6.49599 19.8046 4.81967 19.4169 3.29642 18.6661C3.21428 18.6302 3.16131 18.549 3.16162 18.4593V18.3604C3.16162 18.2313 3.26623 18.1267 3.39527 18.1267C5.06442 18.0716 6.67402 17.4929 7.99634 16.4724C6.48553 16.4419 5.12619 15.5469 4.5006 14.1707C4.46901 14.0956 4.47884 14.0093 4.52657 13.9432C4.57429 13.8771 4.653 13.8407 4.73425 13.8471C5.19342 13.8932 5.65718 13.8505 6.1002 13.7212C4.43239 13.375 3.17921 11.9904 2.99986 10.2957C2.99349 10.2144 3.02992 10.1357 3.096 10.0879C3.16207 10.0402 3.24824 10.0303 3.32338 10.062C3.77094 10.2595 4.25409 10.3635 4.74324 10.3676C3.28184 9.40846 2.65061 7.58405 3.20655 5.92622C3.26394 5.76513 3.40181 5.64612 3.5695 5.61294C3.73718 5.57975 3.90996 5.63728 4.02432 5.76439C5.99639 7.86325 8.70604 9.11396 11.5819 9.25279C11.5083 8.95885 11.4721 8.65676 11.4741 8.35372C11.501 6.76472 12.4842 5.34921 13.9634 4.76987C15.4425 4.19054 17.1249 4.56203 18.223 5.71044C18.9714 5.56785 19.695 5.31645 20.3707 4.96421C20.4202 4.93331 20.483 4.93331 20.5325 4.96421C20.5634 5.01373 20.5634 5.07652 20.5325 5.12604C20.2052 5.87552 19.6523 6.50412 18.9509 6.92419C19.5651 6.85296 20.1685 6.70807 20.7482 6.49264C20.797 6.45942 20.8611 6.45942 20.9099 6.49264C20.9508 6.51134 20.9814 6.54711 20.9935 6.59042C21.0056 6.63373 20.998 6.68018 20.9728 6.7174Z" fill="CurrentColor" />
                                  </svg></div>
                              </a>
                              <a href="#" className="af-class-footer4_social-link w-inline-block">
                                <div className="af-class-social-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z" fill="CurrentColor" />
                                  </svg></div>
                              </a>
                              <a href="#" className="af-class-footer4_social-link w-inline-block">
                                <div className="af-class-social-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.5399 4.33992L19.9999 4.48992C21.7284 4.68529 23.0264 6.16064 22.9999 7.89992V16.0999C23.0264 17.8392 21.7284 19.3146 19.9999 19.5099L18.5999 19.6599C14.2315 20.1099 9.82835 20.1099 5.45991 19.6599L3.99991 19.5099C2.27143 19.3146 0.973464 17.8392 0.999909 16.0999V7.89992C0.973464 6.16064 2.27143 4.68529 3.99991 4.48992L5.39991 4.33992C9.76835 3.88995 14.1715 3.88995 18.5399 4.33992ZM11.1099 15.2199L14.9999 12.6199H15.0599C15.2695 12.4833 15.3959 12.2501 15.3959 11.9999C15.3959 11.7497 15.2695 11.5165 15.0599 11.3799L11.1699 8.77992C10.9402 8.62469 10.6437 8.60879 10.3987 8.73859C10.1538 8.86839 10.0004 9.12271 9.99991 9.39992V14.5999C10.0128 14.858 10.1576 15.0913 10.3832 15.2173C10.6088 15.3433 10.8834 15.3443 11.1099 15.2199Z" fill="currentColor" />
                                  </svg></div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-line-divider" />
                        <div className="af-class-padding-top af-class-padding-medium">
                          <div className="w-layout-grid af-class-footer4_bottom-wrapper">
                            <div id="w-node-b7a57a53-c1cf-9291-fe9a-15b0e6681d4f-eddfea13" className="af-class-footer4_credit-text">© 2023 Bitworx. All rights reserved.</div>
                            <a href="#" className="af-class-footer4_legal-link">Privacy Policy</a>
                            <a href="#" className="af-class-footer4_legal-link">Terms of Service</a>
                            <a href="#" className="af-class-footer4_legal-link">Cookies Settings</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default JobListingView

/* eslint-enable */