pipeline {
    agent any

    environment {
        NODE_ENV = "production"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "📥 Cloning repository..."
                git branch: 'main', url: 'https://github.com/PushkarSAshtekar/nextjs-app.git'
            }
        }

        stage('Build') {
            steps {
                echo "🔧 Installing dependencies..."
                dir('nextjs-app') {
                    bat 'npm install'
                    bat 'npx playwright install'
                }
            }
        }

        stage('Develop') {
            steps {
                echo "🚀 Starting development build..."
                dir('nextjs-app') {
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                echo "🧪 Running tests..."
                dir('nextjs-app') {
                    bat 'npm test'
                }
            }
        }

        stage('Release') {
            steps {
                echo "📦 Releasing application..."
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
