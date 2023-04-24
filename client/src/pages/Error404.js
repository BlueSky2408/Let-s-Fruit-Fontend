import React from 'react'
import Loader from '../components/Loader/Loader'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Error404 = () => {
  return (
    <>
        <Loader />
        <Navbar />

        
		<div className="breadcrumb-section breadcrumb-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 text-center">
						<div className="breadcrumb-text">
							<p>Fresh and Organic</p>
							<h1>404 - Not Found</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="full-height-section error-section">
			<div className="full-height-tablecell">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 text-center">
							<div className="error-text">
								<i className="far fa-sad-cry"></i>
								<h1>Oops! Not Found.</h1>
								<p>The page you requested for is not found.</p>
								<a href="/" className="boxed-btn">Back to Home</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	

        <Footer />
    </>
  )
}

export default Error404