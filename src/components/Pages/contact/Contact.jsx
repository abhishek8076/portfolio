
// new contact form
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contect.css';
import { Card, Container } from '@mui/material';
// const State =(poprs)=> {
// 	name:String;
// 	email:String;
// 	subject:String;
// 	message:String
//   }
export const Contact = () => {
	// let navigate = useNavigate();
	const [values, setValues] = useState({
		name: '',
		email: '',
		subject:'',
		message: ''
	});
	const [validation, setValidation] = React.useState([]);
	const handleChange =
    (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
	return (
		<>
			<div style={{
				backgroundColor: "#ccffff", height: "100%", paddingTop: "50px",
				paddingBottom: "50px",
				justifyContent: "center",
				display: "flex"
			}}>
				<Container style={{ backgroundColor: "#ccffff" }}>
					<Card style={{ display: "flex", marginTop: "10px" }}>
						<section className="colorlib-contact" data-section="contact" >
							<div className="colorlib-narrow-content">
								<div className="row">
									<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
										<span className="heading-meta">Get in Touch</span>
										<h2 className="colorlib-heading">Contact</h2>
									</div>
								</div>
								<div className="row">
									<div className="col-md-5">
										<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
											<div className="colorlib-icon">
												<i className="icon-globe-outline"></i>
											</div>
											<div className="colorlib-text">
												<p><a href="#">info@domain.com</a></p>
											</div>
										</div>

										<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
											<div className="colorlib-icon">
												<i className="icon-map"></i>
											</div>
											<div className="colorlib-text">
												<p>198 West 21th Street, Suite 721 New York NY 10016</p>
											</div>
										</div>

										<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
											<div className="colorlib-icon">
												<i className="fa fa-graduation-cap"></i>
											</div>
											<div className="colorlib-text">
												<p><a href="tel://">+91 8076263797</a></p>
											</div>
										</div>
									</div>
									<div className="col-md-7 col-md-push-1 " style={{ padding: " 10px 15px" }}>
										<div className="row">
											<div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
												<form action="">
													<div className="form-group" >
														<input type="text"
															className="form-control"
															placeholder="Name"
															name='name'
															value={values.name}
															onChange={handleChange('name')}
															style={{ marginTop: "15px", borderRadius: "15px" }} />
													</div>
													<div className="form-group">
														<input type="text"
															className="form-control"
															placeholder="Email"
															name='email'
															value={values.email}
															style={{ marginTop: "15px", borderRadius: "15px" }} />
													</div>
													<div className="form-group">
														<input type="text"
															className="form-control"
															placeholder="Subject"
															name='subject'
															value={values.subject}
															style={{ marginTop: "15px ", borderRadius: "15px" }} />
													</div>
													<div className="form-group">
														<textarea id="message" cols="30" rows="7"
															className="form-control"
															placeholder="Message"
															name='message'
															value={values.message}
															style={{ marginTop: "15px", borderRadius: "15px" }}>
														</textarea>
													</div>
													<div className="form-group">
														<input type="submit"
															className="btn btn-primary btn-send-message"
															name=''
															value='Send Message'
															style={{ marginTop: "15px", borderRadius: "15px" }} />
													</div>
												</form>
											</div>

										</div>
									</div>
								</div>
							</div>
						</section>
					</Card>

				</Container>

			</div>


		</>

	)

}
