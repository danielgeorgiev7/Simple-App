# Simple App

## Overview

Simple App is a web application built with React that fetches and displays a list of users from the JSONPlaceholder API. The application is containerized using Docker to ensure easy setup and deployment.

## Features

- Fetches user data from the JSONPlaceholder API.
- Displays user data in a list format.
- Loading state while data is being fetched.
- Error handling for API requests.
- Responsive design using CSS.

## APIs Used

1. **JSONPlaceholder API**:
   A free online REST API that you can use whenever you need some fake data.

## Getting Started

### Prerequisites

- Docker: Ensure you have Docker installed on your machine.

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/danielgeorgiev7/Simple-App.git
    cd simple-app
    ```

2.  **Build and run the Docker container:**
    Using Docker Compose:

        docker-compose up --build

    Alternatively, you can build and run the Docker container manually:

        docker build -t simple-app .
        docker run -p 8080:80 simple-app

3.  **Access the application**:

    Open your browser and go to http://localhost:8080.
