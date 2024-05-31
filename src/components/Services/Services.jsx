import "./Services.css"

export default function Services() {
    return (
        <div className="Our-Services" id="Services">
            <div className="Our-Services-title">
                <h1>Our Services</h1>
            </div>
            <div className="Our-Services-cards">
                <div className="Our-Services-card1">
                    <div className="Our-Services-card-text1">
                        <h2>Branding</h2>
                        <p>The brand is hope,
                            It is also the source of inspiration for everything you do when you
                            deal with your customers and that is the important and emotional
                            thing. Your Brand and Visual identity represents an intrinsic Value
                            to your company.
                        </p>
                        <h3>In focal X agency, we provide:</h3>
                        <h4>Visual identity design.</h4>
                        <h4>Define Brand Identity.</h4>
                        <h4>Define Brand personality.</h4>
                        <h4>Building Your brand strategy.</h4>
                        <h4>Market research and</h4>
                        <h4>competitors study.</h4>
                        <h3>We walk with you from A to Z.</h3>
                    </div>
                    <div>
                        <img src="./src/assets/img/focal X agency logo_files/brandingOrange.png" className="brandingOrange" alt="" />
                    </div>
                </div>
                <div className="Our-Services-card2">
                    <div className="Our-Services-card-text2">
                        <h2>Marketing</h2>
                        <p>
                            Talk to your customers and tell them you and your company's
                            story through us the way you want.
                            Let us plan the content that will bring your audience closer to you.
                        </p>
                        <h3>In our marketing agency, we provide:</h3>
                        <h4>Social media marketing & campaigns.</h4>
                        <h4>Search engine optimization ( SEO ).</h4>
                        <h4>Search engine Marketing ( SEM ).</h4>
                        <h4>App store optimization ( ASO ).</h4>
                        <h4>Market research and Analysis.</h4>
                        <h4>Influencer marketing.</h4>
                        <h4>Affiliate marketing..</h4>
                        <h4>E-mail marketing.</h4>
                    </div>
                    <div>
                        <img src="./src/assets/img/focal X agency logo_files/markiting.png" className="markiting" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
