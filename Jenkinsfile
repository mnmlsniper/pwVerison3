pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        script {
          // Используем Docker только как среду выполнения, но NodeJS из плагина
          docker.image('mcr.microsoft.com/playwright:v1.56.0-noble').inside {
            nodejs('NodeJS2290') {
              sh 'npm i'
              sh 'npx playwright install --with-deps'
              sh 'npx playwright test'
            }
          }
        }
      }      
    }
    stage('Allure') {
      steps {
        allure(
          [
            includeProperties: false,
            jdk: '',
            properties: [],
            reportBuildPolicy: 'ALWAYS',
            results: [[path: 'allure-report']]
          ]
        )
      }
    }
  }
}
