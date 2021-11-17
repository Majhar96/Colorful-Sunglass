import React from 'react';
import image from '../../../images/faq.png';
import './Frequently.css'

const Frequently = () => {
    return (
        <section id="question-asked" class="container mt-5 mb-5">
            <div class="container mb-5 mt-5">
                <div class="row">
                    <div class="col">
                        <div id="Question-header-text" class="section-Header-text">
                            <p>Frequently<span class="section-header-color"> Asked Questions</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
                    <div class="question-part-image">
                        <img class="img-fluid" src={image} alt="question" />
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
                    <div>
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button accordion-question-text" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        What are the most important things I should
                                        know about purchase a sunglass?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show "
                                    aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body accordion-answer">
                                        <span>So, how do you know which shades are right for you? First, you’ll need to figure out whether your face is heart, round, oval, or square. We suggest asking a friend, looking in the mirror, or taking a selfie</span>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-3">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button class="accordion-button accordion-question-text collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        How can I find a perfect sunglass for me?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse  collapse"
                                    aria-labelledby="panelsStayOpen-headingTwo">
                                    <div class="accordion-body accordion-answer">
                                        <span>Go to shop and check which suit you most.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-3">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                    <button class="accordion-button accordion-question-text collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        I have power glass should I wear sunglass?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingThree">
                                    <div class="accordion-body accordion-answer">
                                        <span>Please buy a nice one by giving power.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-3">
                                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                    <button class="accordion-button accordion-question-text collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                        What  should I do when sit long time in front of computer?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingFour">
                                    <div class="accordion-body accordion-answer">
                                        <span>You should water in your eyes after a short period.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Frequently;