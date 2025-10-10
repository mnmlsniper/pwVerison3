pipeline {
  agent any
  tools {
      // Указываем, какую версию Node.js использовать (имя должно совпадать с настройками в Jenkins)
      nodejs 'NodeJS2290'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm i'
        sh 'npx playwright install --with-deps'
        sh 'npx playwright test'
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
