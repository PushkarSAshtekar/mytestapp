pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/PushkarSAshtekar/mytestapp.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        bat '''
        mkdir "%APPDATA%\\npm" 2>nul || echo npm dir exists
        npm config set cache "%TEMP%\\npm-cache"
        npx playwright install
        '''
      }
    }

    stage('Build App') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Run Tests') {
      steps {
        bat 'npm run test'
      }
    }

    stage('Release') {
      steps {
        echo 'Deploy step goes here...'
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
      cleanWs()
    }
  }
}
