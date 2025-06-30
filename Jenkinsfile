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
                dir('test-app') {
                    echo "🔧 Installing dependencies..."
                    bat 'npm install'
                    bat 'npx playwright install'
                }
            }
        }

        stage('Develop') {
            steps {
                dir('test-app') {
                    echo "🚀 Running build..."
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                dir('test-app') {
                    echo "🧪 Running Playwright tests..."
                    bat 'npm test'
                }
            }
        }

        stage('Release') {
            steps {
                echo "📦 Releasing (placeholder)..."
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
