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
        
        stage('Serve to Nginx') {
            steps {
                echo 'Copying build files to Nginx directory'
                sh 'sudo rm -rf /var/www/recipe'
                sh 'sudo cp -r ${WORKSPACE}/build/ /var/www/recipe/'
            }
        }
    }
}
