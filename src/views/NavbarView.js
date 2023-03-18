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
              <div className="af-class-global-styles w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n/* Get rid of top margin on first element in any rich text element */\n.af-view .w-richtext > :not(div):first-child, .af-view .w-richtext > div:first-child > :first-child {\n  margin-top: 0 !important;\n}\n/* Get rid of bottom margin on last element in any rich text element */\n.af-view .w-richtext>:last-child, .af-view .w-richtext ol li:last-child, .af-view .w-richtext ul li:last-child {\n\tmargin-bottom: 0 !important;\n}\n/* \nMake the following elements inherit typography styles from the parent and not have hardcoded values. \nImportant: You will not be able to style for example \"All Links\" in Designer with this CSS applied.\nUncomment this CSS to use it in the project. Leave this message for future hand-off.\n*/\n/*\na,\n.w-input,\n.w-select,\n.w-tab-link,\n.w-nav-link,\n.w-dropdown-btn,\n.w-dropdown-toggle,\n.w-dropdown-link {\n  color: inherit;\n  text-decoration: inherit;\n  font-size: inherit;\n}\n*/\n/* Prevent all click and hover interaction with an element */\n.af-view .af-class-pointer-events-off {\n\tpointer-events: none;\n}\n/* Enables all click and hover interaction with an element */\n.af-view .af-class-pointer-events-on {\n  pointer-events: auto;\n}\n/* Snippet enables you to add class of div-square which creates and maintains a 1:1 dimension of a div.*/\n.af-view .af-class-div-square::after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n/*Hide focus outline for main content element*/\n    .af-view main:focus-visible {\n    outline: -webkit-focus-ring-color auto 0px;\n}\n/* Make sure containers never lose their center alignment*/\n.af-view .af-class-container-medium, .af-view .af-class-container-small, .af-view .af-class-container-large {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n/*Reset selects, buttons, and links styles*/\n.af-view .w-input, .af-view .w-select, .af-view a {\ncolor: inherit;\ntext-decoration: inherit;\nfont-size: inherit;\n}\n/*Apply \"...\" after 3 lines of text */\n.af-view .af-class-text-style-3lines {\n    display: -webkit-box;\n    overflow: hidden;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n/* Apply \"...\" after 2 lines of text */\n.af-view .af-class-text-style-2lines {\n    display: -webkit-box;\n    overflow: hidden;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n/* Apply \"...\" at 100% width */\n.af-view .af-class-truncate-width { \n\t\twidth: 100%; \n    white-space: nowrap; \n    overflow: hidden; \n    text-overflow: ellipsis; \n}\n/* Removes native scrollbar */\n.af-view .af-class-no-scrollbar {\n    -ms-overflow-style: none;  // IE 10+\n    overflow: -moz-scrollbars-none;  // Firefox\n}\n.af-view .af-class-no-scrollbar::-webkit-scrollbar {\n    display: none; // Safari and Chrome\n}\n/* Adds inline flex display */\n.af-view .af-class-display-inlineflex {\n  display: inline-flex;\n}\n/* These classes are never overwritten */\n.af-view .af-class-hide {\n  display: none !important;\n}\n@media screen and (max-width: 991px) {\n    .af-view .af-class-hide, .af-view .af-class-hide-tablet {\n        display: none !important;\n    }\n}\n  @media screen and (max-width: 767px) {\n    .af-view .af-class-hide-mobile-landscape{\n      display: none !important;\n    }\n}\n  @media screen and (max-width: 479px) {\n    .af-view .af-class-hide-mobile{\n      display: none !important;\n    }\n}\n.af-view .af-class-margin-0 {\n  margin: 0rem !important;\n}\n.af-view .af-class-padding-0 {\n  padding: 0rem !important;\n}\n.af-view .af-class-spacing-clean {\npadding: 0rem !important;\nmargin: 0rem !important;\n}\n.af-view .af-class-margin-top {\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-top {\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-right {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-right {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-bottom {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-bottom {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-left {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.af-view .af-class-padding-left {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.af-view .af-class-margin-horizontal {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.af-view .af-class-padding-horizontal {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.af-view .af-class-margin-vertical {\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-vertical {\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-button {\nbackground: #F9F4F1;\nbox-shadow: 8px 8px 16px #E8D1C9, -8px -8px 16px #FFFFFF;\nborder-radius: 100px;\n}\n" }} />
              </div>
              <main af-view="job-listing" className="af-class-main-wrapper">
                <div className="af-class-padding-global">
                  <div className="af-class-container-large">
                    <div data-animation="default" className="af-class-navbar1_component w-nav" data-easing2="ease" af-view="navbar" data-easing="ease" data-collapse="medium" data-w-id="e50562dd-d6fb-c398-edc3-ed733b4edf4f" role="banner" data-duration={400}>
                      <div className="af-class-navbar1_container">
                        <a href="#" className="af-class-navbar1_logo-link w-nav-brand"><img src="images/Group-1.svg" loading="lazy" alt className="af-class-navbar1_logo" /></a>
                        <nav role="navigation" className="af-class-navbar1_menu af-class-is-page-height-tablet w-nav-menu">
                          <a href="job-listing.html" className="af-class-navbar1_link w-nav-link">Find Work</a>
                          <a href="#" className="af-class-navbar1_link w-nav-link">Find Talent</a>
                          <a href="#" className="af-class-navbar1_link w-nav-link">Why Bitworx</a>
                          <div className="af-class-navbar1_menu-buttons">
                            <a data-w-id="f91da6c8-8135-a495-3ba1-4ea64ccf11c3" href="#" className="af-class-button af-class-is-small w-button">Login</a>
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

export default NavbarView

/* eslint-enable */