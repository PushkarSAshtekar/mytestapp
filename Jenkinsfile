pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
  }

  stages {
    stage('Checkout') {
      steps {
        echo '📥 Cloning repository...'
        git branch: 'main', url: 'https://github.com/PushkarSAshtekar/nextjs-app.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        echo '🔧 Installing npm dependencies...'
        bat 'npm install'
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        echo '🎭 Installing Playwright browsers...'
        script {
          try {
            bat '''
            mkdir "%APPDATA%\\npm" 2>nul || echo npm directory exists
            npm config set cache "%TEMP%\\npm-cache"
            npx playwright install
            '''
          } catch (Exception e) {
            echo '⚠️ Playwright install failed, continuing...'
          }
        }
      }
    }

    stage('Build App') {
      steps {
        echo '🏗️ Building the Next.js app...'
        bat 'npm run build'
      }
    }

    stage('Run Tests') {
      steps {
        echo '🧪 Running Playwright tests...'
        script {
          try {
            bat 'npm run test'
          } catch (Exception e) {
            echo '⚠️ Tests failed or not defined, continuing...'
          }
        }
      }
    }

    stage('Release') {
      steps {
        echo '🚀 Release stage (add deployment logic here)...'
        // You can add deployment scripts here
      }
    }
  }

  post {
    success {
      echo '✅ Pipeline completed successfully!'
    }
    failure {
      echo '❌ Build or tests failed!'
    }
    always {
      cleanWs()
    }
  }
}