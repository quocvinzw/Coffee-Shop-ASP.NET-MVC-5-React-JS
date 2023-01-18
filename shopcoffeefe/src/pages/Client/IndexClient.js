import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './CSS/index.css';
import './CSS/MainPage.css'
function IndexClient() {
    useEffect(() => {
        document.body.classList.remove()
        document.body.classList.add('home', 'page-template', 'page-template-page-templates',
            'page-template-template-full-width-page-without-header-title', 'page-template-page-templatestemplate-full-width-page-without-header-title-php',
            'page-id-10704', 'wp-custom-logo', 'theme-coffo', 'woocommerce-no-js', 'elementor-default', 'elementor-kit-971', 'elementor-page', 'elementor-page-10704', 'page');
    }, [])

    useEffect(() => getListOrder(), []);
    const [lsOrder, setListOrder] = useState([]);
    function getListOrder() {
        axios.get('https://localhost:44382/api/Order')
            .then((res) => {
                const myRespo = res.data;
                setListOrder(myRespo);
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <Fragment>
           
            <article className="post-12382 page type-page status-publish hentry" id="post-12382">

                <div className="post-inner">


                    <header className="entry-header header-group">

                        <div className="entry-header-inner">


                        </div>
                    </header>

                    <div className="entry-content clearfix">
                        <div data-elementor-type="wp-page" data-elementor-id="12382" className="elementor elementor-12382">
                            <div className="elementor-inner">
                                <div className="elementor-section-wrap">
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-ddf6464 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="ddf6464" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                        <div className="elementor-background-overlay"></div>
                                        <div className="elementor-container elementor-column-gap-no">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4da745d" data-id="4da745d" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-e542e2e elementor-section-height-min-height elementor-section-boxed elementor-section-height-default" data-id="e542e2e" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                <div className="elementor-container elementor-column-gap-no">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f2bba2a" data-id="f2bba2a" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-background-overlay"></div>
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-8c3b3c7 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image" data-id="8c3b3c7" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="597" height="747" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/yjtyjt.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/11/yjtyjt.png 597w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/yjtyjt-240x300.png 240w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/yjtyjt-160x200.png 160w" sizes="(max-width: 597px) 100vw, 597px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-465b627 elementor-widget elementor-widget-image" data-id="465b627" data-element_type="widget" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="730" height="1024" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/Imatyjtyje-730x1024.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/11/Imatyjtyje-730x1024.png 730w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/Imatyjtyje-214x300.png 214w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/Imatyjtyje-768x1077.png 768w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/Imatyjtyje-160x224.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/Imatyjtyje-600x842.png 600w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/Imatyjtyje.png 924w" sizes="(max-width: 730px) 100vw, 730px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-42f0a5d" data-id="42f0a5d" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-80f0024 elementor-widget-tablet__width-auto elementor-widget elementor-widget-ucaddon_blox_line_diamond_seperator" data-id="80f0024" data-element_type="widget" data-widget_type="ucaddon_blox_line_diamond_seperator.default">
                                                                                        <div className="elementor-widget-container">


                                                                                            <div style={{ textAlign: "left" }}>
                                                                                                <div className="separator" style={{ borderColor: "#2B231D", width: "100px" }}>
                                                                                                    <div className="sep_diamond" style={{ backgroundColor: "#2B231D" }}></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-ec0be85 elementor-widget elementor-widget-heading" data-id="ec0be85" data-element_type="widget" data-widget_type="heading.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <h2 className="elementor-heading-title elementor-size-default">Relax &amp; Enjoy your coffee</h2>		</div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-633dcc1 elementor-widget elementor-widget-text-editor" data-id="633dcc1" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-f4eb94f elementor-tablet-align-center elementor-widget elementor-widget-button" data-id="f4eb94f" data-element_type="widget" data-widget_type="button.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-button-wrapper">
                                                                                                <Link to="/Orders" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                                    <span className="elementor-button-content-wrapper">
                                                                                                        <span className="elementor-button-text">Order now</span>
                                                                                                    </span>
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-5acc586 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5acc586" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                        <div className="elementor-background-overlay"></div>
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-153185a" data-id="153185a" data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-cb20ac6 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cb20ac6" data-element_type="section">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-37bd801" data-id="37bd801" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-df0ac44 elementor-widget-tablet__width-auto elementor-widget elementor-widget-ucaddon_blox_line_diamond_seperator" data-id="df0ac44" data-element_type="widget" data-widget_type="ucaddon_blox_line_diamond_seperator.default">
                                                                                        <div className="elementor-widget-container">

                                                                                            <div style={{ textAlign: "left" }}>
                                                                                                <div className="separator" style={{ borderColor: "#2B231D", width: "100px" }}>
                                                                                                    <div className="sep_diamond" style={{ backgroundColor: "#2B231D" }}></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-836a46d elementor-widget elementor-widget-heading" data-id="836a46d" data-element_type="widget" data-widget_type="heading.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <h2 className="elementor-heading-title elementor-size-default">We use the highest quality coffee beans</h2>		</div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-393ce4c elementor-widget elementor-widget-text-editor" data-id="393ce4c" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                Our coffee shop uses only Ethiopian coffee. All commercially produced coffee originates from Ethiopia. We love Ethiopia for providing the world with coffee to grow, and we continue to love the flavor of that country’s coffee.

                                                                                                The fruity acidity of this single origin coffee is balanced by its sweet honey notes, creating soft, light notes with a light character.					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-2eaf867 elementor-align-left elementor-tablet-align-center elementor-widget elementor-widget-button" data-id="2eaf867" data-element_type="widget" data-widget_type="button.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-button-wrapper">
                                                                                                <Link to="/AboutUs" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                                    <span className="elementor-button-content-wrapper">
                                                                                                        <span className="elementor-button-icon elementor-align-icon-right">
                                                                                                            <i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i>			</span>
                                                                                                        <span className="elementor-button-text">Learn more</span>
                                                                                                    </span>
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d1b941a" data-id="d1b941a" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-b396d8b elementor-widget elementor-widget-image" data-id="b396d8b" data-element_type="widget" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="792" height="1024" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/6j67ju7-792x1024.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/11/6j67ju7-792x1024.png 792w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/6j67ju7-232x300.png 232w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/6j67ju7-768x993.png 768w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/6j67ju7-160x207.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/6j67ju7-600x776.png 600w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/6j67ju7.png 1037w" sizes="(max-width: 792px) 100vw, 792px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-ca67291 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image" data-id="ca67291" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="557" height="767" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryj.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryj.png 557w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryj-218x300.png 218w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryj-160x220.png 160w" sizes="(max-width: 557px) 100vw, 557px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-d5d0f58 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image" data-id="d5d0f58" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="734" height="701" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/etyjtyj.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/11/etyjtyj.png 734w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/etyjtyj-300x287.png 300w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/etyjtyj-160x153.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/etyjtyj-600x573.png 600w" sizes="(max-width: 734px) 100vw, 734px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-3302a6f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3302a6f" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                        <div className="elementor-background-overlay"></div>
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-24b5938" data-id="24b5938" data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-3c7cca5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3c7cca5" data-element_type="section">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a2188f7" data-id="a2188f7" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-7e40bbc elementor-widget elementor-widget-ucaddon_blox_line_diamond_seperator" data-id="7e40bbc" data-element_type="widget" data-widget_type="ucaddon_blox_line_diamond_seperator.default">
                                                                                        <div className="elementor-widget-container">


                                                                                            <div style={{ textAlign: "left" }}>
                                                                                                <div className="separator" style={{ borderColor: "#2B231D", width: "100px" }}>
                                                                                                    <div className="sep_diamond" style={{ backgroundColor: "#2B231D" }}></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-744f075 elementor-widget elementor-widget-heading" data-id="744f075" data-element_type="widget" data-widget_type="heading.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <h2 className="elementor-heading-title elementor-size-default">Explore our<br></br>
                                                                                                coffee shop</h2>		</div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-93c2939 elementor-widget elementor-widget-text-editor" data-id="93c2939" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-f80117e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f80117e" data-element_type="section">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-dbfb2ca" data-id="dbfb2ca" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-8ca53b5 elementor-widget elementor-widget-image" data-id="8ca53b5" data-element_type="widget" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="468" height="578" src="https://coffo.b-cdn.net/wp-content/uploads/2022/04/rgvrgv@2x.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/04/rgvrgv@2x.png 468w, https://coffo.b-cdn.net/wp-content/uploads/2022/04/rgvrgv@2x-243x300.png 243w, https://coffo.b-cdn.net/wp-content/uploads/2022/04/rgvrgv@2x-160x198.png 160w" sizes="(max-width: 468px) 100vw, 468px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-8e18efb elementor-widget elementor-widget-text-editor" data-id="8e18efb" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                Brewed coffee					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-12726e2 elementor-widget elementor-widget-text-editor" data-id="12726e2" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                You can order our coffee in the online store or find our store in your city.					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-cde382a elementor-align-center elementor-widget elementor-widget-button" data-id="cde382a" data-element_type="widget" data-widget_type="button.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-button-wrapper">
                                                                                                <Link to="/Orders" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                                    <span className="elementor-button-content-wrapper">
                                                                                                        <span className="elementor-button-icon elementor-align-icon-right">
                                                                                                            <i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i>			</span>
                                                                                                        <span className="elementor-button-text">Explore</span>
                                                                                                    </span>
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-37315bd" data-id="37315bd" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-41c9df7 elementor-widget elementor-widget-image" data-id="41c9df7" data-element_type="widget" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="580" height="562" src="https://coffo.b-cdn.net/wp-content/uploads/2022/04/5k4gm@2x.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/04/5k4gm@2x.png 580w, https://coffo.b-cdn.net/wp-content/uploads/2022/04/5k4gm@2x-300x291.png 300w, https://coffo.b-cdn.net/wp-content/uploads/2022/04/5k4gm@2x-160x155.png 160w" sizes="(max-width: 580px) 100vw, 580px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-eb2b553 elementor-widget elementor-widget-text-editor" data-id="eb2b553" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                Coffee beans					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-74cf65b elementor-widget elementor-widget-text-editor" data-id="74cf65b" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                You can order our coffee in the online store or find our store in your city.					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-4b0919a elementor-align-center elementor-widget elementor-widget-button" data-id="4b0919a" data-element_type="widget" data-widget_type="button.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-button-wrapper">
                                                                                                <Link to="/Products" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                                    <span className="elementor-button-content-wrapper">
                                                                                                        <span className="elementor-button-icon elementor-align-icon-right">
                                                                                                            <i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i>			</span>
                                                                                                        <span className="elementor-button-text">Explore</span>
                                                                                                    </span>
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-e481e5b" data-id="e481e5b" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-0812cf4 elementor-widget elementor-widget-image" data-id="0812cf4" data-element_type="widget" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="484" height="646" src="https://coffo.b-cdn.net/wp-content/uploads/2022/04/etgvet@2x.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/04/etgvet@2x.png 484w, https://coffo.b-cdn.net/wp-content/uploads/2022/04/etgvet@2x-225x300.png 225w, https://coffo.b-cdn.net/wp-content/uploads/2022/04/etgvet@2x-160x214.png 160w" sizes="(max-width: 484px) 100vw, 484px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-7cb98b2 elementor-widget elementor-widget-text-editor" data-id="7cb98b2" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                Ground coffee					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-f5fcf50 elementor-widget elementor-widget-text-editor" data-id="f5fcf50" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                You can order our coffee in the online store or find our store in your city.					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-7e7517e elementor-align-center elementor-widget elementor-widget-button" data-id="7e7517e" data-element_type="widget" data-widget_type="button.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-button-wrapper">
                                                                                                <Link to="/Orders" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                                    <span className="elementor-button-content-wrapper">
                                                                                                        <span className="elementor-button-icon elementor-align-icon-right">
                                                                                                            <i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i>			</span>
                                                                                                        <span className="elementor-button-text">Explore</span>
                                                                                                    </span>
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-a48eee5" data-id="a48eee5" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-c229586 elementor-widget elementor-widget-image" data-id="c229586" data-element_type="widget" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="406" height="618" src="https://coffo.b-cdn.net/wp-content/uploads/2022/04/desertsvr@2x.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/04/desertsvr@2x.png 406w, https://coffo.b-cdn.net/wp-content/uploads/2022/04/desertsvr@2x-197x300.png 197w, https://coffo.b-cdn.net/wp-content/uploads/2022/04/desertsvr@2x-160x244.png 160w" sizes="(max-width: 406px) 100vw, 406px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-1a06b90 elementor-widget elementor-widget-text-editor" data-id="1a06b90" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                Deserts					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-ed12ac6 elementor-widget elementor-widget-text-editor" data-id="ed12ac6" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                You can order our coffee in the online store or find our store in your city.					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-5df41b5 elementor-align-center elementor-widget elementor-widget-button" data-id="5df41b5" data-element_type="widget" data-widget_type="button.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-button-wrapper">
                                                                                                <Link to="/Products" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                                    <span className="elementor-button-content-wrapper">
                                                                                                        <span className="elementor-button-icon elementor-align-icon-right">
                                                                                                            <i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i>			</span>
                                                                                                        <span className="elementor-button-text">Explore</span>
                                                                                                    </span>
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-9d82cfd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9d82cfd" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                        <div className="elementor-background-overlay"></div>
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-190098d" data-id="190098d" data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-28ad1bd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="28ad1bd" data-element_type="section">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3b981c7" data-id="3b981c7" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-be54536 elementor-widget-tablet__width-auto elementor-widget elementor-widget-ucaddon_blox_line_diamond_seperator" data-id="be54536" data-element_type="widget" data-widget_type="ucaddon_blox_line_diamond_seperator.default">
                                                                                        <div className="elementor-widget-container">

                                                                                            <div style={{ textAlign: "left" }}>
                                                                                                <div className="separator" style={{ borderColor: "#2B231D", width: "100px" }}>
                                                                                                    <div className="sep_diamond" style={{ backgroundColor: "#2B231D" }}></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-47bd69b elementor-widget elementor-widget-heading" data-id="47bd69b" data-element_type="widget" data-widget_type="heading.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <h2 className="elementor-heading-title elementor-size-default">Our menu</h2>		</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8308ad4" data-id="8308ad4" data-element_type="column">
                                                                            <div className="elementor-column-wrap">
                                                                                <div className="elementor-widget-wrap">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-cc31349 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cc31349" data-element_type="section">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-248913d" data-id="248913d" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-6ef174e elementor-widget elementor-widget-ucaddon_price_list" data-id="6ef174e" data-element_type="widget" data-widget_type="ucaddon_price_list.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div id="uc_price_list_elementor57324">
                                                                                                <ul className="menu-list">
                                                                                                {lsOrder.map((o, index) => (
                                                                                                        index <= 3
                                                                                                            ?
                                                                                                            <li className="menu-items" key={index}>
                                                                                                                <div className="ue_price_list_item">
                                                                                                                    <div className="menu-img">
                                                                                                                        <img decoding="async" src={o.image} alt="4tg4t" />
                                                                                                                    </div>
                                                                                                                    <div className="ue_price_list_image_spacing"></div>
                                                                                                                    <div className="menu-wrapperall">
                                                                                                                        <div className="menu-wrappermidlle">

                                                                                                                            <div className="menu-wrappertitle">
                                                                                                                                <div className="menu-title">{o.name}</div>
                                                                                                                                <div className="menu-text-separator">
                                                                                                                                    <div className="ue_price_list_seperator"></div>                  </div>
                                                                                                                                <div className="menu-price-spacing"></div><div className="menu-price">{o.price} VNĐ</div>			</div>


                                                                                                                            <div className="menu-text">{o.description}</div>
                                                                                                                        </div>

                                                                                                                    </div>
                                                                                                                </div>

                                                                                                            </li>
                                                                                                            : ""
                                                                                                    ))}

                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-cb97ee3" data-id="cb97ee3" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-5a45a43 elementor-widget elementor-widget-ucaddon_price_list" data-id="5a45a43" data-element_type="widget" data-widget_type="ucaddon_price_list.default">
                                                                                        <div className="elementor-widget-container">


                                                                                            <div id="uc_price_list_elementor61935">
                                                                                                <ul className="menu-list">
                                                                                                    {lsOrder.map((o, index) => (
                                                                                                        index > 3
                                                                                                            ?
                                                                                                            <li className="menu-items" key={index}>
                                                                                                                <div className="ue_price_list_item">
                                                                                                                    <div className="menu-img">
                                                                                                                        <img decoding="async" src={o.image} alt="4tg4t" />
                                                                                                                    </div>
                                                                                                                    <div className="ue_price_list_image_spacing"></div>
                                                                                                                    <div className="menu-wrapperall">
                                                                                                                        <div className="menu-wrappermidlle">

                                                                                                                            <div className="menu-wrappertitle">
                                                                                                                                <div className="menu-title">{o.name}</div>
                                                                                                                                <div className="menu-text-separator">
                                                                                                                                    <div className="ue_price_list_seperator"></div>                  </div>
                                                                                                                                <div className="menu-price-spacing"></div><div className="menu-price">{o.price} VNĐ</div>			</div>


                                                                                                                            <div className="menu-text">{o.description}</div>
                                                                                                                        </div>

                                                                                                                    </div>
                                                                                                                </div>

                                                                                                            </li>
                                                                                                            : ""
                                                                                                    ))}

                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-0e85796 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="0e85796" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-301593d" data-id="301593d" data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <div className="elementor-element elementor-element-24ed980 elementor-widget elementor-widget-premium-img-gallery" data-id="24ed980" data-element_type="widget" data-settings="{&quot;premium_gallery_img_content&quot;:[{&quot;premium_gallery_img_category&quot;:&quot;Category 1&quot;,&quot;_id&quot;:&quot;d15064d&quot;,&quot;premium_gallery_img&quot;:{&quot;url&quot;:&quot;https:\/\/coffo.peerduck.com\/wp-content\/uploads\/2022\/11\/ieguhb.png&quot;,&quot;id&quot;:12480,&quot;alt&quot;:&quot;&quot;,&quot;source&quot;:&quot;library&quot;},&quot;premium_gallery_image_cell&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;premium_gallery_image_cell_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_cell_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_video&quot;:&quot;&quot;,&quot;premium_gallery_video_type&quot;:null,&quot;premium_gallery_video_url&quot;:null,&quot;premium_gallery_video_self&quot;:null,&quot;premium_gallery_video_self_url&quot;:null,&quot;premium_gallery_video_controls&quot;:null,&quot;premium_gallery_video_mute&quot;:null,&quot;premium_gallery_video_loop&quot;:null,&quot;privacy_mode&quot;:null,&quot;premmium_gallery_img_info&quot;:&quot;&quot;,&quot;premium_gallery_img_name&quot;:&quot;&quot;,&quot;premium_gallery_img_desc&quot;:&quot;&quot;,&quot;premium_gallery_img_link_type&quot;:&quot;url&quot;,&quot;premium_gallery_img_link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;premium_gallery_img_existing&quot;:null,&quot;premium_gallery_link_whole&quot;:&quot;&quot;,&quot;premium_gallery_lightbox_whole&quot;:&quot;&quot;},{&quot;premium_gallery_img_category&quot;:&quot;Category 2&quot;,&quot;premium_gallery_img&quot;:{&quot;url&quot;:&quot;https:\/\/coffo.peerduck.com\/wp-content\/uploads\/2022\/11\/iefuvhef.png&quot;,&quot;id&quot;:12479,&quot;alt&quot;:&quot;&quot;,&quot;source&quot;:&quot;library&quot;},&quot;_id&quot;:&quot;7088372&quot;,&quot;premium_gallery_image_cell&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;premium_gallery_image_cell_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_cell_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_video&quot;:&quot;&quot;,&quot;premium_gallery_video_type&quot;:null,&quot;premium_gallery_video_url&quot;:null,&quot;premium_gallery_video_self&quot;:null,&quot;premium_gallery_video_self_url&quot;:null,&quot;premium_gallery_video_controls&quot;:null,&quot;premium_gallery_video_mute&quot;:null,&quot;premium_gallery_video_loop&quot;:null,&quot;privacy_mode&quot;:null,&quot;premmium_gallery_img_info&quot;:&quot;&quot;,&quot;premium_gallery_img_name&quot;:&quot;&quot;,&quot;premium_gallery_img_desc&quot;:&quot;&quot;,&quot;premium_gallery_img_link_type&quot;:&quot;url&quot;,&quot;premium_gallery_img_link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;premium_gallery_img_existing&quot;:null,&quot;premium_gallery_link_whole&quot;:&quot;&quot;,&quot;premium_gallery_lightbox_whole&quot;:&quot;&quot;},{&quot;premium_gallery_img_category&quot;:&quot;Category 2&quot;,&quot;_id&quot;:&quot;af75d4c&quot;,&quot;premium_gallery_img&quot;:{&quot;url&quot;:&quot;https:\/\/coffo.peerduck.com\/wp-content\/uploads\/2022\/11\/whedce.png&quot;,&quot;id&quot;:12477,&quot;alt&quot;:&quot;&quot;,&quot;source&quot;:&quot;library&quot;},&quot;premium_gallery_image_cell&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;premium_gallery_image_cell_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_cell_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_video&quot;:&quot;&quot;,&quot;premium_gallery_video_type&quot;:null,&quot;premium_gallery_video_url&quot;:null,&quot;premium_gallery_video_self&quot;:null,&quot;premium_gallery_video_self_url&quot;:null,&quot;premium_gallery_video_controls&quot;:null,&quot;premium_gallery_video_mute&quot;:null,&quot;premium_gallery_video_loop&quot;:null,&quot;privacy_mode&quot;:null,&quot;premmium_gallery_img_info&quot;:&quot;&quot;,&quot;premium_gallery_img_name&quot;:&quot;&quot;,&quot;premium_gallery_img_desc&quot;:&quot;&quot;,&quot;premium_gallery_img_link_type&quot;:&quot;url&quot;,&quot;premium_gallery_img_link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;premium_gallery_img_existing&quot;:null,&quot;premium_gallery_link_whole&quot;:&quot;&quot;,&quot;premium_gallery_lightbox_whole&quot;:&quot;&quot;},{&quot;premium_gallery_img_category&quot;:&quot;Category 2&quot;,&quot;premium_gallery_img&quot;:{&quot;url&quot;:&quot;https:\/\/coffo.peerduck.com\/wp-content\/uploads\/2022\/11\/uyqwrg.png&quot;,&quot;id&quot;:12476,&quot;alt&quot;:&quot;&quot;,&quot;source&quot;:&quot;library&quot;},&quot;_id&quot;:&quot;e114b75&quot;,&quot;premium_gallery_image_cell&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;premium_gallery_image_cell_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_cell_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_video&quot;:&quot;&quot;,&quot;premium_gallery_video_type&quot;:null,&quot;premium_gallery_video_url&quot;:null,&quot;premium_gallery_video_self&quot;:null,&quot;premium_gallery_video_self_url&quot;:null,&quot;premium_gallery_video_controls&quot;:null,&quot;premium_gallery_video_mute&quot;:null,&quot;premium_gallery_video_loop&quot;:null,&quot;privacy_mode&quot;:null,&quot;premmium_gallery_img_info&quot;:&quot;&quot;,&quot;premium_gallery_img_name&quot;:&quot;&quot;,&quot;premium_gallery_img_desc&quot;:&quot;&quot;,&quot;premium_gallery_img_link_type&quot;:&quot;url&quot;,&quot;premium_gallery_img_link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;premium_gallery_img_existing&quot;:null,&quot;premium_gallery_link_whole&quot;:&quot;&quot;,&quot;premium_gallery_lightbox_whole&quot;:&quot;&quot;},{&quot;premium_gallery_img_category&quot;:&quot;Category 2&quot;,&quot;premium_gallery_img&quot;:{&quot;url&quot;:&quot;https:\/\/coffo.peerduck.com\/wp-content\/uploads\/2022\/11\/eifvubeif.png&quot;,&quot;id&quot;:12478,&quot;alt&quot;:&quot;&quot;,&quot;source&quot;:&quot;library&quot;},&quot;_id&quot;:&quot;ec6b630&quot;,&quot;premium_gallery_image_cell&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;premium_gallery_image_cell_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_cell_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_video&quot;:&quot;&quot;,&quot;premium_gallery_video_type&quot;:null,&quot;premium_gallery_video_url&quot;:null,&quot;premium_gallery_video_self&quot;:null,&quot;premium_gallery_video_self_url&quot;:null,&quot;premium_gallery_video_controls&quot;:null,&quot;premium_gallery_video_mute&quot;:null,&quot;premium_gallery_video_loop&quot;:null,&quot;privacy_mode&quot;:null,&quot;premmium_gallery_img_info&quot;:&quot;&quot;,&quot;premium_gallery_img_name&quot;:&quot;&quot;,&quot;premium_gallery_img_desc&quot;:&quot;&quot;,&quot;premium_gallery_img_link_type&quot;:&quot;url&quot;,&quot;premium_gallery_img_link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;premium_gallery_img_existing&quot;:null,&quot;premium_gallery_link_whole&quot;:&quot;&quot;,&quot;premium_gallery_lightbox_whole&quot;:&quot;&quot;},{&quot;premium_gallery_img_category&quot;:&quot;Category 2&quot;,&quot;premium_gallery_img&quot;:{&quot;url&quot;:&quot;https:\/\/coffo.peerduck.com\/wp-content\/uploads\/2022\/11\/uqwhrgi.png&quot;,&quot;id&quot;:12475,&quot;alt&quot;:&quot;&quot;,&quot;source&quot;:&quot;library&quot;},&quot;_id&quot;:&quot;5d05b5c&quot;,&quot;premium_gallery_image_cell&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;premium_gallery_image_cell_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_cell_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:4,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_image_vcell_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;premium_gallery_video&quot;:&quot;&quot;,&quot;premium_gallery_video_type&quot;:null,&quot;premium_gallery_video_url&quot;:null,&quot;premium_gallery_video_self&quot;:null,&quot;premium_gallery_video_self_url&quot;:null,&quot;premium_gallery_video_controls&quot;:null,&quot;premium_gallery_video_mute&quot;:null,&quot;premium_gallery_video_loop&quot;:null,&quot;privacy_mode&quot;:null,&quot;premmium_gallery_img_info&quot;:&quot;&quot;,&quot;premium_gallery_img_name&quot;:&quot;&quot;,&quot;premium_gallery_img_desc&quot;:&quot;&quot;,&quot;premium_gallery_img_link_type&quot;:&quot;url&quot;,&quot;premium_gallery_img_link&quot;:{&quot;url&quot;:&quot;&quot;,&quot;is_external&quot;:&quot;&quot;,&quot;nofollow&quot;:&quot;&quot;,&quot;custom_attributes&quot;:&quot;&quot;},&quot;premium_gallery_img_existing&quot;:null,&quot;premium_gallery_link_whole&quot;:&quot;&quot;,&quot;premium_gallery_lightbox_whole&quot;:&quot;&quot;}]}" data-widget_type="premium-img-gallery.default">
                                                                <div className="elementor-widget-container">

                                                                    <div className="premium-img-gallery-no-lightbox premium-img-gallery premium-img-gallery-metro zoomin premium-gallery-icon-show" id="premium-img-gallery-24ed980">

                                                                        <div className="premium-gallery-container" data-settings="{&quot;img_size&quot;:&quot;metro&quot;,&quot;filter&quot;:&quot;&quot;,&quot;theme&quot;:null,&quot;active_cat&quot;:&quot;*&quot;,&quot;ltr_mode&quot;:true,&quot;shuffle&quot;:false,&quot;sort_by&quot;:&quot;original-order&quot;,&quot;skin&quot;:&quot;default&quot;}" style={{ position: "relative", height: "968px" }}>

                                                                            <div className="grid-sizer"></div>
                                                                            <div className="premium-gallery-item elementor-repeater-item-d15064d category-1" style={{ width: "484px", height: "484px", position: "absolute", left: "0", top: "0px" }}>
                                                                                <div className="pa-gallery-img default">
                                                                                    <div className="pa-gallery-img-container">
                                                                                        <img decoding="async" width="1920" height="1920" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/ieguhb.png" className="attachment-full size-full" alt="" loading="lazy" />							</div>
                                                                                    <div className="pa-gallery-icons-wrapper">
                                                                                        <div className="pa-gallery-icons-inner-container">
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="premium-gallery-item elementor-repeater-item-7088372 category-2" style={{ width: "484px", height: "484px", position: "absolute", left: "0.331325", top: "0px" }}>
                                                                                <div className="pa-gallery-img default" >
                                                                                    <div className="pa-gallery-img-container">
                                                                                        <img decoding="async" width="1920" height="1920" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/iefuvhef.png" className="attachment-full size-full" alt="" loading="lazy" />							</div>
                                                                                    <div className="pa-gallery-icons-wrapper">
                                                                                        <div className="pa-gallery-icons-inner-container">
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="premium-gallery-item elementor-repeater-item-af75d4c category-2" style={{ width: "484px", height: "484px", position: "absolute", left: "0.662651", top: "0px" }}>
                                                                                <div className="pa-gallery-img default" >
                                                                                    <div className="pa-gallery-img-container">
                                                                                        <img decoding="async" width="1920" height="1920" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/whedce.png" className="attachment-full size-full" alt="" loading="lazy" />							</div>
                                                                                    <div className="pa-gallery-icons-wrapper">
                                                                                        <div className="pa-gallery-icons-inner-container">
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="premium-gallery-item elementor-repeater-item-e114b75 category-2" style={{ width: "484px", height: "484px", position: "absolute", left: "0", top: "0px" }}>
                                                                                <div className="pa-gallery-img default" >
                                                                                    <div className="pa-gallery-img-container">
                                                                                        <img decoding="async" width="1920" height="1920" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/uyqwrg.png" className="attachment-full size-full" alt="" loading="lazy" />							</div>
                                                                                    <div className="pa-gallery-icons-wrapper">
                                                                                        <div className="pa-gallery-icons-inner-container">
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="premium-gallery-item elementor-repeater-item-ec6b630 category-2" style={{ width: "484px", height: "484px", position: "absolute", left: "0.331325", top: "0px" }}>
                                                                                <div className="pa-gallery-img default" >
                                                                                    <div className="pa-gallery-img-container">
                                                                                        <img decoding="async" width="1920" height="1920" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/eifvubeif.png" className="attachment-full size-full" alt="" loading="lazy" />							</div>
                                                                                    <div className="pa-gallery-icons-wrapper">
                                                                                        <div className="pa-gallery-icons-inner-container">
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="premium-gallery-item elementor-repeater-item-5d05b5c category-2" style={{ width: "484px", height: "484px", position: "absolute", left: "0.662651", top: "0px" }}>
                                                                                <div className="pa-gallery-img default" >
                                                                                    <div className="pa-gallery-img-container">
                                                                                        <img decoding="async" width="1920" height="1920" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/uqwhrgi.png" className="attachment-full size-full" alt="" loading="lazy" />							</div>
                                                                                    <div className="pa-gallery-icons-wrapper">
                                                                                        <div className="pa-gallery-icons-inner-container">
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>


                                                                    </div>



                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-59da97b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="59da97b" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                        <div className="elementor-background-overlay"></div>
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cac91f6" data-id="cac91f6" data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-b57fabe elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b57fabe" data-element_type="section">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-248f164" data-id="248f164" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-c64fab5 elementor-widget elementor-widget-image" data-id="c64fab5" data-element_type="widget" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="792" height="1024" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/uyrg3fr-792x1024.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/11/uyrg3fr-792x1024.png 792w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/uyrg3fr-232x300.png 232w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/uyrg3fr-768x993.png 768w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/uyrg3fr-160x207.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/uyrg3fr-600x776.png 600w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/uyrg3fr.png 1037w" sizes="(max-width: 792px) 100vw, 792px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-2ba497c elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image" data-id="2ba497c" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="557" height="767" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryj.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryj.png 557w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryj-218x300.png 218w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryj-160x220.png 160w" sizes="(max-width: 557px) 100vw, 557px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-2831d50 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image" data-id="2831d50" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="734" height="701" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/etyjtyj.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/11/etyjtyj.png 734w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/etyjtyj-300x287.png 300w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/etyjtyj-160x153.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/etyjtyj-600x573.png 600w" sizes="(max-width: 734px) 100vw, 734px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-eb12a0c" data-id="eb12a0c" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-57af386 elementor-widget-tablet__width-auto elementor-widget elementor-widget-ucaddon_blox_line_diamond_seperator" data-id="57af386" data-element_type="widget" data-widget_type="ucaddon_blox_line_diamond_seperator.default">
                                                                                        <div className="elementor-widget-container">



                                                                                            <div style={{ textAlign: 'left' }}>
                                                                                                <div className="separator" style={{ borderColor: "#2B231D", width: "100px" }}>
                                                                                                    <div className="sep_diamond" style={{ backgroundColor: "#2B231D" }}></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-6b34e9b elementor-widget elementor-widget-heading" data-id="6b34e9b" data-element_type="widget" data-widget_type="heading.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <h2 className="elementor-heading-title elementor-size-default">Enjoying the unique atmosphere</h2>		</div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-b6491f9 elementor-widget elementor-widget-text-editor" data-id="b6491f9" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-f049114 elementor-widget elementor-widget-eael-feature-list" data-id="f049114" data-element_type="widget" data-widget_type="eael-feature-list.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="-icon-position-left -tablet-icon-position-left -mobile-icon-position-left">
                                                                                                <ul id="eael-feature-list-f049114" className="eael-feature-list-items circle stacked ">
                                                                                                    <li className="eael-feature-list-item elementor-repeater-item-40d7cbf">

                                                                                                        <div className="eael-feature-list-icon-box">
                                                                                                            <div className="eael-feature-list-icon-inner">

                                                                                                                <span className="eael-feature-list-icon fl-icon-0">

                                                                                                                    <i aria-hidden="true" className="fas fa-check"></i>								</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="eael-feature-list-content-box">
                                                                                                            <h3 className="eael-feature-list-title">Flavorous coffee</h3>
                                                                                                            <p className="eael-feature-list-content">Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna</p>
                                                                                                        </div>

                                                                                                    </li>
                                                                                                    <li className="eael-feature-list-item elementor-repeater-item-441bb30">

                                                                                                        <div className="eael-feature-list-icon-box">
                                                                                                            <div className="eael-feature-list-icon-inner">

                                                                                                                <span className="eael-feature-list-icon fl-icon-1">

                                                                                                                    <i aria-hidden="true" className="fas fa-check"></i>								</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="eael-feature-list-content-box">
                                                                                                            <h3 className="eael-feature-list-title">Good music</h3>
                                                                                                            <p className="eael-feature-list-content">Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna</p>
                                                                                                        </div>

                                                                                                    </li>
                                                                                                    <li className="eael-feature-list-item elementor-repeater-item-345104b">

                                                                                                        <div className="eael-feature-list-icon-box">
                                                                                                            <div className="eael-feature-list-icon-inner">

                                                                                                                <span className="eael-feature-list-icon fl-icon-2">

                                                                                                                    <i aria-hidden="true" className="fas fa-check"></i>								</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="eael-feature-list-content-box">
                                                                                                            <h3 className="eael-feature-list-title">Fresh bakery</h3>
                                                                                                            <p className="eael-feature-list-content">Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna</p>
                                                                                                        </div>

                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-3177a26 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3177a26" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                        <div className="elementor-background-overlay"></div>
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4801341" data-id="4801341" data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-f89b9d0 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f89b9d0" data-element_type="section">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1246f6a" data-id="1246f6a" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-17b0d87 elementor-widget-tablet__width-auto elementor-widget elementor-widget-ucaddon_blox_line_diamond_seperator" data-id="17b0d87" data-element_type="widget" data-widget_type="ucaddon_blox_line_diamond_seperator.default">
                                                                                        <div className="elementor-widget-container">

                                                                                            <div style={{ textAlign: 'left' }}>
                                                                                                <div className="separator" style={{ borderColor: "#2B231D", width: "100px" }}>
                                                                                                    <div className="sep_diamond" style={{ backgroundColor: "#2B231D" }}></div>
                                                                                                </div>
                                                                                            </div>

                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-c597978 elementor-widget elementor-widget-heading" data-id="c597978" data-element_type="widget" data-widget_type="heading.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <h2 className="elementor-heading-title elementor-size-default">Try our coffee specials</h2>		</div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-6bf34f7 elementor-widget elementor-widget-text-editor" data-id="6bf34f7" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                Our coffee bar uses only Ethiopian coffee. All commercially produced coffee originates from Ethiopia.

                                                                                                The fruity acidity of this single origin coffee is balanced by its sweet honey notes, creating soft, light notes with a light character.					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-35b56fe elementor-align-left elementor-tablet-align-center elementor-widget elementor-widget-button" data-id="35b56fe" data-element_type="widget" data-widget_type="button.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-button-wrapper">
                                                                                                <Link to="/Products" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                                    <span className="elementor-button-content-wrapper">
                                                                                                        <span className="elementor-button-icon elementor-align-icon-right">
                                                                                                            <i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i>			</span>
                                                                                                        <span className="elementor-button-text">Go to shop</span>
                                                                                                    </span>
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7a72459" data-id="7a72459" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-2d06afc elementor-widget elementor-widget-image" data-id="2d06afc" data-element_type="widget" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="730" height="1024" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryjjr-730x1024.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryjjr-730x1024.png 730w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryjjr-214x300.png 214w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryjjr-768x1077.png 768w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryjjr-160x224.png 160w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryjjr-600x842.png 600w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryjjr.png 924w" sizes="(max-width: 730px) 100vw, 730px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-cefc6a7 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image" data-id="cefc6a7" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-image">
                                                                                                <img decoding="async" width="557" height="767" src="https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryj.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryj.png 557w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryj-218x300.png 218w, https://coffo.b-cdn.net/wp-content/uploads/2022/11/ryjryj-160x220.png 160w" sizes="(max-width: 557px) 100vw, 557px" />														</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-8240c73 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8240c73" data-element_type="section">
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fbd6365" data-id="fbd6365" data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-770e83b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="770e83b" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c360921" data-id="c360921" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-389a32c elementor-widget elementor-widget-heading" data-id="389a32c" data-element_type="widget" data-widget_type="heading.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <h2 className="elementor-heading-title elementor-size-default">Happy hours - get 25% off</h2>		</div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-444c4c1 elementor-widget elementor-widget-text-editor" data-id="444c4c1" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-68c69af" data-id="68c69af" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-0631efc elementor-align-right elementor-tablet-align-center elementor-widget elementor-widget-button" data-id="0631efc" data-element_type="widget" data-widget_type="button.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-button-wrapper">
                                                                                                <Link to="/Orders" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                                    <span className="elementor-button-content-wrapper">
                                                                                                        <span className="elementor-button-text">Order now</span>
                                                                                                    </span>
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-ae44a7b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ae44a7b" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                        <div className="elementor-background-overlay"></div>
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6ef472c" data-id="6ef472c" data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-da08cb8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="da08cb8" data-element_type="section">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-29519ce" data-id="29519ce" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-649a472 elementor-widget elementor-widget-ucaddon_blox_line_diamond_seperator" data-id="649a472" data-element_type="widget" data-widget_type="ucaddon_blox_line_diamond_seperator.default">
                                                                                        <div className="elementor-widget-container">


                                                                                            <div style={{ textAlign: 'left' }}>
                                                                                                <div className="separator" style={{ borderColor: "#2B231D", width: "100px" }}>
                                                                                                    <div className="sep_diamond" style={{ backgroundColor: "#2B231D" }}></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-1bf512a elementor-widget elementor-widget-heading" data-id="1bf512a" data-element_type="widget" data-widget_type="heading.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <h2 className="elementor-heading-title elementor-size-default">Hear from our <br></br>awesome clients</h2>		</div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-21f6c2b elementor-widget elementor-widget-text-editor" data-id="21f6c2b" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-b422369 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b422369" data-element_type="section">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-21acc43" data-id="21acc43" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-3aec013 premium-testimonial-separator-column elementor-widget elementor-widget-premium-addon-testimonials" data-id="3aec013" data-element_type="widget" data-widget_type="premium-addon-testimonials.default">
                                                                                        <div className="elementor-widget-container">

                                                                                            <div className="premium-testimonial-box">
                                                                                                <div className="premium-testimonial-container">
                                                                                                    <i className="fa fa-quote-left premium-testimonial-upper-quote"></i>
                                                                                                    <div className="premium-testimonial-content-wrapper">
                                                                                                        <div className="premium-testimonial-img-wrapper circle">
                                                                                                            <img decoding="async" src="https://coffo.b-cdn.net/wp-content/uploads/2022/04/efvf.png" alt="efvf" className="premium-testimonial-person-image" />
                                                                                                        </div>

                                                                                                        <div className="premium-testimonial-text-wrapper">
                                                                                                            <div>
                                                                                                                Great! Mauris venenatis est ut ante egestas, at maximus dolor dictum. Donec auctor mauris sit amet euismod tristique.					</div>
                                                                                                        </div>

                                                                                                        <div className="premium-testimonial-author-info">
                                                                                                            <div className="premium-testimonial-person-name">
                                                                                                                <span>
                                                                                                                    John Doe						</span>
                                                                                                            </div>

                                                                                                            <span className="premium-testimonial-separator"> </span>

                                                                                                            <div className="premium-testimonial-company-name">
                                                                                                                <a target="blank" className="premium-testimonial-company-link" href="/">
                                                                                                                    <span>
                                                                                                                        Web-designer							</span>
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <i className="fa fa-quote-right premium-testimonial-lower-quote"></i>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0718d02" data-id="0718d02" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-b819daa premium-testimonial-separator-column elementor-widget elementor-widget-premium-addon-testimonials" data-id="b819daa" data-element_type="widget" data-widget_type="premium-addon-testimonials.default">
                                                                                        <div className="elementor-widget-container">

                                                                                            <div className="premium-testimonial-box">
                                                                                                <div className="premium-testimonial-container">
                                                                                                    <i className="fa fa-quote-left premium-testimonial-upper-quote"></i>
                                                                                                    <div className="premium-testimonial-content-wrapper">
                                                                                                        <div className="premium-testimonial-img-wrapper circle">
                                                                                                            <img decoding="async" src="https://coffo.b-cdn.net/wp-content/uploads/2022/04/our-astr-team-3.png" alt="our-astr-team-3" className="premium-testimonial-person-image" />
                                                                                                        </div>

                                                                                                        <div className="premium-testimonial-text-wrapper">
                                                                                                            <div>
                                                                                                                Great! Mauris venenatis est ut ante egestas, at maximus dolor dictum. Donec auctor mauris sit amet euismod tristique.					</div>
                                                                                                        </div>

                                                                                                        <div className="premium-testimonial-author-info">
                                                                                                            <div className="premium-testimonial-person-name">
                                                                                                                <span>
                                                                                                                    Mark Davidson						</span>
                                                                                                            </div>

                                                                                                            <span className="premium-testimonial-separator"> </span>

                                                                                                            <div className="premium-testimonial-company-name">
                                                                                                                <a target="_blank" className="premium-testimonial-company-link" href="/">
                                                                                                                    <span>
                                                                                                                        Blogger							</span>
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <i className="fa fa-quote-right premium-testimonial-lower-quote"></i>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6bcf336" data-id="6bcf336" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-7828fce premium-testimonial-separator-column elementor-widget elementor-widget-premium-addon-testimonials" data-id="7828fce" data-element_type="widget" data-widget_type="premium-addon-testimonials.default">
                                                                                        <div className="elementor-widget-container">

                                                                                            <div className="premium-testimonial-box">
                                                                                                <div className="premium-testimonial-container">
                                                                                                    <i className="fa fa-quote-left premium-testimonial-upper-quote"></i>
                                                                                                    <div className="premium-testimonial-content-wrapper">
                                                                                                        <div className="premium-testimonial-img-wrapper circle">
                                                                                                            <img decoding="async" src="https://coffo.b-cdn.net/wp-content/uploads/2022/04/our0ast-teefv.png" alt="our0ast-teefv" className="premium-testimonial-person-image" />
                                                                                                        </div>

                                                                                                        <div className="premium-testimonial-text-wrapper">
                                                                                                            <div>
                                                                                                                Great! Mauris venenatis est ut ante egestas, at maximus dolor dictum. Donec auctor mauris sit amet euismod tristique.					</div>
                                                                                                        </div>

                                                                                                        <div className="premium-testimonial-author-info">
                                                                                                            <div className="premium-testimonial-person-name">
                                                                                                                <span>
                                                                                                                    Anita May						</span>
                                                                                                            </div>

                                                                                                            <span className="premium-testimonial-separator"> </span>

                                                                                                            <div className="premium-testimonial-company-name">
                                                                                                                <a target="_blank" className="premium-testimonial-company-link" href="/">
                                                                                                                    <span>
                                                                                                                        Blogger							</span>
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <i className="fa fa-quote-right premium-testimonial-lower-quote"></i>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="elementor-section elementor-top-section elementor-element elementor-element-3bb8205 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3bb8205" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                        <div className="elementor-background-overlay"></div>
                                        <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4cd2c68" data-id="4cd2c68" data-element_type="column">
                                                    <div className="elementor-column-wrap elementor-element-populated">
                                                        <div className="elementor-widget-wrap">
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-f4e13b0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f4e13b0" data-element_type="section">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ab18782" data-id="ab18782" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-b926e1c elementor-widget-tablet__width-auto elementor-widget elementor-widget-ucaddon_blox_line_diamond_seperator" data-id="b926e1c" data-element_type="widget" data-widget_type="ucaddon_blox_line_diamond_seperator.default">
                                                                                        <div className="elementor-widget-container">


                                                                                            <div style={{ textAlign: 'left' }}>
                                                                                                <div className="separator" style={{ borderColor: "#2B231D", width: "100px" }}>
                                                                                                    <div className="sep_diamond" style={{ backgroundColor: "#2B231D" }}></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-619d6ee elementor-widget elementor-widget-heading" data-id="619d6ee" data-element_type="widget" data-widget_type="heading.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <h2 className="elementor-heading-title elementor-size-default">Visit our coffee shops</h2>		</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ef29266" data-id="ef29266" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-5ac8e0a elementor-widget elementor-widget-text-editor" data-id="5ac8e0a" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-text-editor elementor-clearfix">
                                                                                                There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.					</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="elementor-element elementor-element-4540bf9 elementor-align-left elementor-tablet-align-center elementor-widget elementor-widget-button" data-id="4540bf9" data-element_type="widget" data-widget_type="button.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-button-wrapper">
                                                                                                <Link to="/ContactUs" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                                    <span className="elementor-button-content-wrapper">
                                                                                                        <span className="elementor-button-icon elementor-align-icon-right">
                                                                                                            <i aria-hidden="true" className="fas fa-long-arrow-alt-right"></i>			</span>
                                                                                                        <span className="elementor-button-text">Contact us</span>
                                                                                                    </span>
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <section className="elementor-section elementor-inner-section elementor-element elementor-element-b79a6a7 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b79a6a7" data-element_type="section">
                                                                <div className="elementor-container elementor-column-gap-default">
                                                                    <div className="elementor-row">
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a320d7f" data-id="a320d7f" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-23359b7 elementor-widget elementor-widget-google_maps" data-id="23359b7" data-element_type="widget" data-widget_type="google_maps.default">
                                                                                        <div className="elementor-widget-container">
                                                                                            <div className="elementor-custom-embed">
                                                                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.6908805141757!2d108.43938265032196!3d11.926587591505932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317113f527c1930d%3A0x9703112b35e93b68!2sAmazing%20Show%20-%20Dalat%20Golf%20Cafe!5e0!3m2!1svi!2s!4v1671761779593!5m2!1svi!2s" width="600" height="450" loading="lazy" title="Map"></iframe>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6d3d548" data-id="6d3d548" data-element_type="column">
                                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                                                <div className="elementor-widget-wrap">
                                                                                    <div className="elementor-element elementor-element-8f8514d elementor-widget elementor-widget-ucaddon_business_hours" data-id="8f8514d" data-element_type="widget" data-widget_type="ucaddon_business_hours.default">
                                                                                        <div className="elementor-widget-container">


                                                                                            <div id="uc_business_hours_elementor110403" className="ue_business_hours">

                                                                                                <div className="ue_business_hours_header">
                                                                                                    <div className="ue_business_hours_header_title">Working Hours</div>
                                                                                                    <div className="ue_business_hours_header_subtitle"></div>
                                                                                                </div>


                                                                                                <div className="ue_business_hours_list">
                                                                                                    <div className="ue_business_hours_list_item">
                                                                                                        <div className="ue_business_hours_list_item_title">Monday</div>
                                                                                                        <div className="ue_business_hours_list_item_line"></div>
                                                                                                        <div className="ue_business_hours_list_item_text">10:00AM - 07:00PM</div>
                                                                                                    </div>
                                                                                                    <div className="ue_business_hours_list_item_seperator"></div>
                                                                                                    <div className="ue_business_hours_list_item">
                                                                                                        <div className="ue_business_hours_list_item_title">Tuesday</div>
                                                                                                        <div className="ue_business_hours_list_item_line"></div>
                                                                                                        <div className="ue_business_hours_list_item_text">10:00AM - 07:00PM</div>
                                                                                                    </div>
                                                                                                    <div className="ue_business_hours_list_item_seperator"></div>
                                                                                                    <div className="ue_business_hours_list_item">
                                                                                                        <div className="ue_business_hours_list_item_title">Wednesday</div>
                                                                                                        <div className="ue_business_hours_list_item_line"></div>
                                                                                                        <div className="ue_business_hours_list_item_text">10:00AM - 07:00PM</div>
                                                                                                    </div>
                                                                                                    <div className="ue_business_hours_list_item_seperator"></div>
                                                                                                    <div className="ue_business_hours_list_item">
                                                                                                        <div className="ue_business_hours_list_item_title">Thursday</div>
                                                                                                        <div className="ue_business_hours_list_item_line"></div>
                                                                                                        <div className="ue_business_hours_list_item_text">10:00AM - 07:00PM</div>
                                                                                                    </div>
                                                                                                    <div className="ue_business_hours_list_item_seperator"></div>
                                                                                                    <div className="ue_business_hours_list_item">
                                                                                                        <div className="ue_business_hours_list_item_title">Friday</div>
                                                                                                        <div className="ue_business_hours_list_item_line"></div>
                                                                                                        <div className="ue_business_hours_list_item_text">10:00AM - 07:00PM</div>
                                                                                                    </div>
                                                                                                    <div className="ue_business_hours_list_item_seperator"></div>
                                                                                                    <div className="ue_business_hours_list_item">
                                                                                                        <div className="ue_business_hours_list_item_title">Saturday</div>
                                                                                                        <div className="ue_business_hours_list_item_line"></div>
                                                                                                        <div className="ue_business_hours_list_item_text">10:00AM - 07:00PM</div>
                                                                                                    </div>
                                                                                                    <div className="ue_business_hours_list_item_seperator"></div>
                                                                                                    <div className="ue_business_hours_list_item">
                                                                                                        <div className="ue_business_hours_list_item_title">Sunday</div>
                                                                                                        <div className="ue_business_hours_list_item_line"></div>
                                                                                                        <div className="ue_business_hours_list_item_text">Closed</div>
                                                                                                    </div>
                                                                                                    <div className="ue_business_hours_list_item_seperator"></div>

                                                                                                </div>

                                                                                            </div>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="section-inner clearfix"></div>


            </article>
        </Fragment>
    )
}

export default IndexClient;