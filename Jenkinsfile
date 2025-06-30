// pipeline {
//     agent any

//     environment {
//         NODE_ENV = "production"
//     }

//     stages {
//         stage('Checkout') {
//             steps {
//                 echo "📥 Cloning repository..."
//                 git branch: 'main', url: 'https://github.com/PushkarSAshtekar/mytestapp.git'
//             }
//         }

//         stage('Build') {
//             steps {
//                 echo "🔧 Installing dependencies..."
//                 dir('test-app') {
//                     bat 'npm install'
//                 }
//             }
//         }

//         stage('Develop') {
//             steps {
//                 echo "🚀 Starting development build..."
//                 dir('test-app') {
//                     bat 'npm run build'
//                 }
//             }
//         }

//         stage('Test') {
//             steps {
//                 echo "🧪 Running tests..."
//                 dir('test-app') {
//                     bat 'npm test'
//                 }
//             }
//         }

//         stage('Release') {
//             steps {
//                 echo "📦 Releasing application..."
//                 // Add deployment steps here if needed
//             }
//         }
//     }

//     post {
//         success {
//             echo "✅ Build succeeded!"
//         }
//         failure {
//             echo "❌ Build failed!"
//         }
//     }
// }

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
                dir('test-app') {
                    bat 'npm install'
                    // Optional: install browsers if not already
                    bat 'npx playwright install'
                }
            }
        }

        stage('Develop') {
            steps {
                echo "🚀 Starting development build..."
                dir('test-app') {
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                echo "🧪 Running tests..."
                dir('test-app') {
                    bat 'npm test'
                }
            }
        }

        stage('Release') {
            steps {
                echo "📦 Releasing application..."
                // Deployment logic here
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
