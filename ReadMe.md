## Docker
- It is used to containerize your application
- It is used to deploy your application in a container
- To containerize means we can create a virtual environment in our machine with the configuration we want and then we can deploy it in any machine with the same configuration. This is the main advantage of using docker
- Docker is a containerization platform that allows you to package, ship, and run any application.
- It is very handy in cooperate as if we create our app today we dont have to worry if there is newer version of the resources we are using. It take cares to keep it updated
- Docker is a platform that allows you to create, deploy, and manage applications by using containers.

#### NOTE
Docker is not a complete virtual environment as it does not have its own ram and cpu

### Docker Daemon
- Docker daemon is a process/tool that runs in the background and manages the containers
- It is responsible for creating, starting, stopping, and deleting containers
- It is also responsible for managing the images and volumes

### Docker Desktop
- Docker Desktop is a graphical user interface for Docker
- It is used to manage and interact with Docker containers and images
- It is available for Windows and macOS

### Images
- Docker images are templates for creating containers
- They are used to create containers
- They are used to store the configuration and dependencies of an application
- Multiple docker can have same images
- In developnment we create our custom images and share them so that all other colleagues can use it and create a container 