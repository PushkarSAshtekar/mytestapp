pipeline {
    agent any

    environment {
        NODE_ENV = "production"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "📥 Cloning repository..."
                git branch: 'main', url: 'https://github.com/PushkarSAshtekar/mytestapp.git'
            }
        }

        stage('Build') {
            steps {
                echo "🔧 Installing dependencies..."
                dir('mytestapp') {
                    bat 'npm install'
                    bat 'npx playwright install'
                }
            }
        }

        stage('Develop') {
            steps {
                echo "🚀 Starting development build..."
                dir('mytestapp') {
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                echo "🧪 Running tests..."
                dir('mytestapp') {
                    bat 'npm test'
                }
            }
        }

        stage('Release') {
            steps {
                echo "📦 Releasing application..."
                // Optional deployment steps
            }
        }
    }

    post {
        success {
            echo "✅ Build succeeded!"
        }
        failure {
            echo "❌ Build failed!"
        }
    }
}

