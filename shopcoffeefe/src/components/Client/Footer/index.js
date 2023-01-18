function FooterClient() {
    return (
        <footer id="site-footer" role="contentinfo">
            <div id="footer-wave"></div>
            <div className="footer-bg">

                <div className="footer-inner container-xl">


                    <div className="footer-top">
                        <div className="row">

                            <div className="ft-col-1 col-sm-12 col-lg-4">
                                <div className="widget widget_text"><div className="widget-content">			<div className="textwidget"><h4>Coffo</h4>
                                    <p>There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.</p>
                                </div>
                                </div></div>                            </div>

                            <div className="ft-col-2 col-sm-12 col-lg-4">
                                <div className="widget widget_text"><div className="widget-content"><h4 className="widget-title">Contact Us</h4>			<div className="textwidget"><p>555 Arabica Springs Rd, Crawford, TN 38554</p>
                                    <p>Call Us: <strong><a href="tel:800.275.8777">800.275.8777</a></strong></p>
                                    <p><a href="mailto:coffo@company.com">coffo@company.com</a></p>
                                </div>
                                </div></div>                            </div>

                            <div className="ft-col-3 col-lg-4">
                                <div className="widget widget_mc4wp_form_widget"><div className="widget-content"><h4 className="widget-title">Subscribe to Newsletter</h4>
                                    <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-61" method="post" data-id="61" data-name="Hanio"><div className="mc4wp-form-fields"><div className="theme-mailchimp">
                                        <div className="theme-mailchimp-fields">
                                            <input type="email" name="email" placeholder="Your e-mail adress" required="" />
                                            <input type="submit" defaultValue="Subscribe" />
                                        </div>
                                        <p>Sign up with your email address to receive news and updates</p>
                                    </div></div><label style={{ display: "none !important" }}>Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" defaultValue="" tabIndex="-1" autoComplete="off" /></label><input type="hidden" name="_mc4wp_timestamp" defaultValue="1671262059" /><input type="hidden" name="_mc4wp_form_id" defaultValue="61" /><input type="hidden" name="_mc4wp_form_element_id" defaultValue="mc4wp-form-1" /><div className="mc4wp-response"></div></form></div></div>                            </div>

                        </div>
                    </div>


                    <div className="footer-bottom">

                        <div className="footer-credits">

                            <p className="footer-copyright">Copyright ©2022 Coffo. All rights reserved.
                            </p>

                        </div>

                        <nav className="footer-menu-wrapper" aria-label="Footer" role="navigation">
                            <ul className="footer-menu">
                            </ul>
                        </nav>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default FooterClient;