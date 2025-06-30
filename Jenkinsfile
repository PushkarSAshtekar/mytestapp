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
        bat 'cd mytestapp && npm install'
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        bat '''
        cd mytestapp
        mkdir "%APPDATA%\\npm" 2>nul || echo npm dir exists
        npm config set cache "%TEMP%\\npm-cache"
        npx playwright install
        '''
      }
    }

    stage('Build App') {
      steps {
        bat 'cd mytestapp && npm run build'
      }
    }

    stage('Run Tests') {
      steps {
        echo 'Running tests...'
        bat 'cd mytestapp && npm run test'
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
