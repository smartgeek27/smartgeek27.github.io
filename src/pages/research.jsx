import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";

import myArticles from "../data/articles";

import INFO from "../data/user";
import SEO from "../data/seo";
import Article from "../components/homepage/article";
import { trackAction } from "../components/common/analytics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/research.css";

const Research = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "research");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Research | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			<div className="page-content">
				<div className="content-wrapper page-3">
					<div className="research-container">
						<div className="title research-title">
							{INFO.research.title}
						</div>

						<div className="subtitle research-subtitle">
							{INFO.research.description}
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
						<div className="homepage-articles">
										{myArticles.map((article, index) => (
											<div
												className="homepage-article-wrapper"
												key={(index + 1).toString()}
											>
												<Article
													key={(index + 1).toString()}
													date={article().date}
													title={article().title}
													description={article().description}
													link={article().link}
													link_text={article().link_text}
												/>
											</div>
										))}
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

export default Research;
