pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Fetching code from GitHub...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        echo 'Node.js project detected — running npm install and build'
                        sh 'npm install'
                        sh 'npm run build || echo "No build script found"'
                    } else if (fileExists('composer.json')) {
                        echo 'PHP project detected — running composer install'
                        sh 'composer install || echo "Composer not installed"'
                    } else {
                        echo 'Static project detected — skipping build'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        echo 'Running npm tests (if available)'
                        sh 'npm test || echo "No tests found"'
                    } else {
                        echo 'No test stage configured for this project'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Demo deploy stage (replace with real commands)'
                echo 'For example: copy build files to server, run docker-compose, etc.'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline finished successfully'
        }
        failure {
            echo '❌ Pipeline failed'
        }
    }
}
