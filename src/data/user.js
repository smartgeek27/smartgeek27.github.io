const INFO = {
	main: {
		title: "Rishi Dadhich",
		name: "Rishi Dadhich",
		email: "rish7a@gmail.com",
		logo: "../images/logo.png",
	},

	socials: {
		github: "https://github.com/smartgeek27",
		linkedin: "https://www.linkedin.com/in/rishi-dadhich/",	},
 
	homepage: {
		name: "Rishi Dadhich ",
		title: "Machine Learning Engineer and Data Scientist",
		description:
			"Hello! I'm Rishi Dadhich, with over two years of research and industrial experience in Generative AI and Machine Learning. Currently, I serve as a Senior Engineer in Gen AI & ML at Gamma Technologies, where I focus on developing and integrating generative AI applications in softwares at a large scale. I manage the entire lifecycle of these models, ensuring accuracy and efficiency from data acquisition to deployment. Previously, I was a Machine Learning Engineer at Sabin, Inc., where I developed AI solutions, such as chatbots and estimation models, that streamlined business operations and enhanced data management. Beyond this, my background includes a deep passion for computer vision, tackling real-world ML challenges, exploring 3D reconstruction, image segmentation, and advanced AI model training. From collaborating with robots and mastering ML pipelines to innovations with transformers, autoencoders, and diffusion models, my mantra is clear: With a proactive mindset and the right tools at hand, we can craft the extraordinary. Let's transform ideas into reality!.",
		// "As a software engineer, I strive to deliver software solutions that are efficient, scalable, and reliable. I am enthusiastic about embracing new challenges and technologies. When I'm not writing code, I enjoy keeping up with the latest advances in AI. I am skilled in working with cutting-edge tools, from databases to the cloud, to drive innovation. When I'm not working, I like to hike, game, and explore new places. I am constantly seeking new challenges to improve my skills as an individual.",
	},

	about: {
		title: "My Story",
		description:"My journey into the world of artificial intelligence began as a graduate student researcher at ASU's Interactive Robotics Lab, I delved in human-robot collaboration and crafted a real-time 3D object tracking system using advanced computer vision and Intel's RGB depth camera. \n Transitioning to a machine learning research assistant role at ASU's Geometric Media Lab, I deepened my knowledge in generative models like GANs and VAEs, creating novel interpolation techniques and a CNN architecture that attracted DARPA funding. My 3D computer vision pursuits led me to an internship at Meda AI in New York, where I enhanced the Neural Radiance Field (NERF) algorithm for improved 3D reconstructions. \n Now at Sabin Lighting Inc. in Chicago as a machine learning engineer, I apply ML in industry automation, developing AI chatbots using OpenAI's retrieval-augmented generation, and devise ML-driven pricing algorithms.",
		resume: "https://drive.google.com/file/d/1wT1lf_EWLBrx4HzA5Ybqw_bWQAMAFhXd/view?usp=drive_link",
	},

	projects: {
		title: "Projects that You Might Find Interesting",
		description:
			"Throughout my research and industrial experience in Artificial Intelligence, I've got myself engaged in a variety of projects and research endeavors, each adding depth to my understanding and skill set. This section offers a glimpse into some of these milestones. If any align with your interests, I'd be pleased to discuss potential collaborations. If you have a project in mind, I'm open to exploring how we might bring it to fruition together.",
		project_list: [
			{
				title: "OpenAI LLM-Powered Chatbot using Retrieval-Augmented Generation",
				description:
					"Developed and deployed Intelligent AI chatbot using Retrieval-Augmented Generation capabilities of OpenAI's LLM for my current company. Chatbot streamlines employee data retrieval, decodes company-specific part numbers, and proficiently answers company-related queries, enhancing internal communication efficiency.",
				image: "https://github.com/smartgeek27/Intelligent-Industrial-AI-chatbot/blob/main/chatbot_video.gif?raw=true",
				image_alt: "webchat-demo",
				skills: [
					"Langchain", 
					"Openai", 
					"LlamaIndex",
					"GPT", 
					"redis",
					"flask",
				],
				linkText: "View Project",
				link: "https://github.com/smartgeek27/Intelligent-Industrial-AI-chatbot",
			},
			{
				title: "3D Point Cloud Classification & Detection via PointNet",
				description:
					"Leveraged PointNet architecture on the Model-Net10 dataset for 3D object classification. Enhanced voxel density with Open3D preprocessing, achieving a 78% testing accuracy on a custom 3D LIDAR dataset.",
				image: "https://github.com/nikitakaraevv/pointnet/blob/master/images/cover.gif?raw=true",
				image_alt: "webchat-demo",
				skills: [
					"python",
					"Open3d",
					"tensorflow",
					"keras",
					"lidar",
					"Trimesh",
				],
				linkText: "View Project",
				link: "https://drive.google.com/file/d/1NCAXbVs466pXZxeUp69E2f8JhoLGSDxP/view",
			},
			{
				title: "6D Pose Estimation using ArUco Markers with Intel RealSense Camera",
				description:
					"Real-time object pose detection and index finger position estimation in a 3D environment, integrated with stereo camera-projector calibration to project on detected area.",
				image: "https://github.com/smartgeek27/6d-pose-estimation-of-objects-using-index-finger/blob/main/pose_estimation.gif?raw=true",
				// image: "https://drive.google.com/file/d/1uwVB_yEIvwCzT5-DTu55x2eHRYjkOoEs/view",
				image_alt: "sim-demo",
				skills: ["python", "ros","opencv", "cplusplus", "mysql","cuda","tensorflow","numpy", "blender"],
				linkText: "View Project",
				link: "https://github.com/smartgeek27/6d-pose-estimation-of-objects-using-index-finger",
			},
			{
				title: "Medical Image Segmentation by Transformer model-TRANSBTS2",
				description:
					"3D image tumor Segmentation using TRANSBTS-2 on brain, kidney and liver CT/MRI scan datasets. Benchmarked results against UPenn dice scores with clear tumor visualizations.",
				image: "https://github.com/smartgeek27/TransBTS_Python-implementation.-/blob/main/validation_result.gif?raw=true",
				image_alt: "drone flight simulation",
				skills: [
					"pytorch",
					"opencv",
					"tensorflow",
					"scikitlearn",
					"cuda",
					"linux",
				],
				linkText: "View Project",
				link: "https://github.com/smartgeek27/TransBTS_Python-implementation.-",
			},
			{
				title: "Music Generation using RNN-LSTM",
				description:
					" LSTM based melody prediction model using the ESAC dataset to create harmonious music on test melodies perceived on MuseScore API.",
				image: "https://github.com/smartgeek27/music_generation_using_RNN_LSTM/blob/master/predicted_music_visualization.gif?raw=true",
				image_alt: "bidirectional search demo",
				skills: ["plotly", "tensorflow","keras", "musecore"],
				linkText: "View Project",
				link: "https://github.com/smartgeek27/music_generation_using_RNN_LSTM/tree/master",
			},

			{
				title: "AI-Enabled Waste Segregation System: A Computer Vision Approach to Sort Waste Materials",
				description:
					"AI-driven waste segregation system utilizing AlexNet-based transfer learning in MATLAB, integrated in Raspberry Pi for waste classification and servo motor for mecahanics.",
				image: "https://github.com/smartgeek27/Image_collection/blob/main/E_dustbin.gif?raw=true",
				image_alt: "siumlation-demo",
				skills: ["matlab", "simulink","raspberrypi", "alexnet"],
				linkText: "View Project",
				link: "https://github.com/smartgeek27",
			},

			{
				title: "Multi-Robot Path Planning using DARP Algorithm",
				description:
					"A path planning solution for multi-robots navigation designed to divide the territory into equal regions for each robot, ensuring total territory coverage, non-backtracking routes, and minimal coverage paths without any prior planning.",
				image: "https://github.com/smartgeek27/Multi_robot_path_planning_using_DARP/blob/master/darp_video.gif?raw=true",
				image_alt: "sim-demo",
				skills: ["python", "numpy", "scipy", "scikitlearn", "numba"],
				linkText: "View Project",
				link: "https://github.com/smartgeek27/Multi_robot_path_planning_using_DARP",
			},
		],
	},

	research: { 
		title: "My Research Journey",
		description:
			"During my progression from an Intern to a Research Assistant, and finally to a Machine Learning Engineer,  I've had the privilege to collaborate with distinguished mentors in the field of Artificial Intelligence and Machine learning. Their guidance transformed my novice curiosity into expertise enabling me to apply cutting-edge tools in automating industries. Below are some highlights of my research endeavors in AI and Automation Engineering.",
	
		},

	experience: [
		{
			company_logo:
				"https://media.licdn.com/dms/image/C4E0BAQFrix1WwH0KvQ/company-logo_200_200/0/1640201971362/gamma_technologies_inc_logo?e=1723680000&v=beta&t=R5fN4eOIN6MwgQRALxMX4CD8BDBsQaDdFKCJp8DvCxo",
			company: "Gamma Technologies",
			location:"Chicago, IL",
			roles: [
				{
					dept:"Neuro Applications ",
					role: "Senior Engineer (Gen AI & ML)",
					duration: "Apr 2024  - Present",
					description:
						" Leading the development and integration of generative AI applications, ensuring robust and intuitive user interfaces enhancing GT Suite's software capabilities.\n  Managing the full lifecycle of LLM models from data acquisition to training, validation, and testing, implementing best practices to ensure model accuracy and efficiency.",
				},
			],
		},
		
		{
			company_logo:
				"https://images.squarespace-cdn.com/content/v1/61df533c57361a366db19973/96c5fcb6-f710-47d7-bb19-b6d52f844abc/SABIN_SOCIAL_ICON.jpg",
			company: "Sabin Lighting Inc",
			location:"Chicago, IL",
			roles: [
				{
					dept:"AI Development",
					role: "Machine Learning Engineer",
					duration: "May 2023 - March 2024",
					description:
						"Developed intelligent AI chatbot using RAG and OpenAI LLM's streamlining employee data access.\n Integrated ML price prediction model into chatbot for custom products. \n Enhanced ERP configuration tools and features optimising business operations.",
				},
			],
		},
		{
			company_logo:
				"https://media.licdn.com/dms/image/C560BAQHDGjY1IZJuog/company-logo_200_200/0/1631309406468?e=1723680000&v=beta&t=9kv_PzaPf3Ts3D-Nb_JudCiFyrGsNANIsHXrQ9V2lnY",
			company: "Arizona State University",
			location:"Tempe, AZ",
			roles: [
				{
					dept: "Geometric Media Lab ",
					role: "Machine Learning Research Assistant",
					duration: "July 2022 - May 2023",
					description:
						"Devised interpolation technique for GAN's and Autoencoders.\n Introduced guided algorithm for feature control in latent spaces . \n Crafted Neural Network architecture for conditional image generation via sampling in the latent space. ",
				},
				{
					dept: "Interactive Robotics Lab",
					role: "Gradudate Student Researcher",
					duration: "Oct 2021 - May 2022",
					description:
						"Assisted in HRC project using Intention Projection and 3D vision tracking.\n Developed a robust projection mapping algorithm for URDF robot.\n Utilized Intel RGB depth camera for real-time 3D object pose identification.",
				},
			],
		},
		{
			company_logo:
				"https://media.licdn.com/dms/image/D4E0BAQF76kzVAn4ekQ/company-logo_200_200/0/1665114553601?e=2147483647&v=beta&t=5onpfxyuhSPtaGI0QLN-xafSI1JD4ZCZpTI04Wvmkx0",
			company: "Meda AI",
			location:"Greater New York",
			roles: [
				{
					dept:"Computer Vision - Metaverse",
					role: "Artificial Intelligence Intern",
					duration: "May 2022 - July 2022",
					description:
						"Refined NERF algorithm for 3D reconstruction, elevating efficiency by 8% \n Constructed a 3D clothing dataset for Meta-verse human avatars.\n Implemented a rendering technique with marching cubes for 3D texture addition.",
				},
			],
		},
	],
};

export default INFO;
