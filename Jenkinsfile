pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        nodejs('NodeJS2290') {
          sh 'npm i'
          sh 'npx playwright install --with-deps'
          sh 'npx playwright test || echo "Playwright tests completed with some failures"'
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
  post {
    always {
      echo 'This will always run regardless of test results'
    }
    success {
      echo 'Pipeline completed successfully'
    }
    failure {
      echo 'Pipeline failed'
      // Можно добавить уведомления здесь
    }
  }
}
