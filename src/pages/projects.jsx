import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import { trackAction } from "../components/common/analytics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			<div className="page-content">
				<div className="content-wrapper page-3">
					<div className="projects-container">
						<div className="title projects-title">
							{INFO.projects.title}
						</div>

						<div className="subtitle projects-subtitle">
							{INFO.projects.description}
						</div>

						<div className="projects-buttons">
							<button
								className="projects-button"
								onClick={() => {
									trackAction(
										"Github",
										"Cliked Github",
										"Github"
									);
									window.open("https://github.com/smartgeek27");
								}}
							>
								GitHub &nbsp;
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
							<button
								className="projects-button"
								onClick={() => {
									trackAction(
										"Github",
										"Cliked Github Pull Requests",
										"Github Pull Requests"
									);
									window.open(
										"https://drive.google.com/file/d/1ZOISWMheG9l-2lgFyQ4bgvNGdQA6osy7/view?usp=drive_link"
									);
								}}
							>
								Portfolio &nbsp;
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
