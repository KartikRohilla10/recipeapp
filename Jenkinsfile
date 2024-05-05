pipeline {
    agent any
    stages {
        stage('Dependencies') {
            steps {
                // echo 'Installing dependencies '
                sh 'npm install'
            }
        }
        stage('Docker Build') {
            steps {
                echo 'Building Docker image'
                sh 'docker build -t recipeapp .'
            }
        }
        stage('Docker Login & Push') {
            steps {
                echo '________Logging into Docker registry________'
                withCredentials([usernamePassword(credentialsId: "dockercred", passwordVariable: "dockerPass", usernameVariable: "dockerUser")]) {
                   sh "docker tag recipeapp ${env.dockerUser}/recipeapp:latest"
                    sh "docker login -u ${env.dockerUser} -p ${env.dockerPass}"
                    sh "docker push ${env.dockerUser}/recipeapp:latest"
                }
                
            }
        }
        stage('Build (npm)') {
            steps {
                echo 'Building React app'
                sh 'npm run build'
            }
        }
         stage('Test (npm))') {
            steps {
                echo 'Testing React app'
                sh 'npm run test'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                echo '______________SonarQube Analysis______________'
                script {
                    def scannerHome = tool 'sonar-scanner';
                    withSonarQubeEnv() {
                        sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectVersion=1.0.0"
                    }
                }
            }
        }
         stage('Email') {
    steps {
        mail bcc: '', body: '''Dear Team,

This is an automated notification to inform you that the ${JOB_NAME} build has completed successfully.

Details:
- Build Number: ${BUILD_NUMBER}
- Build Status: ${BUILD_STATUS}
- Build URL: ${BUILD_URL}

Please review the build details and take any necessary actions.

Best regards,
Your Jenkins Server
''', cc: '', from: '', replyTo: '', subject: 'Build for ${JOB_NAME} has completed', to: 'devops.jenkins.report@gmail.com'
    }
}

        
        stage('Serve to Nginx') {
            steps {
                echo 'Copying build files to Nginx directory'
                sh 'sudo rm -rf /var/www/recipe'
                sh 'sudo cp -r ${WORKSPACE}/build/ /var/www/recipe/'
            }
        }
    }
}
