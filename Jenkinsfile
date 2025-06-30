pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
  }

  stages {
    stage('Checkout') {
      steps {
        echo '📥 Cloning repository...'
        git branch: 'main', url: 'https://github.com/PushkarSAshtekar/mytestapp.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        echo '📦 Installing dependencies...'
        bat 'npm install'
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        echo '🎭 Installing Playwright browsers...'
        bat '''
        mkdir "%APPDATA%\\npm" 2>nul || echo npm dir exists
        npm config set cache "%TEMP%\\npm-cache"
        npx playwright install
        '''
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
        echo '🧪 Running tests...'
        bat 'npm run test'
      }
    }

    stage('Release') {
      steps {
        echo '🚀 Release step (placeholder)...'
      }
    }
  }

  post {
    success {
      echo '✅ Pipeline passed!'
    }
    failure {
      echo '❌ Pipeline failed!'
    }
    always {
      echo '🧹 Cleaning up workspace...'
      cleanWs()
    }
  }
}
