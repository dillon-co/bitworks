/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63f55220e76aa41c96709c83").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '63f55220e76aa425bd709c8b'
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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

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
              <main af-view="home-page" className="af-class-main-wrapper">
                <header data-w-id="381d5242-8657-deb1-379b-d5ae39fdb78d" className="af-class-section_header76">
                  <div>
                    <div className="w-layout-grid af-class-header76_component">
                      <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb78f-bd709c8b" className="af-class-header76_content-left">
                        <div className="af-class-margin-bottom af-class-margin-small">
                          <h1>Empowering the global marketplace with Bitcoin</h1>
                        </div>
                        <p className="af-class-text-size-medium">Bitworx empowers global participation in the digital economy with lightning-fast, trustless transactions. Our platform leverages the lightning network and decentralized smart contracts to facilitate seamless interactions between clients and freelancers without the need for a bank account.</p>
                        <div className="af-class-margin-top af-class-margin-medium">
                          <div className="af-class-button-group">
                            <a href="#" className="af-class-button w-button">Get Started</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-header76_content-right">
                        <div className="af-class-header76_images-layout">
                          <div className="af-class-header76_image-list-left">
                            <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb79e-bd709c8b" className="af-class-header76_image-list">
                              <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb79f-bd709c8b" className="af-class-header76_image-wrapper"><img src="images/04.png" loading="lazy" id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7a0-bd709c8b" alt className="af-class-header76_image" /></div>
                              <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7a1-bd709c8b" className="af-class-header76_image-wrapper"><img src="images/25.png" loading="lazy" alt className="af-class-header76_image" /></div>
                              <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7a3-bd709c8b" className="af-class-header76_image-wrapper"><img src="images/09.png" loading="lazy" id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7a4-bd709c8b" alt className="af-class-header76_image" /></div>
                            </div>
                            <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7a5-bd709c8b" className="af-class-header76_image-list">
                              <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7a6-bd709c8b" className="af-class-header76_image-wrapper"><img src="images/15.png" loading="lazy" id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7a7-bd709c8b" alt className="af-class-header76_image" /></div>
                              <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7a8-bd709c8b" className="af-class-header76_image-wrapper"><img src="images/15.png" loading="lazy" id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7a9-bd709c8b" alt className="af-class-header76_image" /></div>
                              <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7aa-bd709c8b" className="af-class-header76_image-wrapper"><img src="images/25.png" loading="lazy" id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7ab-bd709c8b" alt className="af-class-header76_image" /></div>
                            </div>
                          </div>
                          <div className="af-class-header76_image-list-right">
                            <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7ad-bd709c8b" className="af-class-header76_image-list">
                              <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7ae-bd709c8b" className="af-class-header76_image-wrapper"><img src="images/11.png" loading="lazy" id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7af-bd709c8b" alt className="af-class-header76_image" /></div>
                              <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7b0-bd709c8b" className="af-class-header76_image-wrapper"><img src="images/20.png" loading="lazy" id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7b1-bd709c8b" alt className="af-class-header76_image" /></div>
                              <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7b2-bd709c8b" className="af-class-header76_image-wrapper"><img src="images/07.png" loading="lazy" id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7b3-bd709c8b" alt className="af-class-header76_image" /></div>
                            </div>
                            <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7b4-bd709c8b" className="af-class-header76_image-list">
                              <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7b5-bd709c8b" className="af-class-header76_image-wrapper"><img src="images/05.png" loading="lazy" id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7b6-bd709c8b" alt className="af-class-header76_image" /></div>
                              <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7b7-bd709c8b" className="af-class-header76_image-wrapper"><img src="images/placeholder-image.svg" loading="lazy" id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7b8-bd709c8b" alt className="af-class-header76_image" /></div>
                              <div id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7b9-bd709c8b" className="af-class-header76_image-wrapper"><img src="images/placeholder-image.svg" loading="lazy" id="w-node-_381d5242-8657-deb1-379b-d5ae39fdb7ba-bd709c8b" alt className="af-class-header76_image" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <section className="af-class-section_layout69">
                  <div className="af-class-padding-global">
                    <div className="af-class-container-large">
                      <div className="af-class-padding-section-large">
                        <div className="w-layout-grid af-class-layout69_component">
                          <div className="af-class-layout69_content-left">
                            <div className="af-class-margin-bottom af-class-margin-small">
                              <h2>Peer-to-peer digital services marketplace </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="af-class-section_blog67">
                  <div className="af-class-padding-global">
                    <div className="af-class-container-large">
                      <div className="af-class-padding-section-large">
                        <div className="af-class-margin-bottom af-class-margin-xxlarge">
                          <div className="af-class-blog67_heading-wrapper">
                            <div className="af-class-blog67_heading">
                              <div className="af-class-max-width-large">
                                <div className="af-class-margin-bottom af-class-margin-xsmall">
                                  <div className="af-class-text-weight-semibold">Blog</div>
                                </div>
                                <div className="af-class-margin-bottom af-class-margin-xsmall">
                                  <h2>Short heading goes here</h2>
                                </div>
                                <p className="af-class-text-size-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                              </div>
                            </div>
                            <div className="af-class-blog67_button-row af-class-hide-mobile-landscape">
                              <a href="#" className="af-class-button af-class-is-secondary w-button">View all</a>
                            </div>
                          </div>
                        </div>
                        <div data-delay={4000} data-animation="slide" className="af-class-blog67_component w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="false">
                          <div className="af-class-blog67_mask w-slider-mask">
                            <div className="af-class-blog67_slide w-slide">
                              <div className="af-class-blog67_item">
                                <a href="#" className="af-class-blog67_item-link w-inline-block">
                                  <div className="af-class-blog67_image-wrapper"><img src="images/Placeholder-Image---Landscape.svg" loading="lazy" alt className="af-class-blog67_image" /></div>
                                  <div className="af-class-blog67_item-content">
                                    <div className="af-class-blog67_item-content-top">
                                      <div className="af-class-blog67_category-wrapper">
                                        <div className="af-class-text-size-small af-class-text-weight-semibold">Category</div>
                                      </div>
                                      <div className="af-class-blog67_title-wrapper">
                                        <h3 className="af-class-heading-style-h5">Blog title heading will go here</h3>
                                      </div>
                                      <div className="af-class-text-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                    </div>
                                    <div className="af-class-blog67_author-wrapper">
                                      <div className="af-class-blog67_author-image-wrapper"><img src="images/placeholder-image.svg" loading="lazy" alt className="af-class-blog67_author-image" /></div>
                                      <div className="af-class-blog67_author-text">
                                        <div className="af-class-text-size-small af-class-text-weight-semibold">Full name</div>
                                        <div className="af-class-blog67_date-wrapper">
                                          <div className="af-class-text-size-small">11 Jan 2022</div>
                                          <div className="af-class-blog67_text-divider">•</div>
                                          <div className="af-class-text-size-small">5 min read</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="af-class-blog67_slide w-slide">
                              <div className="af-class-blog67_item">
                                <a href="#" className="af-class-blog67_item-link w-inline-block">
                                  <div className="af-class-blog67_image-wrapper"><img src="images/Placeholder-Image---Landscape.svg" loading="lazy" alt className="af-class-blog67_image" /></div>
                                  <div className="af-class-blog67_item-content">
                                    <div className="af-class-blog67_item-content-top">
                                      <div className="af-class-blog67_category-wrapper">
                                        <div className="af-class-text-size-small af-class-text-weight-semibold">Category</div>
                                      </div>
                                      <div className="af-class-blog67_title-wrapper">
                                        <h3 className="af-class-heading-style-h5">Blog title heading will go here</h3>
                                      </div>
                                      <div className="af-class-text-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                    </div>
                                    <div className="af-class-blog67_author-wrapper">
                                      <div className="af-class-blog67_author-image-wrapper"><img src="images/placeholder-image.svg" loading="lazy" alt className="af-class-blog67_author-image" /></div>
                                      <div className="af-class-blog67_author-text">
                                        <div className="af-class-text-size-small af-class-text-weight-semibold">Full name</div>
                                        <div className="af-class-blog67_date-wrapper">
                                          <div className="af-class-text-size-small">11 Jan 2022</div>
                                          <div className="af-class-blog67_text-divider">•</div>
                                          <div className="af-class-text-size-small">5 min read</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="af-class-blog67_slide w-slide">
                              <div className="af-class-blog67_item">
                                <a href="#" className="af-class-blog67_item-link w-inline-block">
                                  <div className="af-class-blog67_image-wrapper"><img src="images/Placeholder-Image---Landscape.svg" loading="lazy" alt className="af-class-blog67_image" /></div>
                                  <div className="af-class-blog67_item-content">
                                    <div className="af-class-blog67_item-content-top">
                                      <div className="af-class-blog67_category-wrapper">
                                        <div className="af-class-text-size-small af-class-text-weight-semibold">Category</div>
                                      </div>
                                      <div className="af-class-blog67_title-wrapper">
                                        <h3 className="af-class-heading-style-h5">Blog title heading will go here</h3>
                                      </div>
                                      <div className="af-class-text-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                    </div>
                                    <div className="af-class-blog67_author-wrapper">
                                      <div className="af-class-blog67_author-image-wrapper"><img src="images/placeholder-image.svg" loading="lazy" alt className="af-class-blog67_author-image" /></div>
                                      <div className="af-class-blog67_author-text">
                                        <div className="af-class-text-size-small af-class-text-weight-semibold">Full name</div>
                                        <div className="af-class-blog67_date-wrapper">
                                          <div className="af-class-text-size-small">11 Jan 2022</div>
                                          <div className="af-class-blog67_text-divider">•</div>
                                          <div className="af-class-text-size-small">5 min read</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="af-class-blog67_slide w-slide">
                              <div className="af-class-blog67_item">
                                <a href="#" className="af-class-blog67_item-link w-inline-block">
                                  <div className="af-class-blog67_image-wrapper"><img src="images/Placeholder-Image---Landscape.svg" loading="lazy" alt className="af-class-blog67_image" /></div>
                                  <div className="af-class-blog67_item-content">
                                    <div className="af-class-blog67_item-content-top">
                                      <div className="af-class-blog67_category-wrapper">
                                        <div className="af-class-text-size-small af-class-text-weight-semibold">Category</div>
                                      </div>
                                      <div className="af-class-blog67_title-wrapper">
                                        <h3 className="af-class-heading-style-h5">Blog title heading will go here</h3>
                                      </div>
                                      <div className="af-class-text-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                    </div>
                                    <div className="af-class-blog67_author-wrapper">
                                      <div className="af-class-blog67_author-image-wrapper"><img src="images/placeholder-image.svg" loading="lazy" alt className="af-class-blog67_author-image" /></div>
                                      <div className="af-class-blog67_author-text">
                                        <div className="af-class-text-size-small af-class-text-weight-semibold">Full name</div>
                                        <div className="af-class-blog67_date-wrapper">
                                          <div className="af-class-text-size-small">11 Jan 2022</div>
                                          <div className="af-class-blog67_text-divider">•</div>
                                          <div className="af-class-text-size-small">5 min read</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="af-class-blog67_slide w-slide">
                              <div className="af-class-blog67_item">
                                <a href="#" className="af-class-blog67_item-link w-inline-block">
                                  <div className="af-class-blog67_image-wrapper"><img src="images/Placeholder-Image---Landscape.svg" loading="lazy" alt className="af-class-blog67_image" /></div>
                                  <div className="af-class-blog67_item-content">
                                    <div className="af-class-blog67_item-content-top">
                                      <div className="af-class-blog67_category-wrapper">
                                        <div className="af-class-text-size-small af-class-text-weight-semibold">Category</div>
                                      </div>
                                      <div className="af-class-blog67_title-wrapper">
                                        <h3 className="af-class-heading-style-h5">Blog title heading will go here</h3>
                                      </div>
                                      <div className="af-class-text-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                    </div>
                                    <div className="af-class-blog67_author-wrapper">
                                      <div className="af-class-blog67_author-image-wrapper"><img src="images/placeholder-image.svg" loading="lazy" alt className="af-class-blog67_author-image" /></div>
                                      <div className="af-class-blog67_author-text">
                                        <div className="af-class-text-size-small af-class-text-weight-semibold">Full name</div>
                                        <div className="af-class-blog67_date-wrapper">
                                          <div className="af-class-text-size-small">11 Jan 2022</div>
                                          <div className="af-class-blog67_text-divider">•</div>
                                          <div className="af-class-text-size-small">5 min read</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="af-class-blog67_slide w-slide">
                              <div className="af-class-blog67_item">
                                <a href="#" className="af-class-blog67_item-link w-inline-block">
                                  <div className="af-class-blog67_image-wrapper"><img src="images/Placeholder-Image---Landscape.svg" loading="lazy" alt className="af-class-blog67_image" /></div>
                                  <div className="af-class-blog67_item-content">
                                    <div className="af-class-blog67_item-content-top">
                                      <div className="af-class-blog67_category-wrapper">
                                        <div className="af-class-text-size-small af-class-text-weight-semibold">Category</div>
                                      </div>
                                      <div className="af-class-blog67_title-wrapper">
                                        <h3 className="af-class-heading-style-h5">Blog title heading will go here</h3>
                                      </div>
                                      <div className="af-class-text-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                    </div>
                                    <div className="af-class-blog67_author-wrapper">
                                      <div className="af-class-blog67_author-image-wrapper"><img src="images/placeholder-image.svg" loading="lazy" alt className="af-class-blog67_author-image" /></div>
                                      <div className="af-class-blog67_author-text">
                                        <div className="af-class-text-size-small af-class-text-weight-semibold">Full name</div>
                                        <div className="af-class-blog67_date-wrapper">
                                          <div className="af-class-text-size-small">11 Jan 2022</div>
                                          <div className="af-class-blog67_text-divider">•</div>
                                          <div className="af-class-text-size-small">5 min read</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-blog67_arrow af-class-left w-slider-arrow-left"><img src="images/icon_slider-arrow-left.svg" loading="lazy" alt /></div>
                          <div className="af-class-blog67_arrow w-slider-arrow-right"><img src="images/icon_slider-arrow-right.svg" loading="lazy" alt /></div>
                          <div className="af-class-blog67_slide-nav w-slider-nav w-slider-nav-invert w-round" />
                        </div>
                        <div className="af-class-blog67_button-row af-class-show-mobile-landscape">
                          <a href="#" className="af-class-button af-class-is-secondary w-button">View all</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */