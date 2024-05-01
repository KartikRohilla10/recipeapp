pipeline {
    agent any
    stages {
        stage('Dependencies') {
            steps {
                echo 'Installing dependencies '
                sh 'npm install'
            }
        }
        // stage('Docker Build') {
        //     steps {
        //         echo 'Building Docker image'
        //         sh 'docker build -t reactapp .'
        //     }
        // }
        // stage('Docker Login') {
        //     steps {
        //         echo '________Logging into Docker registry________'
        //         withCredentials([usernamePassword(credentialsId: "dockercred", passwordVariable: "dockerPass", usernameVariable: "dockerUser")]) {
        //            sh "docker tag recipeapp ${env.dockerUser}/recipeapp:latest"
        //             sh "docker login -u ${env.dockerUser} -p ${env.dockerPass}"
        //             sh "docker push ${env.dockerUser}/recipeapp:latest"
        //         }
                
        //     }
        // }
        stage('Build') {
            steps {
                echo 'Building React app'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing React apps'
                sh 'npm test'
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
