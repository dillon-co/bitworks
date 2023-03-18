/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63f55220e76aa41c96709c83").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class NavbarView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NavbarController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NavbarView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '641614c01363c97d273a7e62'
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
    const proxies = NavbarView.Controller !== NavbarView ? transformProxies(this.props.children) : {

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
            <div af-view="navbar">
              <div data-animation="default" className="af-class-navbar1_component w-nav" data-easing2="ease" af-view="navbar" data-easing="ease" data-collapse="medium" data-w-id="e50562dd-d6fb-c398-edc3-ed733b4edf4f" role="banner" data-duration={400}>
                <div className="af-class-navbar1_container">
                  <a href="#" className="af-class-navbar1_logo-link w-nav-brand"><img src="images/Group-1.svg" loading="lazy" alt className="af-class-navbar1_logo" /></a>
                  <nav role="navigation" className="af-class-navbar1_menu af-class-is-page-height-tablet w-nav-menu">
                    <a href="job-listing.html" className="af-class-navbar1_link w-nav-link">Find Work</a>
                    <a href="#" className="af-class-navbar1_link w-nav-link">Find Talent</a>
                    <a href="#" className="af-class-navbar1_link w-nav-link">Why Bitworx</a>
                    <div className="af-class-navbar1_menu-buttons">
                      <a data-w-id="f91da6c8-8135-a495-3ba1-4ea64ccf11c3" href="#" className="af-class-button af-class-is-small w-button">Login</a>
                      <div style={{display: 'none', opacity: 0}} className="af-class-signup-modal3_component">
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
                                    </div><input type="submit" defaultValue="Sign Up" data-wait="Please wait..." id="w-node-f91da6c8-8135-a495-3ba1-4ea64ccf11e3-273a7e62" className="af-class-button af-class-max-width-full w-button" />
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
                                    <div id="w-node-f91da6c8-8135-a495-3ba1-4ea64ccf11f6-273a7e62" className="w-layout-grid af-class-form-button-wrapper"><input type="submit" defaultValue="Log In" data-wait="Please wait..." id="w-node-f91da6c8-8135-a495-3ba1-4ea64ccf11f7-273a7e62" className="af-class-button af-class-max-width-full w-button" /></div>
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
                        <a data-w-id="f91da6c8-8135-a495-3ba1-4ea64ccf11fe" href="#" className="af-class-signup-modal3_close-button w-inline-block"><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031627a354aee7f_icon_close-modal-white.svg" loading="lazy" alt className="af-class-hide-mobile-landscape" /><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031623afe4aee7e_icon_close-modal.svg" loading="lazy" alt className="af-class-show-mobile-landscape" /></a>
                        <div data-w-id="f91da6c8-8135-a495-3ba1-4ea64ccf1201" className="af-class-signup-modal3_background-overlay" />
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
              <div className="af-class-global-styles w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n/* Get rid of top margin on first element in any rich text element */\n.af-view .w-richtext > :not(div):first-child, .af-view .w-richtext > div:first-child > :first-child {\n  margin-top: 0 !important;\n}\n/* Get rid of bottom margin on last element in any rich text element */\n.af-view .w-richtext>:last-child, .af-view .w-richtext ol li:last-child, .af-view .w-richtext ul li:last-child {\n\tmargin-bottom: 0 !important;\n}\n/* \nMake the following elements inherit typography styles from the parent and not have hardcoded values. \nImportant: You will not be able to style for example \"All Links\" in Designer with this CSS applied.\nUncomment this CSS to use it in the project. Leave this message for future hand-off.\n*/\n/*\na,\n.w-input,\n.w-select,\n.w-tab-link,\n.w-nav-link,\n.w-dropdown-btn,\n.w-dropdown-toggle,\n.w-dropdown-link {\n  color: inherit;\n  text-decoration: inherit;\n  font-size: inherit;\n}\n*/\n/* Prevent all click and hover interaction with an element */\n.af-view .af-class-pointer-events-off {\n\tpointer-events: none;\n}\n/* Enables all click and hover interaction with an element */\n.af-view .af-class-pointer-events-on {\n  pointer-events: auto;\n}\n/* Snippet enables you to add class of div-square which creates and maintains a 1:1 dimension of a div.*/\n.af-view .af-class-div-square::after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n/*Hide focus outline for main content element*/\n    .af-view main:focus-visible {\n    outline: -webkit-focus-ring-color auto 0px;\n}\n/* Make sure containers never lose their center alignment*/\n.af-view .af-class-container-medium, .af-view .af-class-container-small, .af-view .af-class-container-large {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n/*Reset selects, buttons, and links styles*/\n.af-view .w-input, .af-view .w-select, .af-view a {\ncolor: inherit;\ntext-decoration: inherit;\nfont-size: inherit;\n}\n/*Apply \"...\" after 3 lines of text */\n.af-view .af-class-text-style-3lines {\n    display: -webkit-box;\n    overflow: hidden;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n/* Apply \"...\" after 2 lines of text */\n.af-view .af-class-text-style-2lines {\n    display: -webkit-box;\n    overflow: hidden;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n/* Apply \"...\" at 100% width */\n.af-view .af-class-truncate-width { \n\t\twidth: 100%; \n    white-space: nowrap; \n    overflow: hidden; \n    text-overflow: ellipsis; \n}\n/* Removes native scrollbar */\n.af-view .af-class-no-scrollbar {\n    -ms-overflow-style: none;  // IE 10+\n    overflow: -moz-scrollbars-none;  // Firefox\n}\n.af-view .af-class-no-scrollbar::-webkit-scrollbar {\n    display: none; // Safari and Chrome\n}\n/* Adds inline flex display */\n.af-view .af-class-display-inlineflex {\n  display: inline-flex;\n}\n/* These classes are never overwritten */\n.af-view .af-class-hide {\n  display: none !important;\n}\n@media screen and (max-width: 991px) {\n    .af-view .af-class-hide, .af-view .af-class-hide-tablet {\n        display: none !important;\n    }\n}\n  @media screen and (max-width: 767px) {\n    .af-view .af-class-hide-mobile-landscape{\n      display: none !important;\n    }\n}\n  @media screen and (max-width: 479px) {\n    .af-view .af-class-hide-mobile{\n      display: none !important;\n    }\n}\n.af-view .af-class-margin-0 {\n  margin: 0rem !important;\n}\n.af-view .af-class-padding-0 {\n  padding: 0rem !important;\n}\n.af-view .af-class-spacing-clean {\npadding: 0rem !important;\nmargin: 0rem !important;\n}\n.af-view .af-class-margin-top {\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-top {\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-right {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-right {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-bottom {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-bottom {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-left {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.af-view .af-class-padding-left {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.af-view .af-class-margin-horizontal {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.af-view .af-class-padding-horizontal {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.af-view .af-class-margin-vertical {\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-vertical {\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-button {\nbackground: #F9F4F1;\nbox-shadow: 8px 8px 16px #E8D1C9, -8px -8px 16px #FFFFFF;\nborder-radius: 100px;\n}\n" }} />
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default NavbarView

/* eslint-enable */