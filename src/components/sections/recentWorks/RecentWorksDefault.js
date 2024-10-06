/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

const RecentWorksDefault = () => {
	// Isotope
	const isotope = useRef();
	const [filterKey, setFilterKey] = useState("*");
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope(".grid-items", {
				itemSelector: ".grid-item",
				//    layoutMode: "fitRows",
				percentPosition: true,
				masonry: {
					columnWidth: ".grid-item",
				},
				animationOptions: {
					duration: 750,
					easing: "linear",
					queue: false,
				},
			});
		}, 1000);
		//     return () => isotope.current.destroy();
	}, []);
	useEffect(() => {
		if (isotope.current) {
			filterKey === "*"
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
		}
	}, [filterKey]);
	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key);
	};
	const activeBtn = (value) => (value === filterKey ? "active" : "");

	return (
		<Fragment>
			<div className="content works">
				{/* title */}
				<div className="title">Recent Projects</div>
				{/* filters */}
				<div className="filter-menu filter-button-group">
					<div
						className={`f_btn ${activeBtn("*")}`}
						onClick={handleFilterKeyChange("*")}
					>
						<label>
							<input type="radio" name="fl_radio" defaultValue="grid-item" />
							All
						</label>
					</div>
					<div
						className={`f_btn ${activeBtn("full-stack")}`}
						onClick={handleFilterKeyChange("full-stack")}
					>
						<label>
							<input type="radio" name="fl_radio" defaultValue="full-stack" />
							Full Stack
						</label>
					</div>
					<div
						className={`f_btn ${activeBtn("frontend")}`}
						onClick={handleFilterKeyChange("frontend")}
					>
						<label>
							<input type="radio" name="fl_radio" defaultValue="frontend" />
							Frontend
						</label>
					</div>
					<div
						className={`f_btn ${activeBtn("design")}`}
						onClick={handleFilterKeyChange("design")}
					>
						<label>
							<input type="radio" name="fl_radio" defaultValue="backend" />
							Backend
						</label>
					</div>
					<div
						className={`f_btn ${activeBtn("branding")}`}
						onClick={handleFilterKeyChange("branding")}
					>
						<label>
							<input type="radio" name="fl_radio" defaultValue="design" />
							Design
						</label>
					</div>
					<div
						className={`f_btn ${activeBtn("content")}`}
						onClick={handleFilterKeyChange("content")}
					>
						<label>
							<input type="radio" name="fl_radio" defaultValue="content" />
							Content
						</label>
					</div>
				</div>
				{/* content */}
				<div className="row grid-items border-line-v">
					{/* work item photo */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
						<div className="box-item">
							<div className="image">
								<a href="https://game-hub-gilt-kappa.vercel.app/" className="has-popup-image">
								<Image
      src="/images/works/project4.png"
      alt="Project 4"
      width={500}
      height={300}
      layout="responsive"
    />
									<span className="info">
										<span className="ion ion-code" />
									</span>
								</a>
							</div>
							<div className="desc m-4">
								<a
									href="https://game-hub-gilt-kappa.vercel.app/"
									className="name has-popup-image"
								>
									VidGame
								</a>
								<div className="category">frontend</div>
							</div>
						</div>
					</div>
					{/* work item video */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
						<div className="box-item">
							<div className="image">
								<a
									href="https://rickand-morty-six.vercel.app/"
									className="has-popup-image"
								>
								<Image
      src="/images/works/project4.png"
      alt="Rick & Morty Project"
      width={500}
      height={300}
      layout="responsive"
    />
									<span className="info">
										<span className="ion ion-code" />
									</span>
								</a>
							</div>
							<div className="desc p-4">
								<a
									href="https://rickand-morty-six.vercel.app/"
									className="name has-popup-image"
								>
									Rick & Morty
								</a>
								<div className="category">frontend</div>
							</div>
						</div>
					</div>
					{/* work item */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item full-stack border-line-h">
						<div className="box-item">
							<div className="image">
								<a
									href="https://olx-clone-94my.onrender.com/"
									className="has-popup-image"
								>
							  <Image
      src="/images/works/project3.png"
      alt="Olx Clone Project"
      width={500}
      height={300}
      layout="responsive"
    />
									<span className="info">
										<span className="ion ion-code" />
									</span>
								</a>
							</div>
							<div className="desc m-4">
								<a
									href="https://olx-clone-94my.onrender.com/"
									className="name has-popup"
								>
									Olx Clone
								</a>
								<div className="category">Full Stack</div>
							</div>
						</div>
					</div>
					{/* work item */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item full-stack border-line-h">
						<div className="box-item">
							<div className="image">
								<a
									href="https://health-care-six-sooty.vercel.app/"
									className="has-popup-image"
								>
								 <Image
      src="/images/works/project2.png"
      alt="Hospital Management Project"
      width={500}
      height={300}
      layout="responsive"
    />
									<span className="info">
										<span className="ion ion-code" />
									</span>
								</a>
							</div>
							<div className="desc m-4">
								<a
									href="https://health-care-six-sooty.vercel.app/"
									className="name has-popup"
								>
									Hospital Management
								</a>
								<div className="category">Full Stack</div>
							</div>
						</div>
					</div>
					
					{/* work item photo */}
					<div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
						<div className="box-item">
							<div className="image">
								<a
									href="https://health-care-six-sooty.vercel.app/"
									className="has-popup-image"
								>
							   <Image
      src="/images/works/project1.png"
      alt="Contact Management Project"
      width={500}
      height={300}
      layout="responsive"
    />
									<span className="info">
										<span className="ion ion-code" />
									</span>
								</a>
							</div>
							<div className="desc m-4">
								<a
									href="https://health-care-six-sooty.vercel.app/"
									className="name has-popup"
								>
									Contact Management
								</a>
								<div className="category">Frontend</div>
							</div>
						</div>
					</div>
					
					{/* work item music */}
					
					{/* work item video */}
				
					{/* work item */}
					
					{/* work item design */}
					
					<div className="clear" />
				</div>
			</div>
		</Fragment>
	);
};
export default RecentWorksDefault;
