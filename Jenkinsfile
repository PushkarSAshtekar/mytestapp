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
        bat '''
        mkdir "%APPDATA%\\npm" 2>nul || echo npm directory exists
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
        echo '🧪 Running Playwright tests...'
        bat 'npm run test' // This fails the pipeline if tests fail
      }
    }

    stage('Release') {
      steps {
        echo '🚀 Release stage (add deployment logic here)...'
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
