// 파이어베이스 앱 모듈 가져오기
import firebase from 'firebase/compat/app';

// 파이어베이스 패키지 모듈 가져오기
import 'firebase/compat/database';

// 파이어베이스 DB를 초기화하고 연결
const fDB = firebase.initializeApp({
  // 파이어베이스 콘솔에서 URL가져오기
  databaseURL: '',
}).database();

// 파이어베이스 DB객체 중에서 todos 항목을 다른 곳에서 사용하도록 공개
export const TodosInfDB = fDB.ref('todos');