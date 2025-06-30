pipeline {
  agent any

  environment {
    NODE_ENV = 'development'
  }

  stages {
    stage('Checkout') {
      steps {
        echo '📥 Cloning repository...'
        git 'https://github.com/PushkarSAshtekar/nextjs-app.git'
      }
    }

    stage('Build') {
      steps {
        echo '🔧 Installing dependencies...'
        dir('nextjs-app') {
          bat 'npm install'
          
          // ✅ Replaced 'npx playwright install' with direct node command
          bat 'node node_modules/playwright/cli.js install'
        }
      }
    }

    stage('Develop') {
      steps {
        echo '🛠️ Running build step...'
        dir('nextjs-app') {
          bat 'npm run build'
        }
      }
    }

    stage('Test') {
      steps {
        echo '🧪 Running tests...'
        dir('nextjs-app') {
          bat 'npm run test'
        }
      }
    }

    stage('Release') {
      steps {
        echo '🚀 Ready to release...'
      }
    }
  }

  post {
    success {
      echo '✅ Pipeline completed successfully!'
    }
    failure {
      echo '❌ Build failed!'
    }
  }
}
