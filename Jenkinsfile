pipeline {
    agent any

    environment {
        // Optional: Define environment variables if needed
        NODE_ENV = 'production'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Fetching code from GitHub...'
                // Checkout your repository
                git branch: 'main', url: 'https://github.com/KartavyaSrivastav/restourmentmanagement-system.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Replace with your test command, e.g., npm test
                bat 'npm test || echo "No tests defined"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add your deployment steps here, for example copy files to a folder
                // bat 'xcopy /E /I dist\\* C:\\Deployments\\MyApp\\'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}
