const skillBadges = {
	python: '<img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=Python&logoColor=white" />',
	typescript:
		'<img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" />',
	javascript:
		'<img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white" />',
	java: '<img alt="Java" src="https://img.shields.io/badge/-Java-3776AB?style=flat&logo=java&logoColor=white" />',
	c: '<img alt="C" src="https://img.shields.io/badge/-C-A8B9CC?style=flat&logo=C&logoColor=white" />',
	cplusplus:
		'<img alt="C++" src="https://img.shields.io/badge/-C++-00599C?style=flat&logo=cplusplus&logoColor=white" />',
	csharp: '<img alt="C#" src="https://img.shields.io/badge/-C%23-239120?style=flat&logo=csharp&logoColor=white" />',
	bash: '<img alt="Bash" src="https://img.shields.io/badge/-Bash-4EAA25?style=flat&logo=gnu-bash&logoColor=white" />',
	html5: '<img alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white" />',
	sass: '<img alt="Sass" src="https://img.shields.io/badge/-Sass-CC6699?style=flat&logo=sass&logoColor=white" />',
	css: '<img alt="CSS" src="https://img.shields.io/badge/-CSS-1572B6?style=flat&logo=css3&logoColor=white" />',
	R: '<img alt="R" src="https://img.shields.io/badge/-R-276DC3?style=flat&logo=r&logoColor=white" />',
	matlab: '<img alt="Matlab" src="https://img.shields.io/badge/-Matlab-450b0e?style=flat&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxNi44MDMiIHkxPSIxNi42MzEiIHgyPSIxNS4wMTMiIHkyPSIyMi40MTEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgLTEsIDAsIDMyKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzUxMiIvPjxzdG9wIG9mZnNldD0iMC4yMyIgc3RvcC1jb2xvcj0iIzUyMyIvPjxzdG9wIG9mZnNldD0iMC4zNiIgc3RvcC1jb2xvcj0iIzUzNCIvPjxzdG9wIG9mZnNldD0iMC41MSIgc3RvcC1jb2xvcj0iIzY0NSIvPjxzdG9wIG9mZnNldD0iMC42NiIgc3RvcC1jb2xvcj0iIzU2OCIvPjxzdG9wIG9mZnNldD0iMC44NCIgc3RvcC1jb2xvcj0iIzI5ZCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMjkuNzEiIHkxPSIxOC45ODMiIHgyPSIxMS43MSIgeTI9IjE0LjU2MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4wODEiIHN0b3AtY29sb3I9IiNjMzMiLz48c3RvcCBvZmZzZXQ9IjAuMTg5IiBzdG9wLWNvbG9yPSIjZGU1MjM5Ii8+PHN0b3Agb2Zmc2V0PSIwLjMxMyIgc3RvcC1jb2xvcj0iI2YwNmUzZSIvPjxzdG9wIG9mZnNldD0iMC40MjEiIHN0b3AtY29sb3I9IiNmYTgwNDIiLz48c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iI2ZlODY0MyIvPjxzdG9wIG9mZnNldD0iMC41OCIgc3RvcC1jb2xvcj0iI2ZhN2Y0MiIvPjxzdG9wIG9mZnNldD0iMC42OTYiIHN0b3AtY29sb3I9IiNlZjZjM2UiLz48c3RvcCBvZmZzZXQ9IjAuODMzIiBzdG9wLWNvbG9yPSIjZGM0YzM3Ii8+PHN0b3Agb2Zmc2V0PSIwLjkxNiIgc3RvcC1jb2xvcj0iI2NmMzYzMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT5maWxlX3R5cGVfbWF0bGFiPC90aXRsZT48cGF0aCBkPSJNMiwxNy41NWw3Ljk3LTMuMjJhMjAuNywyMC43LDAsMCwxLDIuNzItMi45NWMuNjYtLjM1LDEuOS0uMTYsNC4xNy0yLjk4LDIuMi0yLjc1LDIuOS01LjEsMy45My01LjEsMS42MywwLDIuODMsMy41Miw0LjY1LDguODVBMTE1LjYyOSwxMTUuNjI5LDAsMCwwLDMwLDI0LjEyYy0xLjktMS43Ny0zLjUyLTMuNjgtNS4zNy0zLjYzLTEuNzIuMDQtMy42MywyLjA4LTUuNzIsNC43LTEuNjYsMi4xLTMuODYsMy41NC00LjcyLDMuNTEsMCwwLTIuMjItNi4yOC00LjA4LTcuM2EyLjY0MSwyLjY0MSwwLDAsMC0yLjM5LjJMMiwxNy41NFoiIHN0eWxlPSJmaWxsOiM0OWQiLz48cGF0aCBkPSJNMTkuOCw0LjAyYy0uNjcuOS0xLjQ4LDIuNTUtMi45NCw0LjM4LTIuMjcsMi44Mi0zLjUsMi42My00LjE3LDIuOThhMTkuNjc0LDE5LjY3NCwwLDAsMC0yLjcyLDIuOTVsMy4zLDIuNDFjMi44LTMuODIsNC4zLTcuOTYsNS40Ny0xMC42NEExMy41NzksMTMuNTc5LDAsMCwxLDE5LjgsNC4wMloiIHN0eWxlPSJmaWxsOnVybCgjYSkiLz48cGF0aCBkPSJNMjAuOCwzLjNjLTIuMTgsMC0zLjY3LDExLjQ4LTExLjcyLDE3Ljg5LDIuMjYtLjM3LDQuMjIsNS4yNCw1LjEyLDcuNTEsNC0uNjgsNy4yLTguMzMsMTAuNDMtOC4yMSwxLjg1LjA3LDMuNDcsMS44Niw1LjM3LDMuNjNDMjUuNjYsMTUsMjMuNjMsMy4zLDIwLjgsMy4zWiIgc3R5bGU9ImZpbGw6dXJsKCNiKSIvPjwvc3ZnPg==" />',
	tensorflow:
		'<img alt="TensorFlow" src="https://img.shields.io/badge/-TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white" />',
	pytorch:
		'<img alt="PyTorch" src="https://img.shields.io/badge/-PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white" />',
	opencv: '<img alt="OpenCV" src="https://img.shields.io/badge/-OpenCV-5C3EE8?style=flat&logo=opencV&logoColor=white" />',
	cuda: '<img alt="CUDA Toolkit" src="https://img.shields.io/badge/-CUDA_Toolkit-76B900?style=flat&logo=nvidia&logoColor=white" />',
	ros: '<img alt="ROS" src="https://img.shields.io/badge/-ROS-22314E?style=flat&logo=ros&logoColor=white" />',
	selenium:
		'<img alt="Selenium" src="https://img.shields.io/badge/-Selenium-43B02A?style=flat&logo=selenium&logoColor=white" />',
	fastapi:
		'<img alt="FastAPI" src="https://img.shields.io/badge/-FastAPI-009688?style=flat&logo=fastapi&logoColor=white" />',
	django: '<img alt="Django" src="https://img.shields.io/badge/-Django-092E20?style=flat&logo=django&logoColor=white" />',
	flask: '<img alt="Flask" src="https://img.shields.io/badge/-Flask-000000?style=flat&logo=flask&logoColor=white" />',
	pandas: '<img alt="Pandas" src="https://img.shields.io/badge/-Pandas-150458?style=flat&logo=pandas&logoColor=white" />',
	keras: '<img alt="Keras" src="https://img.shields.io/badge/-Keras-D00000?style=flat&logo=keras&logoColor=white" />',
	numpy: '<img alt="NumPy" src="https://img.shields.io/badge/-NumPy-013243?style=flat&logo=numpy&logoColor=white" />',
	vuejs: '<img alt="Vue.js" src="https://img.shields.io/badge/-Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white" />',
	jquery: '<img alt="jQuery" src="https://img.shields.io/badge/-jQuery-0769AD?style=flat&logo=jquery&logoColor=white" />',
	react: '<img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=white" />',
	nodejs: '<img alt="Node.js" src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=Node.js&logoColor=white" />',
	angular:
		'<img alt="Angular" src="https://img.shields.io/badge/-Angular-DD0031?style=flat&logo=angular&logoColor=white" />',
	git: '<img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white" />',
	scikitlearn: '<img alt="scikitlearn" src="https://img.shields.io/badge/-scikitlearn-F7931E?style=flat&logo=scikitlearn&logoColor=white" />',
	github: '<img alt="GitHub" src="https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white" />',
	simulink:
		'<img alt="Simulink" src="https://img.shields.io/badge/-Simulink-265497?style=flat" />',
	mongodb:
		'<img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat&logo=mongodb&logoColor=white" />',
	mysql: '<img alt="MySQL" src="https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=white" />',
	Openai: '<img alt="OpenAI" src="https://img.shields.io/badge/-OpenAI-412991?style=flat&logo=openai&logoColor=white" />',
	Langchain : '<img alt="Langchain" src="https://img.shields.io/badge/-Langchain-276DC3?style=flat&logo=langchain&logoColor=white" />',
	postgresql:
		'<img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" />',
	mariadb:
		'<img alt="MariaDB" src="https://img.shields.io/badge/-MariaDB-003545?style=flat&logo=mariadb&logoColor=white" />',
	cassandra:
		'<img alt="Cassandra" src="https://img.shields.io/badge/-Cassandra-1287B1?style=flat&logo=apache-cassandra&logoColor=white" />',
	redis: '<img alt="Redis" src="https://img.shields.io/badge/-Redis-DC382D?style=flat&logo=redis&logoColor=white" />',
	celery: '<img alt="Celery" src="https://img.shields.io/badge/-Celery-37814A?style=flat&logo=celery&logoColor=white" />',
	gcp: '<img alt="Google Cloud Platform" src="https://img.shields.io/badge/-Google_Cloud_Platform-1a73e8?style=flat&logo=google-cloud&logoColor=white" />',
	aws: '<img alt="Amazon AWS" src="https://img.shields.io/badge/-Amazon_AWS-232F3E?style=flat&logo=amazonaws&logoColor=white" />',
	amazon_s3:
		'<img alt="Amazon S3" src="https://img.shields.io/badge/-Amazon_S3-569A31?style=flat&logo=amazons3&logoColor=white" />',
	terraform:
		'<img alt="Terraform" src="https://img.shields.io/badge/-Terraform-623CE4?style=flat&logo=terraform&logoColor=white" />',
	docker: '<img alt="Docker" src="https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=white" />',
	kubernetes:
		'<img alt="Kubernetes" src="https://img.shields.io/badge/-Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white" />',
	LlamaIndex:'<img alt="LlamaIndex" src="https://img.shields.io/badge/-LlamaIndex-FF0000?style=flat&logo=LlamaIndex&logoColor=white" />',
	HuggingFace: '<img alt="HuggingFace" src="https://img.shields.io/badge/-HuggingFace-A9225C?style=flat&logo=HuggingFace&logoColor=white" />',
	GPT: '<img alt="GPT" src="https://img.shields.io/badge/-GPT-41454A?style=flat&logo=GPT&logoColor=white" />',
	Bert: '<img alt="Bert" src="https://img.shields.io/badge/-Bert-FF61F6?style=flat&logo=Bert&logoColor=white" />',
	MicrosoftAzure: '<img alt="Azure Machine Learning" src="https://img.shields.io/badge/-AzureML-0078D7?style=flat&logo=azuredevops&logoColor=white" />',
	linux: '<img alt="Linux / Unix" src="https://img.shields.io/badge/-Linux / Unix-FCC624?style=flat&logo=linux&logoColor=white" />',
	jenkins:
		'<img alt="Jenkins" src="https://img.shields.io/badge/-Jenkins-D24939?style=flat&logo=jenkins&logoColor=white" />',
	travisci:
		'<img alt="Travis CI" src="https://img.shields.io/badge/-Travis_CI-3EAAAF?style=flat&logo=travisci&logoColor=white" />',
	githubactions:
		'<img alt="GitHub Actions" src="https://img.shields.io/badge/-GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white" />',

	Open3d: '<img alt="open3D" src="https://img.shields.io/badge/-Open3D-2496ED?style=flat&logo=open3D&logoColor=white" />',
	Trimesh : '<img alt="Trimesh" src="https://img.shields.io/badge/-Trimesh-512BD4?style=flat&logo=Trimesh&logoColor=white" />',
	lidar : '<img alt="LiDar" src="https://img.shields.io/badge/-LiDar-83B81A?style=flat&logo=LiDar&logoColor=white" />',
	pointcloud: '<img alt="3D Point Cloud" src="https://img.shields.io/badge/-3D_Point_Cloud"-212121?style=flat&logo=3D_Point_Cloud"&logoColor=white" />',
	blender: '<img alt="Blender" src="https://img.shields.io/badge/-Blender-E87D0D?style=flat&logo=blender&logoColor=white" />',
	plotly: '<img alt="Plotly" src="https://img.shields.io/badge/-Plotly-3F4F75?style=flat&logo=plotly&logoColor=white" />',
	musecore: '<img alt="MuseScore" src="https://img.shields.io/badge/-MuseScore-1A70B8?style=flat&logo=musescore&logoColor=white" />',
	raspberrypi: '<img alt="Raspberry Pi" src="https://img.shields.io/badge/-Raspberry_Pi-A22846?style=flat&logo=raspberrypi&logoColor=white" />',
	alexnet: '<img alt=AlexNet" src="https://img.shields.io/badge/-AlexNet-FFCD00?style=flat&logo=alexnet&logoColor=white" />',
	scipy: '<img alt=SciPy" src="https://img.shields.io/badge/-SciPy-8CAAE6?style=flat&logo=scipy&logoColor=white" />',
	numba: '<img alt=Numba" src="https://img.shields.io/badge/-Numba-00A3E0?style=flat&logo=numba&logoColor=white" />',
};

skillBadges.categories = {
	"Languages / Softwares": [
		"python",
		"cplusplus",
		"SQL",
		"R",
		"html5",
		"css",
		"matlab",
		"blender",
	],
	"AI Frameworks and Libraries": [
		"pytorch",
		"tensorflow",
		"opencv",
		"scikitlearn",
		"keras",
		"numpy",
		"pandas",
		"cuda",
		"XgBoost",
		"fastapi",
		"django",
		"flask",
		"nodejs",
		"ros",
	
		
	], "LLM Libraries and Models": [
		"Langchain", 
		"Openai", 
		"LlamaIndex",
		"HuggingFace",
		"Bert",
		"GPT",

	],

	"Database and Tools": [
		"git",
		"redis",
		"mongodb",
		"mysql",
		"postgresql",
	],

	"Cloud Infratructure and Cloud Technologies": [
		"gcp",
		"aws",
		"MicrosoftAzure",
		"docker",
		"kubernetes",
		"linux"
	],
	"Continous Integration / Deployment (CI/CD)": [
		"githubactions",
		"travisci",
	],
};

skillBadges.categories_list = Object.keys(skillBadges.categories);

export default skillBadges;
